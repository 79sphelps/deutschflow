import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { MongoClient, Db } from "mongodb";
import { Vocabulary } from "@/lib/data/lessons";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  const practice = await db
    .collection<Vocabulary[]>("vocabulary")
    .findOne({ lessonId: lessonId });

  if (!practice) {
    return NextResponse.json(
      { error: "Practice not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(practice);
}
