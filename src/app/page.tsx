import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { Hero } from "@/components/sections/Hero";
import { Vsl } from "@/components/sections/Vsl";
import { CostOfSilence } from "@/components/sections/CostOfSilence";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Handled } from "@/components/sections/Handled";
import { Crm } from "@/components/sections/Crm";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Wake } from "@/components/sections/Wake";

/**
 * La page se déroule sur une nuit : 23h47 → 07h12. L'ordre des sections est
 * chronologique, et la surface passe du nuit au jour au fil du scroll.
 * Voir DESIGN.md § Structure.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Vsl />
        <CostOfSilence />
        <HowItWorks />
        <Handled />
        <Crm />
        <Pricing />
        <Faq />
        <Wake />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
