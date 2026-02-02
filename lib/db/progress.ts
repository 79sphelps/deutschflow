import clientPromise from "@/lib/mongodb";
import { LessonProgress } from "@/types/progress";

/*
Rule:
Mongo → serialize → return plain objects
Never pass Mongo docs up the stack.
*/

export async function getLessonProgressByUserFromDB(userId: string) {
  const client = await clientPromise;
  const db = client.db();

  const docs = await db
    .collection("lessonProgress")
    .find({ userId })
    .toArray();

  // Serialize here — ONE PLACE
  return docs.map((p) => ({
    _id: p._id.toString(),
    lessonId: p.lessonId,
    completed: Boolean(p.completed),
    score: Number(p.score ?? 0),
    attempts: Number(p.attempts ?? 0),
    lastAttemptAt: p.lastAttemptAt
    ? new Date(p.lastAttemptAt).toISOString()
    : new Date().toISOString(),
  })) as LessonProgress[];
}
