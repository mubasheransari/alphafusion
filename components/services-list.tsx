import { SERVICES, contactHref } from "@/lib/site";
import { Check, SERVICE_ICONS } from "./icons";
import { SpotlightCard } from "./spotlight-card";
import { Container, TextLink } from "./ui";

export function ServicesList() {
  return (
    <section className="pb-12">
      <Container>
        <ol className="space-y-5">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.id];
            return (
              <li key={s.id} id={s.id} className="scroll-mt-28">
                <SpotlightCard className="rounded-[32px] p-7 sm:p-10 lg:p-12">
                  <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16">
                    <div>
                      <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-line-strong bg-white/5 text-teal">
                        <Icon className="size-7" />
                      </span>
                      <h2 className="mt-8 font-display text-[32px] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[44px]">
                        {s.name}
                      </h2>
                      <p className="text-gradient mt-5 font-display text-[19px] leading-[1.35] tracking-[-0.02em] sm:text-[22px]">
                        {s.tagline}
                      </p>
                      <p className="mt-5 max-w-[520px] text-[14.5px] leading-[1.8] text-muted">
                        {s.description}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between gap-8">
                      <ul className="space-y-3">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-3.5 rounded-2xl border border-line bg-white/[0.035] px-4 py-3.5 text-[14px]"
                          >
                            <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal">
                              <Check className="size-[13px]" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <TextLink href={contactHref(s.name)}>{s.cta}</TextLink>
                    </div>
                  </div>
                </SpotlightCard>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
