import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./logo";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-canvas">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-0.22em] select-none text-center font-display text-[clamp(72px,17vw,250px)] font-bold leading-none tracking-[-0.05em] text-outline opacity-60"
      >
        AlphaFusion
      </div>
      <Container className="relative pb-[clamp(96px,16vw,230px)] pt-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[320px] text-[14px] leading-[1.7] text-muted">
              Innovation &amp; excellence, personalised. A London-based digital
              growth studio.
            </p>
          </div>
          <div>
            <p className="text-[12px] text-dim">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-[14px] text-muted transition-colors hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-[14px] text-muted transition-colors hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[12px] text-dim">Say hello</p>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-muted transition-colors hover:text-ink">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="text-muted transition-colors hover:text-ink">
                  {SITE.phone}
                </a>
              </li>
              <li className="text-muted">{SITE.location}</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-6 text-[12px] text-dim sm:flex-row">
          <p>© 2026 Alpha Fusion Ltd. All rights reserved.</p>
          <p>{SITE.serving}</p>
        </div>
      </Container>
    </footer>
  );
}
