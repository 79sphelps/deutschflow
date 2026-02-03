import { getLessonsFromDB } from "@/lib/db/lessons";
import PracticeClient from "./PracticeClient";
import { Lesson } from "@/types/lessons";

export default async function PracticeData() {
  const lessons: Lesson[] = await getLessonsFromDB();
  return <PracticeClient lessons={lessons} />;
}
