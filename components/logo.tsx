import Link from "next/link";

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[11px] bg-[linear-gradient(135deg,#8b5cff_0%,#5b7cf0_50%,#46d3e6_100%)] shadow-[0_0_28px_-4px_rgba(139,92,255,0.8)] ${className}`}
    >
      <svg viewBox="0 0 64 64" className="size-full" aria-hidden="true">
        <circle cx="30" cy="34" r="10.5" fill="none" stroke="#07060f" strokeWidth="4.6" />
        <path d="M40.5 22v25" stroke="#07060f" strokeWidth="4.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Alpha Fusion Ltd — home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark />
      <span className="flex items-baseline gap-1.5">
        <span className="font-display text-[21px] font-semibold leading-none tracking-[-0.03em] text-ink">
          Alpha<span className="text-gradient">Fusion</span>
        </span>
        <span className="text-[8.5px] font-bold uppercase leading-none tracking-[0.06em] text-dim">
          Ltd
        </span>
      </span>
    </Link>
  );
}
