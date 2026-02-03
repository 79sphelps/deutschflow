import { Suspense } from "react";
import ProgressSkeleton from "@/app/ProgressSkeleton";
import PageWrapper from "@/app/PageWrapper";
import PracticeData from "./PracticeData";

export default async function PracticePage() {
  return (
    <PageWrapper>
      <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
            Practice
          </h1>
          <Suspense fallback={<ProgressSkeleton />}>
            <PracticeData />
          </Suspense>
        </div>
      </section>
    </PageWrapper>
  );
}
