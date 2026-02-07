"use client";

import { Lesson } from "@/types/lessons";
import { Vocabulary } from "@/types/vocabulary";
import PageWrapper from "@/app/PageWrapper";
import Link from "next/link";
import Headings from "@/components/ui/Headings";
import NavigationButton from "@/components/ui/NavigationButton";

export default function LessonDetailClient({
  lesson,
  vocabulary,
}: {
  lesson: Lesson;
  vocabulary: Vocabulary[];
}) {
  return (
    <PageWrapper>
      <article className="space-y-8">
        <header>
          <Headings>{lesson.title}</Headings>
          <p className="text-gray-600">{lesson.description}</p>
        </header>

        {/* Flashcards */}
        <section>
          <h2 className="text-xl font-semibold">Flashcards</h2>
          <ul className="grid grid-cols-2 gap-4">
            {vocabulary.map((v: Vocabulary, idx: number) => (
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

        {/* <Link
          href={`/lessons`}
          className="block text-center text-blue-600 underline"
        >
          Back to Lessons Area
        </Link> */}

        <div className="flex flex-row justify-center items-center">
          <NavigationButton>
            <Link href={`/lessons`}>Back to Lessons Area</Link>
          </NavigationButton>
        </div>
      </article>
    </PageWrapper>
  );
}
