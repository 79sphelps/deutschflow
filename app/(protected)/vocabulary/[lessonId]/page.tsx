// import { getAllVocabulary } from "@/lib/api";
import { getAllVocabularyFromDB } from "@/lib/db/vocabulary";
import VocabularyPageClient from "./VocabularyPageClient";
import { Vocabulary } from "@/types/vocabulary";

export default async function VocabularyPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  // const allVocab: Vocabulary[] = await getAllVocabulary() as unknown as Vocabulary[];
  // const allVocab = await getAllVocabulary();
  const allVocab = (await getAllVocabularyFromDB()) as Vocabulary[];

  return (
    <VocabularyPageClient
      vocabulary={allVocab.filter((v: Vocabulary) => v.lessonId === lessonId)}
    />
  );
}
