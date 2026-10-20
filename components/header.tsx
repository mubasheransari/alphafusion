"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { Logo } from "./logo";
import { ButtonLink } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div
        className={`mx-auto flex h-[64px] max-w-[1120px] items-center justify-between rounded-full border pl-5 pr-2.5 transition-all duration-500 ${
          scrolled || open
            ? "border-line-strong bg-[#0b0919]/75 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            : "border-line bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                  active
                    ? "bg-white/10 text-ink"
                    : "text-muted hover:bg-white/5 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/contact" size="md" icon="up-right">
              Start a project
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="glass inline-flex size-11 items-center justify-center rounded-full md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 -z-10 bg-[#07060f]/95 px-5 pt-28 backdrop-blur-2xl md:hidden"
        >
          <div className="aurora opacity-60" />
          <nav aria-label="Mobile" className="relative mx-auto flex max-w-[520px] flex-col">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 70}ms` }}
                className="animate-rise border-b border-line py-5 font-display text-[32px] font-medium tracking-[-0.03em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/contact"
              icon="up-right"
              onClick={() => setOpen(false)}
              className="mt-8"
            >
              Start a project
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
