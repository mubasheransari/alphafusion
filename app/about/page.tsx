import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, Container } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alpha Fusion Ltd is a London-based digital growth studio working with clients across the UK and US.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Meet Alpha Fusion"
        title="Different disciplines. Shared ambition."
        lead="We bring creative thinking and technology together to help businesses reach their potential. Based in London, working with clients across the UK and US."
      />
      <section className="pb-12 pt-4">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[44px] sm:-inset-6 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,255,0.45),rgba(70,211,230,0.35),rgba(139,92,255,0.45))] opacity-50 blur-3xl"
            />
            <div className="glass relative rounded-[32px] p-2.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image
                  src="/images/team.jpg"
                  alt="Four colleagues reviewing website designs together on a large monitor"
                  fill
                  sizes="(min-width: 1024px) 567px, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07060f]/60 via-transparent to-[#8b5cff]/10" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[48px]">
              A partner in your next chapter.
            </h2>
            <p className="mt-8 text-[15px] leading-[1.85] text-muted">
              Alpha Fusion Ltd provides tailored digital marketing, animation,
              website and mobile app development, alongside educational support.
              Our work is shaped by each client&apos;s unique goals and
              requirements.
            </p>
            <p className="mt-5 text-[15px] leading-[1.85] text-muted">
              Our mission is to provide high-quality, reliable, and affordable
              services with complete transparency. We combine creativity with
              technology and a client-centric approach to deliver meaningful,
              long-term partnerships.
            </p>
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {["Creativity", "Technology", "Transparency", "Long-term partnership"].map((t) => (
                <li key={t} className="glass rounded-full px-4 py-2 text-[12.5px] text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
