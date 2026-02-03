import { getLessonsFromDB } from "@/lib/db/lessons";
import VocabularyClient from "./VocabularyClient";
import { Lesson } from "@/types/lessons";

export default async function VocabularyData() {
  const lessons: Lesson[] = await getLessonsFromDB();
  return <VocabularyClient lessons={lessons} />;
}
