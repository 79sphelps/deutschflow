import PageWrapper from "@/app/PageWrapper";

export default function GrammarPage() {
  return (
    <PageWrapper>
      <section className="space-y-6 border-blue-600 border-2 flex flex-col justify-center items-center p-5 rounded-2xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
          Grammar
        </h1>
        <p>Clear explanations of German grammar concepts with real examples.</p>

        <ul>
          <li>Nouns & articles (der / die / das)</li>
          <li>Verb conjugation</li>
          <li>Sentence structure</li>
          <li>Cases (Nominativ, Akkusativ, Dativ)</li>
        </ul>
      </section>
    </PageWrapper>
  );
}
