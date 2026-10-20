import { MARQUEE_ITEMS } from "@/lib/site";
import { Sparkle } from "./icons";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((item, i) => (
        <li key={item} className="flex items-center">
          <span
            className={`font-display text-[clamp(40px,6vw,76px)] font-bold uppercase leading-none tracking-[-0.04em] ${
              i % 2 === 0 ? "text-ink" : "text-outline"
            }`}
          >
            {item}
          </span>
          <Sparkle className="mx-8 size-6 shrink-0 text-teal sm:mx-12" />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Our disciplines"
      className="relative overflow-hidden border-y border-line bg-surface/60 py-9 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="flex w-max animate-marquee">
        <Row />
        <Row hidden />
        <Row hidden />
        <Row hidden />
      </div>
    </section>
  );
}
