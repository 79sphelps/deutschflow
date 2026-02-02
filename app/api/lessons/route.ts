import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Lesson } from "@/types/lessons";
import { MongoClient, Db } from "mongodb";

export async function GET() {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db();

    const lessons = await db
      .collection<Lesson[]>("lessons")
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
