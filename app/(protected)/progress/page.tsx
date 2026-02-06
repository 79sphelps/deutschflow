import { Suspense } from "react";
import PageWrapper from "@/app/PageWrapper";
import ProgressData from "./ProgressData";
import ProgressSkeleton from "@/app/ProgressSkeleton";
// import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

export default async function ProgressPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto p-6">
        <Headings>
          Your Progress
        </Headings>
        <Suspense fallback={<ProgressSkeleton />}>
          <ProgressData />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
