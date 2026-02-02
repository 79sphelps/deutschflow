import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const lessons = await db
      .collection("lessons")
      .find({})
      .project({ _id: 0 })
      .sort({ order: 1 })
      .toArray();

    return NextResponse.json(lessons);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch lessons: " + error },
      { status: 500 }
    );
  }
}
