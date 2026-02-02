import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const vocabulary = await db
      .collection("vocabulary")
      .find({})
      .sort({ order: 1 })
      .toArray();

    return NextResponse.json(vocabulary);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch vocabulary: " + error },
      { status: 500 }
    );
  }
}
