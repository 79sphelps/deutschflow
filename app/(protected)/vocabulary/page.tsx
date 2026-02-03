import { Suspense } from "react";
import PageWrapper from "@/app/PageWrapper";
import VocabularyData from "./VocabularyData";
import ProgressSkeleton from "@/app/ProgressSkeleton";

export default async function VocabularyPage() {
  return (
    <PageWrapper>
      <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
            Vocabulary Practice
          </h1>
          <Suspense fallback={<ProgressSkeleton />}>
            <VocabularyData />
          </Suspense>
        </div>
      </section>
    </PageWrapper>
  );
}
