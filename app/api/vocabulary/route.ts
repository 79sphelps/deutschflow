import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { MongoClient, Db } from "mongodb";
import { Vocabulary } from "@/lib/data/lessons";

export async function GET() {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db();

    const vocabulary = await db
      .collection<Vocabulary[]>("vocabulary")
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
