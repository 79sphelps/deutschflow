import { getLessonsFromDB } from "@/lib/db/lessons";
import { getUserFromSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProgressClient from "./ProgressClient";
import { Lesson } from "@/types/lessons";
import clientPromise from "@/lib/mongodb";
import { User } from "@/hooks/useUser";
import { MongoClient, Db } from "mongodb";
import { LessonProgress } from "@/types/progress";

export default async function ProgressData() {
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

//   const user = await getUserFromSession();
//   if (!user) redirect("/signin");

//   const [lessons, progress] = await Promise.all([
//     getLessonsFromDB(),
//     getLessonProgressByUserFromDB(user._id),
//   ]);

//   const progressByLessonId = Object.fromEntries(
//     progress.map((p) => [p.lessonId, p])
//   );

  return (
    <ProgressClient
        name={user.name}
        lessons={lessons}
        progressByLessonId={progressByLessonId}
    />
  );
}
