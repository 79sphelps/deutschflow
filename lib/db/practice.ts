import clientPromise from "@/lib/mongodb";

export async function getPracticeFromDB(lessonId: string) {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("practice")
    .findOne({ lessonId: lessonId });
}
