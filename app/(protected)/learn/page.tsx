import { Suspense } from "react";
import ProgressSkeleton from "@/app/ProgressSkeleton";
import LearnData from "./LearnData";
import type { Metadata } from "next";
import PageWrapper from "@/app/PageWrapper";

export const metadata: Metadata = {
  title: "Lessons",
  description: "Browse structured German lessons by level.",
};

export default async function LearnPage() {
  // if (lessons.length === 0) {
  //   return (
  //     <div className="text-center py-16 space-y-4">
  //       <h2 className="text-xl font-semibold">No lessons available yet</h2>
  //       <p className="text-gray-500">New content is coming soon.</p>
  //     </div>
  //   );
  // }

  return (
    <PageWrapper>
      <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
        <div className="space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
            Start Learning
          </h1>
          <Suspense fallback={<ProgressSkeleton />}>
            <LearnData />
          </Suspense>
        </div>
      </section>
    </PageWrapper>
  );
}
