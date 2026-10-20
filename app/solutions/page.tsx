import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { ScaleSection } from "@/components/scale-section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Tailored digital solutions for small businesses, medium businesses and enterprises.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Your ambition. Our focus."
        title="A growth partner for every stage."
        lead="Whether you're building your first digital presence or bringing an enterprise strategy together, we shape our work around your objectives."
      />
      <ScaleSection />
      
      <CtaBand />
    </>
  );
}
