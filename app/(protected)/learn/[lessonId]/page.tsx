// import { getLesson } from "@/lib/api";
import { getLessonFromDB } from "@/lib/db/lessons";
import Link from "next/link";
import PageWrapper from "@/app/PageWrapper";
import { Lesson } from "@/types/lessons";
import Headings from "@/components/ui/Headings";

export default async function LearnLessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const lesson: Lesson = (await getLessonFromDB(lessonId)) as unknown as Lesson;

  return (
    <PageWrapper>
      <div className="space-y-6">
        <Headings>{lesson?.title}</Headings>
        <p className="text-center">{lesson?.description}</p>
        <div className="flex flex-row justify-center items-center">
          <button className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all active:scale-[0.98]">
            <Link
              href={`/learn/${lesson?.lessonId}/practice`}
              // className="rounded bg-blue-600 px-4 py-2 text-white w-50"
            >
              Start Practice →
            </Link>
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
