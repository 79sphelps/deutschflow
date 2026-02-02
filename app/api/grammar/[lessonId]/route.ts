import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { MongoClient, Db } from "mongodb";
import { Grammar } from "@/lib/data/grammar";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  const grammar = await db
    .collection<Grammar[]>("grammar")
    .findOne({ lessonId: lessonId });

  return NextResponse.json(grammar);
}
