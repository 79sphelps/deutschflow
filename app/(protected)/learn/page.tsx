import { Suspense } from "react";
import ProgressSkeleton from "@/app/ProgressSkeleton";
import LearnData from "./LearnData";
import type { Metadata } from "next";
import PageWrapper from "@/app/PageWrapper";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

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
      <Section>
        <div className="space-y-6">
          <Headings>
            Start Learning
          </Headings>
          <Suspense fallback={<ProgressSkeleton />}>
            <LearnData />
          </Suspense>
        </div>
      </Section>
    </PageWrapper>
  );
}
