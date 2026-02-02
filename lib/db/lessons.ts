import clientPromise from "@/lib/mongodb";

export async function getLessonsFromDB() {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("lessons")
    .find({})
    .project({ _id: 0 })
    .toArray();
}

export async function getLessonFromDB(lessonId: string) {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("lessons")
    .findOne({ lessonId: lessonId });
}
