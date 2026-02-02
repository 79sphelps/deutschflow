// import { getLessons } from "@/lib/api";
import { getLessonsFromDB } from "@/lib/db/lessons";
import { Lesson } from "@/lib/data/lessons";
import ProgressClient from "./ProgressClient";
import PageWrapper from "@/app/PageWrapper";
import { getUserFromSession } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function ProgressPage() {
  const lessons = (await getLessonsFromDB()) as Lesson[];
  const user = await getUserFromSession();
  
  if (!user) redirect("/signin");

  const client = await clientPromise;
  const db = client.db();

  const progress = await db
    .collection("lessonProgress")
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
