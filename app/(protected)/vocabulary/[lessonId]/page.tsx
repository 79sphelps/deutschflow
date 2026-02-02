import { getAllVocabulary } from "@/lib/api";
import VocabularyPageClient from "./VocabularyPageClient";
import { Vocabulary } from "@/lib/data/lessons";

export default async function VocabularyPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const allVocab: Vocabulary[] = await getAllVocabulary() as unknown as Vocabulary[];
  return (
    <VocabularyPageClient
      vocabulary={allVocab.filter((v: Vocabulary) => v.lessonId === lessonId)}
    />
  );
}
