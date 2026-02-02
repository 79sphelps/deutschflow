import clientPromise from "@/lib/mongodb";
import { getUserFromSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { MongoClient, Db } from "mongodb";
import { Progress } from "@/hooks/useLessonProgress";
import { getLessonProgressByUserFromDB } from "@/lib/db/progress";
import { User } from "@/hooks/useUser";


export async function GET() {
  const user: User = await getUserFromSession() as unknown as User;
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const progress = await getLessonProgressByUserFromDB(user._id);

  return NextResponse.json({
    data: progress,
  });
}


export async function POST(req: Request) {
  const user = await getUserFromSession();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { lessonId, score, completed } = await req.json();

  const client: MongoClient = await clientPromise;
  const db: Db = client.db();

  await db.collection<Progress>("lessonProgress").updateOne(
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
