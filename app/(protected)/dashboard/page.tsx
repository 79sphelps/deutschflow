import clientPromise from "@/lib/mongodb";
import { getUserFromSession } from "@/lib/auth";
import { getLessonProgressByUserFromDB } from "@/lib/db/progress";
import { redirect } from "next/navigation";
import { User } from "@/hooks/useUser";

export default async function DashboardPage() {
  const user: User = await getUserFromSession() as unknown as User;
  if (!user) redirect("/signin");

  const progressByLessonId = await getLessonProgressByUserFromDB(user._id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form action="/api/auth/signout" method="POST">
        <button className="text-sm text-red-600 min-h-[44px] min-w-[44px]">
          Sign out
        </button>
      </form>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
        Welcome, { user.name }
      </h1>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
        Here is Your Progress
      </h1>
      {progressByLessonId.map((p) => (
        <div key={p.lessonId} className="border p-4 mb-2 rounded">
          <strong>{p.lessonId}</strong>
          <p>Score: {p.score}%</p>
          <p>{p.completed ? "Completed ✔" : "In progress"}</p>
        </div>
      ))}
    </div>
  );
}
