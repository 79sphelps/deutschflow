import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  const { lessonId } = await params;
  const client = await clientPromise;
  const db = client.db();

  const practice = await db
    // .collection("practice")
    // .collection("exercises")
    .collection("vocabulary")
    .findOne({ lessonId: lessonId });

  if (!practice) {
    return NextResponse.json(
      { error: "Practice not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(practice);
}
