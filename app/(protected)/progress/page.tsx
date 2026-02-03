import { Suspense } from "react";
import PageWrapper from "@/app/PageWrapper";
import ProgressData from "./ProgressData";
import ProgressSkeleton from "@/app/ProgressSkeleton";

export default async function ProgressPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-6 text-center">
          Your Progress
        </h1>
        <Suspense fallback={<ProgressSkeleton />}>
          <ProgressData />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
