import Image from "next/image";
import Link from "next/link";
import { AUDIENCES, contactHref } from "@/lib/site";
import { ArrowUpRight } from "./icons";
import { Container, Eyebrow, TextLink } from "./ui";

export function ScaleSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Built to scale</Eyebrow>
          <h2 className="mt-8 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[54px]">
            Small, mid &amp; enterprise. We meet you where you are.
          </h2>
          <p className="mt-6 text-[15px] text-muted">
            Your business is unique. Your digital strategy should be, too.
          </p>

          <ul className="mt-10 space-y-3">
            {AUDIENCES.map((a) => (
              <li key={a.name}>
                <Link
                  href={contactHref()}
                  className="glass group flex items-start gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-white/[0.08]"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[22px] font-medium tracking-[-0.025em]">
                      {a.name}
                    </span>
                    <span className="mt-2.5 block max-w-[470px] text-[13.5px] leading-[1.7] text-muted">
                      {a.description}
                    </span>
                  </span>
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-canvas">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <TextLink href={contactHref()} icon="right" className="mt-9 text-[14px]">
            Find your next move
          </TextLink>
        </div>

        <figure className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[44px] sm:-inset-6 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,255,0.45),rgba(70,211,230,0.35),rgba(139,92,255,0.45))] opacity-60 blur-3xl"
          />
          <div className="glass relative rounded-[32px] p-2.5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image
                src="/images/team.jpg"
                alt="Four colleagues reviewing website designs together on a large monitor"
                fill
                sizes="(min-width: 1024px) 560px, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07060f]/80 via-transparent to-[#8b5cff]/10" />
              <figcaption className="glass absolute inset-x-4 bottom-4 rounded-2xl px-5 py-4 font-display text-[16px] font-medium tracking-[-0.02em]">
                Different disciplines. Shared ambition.
              </figcaption>
            </div>
          </div>
        </figure>
      </Container>
    </section>
  );
}
