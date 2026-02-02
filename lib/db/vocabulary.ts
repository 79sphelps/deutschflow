import clientPromise from "@/lib/mongodb";

export async function getAllVocabularyFromDB() {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("vocabulary")
    .find({})
    .project({ _id: 0 })
    .toArray();
}

export async function getVocabularyFromDB(lessonId: string) {
  const client = await clientPromise;
  const db = client.db();

  return db
    .collection("vocabulary")
    .findOne({ lessonId: lessonId });
}
