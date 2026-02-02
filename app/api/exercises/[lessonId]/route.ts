import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { lessonId: string } }
) {
  const { lessonId } = await params;
  const client = await clientPromise;
  const db = client.db();

  const data = await db
    .collection("exercises")
    .findOne({ lessonId: lessonId }, { projection: { _id: 0 } });
    // .findOne({ lessonId: lessonId });

  return NextResponse.json(data ?? { exercises: [] });
}
