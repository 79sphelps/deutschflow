import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { MongoClient, Db } from "mongodb";
import { Vocabulary } from "@/types/vocabulary";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  const vocab = await db
    .collection<Vocabulary[]>("vocabulary")
    // .findOne({ lessonId: lessonId })
    .find({ lessonId: lessonId })
    .project({ _id: 0 })
    .toArray()

  return NextResponse.json(vocab);
}
