import clientPromise from "@/lib/mongodb";

export async function getExercisesFromDB(lessonId: string) {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("exercises")
    .findOne({ lessonId: lessonId }, { projection: { _id: 0 } });
    // .findOne({ lessonId: lessonId });
}
