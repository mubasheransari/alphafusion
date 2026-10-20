"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SERVICE_OPTIONS, SITE } from "@/lib/site";
import { ArrowUpRight, ChevronDown } from "./icons";

const fieldBase =
  "w-full rounded-2xl border border-line-strong bg-white/[0.04] px-5 text-[14px] text-ink placeholder:text-dim outline-none transition focus:border-teal focus:bg-white/[0.07] focus:ring-4 focus:ring-teal/15";

function Fields({ initialService }: { initialService: string }) {
  const [service, setService] = useState(initialService);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Project enquiry${service ? ` — ${service}` : ""}`;
    const lines: string[] = [`Name: ${get("name")}`, `Email: ${get("email")}`];
    if (get("company")) lines.push(`Company: ${get("company")}`);
    if (service) lines.push(`Interested in: ${service}`);
    lines.push("", get("message"));
    const body = lines.join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass grid gap-x-5 gap-y-6 rounded-[32px] p-6 sm:grid-cols-2 sm:p-10"
    >
      <div>
        <label htmlFor="name" className="mb-2.5 block text-[12.5px] font-medium text-muted">
          Your name *
        </label>
        <input id="name" name="name" required autoComplete="name" placeholder="Jane Smith" className={`${fieldBase} h-14`} />
      </div>
      <div>
        <label htmlFor="email" className="mb-2.5 block text-[12.5px] font-medium text-muted">
          Email address *
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={`${fieldBase} h-14`} />
      </div>
      <div>
        <label htmlFor="company" className="mb-2.5 block text-[12.5px] font-medium text-muted">
          Company
        </label>
        <input id="company" name="company" autoComplete="organization" placeholder="Your company" className={`${fieldBase} h-14`} />
      </div>
      <div>
        <label htmlFor="service" className="mb-2.5 block text-[12.5px] font-medium text-muted">
          I&apos;m interested in
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${fieldBase} h-14 appearance-none pr-12`}
          >
            <option value="" className="bg-surface">Choose a service</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o} className="bg-surface">
                {o}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2.5 block text-[12.5px] font-medium text-muted">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Your goals, your ideas, and what comes next..."
          className={`${fieldBase} min-h-[150px] resize-y py-4`}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="btn-glow group inline-flex h-[54px] items-center gap-2.5 rounded-full px-8 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
        >
          Compose project email
          <ArrowUpRight className="size-[15px] transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
        </button>
        <p className="mt-5 text-[12px] leading-[1.6] text-dim">
          This opens your email app with a pre-filled enquiry. Your message is
          sent when you send the email.
        </p>
      </div>
    </form>
  );
}

export function ContactForm() {
  const param = useSearchParams().get("service") ?? "";
  const initial = SERVICE_OPTIONS.includes(param) ? param : "";
  // re-mount when the pre-selected service changes (?service=…)
  return <Fields key={initial} initialService={initial} />;
}
