import { SITE } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

export function CtaBand() {
  return (
    <section className="px-3 pb-6 pt-16 sm:px-6 lg:pt-24">
      <div className="noise relative mx-auto max-w-[1320px] overflow-hidden rounded-[40px] border border-line-strong bg-surface">
        <div className="aurora" />
        <div className="grid-fade opacity-80" />
        <Container className="relative flex flex-col items-center py-24 text-center sm:py-32">
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium text-muted">
            Let&apos;s fuse
          </p>
          <h2 className="mt-8 max-w-[860px] font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[72px] lg:text-[88px]">
            Ready for your <span className="text-gradient">next big move?</span>
          </h2>
          <p className="mt-8 max-w-[420px] text-[16px] leading-[1.7] text-muted">
            Tell us your goal. We&apos;ll bring the creativity, technology, and
            strategy to move it forward.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact" icon="up-right">
              Start a project
            </ButtonLink>
            <ButtonLink href={`mailto:${SITE.email}`} variant="secondary">
              {SITE.email}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
