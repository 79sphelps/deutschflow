import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { lessonId: string } }
) {
  const { lessonId } = await params;
  const client = await clientPromise;
  const db = client.db();

  const grammar = await db
    .collection("grammar")
    .findOne({ lessonId: lessonId });

  return NextResponse.json(grammar);
}
