// import { getLessons } from "@/lib/api";
import { getLessonsFromDB } from "@/lib/db/lessons";
import { Lesson } from "@/types/lessons";
import ProgressClient from "./ProgressClient";
import PageWrapper from "@/app/PageWrapper";
import { getUserFromSession } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";
import { User } from "@/hooks/useUser";
import { MongoClient, Db } from "mongodb";
// import { Progress } from "@/hooks/useLessonProgress";
import { LessonProgress } from "@/types/progress";

export default async function ProgressPage() {
  // const lessons: Lesson[] = (await getLessonsFromDB()) as Lesson[];
  const lessons: Lesson[] = await getLessonsFromDB();

  //--------------------------------------------------
  // ToDo - Offload this logic
  const user: User = (await getUserFromSession()) as unknown as User;
  if (!user) redirect("/signin");

  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  const progress = await db
    .collection<LessonProgress>("lessonProgress")
    .find({ userId: user._id })
    .toArray();

  // Normalize progress by lessonId (critical)
  // const progressByLessonId = Object.fromEntries(
  //   progress.map((p) => [p.lessonId, p]),
  // );

  // Convert Mongo documents to plain JS objects
  const progressByLessonId: Record<string, LessonProgress> = Object.fromEntries(
    progress.map((p) => [
      p.lessonId,
      {
        _id: p._id.toString(),
        lessonId: p.lessonId,
        completed: Boolean(p.completed),
        score: Number(p.score ?? 0),
        attempts: Number(p.attempts ?? 0),
        lastAttemptAt: p.lastAttemptAt
          ? new Date(p.lastAttemptAt).toISOString()
          : new Date().toISOString(),
      },
    ]),
  );
  //--------------------------------------------------

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto p-6">
        {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-6">Your Progress</h1> */}
        <ProgressClient
          name={user.name}
          lessons={lessons}
          progressByLessonId={progressByLessonId}
        />
      </div>
    </PageWrapper>
  );
}
