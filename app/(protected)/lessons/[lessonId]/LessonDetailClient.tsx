"use client";

import { Vocabulary, Lesson } from "@/lib/data/lessons";
import PageWrapper from "@/app/PageWrapper";

export default function LessonDetailClient({
  lesson,
  vocabulary,
}: {
  lesson: Lesson;
  vocabulary: any;
}) {
  return (
    <PageWrapper>
      <article className="space-y-8">
        <header>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
            {lesson.title}
          </h1>
          <p className="text-gray-600">{lesson.description}</p>
        </header>

        {/* Flashcards */}
        <section>
          <h2 className="text-xl font-semibold">Flashcards</h2>
          <ul className="grid grid-cols-2 gap-4">
            {vocabulary.map((v: any, idx: number) => (
              <li key={idx} className="rounded border p-4">
                <strong>{v.word}</strong>
                <p className="text-gray-500">{v.translation}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Grammar */}
        {/* <section>
        <h2 className="text-xl font-semibold">Grammar</h2>
        <p>{lesson.grammar}</p>
      </section> */}

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
      </article>
    </PageWrapper>
  );
}
