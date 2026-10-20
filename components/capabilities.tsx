import Link from "next/link";
import { CAPABILITY_CARDS } from "@/lib/site";
import { ArrowUpRight, SERVICE_ICONS } from "./icons";
import { SpotlightCard } from "./spotlight-card";
import { Container, Eyebrow } from "./ui";

// Bento layout: sizes per card on large screens
const SPANS = [
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-4",
];

const ACCENT = [
  "from-brand/40 to-transparent",
  "from-teal/30 to-transparent",
  "from-teal/30 to-transparent",
  "from-brand/40 to-transparent",
];

export function Capabilities() {
  return (
    <section className="relative py-28 lg:py-36">
      <Container>
        <Eyebrow>Our capabilities</Eyebrow>
        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-[720px] font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[56px]">
            Everything your brand needs to <span className="text-gradient">move.</span>
          </h2>
          <p className="max-w-[330px] pb-2 text-[15px] leading-[1.7] text-muted">
            Four core disciplines. One integrated team. Personalised solutions
            engineered for growth.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 lg:grid-cols-6">
          {CAPABILITY_CARDS.map((service, i) => {
            const Icon = SERVICE_ICONS[service.id];
            return (
              <li key={service.id} className={SPANS[i]}>
                <SpotlightCard className="group relative h-full overflow-hidden rounded-[28px]">
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gradient-to-br ${ACCENT[i]} blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`}
                  />
                  <article className="relative flex h-full min-h-[300px] flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-line-strong bg-white/5 text-teal">
                        <Icon className="size-6" />
                      </span>
                      <ArrowUpRight className="size-5 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal" />
                    </div>
                    <h3 className="mt-auto pt-14 font-display text-[26px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[30px]">
                      {service.name}
                    </h3>
                    <p className="mt-3 max-w-[460px] text-[14px] leading-[1.7] text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-[11.5px] text-muted"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services#${service.id}`}
                      className="absolute inset-0 rounded-[28px]"
                      aria-label={`Explore ${service.name}`}
                    />
                  </article>
                </SpotlightCard>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
