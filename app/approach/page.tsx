import type { Metadata } from "next";
import { PageIntro, Container } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { SpotlightCard } from "@/components/spotlight-card";
import { PRINCIPLES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our approach",
  description:
    "Personalised, collaborative and built around you — how Alpha Fusion works with clients.",
};

export default function ApproachPage() {
  return (
    <>
      <PageIntro
        eyebrow="How we think"
        title={
          <>
            Personalised. Collaborative.
            <br />
            Built around you.
          </>
        }
        lead="We believe the best work begins with understanding your business. Creativity and technology come together around one clear ambition: moving you forward."
      />
      <section className="pb-12 pt-4">
        <Container>
          <ol className="grid gap-4 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title}>
                <SpotlightCard className="h-full rounded-[28px] p-8 sm:p-9">
                  <span className="text-gradient font-display text-[64px] font-semibold leading-none tracking-[-0.05em]">
                    {i + 1}
                  </span>
                  <h2 className="mt-14 font-display text-[27px] font-semibold leading-[1.15] tracking-[-0.03em]">
                    {p.title}
                  </h2>
                  <p className="mt-5 text-[14px] leading-[1.8] text-muted">
                    {p.description}
                  </p>
                </SpotlightCard>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
