import { ServicePage } from "@/components/ServicePage";
import { allLinks } from "@/components/DiscoverAlso";
import heroImg from "@/assets/gallery/nageur-action-eau.jpg";
import g1 from "@/assets/gallery/natation-entrainement.jpg";
import g2 from "@/assets/gallery/natation-split-underwater.jpg";
import g3 from "@/assets/gallery/surf-immersif-eau.jpg";
import g4 from "@/assets/gallery/photo-aquatique-artistique.jpg";
import g5 from "@/assets/gallery/surf-coucher-soleil.jpg";
import g6 from "@/assets/gallery/surf-glassy-session.jpg";

const WHATSAPP = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20organiser%20une%20s%C3%A9ance%20photo%20longe-c%C3%B4te%20au%20Pays%20Basque.";

const PhotographeLongeCotePaysBasque = () => (
  <ServicePage
    seo={{
      title: "Photographe longe-côte au Pays Basque | Photos dans l'océan",
      description: "📸 Photographe longe-côte au Pays Basque. Images dynamiques dans l'eau pour pratiquants, groupes et clubs à Anglet et Biarritz.",
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
      { src: g1, alt: "Pratiquants longe-côte à l'entraînement" },
      { src: g2, alt: "Vue split sous l'eau" },
      { src: g3, alt: "Photo immersive dans l'océan" },
      { src: g4, alt: "Photo aquatique artistique" },
      { src: g5, alt: "Longe-côte au coucher de soleil" },
      { src: g6, alt: "Session glassy au Pays Basque" },
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
