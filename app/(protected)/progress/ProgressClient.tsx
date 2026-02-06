"use client";

import LessonProgressRow from "./LessonProgressRow";
import { Lesson } from "@/types/lessons";
import { LessonProgress } from "@/types/progress";
import Headings from "@/components/ui/Headings";

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
      <Headings>
        {name}, Here is Your Progress
      </Headings>
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
