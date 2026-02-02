import clientPromise from "@/lib/mongodb";
import { getUserFromSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getUserFromSession();
  if (!user) redirect("/signin");

  const client = await clientPromise;
  const db = client.db();

  const progress = await db
    .collection("lessonProgress")
    .find({ userId: user._id })
    .toArray();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form action="/api/auth/signout" method="POST">
        <button className="text-sm text-red-600 min-h-[44px] min-w-[44px]">
          Sign out
        </button>
      </form>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
        Your Progress
      </h1>
      {progress.map((p) => (
        <div key={p.lessonId} className="border p-4 mb-2 rounded">
          <strong>{p.lessonId}</strong>
          <p>Score: {p.score}%</p>
          <p>{p.completed ? "Completed ✔" : "In progress"}</p>
        </div>
      ))}
    </div>
  );
}
