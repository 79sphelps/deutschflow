"use client";

import LessonProgressRow from "./LessonProgressRow";
import { Lesson } from "@/lib/data/lessons";

type LessonProgress = {
  lessonId: string;
  completed: boolean;
  score: number;
  attempts: number;
  lastAttemptAt?: string;
};

export default function ProgressClient({
  lessons,
  progressByLessonId,
}: {
  lessons: Lesson[];
  progressByLessonId: Record<string, LessonProgress>;
}) {
  if (!lessons.length) {
    return <p className="p-6 text-gray-500">No lessons found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-6">
        Your Progress
      </h1>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <LessonProgressRow
            key={lesson.lessonId}
            lesson={lesson}
            progress={progressByLessonId[lesson.lessonId]}
          />
        ))}
      </div>
    </div>
  );
}
