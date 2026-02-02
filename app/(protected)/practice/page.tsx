// import { getLessons } from "@/lib/api";
import { getLessonsFromDB } from "@/lib/db/lessons";
import { Lesson } from "@/types/lessons";
import PageWrapper from "@/app/PageWrapper";
import LessonCard from "@/components/lessons/LessonCard";

export default async function PracticePage() {
  // const lessons = await getLessons();
  // const lessons: Lesson[] = (await getLessonsFromDB()) as Lesson[];
  const lessons: Lesson[] = await getLessonsFromDB();

  return (
    <PageWrapper>
      <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
            Practice
          </h1>
          {lessons.map((item: Lesson, idx) => (
            <LessonCard key={idx} lesson={item} collection={"practice"} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
