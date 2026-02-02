import { Lesson } from "@/types/lessons";
import type { Metadata } from "next";
import PageWrapper from "@/app/PageWrapper";
// import { getLessons } from "@/lib/api";
import { getLessonsFromDB } from "@/lib/db/lessons";
import LessonCard from "@/components/lessons/LessonCard";

export const metadata: Metadata = {
  title: "Lessons",
  description: "Browse structured German lessons by level.",
};

export default async function LearnPage() {
  // const lessons = await getLessons();
  // const lessons: Lesson[] = (await getLessonsFromDB()) as Lesson[];
  const lessons: Lesson[] = await getLessonsFromDB();

  if (lessons.length === 0) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-xl font-semibold">No lessons available yet</h2>
        <p className="text-gray-500">New content is coming soon.</p>
      </div>
    );
  }

  return (
    <PageWrapper>
      <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
        <div className="space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
            Start Learning
          </h1>
          {lessons.map((lesson: Lesson) => (
            <LessonCard
              key={lesson.lessonId}
              lesson={lesson}
              collection={"learn"}
            />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
