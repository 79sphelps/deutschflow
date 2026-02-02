"use client";

import Link from "next/link";
import { Vocabulary } from "@/lib/data/lessons";
import PageWrapper from "@/app/PageWrapper";

export default function VocabularyPageClient({
  vocabulary,
}: {
  vocabulary: any;
}) {
  if (!vocabulary) {
    return <div>Loading vocabulary words for lesson...</div>;
  }

  return (
    <PageWrapper>
      <article className="space-y-8">
        <header>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
            Vocabulary for {vocabulary && vocabulary[0].lessonId}
          </h1>
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
