"use client";

import { useState } from "react";
import { Lesson } from "@/types/lessons";
import { Vocabulary } from "@/types/vocabulary";
import Link from "next/link";
import PageWrapper from "@/app/PageWrapper";
import NavigationButton from "@/components/ui/NavigationButton";

export default function PracticePageClient({
  lesson,
  vocabulary,
}: {
  lesson: Lesson;
  vocabulary: Vocabulary[];
}) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const next = () => {
    setShowBack(false);
    setIndex((i) => (vocabulary ? (i + 1) % vocabulary.length : 0));
  };

  const prev = () => {
    setShowBack(false);
    setIndex((i) =>
      vocabulary ? (i - 1 + vocabulary.length) % vocabulary.length : 0,
    );
  };

  const flip = () => setShowBack((v) => !v);

  return (
    <PageWrapper>
      <div className="space-y-4">
        <div
          onClick={flip}
          className="cursor-pointer rounded-xl border p-8 text-center text-4xl bg-white shadow "
        >
          {vocabulary && showBack
            ? vocabulary[index].translation
            : vocabulary
              ? vocabulary[index].word
              : null}
        </div>
        {vocabulary && (
          <p className="text-sm text-center">
            Card {index + 1} of {vocabulary.length}
          </p>
        )}
        <div className="flex justify-center items-center gap-2">
          <button className="border border-slate-600 rounded-lg px-5 hover:bg-slate-200 transition-all active:scale-[0.98]" onClick={prev}>
            Prev
          </button>
          <button className="border border-slate-600 rounded-lg px-5 hover:bg-slate-200 transition-all active:scale-[0.98]" onClick={next}>
            Next
          </button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <NavigationButton>
            <Link href={`/practice`}>Back to Practice Area</Link>
          </NavigationButton>
        </div>
      </div>
    </PageWrapper>
  );
}
