import type { Metadata } from "next";
import Link from "next/link";
import { Article, ARemplir, CONTACT, Item, LegalPage, Liste } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Conditions générales — Luma",
  description:
    "Mise en place gratuite, facturation à l'usage, résiliation sans préavis : les conditions de la prestation Luma.",
};

/**
 * Contrat entre professionnels : pas de droit de rétractation de quatorze
 * jours, pas de médiateur de la consommation. En revanche les mentions du Code
 * de commerce sur les délais de paiement et les pénalités de retard sont
 * obligatoires (art. L441-10 et D441-5).
 *
 * ⚠ La définition de la « conversation traitée » à l'article 2 doit
 * correspondre mot pour mot à ce qui est affiché sous la facture d'exemple
 * (Pricing.tsx). Si l'une change, l'autre change.
 */
export default function Cgv() {
  return (
    <LegalPage
      titre="Conditions générales de prestation"
      chapeau="Ce qui est gratuit, ce qui est facturé, comment on arrête. Écrites pour être lues, pas pour être subies."
    >
      <Article id="objet" titre="1. Objet et champ d'application">
        <p>
          Les présentes conditions régissent la mise à disposition de Luma, un
          assistant conversationnel qui répond aux messages reçus par un
          établissement sur WhatsApp, et l&apos;accompagnement qui va avec.
        </p>
        <p>
          Elles s&apos;adressent exclusivement à des professionnels agissant
          dans le cadre de leur activité. Le client reconnaît avoir la qualité
          de professionnel au sens du Code de la consommation : les dispositions
          propres aux consommateurs, dont le droit de rétractation de quatorze
          jours, ne s&apos;appliquent pas.
        </p>
        <p>
          Toute commande emporte acceptation sans réserve des présentes. Elles
          prévalent sur les conditions d&apos;achat du client, sauf accord écrit
          contraire.
        </p>
      </Article>

      <Article id="definitions" titre="2. Définitions">
        <Liste>
          <Item>
            <strong>L&apos;assistant</strong> : le programme qui lit les
            messages entrants et y répond au nom du client, réglé avec ses
            tarifs, ses disponibilités et ses règles.
          </Item>
          <Item>
            <strong>Conversation traitée</strong> : un échange mené jusqu&apos;à
            son terme par l&apos;assistant, sans intervention humaine. Une
            conversation dans laquelle l&apos;assistant passe la main au client
            — parce qu&apos;il ne sait pas répondre, ou parce que la demande
            sort du cadre convenu — <strong>n&apos;est pas facturée</strong>.
            Les messages successifs d&apos;un même interlocuteur sur une même
            demande comptent pour une seule conversation.
          </Item>
          <Item>
            <strong>Le carnet</strong> : la fiche tenue automatiquement pour
            chaque interlocuteur, consultable et exportable par le client.
          </Item>
        </Liste>
        <p>
          <ARemplir>
            confirmer le délai au-delà duquel une nouvelle demande du même
            interlocuteur ouvre une nouvelle conversation facturable — 24 h est
            l&apos;usage
          </ARemplir>
        </p>
      </Article>

      <Article id="mise-en-place" titre="3. Mise en place et essai">
        <p>
          La mise en place est <strong>gratuite</strong>. Elle comprend
          l&apos;installation, le raccordement du numéro WhatsApp, la reprise
          des tarifs, prestations et règles du client, le réglage du ton, et la
          prise en main par son équipe. Aucun frais d&apos;installation, aucun
          abonnement, aucune durée minimale ne sont dus à ce titre.
        </p>
        <p>
          Le client dispose d&apos;une période d&apos;essai gratuite lui
          permettant d&apos;éprouver l&apos;assistant avant tout engagement.
          Durée : <ARemplir>durée et volume inclus dans l&apos;essai</ARemplir>.
          Aucun moyen de paiement n&apos;est demandé pour y accéder.
        </p>
        <p>
          La mise en service intervient dans un délai indicatif de quelques
          jours ouvrés à compter de la réception des informations nécessaires.
          Ce délai dépend de la réactivité du client et des validations opérées
          par la plateforme WhatsApp Business, sur lesquelles nous n&apos;avons
          pas la main.
        </p>
      </Article>

      <Article id="prix" titre="4. Prix et facturation">
        <p>
          Le client ne paie que l&apos;usage : un prix unitaire par conversation
          traitée, fixé au devis. Aucune conversation traitée sur la période,
          aucun montant facturé.
        </p>
        <Liste>
          <Item>
            Prix unitaire : <ARemplir>tarif retenu, en euros HT</ARemplir> par
            conversation traitée.
          </Item>
          <Item>
            Facturation mensuelle, à terme échu, sur le relevé des conversations
            de la période. Le relevé est consultable par le client.
          </Item>
          <Item>
            Les prix s&apos;entendent hors taxes. La TVA au taux en vigueur
            s&apos;y ajoute.
          </Item>
          <Item>
            Les tarifs peuvent être révisés moyennant un préavis écrit de{" "}
            <ARemplir>préavis retenu : 30 ou 60 jours</ARemplir>. Le client qui
            refuse la révision peut résilier sans frais avant son entrée en
            vigueur.
          </Item>
        </Liste>
      </Article>

      <Article id="paiement" titre="5. Paiement et retard">
        <p>
          Les factures sont payables à trente jours date de facture, par{" "}
          <ARemplir>moyens de paiement acceptés</ARemplir>.
        </p>
        <p>
          Conformément aux articles L441-10 et D441-5 du Code de commerce, tout
          retard de paiement entraîne de plein droit, sans mise en demeure
          préalable, des pénalités de retard au taux d&apos;intérêt appliqué par
          la Banque centrale européenne à son opération de refinancement la plus
          récente, majoré de dix points de pourcentage, ainsi qu&apos;une
          indemnité forfaitaire pour frais de recouvrement de 40 euros. Aucun
          escompte n&apos;est accordé pour paiement anticipé.
        </p>
        <p>
          En cas de retard supérieur à trente jours après mise en demeure restée
          sans effet, la prestation peut être suspendue jusqu&apos;à
          régularisation. Le client en est prévenu au préalable.
        </p>
      </Article>

      <Article id="duree" titre="6. Durée et résiliation">
        <p>
          Le contrat est conclu <strong>sans durée minimale et sans
          engagement</strong>. Chaque partie peut y mettre fin à tout moment,
          par simple écrit, sans préavis ni indemnité. Les conversations déjà
          traitées restent dues.
        </p>
        <p>À la fin du contrat :</p>
        <Liste>
          <Item>
            le numéro WhatsApp reste la propriété du client, qui en garde
            l&apos;usage plein et entier ;
          </Item>
          <Item>
            le carnet de clients lui est restitué dans un format exploitable,
            sur simple demande, dans les trente jours ;
          </Item>
          <Item>
            ses données sont ensuite supprimées de nos systèmes, dans les
            conditions décrites dans la{" "}
            <Link href="/confidentialite">politique de confidentialité</Link>.
          </Item>
        </Liste>
      </Article>

      <Article id="obligations" titre="7. Ce que le client s'engage à faire">
        <Liste>
          <Item>
            fournir des informations exactes et à jour — tarifs, disponibilités,
            conditions d&apos;annulation — et signaler leurs évolutions ;
          </Item>
          <Item>
            désigner un interlocuteur joignable pour les demandes que
            l&apos;assistant lui transmet ;
          </Item>
          <Item>
            respecter les règles de la plateforme WhatsApp Business, notamment
            en matière de consentement et de sollicitation ;
          </Item>
          <Item>
            ne pas utiliser l&apos;assistant pour un usage illicite, trompeur ou
            contraire aux bonnes mœurs.
          </Item>
        </Liste>
        <p>
          L&apos;assistant répond à partir des informations données par le
          client. Des informations inexactes produisent des réponses inexactes :
          leur exactitude relève de sa responsabilité.
        </p>
      </Article>

      <Article id="garanties" titre="8. Ce que nous garantissons, et ce que nous ne garantissons pas">
        <p>
          Nous nous engageons à mettre en œuvre les moyens nécessaires au bon
          fonctionnement de l&apos;assistant, à corriger les anomalies signalées
          dans un délai raisonnable et à rester joignables pendant toute la
          durée de la prestation.
        </p>
        <p>
          En revanche, l&apos;assistant repose sur un modèle de langage : ses
          réponses ne sont pas garanties exactes en toute circonstance. C&apos;est
          la raison pour laquelle il passe la main lorsqu&apos;il sort du cadre
          convenu, et pourquoi le client relit ses réponses pendant la période
          de rodage. Aucun résultat commercial — nombre de réservations, taux de
          conversion, chiffre d&apos;affaires — n&apos;est garanti.
        </p>
        <p>
          Le service dépend de la disponibilité de la plateforme WhatsApp
          Business et des services d&apos;hébergement tiers. Une interruption
          imputable à ces plateformes ne nous est pas opposable. Aucun
          engagement de niveau de service n&apos;est souscrit en dehors de{" "}
          <ARemplir>engagement de disponibilité éventuel</ARemplir>.
        </p>
      </Article>

      <Article id="responsabilite" titre="9. Responsabilité">
        <p>
          Notre responsabilité est limitée aux dommages directs et prouvés, et
          plafonnée au montant total facturé au client au cours des douze mois
          précédant le fait générateur. Sont exclus les dommages indirects,
          notamment la perte de chiffre d&apos;affaires, de clientèle ou de
          réputation.
        </p>
        <p>
          Cette limitation ne s&apos;applique ni en cas de faute lourde ou
          dolosive, ni dans les cas où la loi l&apos;interdit.
        </p>
      </Article>

      <Article id="donnees" titre="10. Données personnelles">
        <p>
          Dans le cadre de la prestation, nous agissons en qualité de
          sous-traitant du client au sens de l&apos;article 28 du RGPD. Un
          accord de sous-traitance est signé au démarrage : il précise les
          traitements réalisés, les sous-traitants ultérieurs, les mesures de
          sécurité et le sort des données en fin de contrat. Le détail figure
          dans la{" "}
          <Link href="/confidentialite">politique de confidentialité</Link>.
        </p>
      </Article>

      <Article id="propriete" titre="11. Propriété">
        <p>
          L&apos;assistant, ses réglages génériques et les outils qui le font
          fonctionner restent notre propriété. Le client en obtient un droit
          d&apos;usage personnel, non exclusif et non cessible, pour la durée du
          contrat.
        </p>
        <p>
          En revanche, <strong>les contenus du client lui appartiennent</strong>{" "}
          : ses tarifs, ses textes, ses conversations et son carnet de clients.
          Nous ne les exploitons ni pour notre compte, ni pour un autre client.
        </p>
        <p>
          Nous ne citons le nom d&apos;un client en référence commerciale
          qu&apos;avec son accord écrit préalable.
        </p>
      </Article>

      <Article id="litiges" titre="12. Droit applicable et litiges">
        <p>
          Les présentes conditions sont soumises au droit français. En cas de
          différend, les parties s&apos;efforcent de trouver une solution
          amiable. À défaut, compétence est attribuée aux tribunaux de{" "}
          <ARemplir>ressort du siège social</ARemplir>, y compris en cas de
          pluralité de défendeurs ou d&apos;appel en garantie.
        </p>
        <p>
          Pour toute question : <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </Article>
    </LegalPage>
  );
}
