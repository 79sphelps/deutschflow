import { getLessonsFromDB } from "@/lib/db/lessons";
import LessonClient from "./LessonClient";
import { Lesson } from "@/types/lessons";

export default async function LessonData() {
  const lessons: Lesson[] = await getLessonsFromDB();
  return <LessonClient lessons={lessons} />;
}
