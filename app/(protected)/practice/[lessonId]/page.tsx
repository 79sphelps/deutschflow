// import { getLesson } from "@/lib/api";
import { getLessonFromDB } from "@/lib/db/lessons";
import { getAllVocabularyFromDB } from "@/lib/db/vocabulary";
import PracticePageClient from "./PracticePageClient";

export default async function PracticePage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const vocabulary = await getAllVocabularyFromDB();
  const lesson = await getLessonFromDB(lessonId);
  return (
    <PracticePageClient
      lesson={lesson}
      vocabulary={vocabulary.filter((v) => v.lessonId === lessonId)}
    />
  );
}
