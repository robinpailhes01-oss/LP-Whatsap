import type { Metadata } from "next";
import Link from "next/link";
import { Article, ARemplir, CONTACT, Item, LegalPage, Liste } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Données personnelles — Luma",
  description:
    "Quelles données Luma collecte, pourquoi, combien de temps, qui y a accès, et comment exercer vos droits.",
};

/**
 * Deux lecteurs, un seul texte : le gérant qui veut savoir ce qu'on fait de
 * ses messages, et le juriste qui vérifie la conformité. On commence donc par
 * un résumé en français courant, puis on déroule les articles.
 *
 * Le point structurant est la distinction des rôles : Luma est responsable de
 * traitement pour les demandes reçues sur ce site, et sous-traitant pour les
 * données des clients de l'établissement qui passent par l'assistant. Les deux
 * régimes n'ont pas les mêmes obligations et ne peuvent pas être mélangés.
 */
export default function Confidentialite() {
  return (
    <LegalPage
      titre="Vos données, et celles de vos clients"
      chapeau="Cette page explique ce que nous collectons, pourquoi, combien de temps nous le gardons et qui y a accès. Elle vaut aussi bien pour vous que pour les clients qui écrivent à votre établissement."
    >
      <Article id="resume" titre="En trois phrases">
        <Liste>
          <Item>
            Ce site ne dépose aucun cookie et ne mesure pas votre navigation.
          </Item>
          <Item>
            Si vous remplissez le formulaire, nous conservons votre prénom et la
            coordonnée que vous nous donnez, uniquement pour vous répondre.
          </Item>
          <Item>
            Les messages échangés entre vos clients et l&apos;assistant vous
            appartiennent. Nous les traitons pour votre compte, sur vos
            instructions, et ils ne servent jamais à entraîner un modèle.
          </Item>
        </Liste>
      </Article>

      <Article id="roles" titre="Qui est responsable de quoi">
        <p>
          Le règlement européen distingue deux rôles, et Luma occupe les deux
          selon le contexte.
        </p>
        <Liste>
          <Item>
            <strong>Sur ce site, nous sommes responsables de traitement.</strong>{" "}
            Nous décidons de collecter votre prénom et votre coordonnée pour
            traiter votre demande d&apos;essai.
          </Item>
          <Item>
            <strong>
              Dans votre établissement, nous sommes sous-traitant.
            </strong>{" "}
            Les données de vos clients — leurs messages, leur numéro, leurs
            réservations — restent sous votre responsabilité. Nous les traitons
            pour votre compte et selon vos instructions, dans le cadre d&apos;un
            accord de sous-traitance conforme à l&apos;article 28 du RGPD, signé
            au démarrage de la prestation.
          </Item>
        </Liste>
        <p>
          Responsable de traitement pour ce site :{" "}
          <ARemplir>raison sociale et adresse</ARemplir>.
        </p>
      </Article>

      <Article id="formulaire" titre="Ce que collecte le formulaire d'essai">
        <p>Trois informations, pas une de plus :</p>
        <Liste>
          <Item>votre prénom ;</Item>
          <Item>
            le canal par lequel vous préférez qu&apos;on vous réponde (WhatsApp
            ou e-mail) ;
          </Item>
          <Item>
            la coordonnée correspondante — numéro ou adresse e-mail, jamais les
            deux.
          </Item>
        </Liste>
        <p>
          S&apos;y ajoutent la date de la demande et, le temps de la protection
          anti-robots, votre adresse IP. Celle-ci n&apos;est ni enregistrée dans
          un fichier, ni transmise : elle sert uniquement à limiter le nombre
          d&apos;envois par tranche de dix minutes, et disparaît au redémarrage
          du serveur.
        </p>
        <Liste>
          <Item>
            <strong>Finalité</strong> : vous recontacter au sujet de votre
            demande d&apos;essai.
          </Item>
          <Item>
            <strong>Base légale</strong> : votre demande elle-même — des mesures
            précontractuelles prises à votre initiative (article 6.1.b du
            RGPD).
          </Item>
          <Item>
            <strong>Durée de conservation</strong> : trois ans à compter de
            notre dernier échange, conformément à la recommandation de la CNIL
            en matière de prospection. Effacement immédiat sur simple demande.
          </Item>
        </Liste>
        <p>
          Aucune de ces informations n&apos;est vendue, louée ni cédée à un
          tiers à des fins commerciales.
        </p>
      </Article>

      <Article id="assistant" titre="Ce que traite l'assistant WhatsApp">
        <p>
          Quand l&apos;assistant est en service chez vous, il traite ce que vos
          clients lui écrivent : le contenu des messages, leur numéro de
          téléphone WhatsApp, et les informations nécessaires à leur demande
          (dates, nombre de personnes, prestation souhaitée). Ces données
          alimentent la fiche client que vous consultez.
        </p>
        <Liste>
          <Item>
            <strong>Finalité</strong> : répondre aux demandes de vos clients et
            en garder la trace pour vous.
          </Item>
          <Item>
            <strong>Responsable</strong> : vous. Nous n&apos;agissons que sur
            vos instructions.
          </Item>
          <Item>
            <strong>Durée</strong> : <ARemplir>durée retenue au contrat</ARemplir>
            . À la fin de la prestation, vos données vous sont restituées dans
            un format exploitable, puis supprimées de nos systèmes sous trente
            jours.
          </Item>
        </Liste>
        <p>
          Nous ne consultons le contenu des conversations que lorsque
          c&apos;est nécessaire pour régler l&apos;assistant, corriger une
          anomalie ou répondre à votre demande d&apos;assistance — et
          uniquement par les personnes qui en ont besoin.
        </p>
      </Article>

      <Article id="sous-traitants" titre="Qui d'autre y a accès">
        <p>
          Faire fonctionner un assistant WhatsApp suppose de recourir à des
          prestataires techniques. Voici la liste, à jour à la date indiquée en
          haut de cette page :
        </p>
        <Liste>
          <Item>
            <strong>Meta Platforms Ireland Ltd</strong> — acheminement des
            messages WhatsApp. Les messages transitent par la plateforme
            WhatsApp Business et sont soumis à ses propres conditions.
          </Item>
          <Item>
            <strong>Anthropic</strong> — modèle de langage qui rédige les
            réponses. Les contenus envoyés par l&apos;API ne sont pas utilisés
            pour entraîner ses modèles.
          </Item>
          <Item>
            <strong>Hébergeur du site et de l&apos;assistant</strong> :{" "}
            <ARemplir>nom et région d&apos;hébergement</ARemplir>.
          </Item>
          <Item>
            <strong>Service d&apos;envoi d&apos;e-mails</strong> :{" "}
            <ARemplir>nom et région</ARemplir>, pour l&apos;acheminement des
            demandes issues du formulaire.
          </Item>
          <Item>
            <ARemplir>
              tout autre outil réellement utilisé : agenda, logiciel de
              réservation, automatisation
            </ARemplir>
          </Item>
        </Liste>
        <p>
          Chacun est lié par un contrat qui lui interdit d&apos;utiliser ces
          données à ses propres fins.
        </p>
      </Article>

      <Article id="transferts" titre="Où sont les données">
        <p>
          Nous privilégions un hébergement dans l&apos;Union européenne.
          Certains prestataires ci-dessus sont toutefois établis hors de
          l&apos;Union, ou y opèrent des serveurs. Dans ce cas, les transferts
          sont encadrés par les clauses contractuelles types de la Commission
          européenne ou par une décision d&apos;adéquation.
        </p>
        <p>
          <ARemplir>
            lister ici, prestataire par prestataire, la région réelle et le
            mécanisme de transfert applicable — cette page et la mention
            « données conservées en Europe » affichée sur le site doivent dire
            exactement la même chose
          </ARemplir>
        </p>
      </Article>

      <Article id="entrainement" titre="Entraînement des modèles">
        <p>
          Ni vos données, ni celles de vos clients ne servent à entraîner un
          modèle d&apos;intelligence artificielle, que ce soit le nôtre ou celui
          d&apos;un tiers. Ce point est contractuellement garanti par notre
          fournisseur de modèle et repris dans l&apos;accord de sous-traitance
          que nous signons avec vous.
        </p>
      </Article>

      <Article id="securite" titre="Sécurité">
        <p>
          Les échanges avec ce site sont chiffrés (HTTPS). Les clés d&apos;accès
          aux services tiers ne sortent jamais de nos serveurs : le formulaire
          n&apos;expose aucune adresse de destination ni aucun identifiant dans
          votre navigateur. L&apos;accès aux données de votre établissement est
          limité aux personnes qui en ont besoin pour la prestation.
        </p>
      </Article>

      <Article id="droits" titre="Vos droits">
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, d&apos;opposition, de limitation et de portabilité
          sur les données qui vous concernent. Écrivez à{" "}
          <a href={`mailto:${CONTACT}`}>{CONTACT}</a> : nous répondons sous un
          mois.
        </p>
        <p>
          Si la demande vient d&apos;un client de votre établissement, elle
          s&apos;adresse à vous, qui en êtes responsable. Nous vous aidons à y
          répondre et nous vous transmettons sans délai toute demande qui nous
          parviendrait directement.
        </p>
        <p>
          En cas de désaccord, vous pouvez saisir la Commission nationale de
          l&apos;informatique et des libertés (CNIL), 3 place de Fontenoy, TSA
          80715, 75334 Paris Cedex 07 — <a href="https://www.cnil.fr">cnil.fr</a>
          .
        </p>
      </Article>

      <Article id="cookies" titre="Cookies">
        <p>
          Ce site n&apos;en dépose aucun. Pas de mesure d&apos;audience, pas de
          pixel publicitaire, pas de bandeau à cliquer. Si cela change un jour,
          cette page sera modifiée et un consentement vous sera demandé avant
          tout dépôt.
        </p>
      </Article>

      <Article id="modifications" titre="Modifications">
        <p>
          Cette page peut évoluer. La date de dernière mise à jour figure en
          haut. Nos clients sont prévenus de tout changement significatif avant
          son entrée en vigueur, comme le prévoient les{" "}
          <Link href="/cgv">conditions générales</Link>.
        </p>
      </Article>
    </LegalPage>
  );
}
