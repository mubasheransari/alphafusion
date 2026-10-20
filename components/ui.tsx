import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./icons";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** Small glass pill label that sits above section headings */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[12px] font-medium text-muted ${className}`}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-teal" />
      </span>
      {children}
    </p>
  );
}

type ButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  icon?: "up-right" | "right" | "none";
  className?: string;
};

export function ButtonLink({
  variant = "primary",
  size = "lg",
  icon = "none",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap transition-all duration-300";
  const sizes = {
    md: "h-10 px-5 text-[12.5px]",
    lg: "h-[52px] px-7 text-[14px]",
  };
  const variants = {
    primary: "btn-glow text-white hover:-translate-y-0.5",
    secondary:
      "glass text-ink hover:-translate-y-0.5 hover:border-line-strong hover:bg-white/10",
  };
  return (
    <Link
      {...props}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {icon === "up-right" && (
        <ArrowUpRight className="size-[15px] transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
      )}
      {icon === "right" && (
        <ArrowRight className="size-[15px] transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

export function TextLink({
  children,
  icon = "up-right",
  className = "",
  ...props
}: Omit<ComponentProps<typeof Link>, "className"> & {
  icon?: "up-right" | "right";
  className?: string;
}) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center gap-2 text-[13.5px] font-semibold text-teal transition-colors hover:text-white ${className}`}
    >
      {children}
      {icon === "up-right" ? (
        <ArrowUpRight className="size-[14px] transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
      ) : (
        <ArrowRight className="size-[14px] transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

/** Page-level intro: aurora backdrop + big headline + lead paragraph */
export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
}) {
  return (
    <section className="noise relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="aurora opacity-70 [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]" />
      <div className="grid-fade [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_25%,transparent_75%)]" />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-8 max-w-[980px] animate-rise font-display text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[60px] lg:text-[76px]">
          {title}
        </h1>
        <p className="mt-8 max-w-[600px] text-[15px] leading-[1.75] text-muted sm:text-[16.5px]">
          {lead}
        </p>
      </Container>
    </section>
  );
}
