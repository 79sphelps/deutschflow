// import { getLesson } from "@/lib/api";
import { getLessonFromDB } from "@/lib/db/lessons";
import { getAllVocabularyFromDB } from "@/lib/db/vocabulary";
import { Lesson } from "@/types/lessons";
import { Vocabulary } from "@/types/vocabulary";
import PracticePageClient from "./PracticePageClient";

export default async function PracticePage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const vocabulary: Vocabulary[] = await getAllVocabularyFromDB() as unknown as Vocabulary[];
  const lesson: Lesson = await getLessonFromDB(lessonId) as unknown as Lesson;
  return (
    <PracticePageClient
      lesson={lesson}
      vocabulary={vocabulary.filter((v: Vocabulary) => v.lessonId === lessonId)}
    />
  );
}
