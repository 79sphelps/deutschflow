// import { getLesson } from "@/lib/api";
import { getLessonFromDB } from "@/lib/db/lessons";
import Link from "next/link";
import PageWrapper from "@/app/PageWrapper";
import { Lesson } from "@/lib/data/lessons";

export default async function LearnLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const lesson: Lesson = await getLessonFromDB(lessonId) as unknown as Lesson;
  
  return (
    <PageWrapper>
      <div className="space-y-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
          {lesson?.title}
        </h1>
        <p>{lesson?.description}</p>
        <Link
          href={`/learn/${lesson?.lessonId}/practice`}
          className="inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
          Start Practice →
        </Link>
      </div>
    </PageWrapper>
  );
}
