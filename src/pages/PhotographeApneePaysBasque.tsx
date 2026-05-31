import { ServicePage } from "@/components/ServicePage";
import { allLinks } from "@/components/DiscoverAlso";
import heroImg from "@/assets/gallery/surf-immersif-eau.jpg";
import g1 from "@/assets/gallery/photo-aquatique-artistique.jpg";
import g2 from "@/assets/gallery/natation-split-underwater.jpg";
import g3 from "@/assets/gallery/nageur-action-eau.jpg";
import g4 from "@/assets/gallery/surf-glassy-session.jpg";
import g5 from "@/assets/gallery/surf-coucher-soleil.jpg";
import g6 from "@/assets/gallery/natation-entrainement.jpg";

const WHATSAPP = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20organiser%20un%20shooting%20apn%C3%A9e%20au%20Pays%20Basque.";

const PhotographeApneePaysBasque = () => (
  <ServicePage
    seo={{
      title: "Photographe apnée au Pays Basque | Shooting aquatique",
      description: "📸 Photographe apnée au Pays Basque. Images immersives capturant la maîtrise, le mouvement et la sensation de profondeur. Réservation WhatsApp.",
      keywords: "photographe apnée pays basque, shooting apnée anglet, photo apnée biarritz",
      path: "/photographe-apnee-pays-basque",
    }}
    eyebrow="Apnée · Pays Basque"
    h1="Photographe apnée au Pays Basque"
    intro="Des images immersives pour capter la maîtrise du souffle, la fluidité des mouvements et la sensation de profondeur. Une approche calme et précise, au plus près du pratiquant."
    heroImage={heroImg}
    heroAlt="Photographe apnée au Pays Basque shooting aquatique"
    whatsapp={WHATSAPP}
    galleryImages={[
      { src: g1, alt: "Photo aquatique artistique apnée" },
      { src: g2, alt: "Vue split sous l'eau" },
      { src: g3, alt: "Nageur en immersion" },
      { src: g4, alt: "Eau glassy au Pays Basque" },
      { src: g5, alt: "Apnée au coucher de soleil" },
      { src: g6, alt: "Entraînement aquatique" },
    ]}
    process={[
      { title: "Brief technique", desc: "On échange sur ton niveau, le lieu (piscine profonde, océan) et la mise en scène souhaitée." },
      { title: "Séance immersive", desc: "Je shoote en apnée, au plus proche, pour des images calmes et puissantes." },
      { title: "Galerie privée", desc: "Sélection livrée sous quelques jours, prête pour ton portfolio ou tes réseaux." },
    ]}
    pricing={
      <>
        Tarifs sur devis selon le lieu et la durée. Demande sur WhatsApp.
      </>
    }
    discoverLinks={[allLinks.natation, allLinks.longecote, allLinks.hubSports]}
    hubHref="/sports-aquatiques-pays-basque"
    hubLabel="Retour à l'univers Sports aquatiques"
    breadcrumb={[
      { name: "Accueil", path: "/" },
      { name: "Sports aquatiques", path: "/sports-aquatiques-pays-basque" },
      { name: "Apnée", path: "/photographe-apnee-pays-basque" },
    ]}
    faqItems={[
      { question: "Où se déroule la séance apnée ?", answer: "En piscine profonde, en fosse ou dans l'océan selon ton niveau et la mise en scène souhaitée. Les spots du Pays Basque s'y prêtent bien en eaux calmes." },
      { question: "Quel niveau faut-il avoir ?", answer: "La séance s'adapte à ton niveau, du pratiquant régulier à l'apnéiste confirmé. L'important est ton confort dans l'eau." },
      { question: "Quels usages pour les photos ?", answer: "Portfolio personnel, réseaux, presse spécialisée ou communication de club : on définit les droits ensemble." },
      { question: "Comment réserver ?", answer: "Sur WhatsApp, en me décrivant ton projet et tes contraintes de planning. Devis personnalisé sous 24h." },
    ]}
  />
);

export default PhotographeApneePaysBasque;
