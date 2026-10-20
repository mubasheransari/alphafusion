import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { IconClock, IconMail, IconPhone, IconPin } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Alpha Fusion about your project. Email info@alphafusionltd.com or call +44 7367 066235.",
};

function Info({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="glass flex items-start gap-4 rounded-3xl p-5">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-line-strong bg-white/5 text-teal">
        {icon}
      </span>
      <div>
        <p className="text-[12px] text-dim">{label}</p>
        <div className="mt-1.5">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="noise relative overflow-hidden pb-28 pt-36 sm:pt-44">
      <div className="aurora opacity-70 [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]" />
      <div className="grid-fade" />
      <Container className="relative">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-8 max-w-[860px] animate-rise font-display text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[60px] lg:text-[76px]">
          Big ideas start with a <span className="text-gradient">conversation.</span>
        </h1>
        <p className="mt-8 max-w-[600px] text-[15px] leading-[1.75] text-muted sm:text-[16.5px]">
          Tell us what you have in mind. We&apos;ll explore how creativity,
          technology, and strategy can bring your next move to life.
        </p>

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-[5fr_7fr] lg:gap-10">
          <div className="space-y-3">
            <Info label="Email us" icon={<IconMail />}>
              <a href={`mailto:${SITE.email}`} className="break-all font-display text-[19px] tracking-[-0.02em] transition-colors hover:text-teal">
                {SITE.email}
              </a>
            </Info>
            <Info label="Call us" icon={<IconPhone />}>
              <a href={SITE.phoneHref} className="font-display text-[19px] tracking-[-0.02em] transition-colors hover:text-teal">
                {SITE.phone}
              </a>
            </Info>
            <Info label="Our home" icon={<IconPin />}>
              <p className="text-[14px] leading-[1.7] text-ink">
                {SITE.location}
                <br />
                <span className="text-muted">{SITE.serving}</span>
              </p>
            </Info>
            <Info label="Business hours" icon={<IconClock />}>
              <p className="text-[14px] leading-[1.7] text-ink">
                {SITE.hours.map((h, i) => (
                  <span key={h} className={`block ${i > 0 ? "text-muted" : ""}`}>
                    {h}
                  </span>
                ))}
              </p>
            </Info>
          </div>

          <Suspense fallback={<div className="min-h-[480px]" aria-hidden="true" />}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
