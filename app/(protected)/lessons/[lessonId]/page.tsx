// import { getLesson } from "@/lib/api";
import { getLessonFromDB } from "@/lib/db/lessons";
import { getAllVocabularyFromDB } from "@/lib/db/vocabulary";
import { Lesson } from "@/lib/data/lessons";
import LessonDetailClient from "./LessonDetailClient";

export default async function LessonDetailPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const vocabulary = await getAllVocabularyFromDB();
  const lesson: Lesson = await getLessonFromDB(lessonId);
  return (
    <LessonDetailClient
      lesson={lesson}
      vocabulary={vocabulary.filter((v) => v.lessonId === lessonId)}
    />
  );
}
