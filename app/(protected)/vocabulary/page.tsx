import { Suspense } from "react";
import PageWrapper from "@/app/PageWrapper";
import VocabularyData from "./VocabularyData";
import ProgressSkeleton from "@/app/ProgressSkeleton";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

export default async function VocabularyPage() {
  return (
    <PageWrapper>
      <Section>
        <div className="max-w-md mx-auto space-y-6">
          <Headings>
            Vocabulary Practice
          </Headings>
          <Suspense fallback={<ProgressSkeleton />}>
            <VocabularyData />
          </Suspense>
        </div>
      </Section>
    </PageWrapper>
  );
}
