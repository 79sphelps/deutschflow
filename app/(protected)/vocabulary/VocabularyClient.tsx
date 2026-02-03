"use client";

import { Lesson } from "@/types/lessons";
import LessonCard from "@/components/lessons/LessonCard";

export default function VocabularyClient({ lessons }: { lessons: Lesson[] }) {
  if (!lessons.length) {
    return <p className="p-6 text-gray-500">No lessons found.</p>;
  }
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-6">
        { name }, Here is Your Progress
      </h1> */}
      <div className="space-y-3">
        {lessons.map((item, idx) => (
          <LessonCard key={idx} lesson={item} collection={"vocabulary"} />
        ))}
      </div>
    </div>
  );
}
