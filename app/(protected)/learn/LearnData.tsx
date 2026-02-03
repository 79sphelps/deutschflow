import { getLessonsFromDB } from "@/lib/db/lessons";
import LearnClient from "./LearnClient";
import { Lesson } from "@/types/lessons";

export default async function LearnData() {
  const lessons: Lesson[] = await getLessonsFromDB();
  return <LearnClient lessons={lessons} />;
}
