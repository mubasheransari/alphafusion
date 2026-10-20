import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Capabilities } from "@/components/capabilities";
import { ScaleSection } from "@/components/scale-section";
import { ProcessSection } from "@/components/process-section";
import { BeyondDigital } from "@/components/beyond-digital";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Capabilities />
      <ScaleSection />
      <ProcessSection />
      <BeyondDigital />
      <CtaBand />
    </>
  );
}
