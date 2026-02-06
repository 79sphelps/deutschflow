import PageWrapper from "@/app/PageWrapper";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";

export default function GrammarPage() {
  return (
    <PageWrapper>
      <Section>
        <Headings>
          Grammar
        </Headings>
        <p>Clear explanations of German grammar concepts with real examples.</p>

        <ul>
          <li>Nouns & articles (der / die / das)</li>
          <li>Verb conjugation</li>
          <li>Sentence structure</li>
          <li>Cases (Nominativ, Akkusativ, Dativ)</li>
        </ul>
      </Section>
    </PageWrapper>
  );
}
