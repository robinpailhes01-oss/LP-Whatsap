import type { Metadata } from "next";
import Link from "next/link";
import { Article, ARemplir, CONTACT, Item, LegalPage, Liste } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Mentions légales — Luma",
  description:
    "Éditeur, directeur de la publication, hébergeur et conditions d'utilisation du site Luma.",
};

export default function MentionsLegales() {
  return (
    <LegalPage
      titre="Mentions légales"
      chapeau="Les informations que la loi impose d'afficher sur un site professionnel, et à qui s'adresser en cas de question."
    >
      <Article id="editeur" titre="Éditeur du site">
        <p>
          Le présent site est édité par <ARemplir>raison sociale</ARemplir>,{" "}
          <ARemplir>forme juridique : SAS, SASU, EI…</ARemplir> au capital de{" "}
          <ARemplir>montant</ARemplir>, exploitant la marque{" "}
          <strong>Luma</strong>.
        </p>
        <Liste>
          <Item>
            Siège social : <ARemplir>adresse complète</ARemplir>
          </Item>
          <Item>
            Immatriculée au RCS de <ARemplir>ville</ARemplir> sous le numéro{" "}
            <ARemplir>SIREN / SIRET</ARemplir>
          </Item>
          <Item>
            Numéro de TVA intracommunautaire : <ARemplir>FR…</ARemplir>
          </Item>
          <Item>
            Téléphone : <ARemplir>numéro</ARemplir>
          </Item>
          <Item>
            Adresse électronique : <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
          </Item>
        </Liste>
      </Article>

      <Article id="publication" titre="Directeur de la publication">
        <p>
          Robin Pailhes, en qualité de <ARemplir>fonction exacte</ARemplir>.
        </p>
      </Article>

      <Article id="hebergeur" titre="Hébergement">
        <p>
          Le site est hébergé par <ARemplir>nom de l&apos;hébergeur</ARemplir>,{" "}
          <ARemplir>adresse</ARemplir>, <ARemplir>téléphone</ARemplir>.
        </p>
        {/* Sur un déploiement Vercel : Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, États-Unis. À vérifier au moment de la mise en
            ligne, ainsi que la région de déploiement — voir CONTENT.md. */}
      </Article>

      <Article id="objet" titre="Objet du site">
        <p>
          Ce site présente Luma, un assistant qui répond aux messages WhatsApp
          des clients d&apos;un établissement, et permet de demander un essai
          gratuit. Il ne permet aucun achat en ligne : la relation commerciale
          naît d&apos;un contrat signé séparément, décrit dans les{" "}
          <Link href="/cgv">conditions générales</Link>.
        </p>
      </Article>

      <Article id="propriete" titre="Propriété intellectuelle">
        <p>
          La structure du site, ses textes, sa charte graphique et le nom Luma
          sont protégés. Toute reproduction, même partielle, sans autorisation
          écrite préalable est interdite.
        </p>
        <p>
          Les captures de conversations affichées sur la page d&apos;accueil
          proviennent d&apos;échanges réels d&apos;Harmonie Yacht, publiées avec
          l&apos;accord de l&apos;établissement. Aucun client n&apos;y est
          identifiable : ni nom, ni numéro de téléphone n&apos;y figurent. Les
          autres exemples sont signalés comme tels sur la page.
        </p>
        <p>
          WhatsApp est une marque de Meta Platforms, Inc. Luma n&apos;est ni
          édité, ni parrainé, ni affilié à Meta.
        </p>
      </Article>

      <Article id="donnees" titre="Données personnelles et cookies">
        <p>
          Ce site ne dépose <strong>aucun cookie</strong> et n&apos;utilise
          aucun outil de mesure d&apos;audience. Les seules données recueillies
          sont celles que vous saisissez volontairement dans le formulaire
          d&apos;essai. Le détail figure dans notre{" "}
          <Link href="/confidentialite">
            politique de protection des données
          </Link>
          .
        </p>
      </Article>

      <Article id="responsabilite" titre="Responsabilité">
        <p>
          Les informations du site sont fournies à titre indicatif et peuvent
          évoluer. Les tarifs, délais et volumes présentés à titre
          d&apos;exemple ne constituent pas une offre contractuelle : seuls le
          devis et les conditions générales acceptées engagent les parties.
        </p>
      </Article>

      <Article id="litiges" titre="Droit applicable">
        <p>
          Le présent site est soumis au droit français. Pour toute question
          relative à ces mentions, écrivez à{" "}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </Article>
    </LegalPage>
  );
}
