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
 * L'ordre suit la façon dont on découvre quelque chose, pas la façon dont on
 * le vend : comprendre, puis voir, puis se décider.
 *
 * 1. Hero — ce que c'est, en une phrase, avec une vraie conversation.
 * 2. Comment ça marche — c'est quoi, c'est pour qui, en trois étapes.
 * 3. La vidéo, le calcul, les demandes, le carnet — la preuve.
 * 4. Le prix, les questions, qui je suis — la décision.
 * 5. L'essai gratuit.
 *
 * Personne ne se laisse convaincre par quelque chose qu'il n'a pas compris :
 * aucun argument n'arrive avant l'explication.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Vsl />
        <CostOfSilence />
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
