import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { ServicesList } from "@/components/services-list";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Animation, digital marketing, web design & development, mobile app development and education support from Alpha Fusion.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our capabilities"
        title="From the first idea to the next big move."
        lead="Creative thinking, thoughtful technology, and tailored strategy. All the disciplines your business needs, working together."
      />
      <ServicesList />
      <CtaBand />
    </>
  );
}
