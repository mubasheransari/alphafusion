import Image from "next/image";
import { ButtonLink, Container } from "./ui";
import { ArrowUpRight } from "./icons";

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] lg:ml-auto lg:mr-0">
      {/* orbit rings */}
      <div aria-hidden="true" className="absolute inset-[2%] animate-spin-slow rounded-full border border-dashed border-white/10" />
      <div aria-hidden="true" className="absolute inset-[14%] rounded-full border border-white/[0.07]" />
      <div aria-hidden="true" className="absolute inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(139,92,255,0.5),rgba(70,211,230,0.15)_55%,transparent_72%)] blur-2xl" />

      {/* the ribbon — black background drops out via screen blend */}
      <div className="absolute inset-[6%] animate-float">
        <Image
          src="/images/hero-knot.jpg"
          alt="Abstract glass ribbon sculpture in violet, teal and silver"
          fill
          priority
          sizes="(min-width: 1024px) 520px, 90vw"
          className="rounded-full object-cover mix-blend-screen [mask-image:radial-gradient(circle,#000_58%,transparent_72%)]"
        />
      </div>

      {/* floating glass chips */}
      <div className="glass absolute -left-1 top-[14%] hidden animate-float-slow sm:block rounded-2xl px-4 py-3 sm:-left-6">
        <p className="font-display text-[15px] font-semibold tracking-[-0.02em] text-teal">
          Creative thinking
        </p>
        <p className="mt-0.5 text-[11px] text-muted">Driven by your ambition</p>
      </div>

      <div className="glass absolute -right-1 bottom-[20%] hidden animate-float sm:block rounded-2xl px-4 py-3 sm:-right-5">
        <p className="font-display text-[15px] font-semibold tracking-[-0.02em]">
          Digital impact
        </p>
        <p className="mt-0.5 text-[11px] text-muted">Designed to move you forward</p>
      </div>

      <span className="btn-glow absolute right-[6%] top-[6%] inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[12px] font-semibold text-white">
        Motion-first
        <ArrowUpRight className="size-3" />
      </span>

      <div className="glass absolute bottom-[4%] left-[8%] rounded-full px-5 py-2.5 text-[12px] font-medium">
        SEO · Brand · Apps — one accountable team
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="noise relative overflow-hidden">
      <div className="aurora" />
      <div className="grid-fade" />
      <Container className="relative grid min-h-svh items-center gap-10 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-28">
        <div>
          <p className="glass animate-rise inline-flex items-center gap-2.5 rounded-full py-2 pl-2 pr-4 text-[12px] text-muted">
            <span className="rounded-full bg-brand/25 px-2.5 py-0.5 text-[11px] font-semibold text-[#cdbdff]">
              London
            </span>
            Digital growth studio for the UK &amp; US
          </p>

          <h1 className="mt-8 animate-rise font-display text-[52px] font-semibold leading-[0.98] tracking-[-0.045em] [animation-delay:120ms] sm:text-[76px] lg:text-[92px]">
            We fuse
            <br />
            <span className="text-gradient">innovation</span>
            <br />
            &amp; excellence.
          </h1>

          <p className="mt-8 max-w-[480px] animate-rise text-[16px] leading-[1.7] text-muted [animation-delay:260ms]">
            <span className="text-ink">Alpha Fusion</span> builds brands,
            campaigns, products and platforms that move small, mid and
            enterprise businesses forward.
          </p>

          <div className="mt-10 flex animate-rise flex-wrap items-center gap-3 [animation-delay:380ms]">
            <ButtonLink href="/contact" icon="up-right">
              Book a strategy call
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" icon="right">
              Explore services
            </ButtonLink>
          </div>
        </div>

        <div className="animate-rise [animation-delay:200ms]">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
