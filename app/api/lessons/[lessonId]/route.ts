import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { lessonId: string } }
) {
  const { lessonId } = await params;
  const client = await clientPromise;
  const db = client.db();

  const lesson = await db
    .collection("lessons")
    .findOne({ id: lessonId });

  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  return NextResponse.json(lesson);
}
