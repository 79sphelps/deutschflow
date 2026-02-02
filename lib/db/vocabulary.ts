import clientPromise from "@/lib/mongodb";
import { MongoClient, Db } from "mongodb";
import { Vocabulary } from "@/types/vocabulary";

export async function getAllVocabularyFromDB() {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  return db
    .collection<Vocabulary[]>("vocabulary")
    .find({})
    .project({ _id: 0 })
    .toArray();
}

export async function getVocabularyFromDB(lessonId: string) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  return db
    .collection<Vocabulary>("vocabulary")
    .findOne({ lessonId: lessonId });
}
