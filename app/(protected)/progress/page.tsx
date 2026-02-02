// import { getLessons } from "@/lib/api";
import { getLessonsFromDB } from "@/lib/db/lessons";
import { Lesson } from "@/lib/data/lessons";
import ProgressClient from "./ProgressClient";
import PageWrapper from "@/app/PageWrapper";
import { getUserFromSession } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";
import { User } from "@/hooks/useUser";
// import { ObjectId } from "mongodb";
import { MongoClient, Db } from "mongodb";
import { Progress } from "@/hooks/useLessonProgress";

export default async function ProgressPage() {
  const lessons: Lesson[] = (await getLessonsFromDB()) as Lesson[];
  const user: User = await getUserFromSession() as unknown as User;

  if (!user) redirect("/signin");

  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  const progress = await db
    .collection<Progress>("lessonProgress")
    .find({ userId: user._id })
    .toArray();

  // Normalize progress by lessonId (critical)
  const progressByLessonId = Object.fromEntries(
    progress.map((p) => [p.lessonId, p]),
  );

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto p-6">
        {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-6">Your Progress</h1> */}
        <ProgressClient
          lessons={lessons}
          progressByLessonId={progressByLessonId}
        />
      </div>
    </PageWrapper>
  );
}
