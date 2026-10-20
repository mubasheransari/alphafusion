import { contactHref } from "@/lib/site";
import { Check, IconEducation } from "./icons";
import { Container, Eyebrow, TextLink } from "./ui";

const POINTS = [
  "Online class support",
  "Exam preparation",
  "Professional certification support",
];

export function BeyondDigital() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="glass relative overflow-hidden rounded-[36px] p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(70,211,230,0.3),transparent_65%)] blur-2xl"
          />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Beyond digital</Eyebrow>
              <h2 className="mt-8 font-display text-[38px] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[52px]">
                Support for your next achievement.
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <span className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl border border-line-strong bg-white/5 text-teal">
                <IconEducation className="size-6" />
              </span>
              <p className="text-[15px] leading-[1.75] text-muted">
                Educational and tutoring support to help you develop your
                knowledge and move forward with confidence.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {POINTS.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-2 text-[13px]"
                  >
                    <Check className="size-[14px] text-teal" />
                    {p}
                  </li>
                ))}
              </ul>
              <TextLink href={contactHref("Education & Tutoring")} className="mt-8">
                Explore education support
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
