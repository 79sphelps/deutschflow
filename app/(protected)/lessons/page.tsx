import { Lesson } from "@/lib/data/lessons";
// import { getLessons } from "@/lib/api";
import { getLessonsFromDB } from "@/lib/db/lessons";
import LessonCard from "@/components/lessons/LessonCard";
import PageWrapper from "@/app/PageWrapper";

/*
- No client-side state
- Server-rendered
- SEO-friendly
*/

export default async function LessonsPage() {
  const lessons = (await getLessonsFromDB()) as Lesson[];

  return (
    <PageWrapper>
      <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
        <div className="space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
            Lessons
          </h1>
          {lessons.map((lesson: Lesson, idx) => (
            <LessonCard key={idx} lesson={lesson} collection={"lessons"} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
