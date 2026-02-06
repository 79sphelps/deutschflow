"use client";

import { Lesson } from "@/types/lessons";
import LessonCard from "@/components/lessons/LessonCard";

export default function PracticeClient({ lessons }: { lessons: Lesson[] }) {
  if (!lessons.length) {
    return <p className="p-6 text-gray-500">No lessons found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-1">
      <div className="space-y-3">
        {lessons.map((item: Lesson, idx) => (
          <LessonCard key={idx} lesson={item} collection={"practice"} />
        ))}
      </div>
    </div>
  );
}
