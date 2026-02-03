"use client";

import LessonProgressRow from "./LessonProgressRow";
import { Lesson } from "@/types/lessons";
import { LessonProgress } from "@/types/progress";

export default function ProgressClient({
  name,
  lessons,
  progressByLessonId,
}: {
  name: string;
  lessons: Lesson[];
  progressByLessonId: Record<string, LessonProgress>;
}) {
  if (!lessons.length) {
    return <p className="p-6 text-gray-500">No lessons found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-1">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-6 text-center">
        {name}, Here is Your Progress
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
