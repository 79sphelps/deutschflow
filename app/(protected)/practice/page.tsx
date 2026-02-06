import { Suspense } from "react";
import ProgressSkeleton from "@/app/ProgressSkeleton";
import PageWrapper from "@/app/PageWrapper";
import PracticeData from "./PracticeData";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

export default async function PracticePage() {
  return (
    <PageWrapper>
      <Section>
        <div className="max-w-md mx-auto space-y-6">
          <Headings>
            Practice
          </Headings>
          <Suspense fallback={<ProgressSkeleton />}>
            <PracticeData />
          </Suspense>
        </div>
      </Section>
    </PageWrapper>
  );
}
