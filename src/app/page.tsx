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
import { Founder } from "@/components/sections/Founder";
import { Wake } from "@/components/sections/Wake";

/**
 * Un seul objectif : la demande d'essai gratuit. Chaque section lève une
 * objection précise et ramène au même bouton.
 *
 * Le fond sombre est réservé aux deux premières sections — la scène de nuit et
 * la vidéo, où l'on regarde plus qu'on ne lit. Tout le corps de la page est en
 * texte foncé sur fond clair. Voir DESIGN.md § Lisibilité.
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
        <Founder />
        <Wake />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
