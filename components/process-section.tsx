import { PRINCIPLES } from "@/lib/site";
import { SpotlightCard } from "./spotlight-card";
import { Container, Eyebrow } from "./ui";

/** Home-page teaser of the three-step way of working */
export function ProcessSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-8 max-w-[720px] font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
          Personalised. Collaborative. Built around you.
        </h2>

        <ol className="relative mt-14 grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title}>
              <SpotlightCard className="h-full rounded-[28px] p-7 sm:p-8">
                <span className="text-gradient font-display text-[56px] font-semibold leading-none tracking-[-0.05em]">
                  {i + 1}
                </span>
                <h3 className="mt-10 font-display text-[24px] font-semibold leading-[1.15] tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-muted">
                  {p.description}
                </p>
              </SpotlightCard>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
