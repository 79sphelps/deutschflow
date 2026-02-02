import clientPromise from "@/lib/mongodb";

export async function GET(_req: Request, { params }) {
  const { lessonId } = await params;
  const client = await clientPromise;
  const db = client.db();

  const progress = await db
    .collection("progress")
    .findOne({ lessonId: lessonId, userId: "anonymous" });

  return Response.json(progress ?? null);
}