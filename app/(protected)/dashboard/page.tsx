import clientPromise from "@/lib/mongodb";
import { getUserFromSession } from "@/lib/auth";
import { getLessonProgressByUserFromDB } from "@/lib/db/progress";
import { redirect } from "next/navigation";
import { User } from "@/hooks/useUser";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

export default async function DashboardPage() {
  const user: User = await getUserFromSession() as unknown as User;
  if (!user) redirect("/signin");

  const progressByLessonId = await getLessonProgressByUserFromDB(user._id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form action="/api/auth/signout" method="POST">
        <button className="text-sm text-red-600">
          Sign out
        </button>
      </form>
      <Headings>
        Welcome, { user.name }
      </Headings>
      <Headings>
        Here is Your Progress
      </Headings>
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
