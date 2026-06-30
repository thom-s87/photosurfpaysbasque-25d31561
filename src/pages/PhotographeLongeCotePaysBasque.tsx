import { ServicePage } from "@/components/ServicePage";
import { allLinks } from "@/components/DiscoverAlso";
import heroImg from "@/assets/gallery/longe-cote-ocean.jpg";
import g1 from "@/assets/gallery/longe-cote-couple.jpg";
import g2 from "@/assets/gallery/longe-cote-solo.jpg";
import g3 from "@/assets/gallery/longe-cote-vue-large.jpg";
import g4 from "@/assets/gallery/longe-cote-dos.jpg";
import g5 from "@/assets/gallery/longe-cote-detail.jpg";

const WHATSAPP = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20organiser%20une%20s%C3%A9ance%20photo%20longe-c%C3%B4te%20au%20Pays%20Basque.";

const PhotographeLongeCotePaysBasque = () => (
  <ServicePage
    seo={{
      title: "Photographe longe-côte Pays Basque | Clubs & groupes",
      description: "Photos et vidéos de longe-côte au Pays Basque pour clubs, groupes et événements. Images naturelles dans l'océan.",
      keywords: "photographe longe-côte pays basque, longe côte anglet, longe côte biarritz photo",
      path: "/photographe-longe-cote-pays-basque",
    }}
    eyebrow="Longe-côte · Pays Basque"
    h1="Photographe longe-côte au Pays Basque"
    intro="Pour les pratiquants, les groupes ou les clubs : des images vivantes prises directement dans l'eau, qui capturent l'ambiance, l'effort et la convivialité du longe-côte sur la côte basque."
    heroImage={heroImg}
    heroAlt="Photographe longe-côte au Pays Basque dans l'océan"
    whatsapp={WHATSAPP}
    galleryImages={[
      { src: g1, alt: "Couple pratiquant le longe-côte sur la côte basque" },
      { src: g2, alt: "Pratiquante solo de longe-côte dans l'océan" },
      { src: g3, alt: "Groupe de longe-côte vue large sur le littoral basque" },
      { src: g4, alt: "Pratiquants de longe-côte de dos au coucher du soleil" },
      { src: g5, alt: "Détail des jambes et de la pagaie en longe-côte" },
    ]}
    process={[
      { title: "Brief club ou groupe", desc: "On définit ensemble le nombre de participants, le spot et les objectifs (réseaux, presse, souvenirs)." },
      { title: "Séance dans l'eau", desc: "Je shoote directement dans l'eau, au cœur du groupe, pour des images authentiques." },
      { title: "Livraison rapide", desc: "Galerie privée sous quelques jours, droits adaptés à votre usage (club, asso, perso)." },
    ]}
    pricing={
      <>
        Tarifs adaptés au format (séance solo, groupe ou club). Demande un devis sur WhatsApp.
      </>
    }
    discoverLinks={[allLinks.natation, allLinks.apnee, allLinks.hubSports]}
    hubHref="/sports-aquatiques-pays-basque"
    hubLabel="Retour à l'univers Sports aquatiques"
    breadcrumb={[
      { name: "Accueil", path: "/" },
      { name: "Sports aquatiques", path: "/sports-aquatiques-pays-basque" },
      { name: "Longe-côte", path: "/photographe-longe-cote-pays-basque" },
    ]}
    faqItems={[
      { question: "Travaillez-vous avec des clubs de longe-côte ?", answer: "Oui, je collabore régulièrement avec des clubs et associations du Pays Basque pour leurs sessions, événements et communication." },
      { question: "Où se déroulent les séances ?", answer: "Sur les plages d'Anglet, Biarritz, Bidart et tout le littoral basque, selon les conditions de mer et le souhait du groupe." },
      { question: "Les photos sont-elles utilisables sur les réseaux du club ?", answer: "Oui, les droits d'usage sont adaptés à ton besoin (perso, club, asso, presse). On en parle au brief." },
      { question: "Comment réserver ?", answer: "Par WhatsApp, en précisant la date, le nombre de pratiquants et le spot souhaité. Je reviens vers toi en moins d'une heure." },
    ]}
  />
);

export default PhotographeLongeCotePaysBasque;
