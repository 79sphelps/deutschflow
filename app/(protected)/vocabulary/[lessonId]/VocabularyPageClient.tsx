"use client";

import Link from "next/link";
import { Vocabulary } from "@/types/vocabulary";
import PageWrapper from "@/app/PageWrapper";
import Headings from "@/components/ui/Headings";

export default function VocabularyPageClient({
  vocabulary,
}: {
  vocabulary: Vocabulary[];
}) {
  if (!vocabulary) {
    return <div>Loading vocabulary words for lesson...</div>;
  }

  return (
    <PageWrapper>
      <article className="space-y-8">
        <header>
          <Headings>
            Vocabulary for {vocabulary && vocabulary[0].lessonId}
          </Headings>
        </header>

        {/* Vocabulary */}
        <section>
          <h2 className="text-xl font-semibold">Vocabulary</h2>
          <ul>
            {vocabulary.map((v: Vocabulary) => (
              <li key={v.word}>
                {v.word} —{" "}
                <span className="text-gray-600">{v.translation}</span>
              </li>
            ))}
          </ul>
        </section>

        <Link
          href={`/vocabulary`}
          className="block text-center text-blue-600 underline"
        >
          Back to Vocabulary Review Area
        </Link>
      </article>
    </PageWrapper>
  );
}
