import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { MongoClient, Db } from "mongodb";
import { Exercise } from "@/types/exercises";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  const data = await db
    .collection<Exercise[]>("exercises")
    .findOne({ lessonId: lessonId }, { projection: { _id: 0 } });
    // .findOne({ lessonId: lessonId });

  return NextResponse.json(data ?? { exercises: [] });
}
