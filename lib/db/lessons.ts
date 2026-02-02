import clientPromise from "@/lib/mongodb";
import { Lesson } from "@/types/lessons";
import { MongoClient, Db } from "mongodb";

export async function getLessonsFromDB() {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  // Old - Non-Serialized Return
  // return db
  //   .collection<Lesson[]>("lessons")
  //   .find({})
  //   .project({ _id: 0 })
  //   .toArray();

  const docs = await db
    .collection<Lesson[]>("lessons")
    .find({})
    .project({ _id: 0 })
    .toArray();

  // Serialize here — ONE PLACE
  return docs.map((p) => ({
    // _id: p._id.toString(),
    lessonId: p.lessonId,
    order: Number(p.order ?? 0),
    level: p.level.toString(),
    estimatedTime: Number(p.estimatedTime ?? 0),
    tags: Array<string>(p.tags),
    published: Boolean(p.published),
    title: p.title.toString(),
    description: p.description.toString(),
  })) as Lesson[];
}

export async function getLessonFromDB(lessonId: string) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  return db
    .collection<Lesson>("lessons")
    .findOne({ lessonId: lessonId });
}
