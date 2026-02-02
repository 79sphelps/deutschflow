import clientPromise from "@/lib/mongodb";
import { MongoClient, Db } from "mongodb";
import { Exercise } from "@/types/exercises";

export async function getExercisesFromDB(lessonId: string) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  return db
    .collection<Exercise[]>("exercises")
    .findOne({ lessonId: lessonId }, { projection: { _id: 0 } });
    // .findOne({ lessonId: lessonId });
}
