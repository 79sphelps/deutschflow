import clientPromise from "@/lib/mongodb";
import { MongoClient, Db } from "mongodb";

export async function getPracticeFromDB(lessonId: string) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  return db
    .collection("practice")
    .findOne({ lessonId: lessonId });
}
