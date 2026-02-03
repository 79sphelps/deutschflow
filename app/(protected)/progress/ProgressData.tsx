import { getLessonsFromDB } from "@/lib/db/lessons";
import { getUserFromSession } from "@/lib/auth";
import { getLessonProgressAsPOJOByUserFromDB } from "@/lib/db/progress";
import { redirect } from "next/navigation";
import ProgressClient from "./ProgressClient";
import { Lesson } from "@/types/lessons";
import { User } from "@/hooks/useUser";

export default async function ProgressData() {
  const lessons: Lesson[] = await getLessonsFromDB();
  const user: User = (await getUserFromSession()) as unknown as User;
  if (!user) redirect("/signin");
  const progressByLessonId = await getLessonProgressAsPOJOByUserFromDB(user._id);
  return (
    <ProgressClient
        name={user.name}
        lessons={lessons}
        progressByLessonId={progressByLessonId}
    />
  );
}
