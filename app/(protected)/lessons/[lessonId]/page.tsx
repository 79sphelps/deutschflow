// import { getLesson } from "@/lib/api";
import { getLessonFromDB } from "@/lib/db/lessons";
import { getAllVocabularyFromDB } from "@/lib/db/vocabulary";
import { Lesson } from "@/lib/data/lessons";
import { Vocabulary } from "@/lib/data/lessons";
import LessonDetailClient from "./LessonDetailClient";

export default async function LessonDetailPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const vocabulary: Vocabulary[] = await getAllVocabularyFromDB() as unknown as Vocabulary[];
  const lesson: Lesson = await getLessonFromDB(lessonId) as unknown as Lesson;
  return (
    <LessonDetailClient
      lesson={lesson}
      vocabulary={vocabulary.filter((v: Vocabulary) => v.lessonId === lessonId)}
    />
  );
}
