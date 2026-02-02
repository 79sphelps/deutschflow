import clientPromise from "@/lib/mongodb";
import { Lesson } from "@/lib/data/lessons";
import { MongoClient, Db } from "mongodb";

export async function getLessonsFromDB() {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  return db
    .collection<Lesson[]>("lessons")
    .find({})
    .project({ _id: 0 })
    .toArray();
}

export async function getLessonFromDB(lessonId: string) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  return db
    .collection<Lesson>("lessons")
    .findOne({ lessonId: lessonId });
}
