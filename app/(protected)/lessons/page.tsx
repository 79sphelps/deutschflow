import { Suspense } from "react";
import ProgressSkeleton from "@/app/ProgressSkeleton";
import LessonData from "./LessonData";
import PageWrapper from "@/app/PageWrapper";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

/*
- No client-side state
- Server-rendered
- SEO-friendly
*/

export default async function LessonsPage() {
  return (
    <PageWrapper>
      <Section>
        <div className="space-y-6">
          <Headings>
            Lessons
          </Headings>
          <Suspense fallback={<ProgressSkeleton />}>
            <LessonData />
          </Suspense>
        </div>
      </Section>
    </PageWrapper>
  );
}
