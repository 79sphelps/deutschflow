import { getAllVocabulary } from "@/lib/api";
import VocabularyPageClient from "./VocabularyPageClient";

export default async function VocabularyPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const allVocab = await getAllVocabulary();
  return (
    <VocabularyPageClient
      vocabulary={allVocab.filter((v: any) => v.lessonId === lessonId)}
    />
  );
}
