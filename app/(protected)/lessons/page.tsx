import { Suspense } from "react";
import ProgressSkeleton from "@/app/ProgressSkeleton";
import LessonData from "./LessonData";
import PageWrapper from "@/app/PageWrapper";

/*
- No client-side state
- Server-rendered
- SEO-friendly
*/

export default async function LessonsPage() {
  return (
    <PageWrapper>
      <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
        <div className="space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
            Lessons
          </h1>
          <Suspense fallback={<ProgressSkeleton />}>
            <LessonData />
          </Suspense>
        </div>
      </section>
    </PageWrapper>
  );
}
