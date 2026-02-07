import { Suspense } from "react";
import PageWrapper from "@/app/PageWrapper";
import ProgressData from "./ProgressData";
import ProgressSkeleton from "@/app/ProgressSkeleton";

export default async function ProgressPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto p-6">
        <Suspense fallback={<ProgressSkeleton />}>
          <ProgressData />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
