import clientPromise from "@/lib/mongodb";
import { getUserFromSession } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await getUserFromSession();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { lessonId, score, completed } = await req.json();

  const client = await clientPromise;
  const db = client.db();

  await db.collection("lessonProgress").updateOne(
    { userId: user._id, lessonId },
    {
      $set: {
        score,
        completed,
        lastAttemptAt: new Date(),
        updatedAt: new Date(),
      },
      $inc: { attempts: 1 },
      $setOnInsert: {
        createdAt: new Date(),
      },
    },
    { upsert: true },
  );

  return NextResponse.json({ ok: true });
}
