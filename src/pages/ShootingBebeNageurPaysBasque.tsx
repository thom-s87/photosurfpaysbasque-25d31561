import { ServicePage } from "@/components/ServicePage";
import { allLinks } from "@/components/DiscoverAlso";
import heroImg from "@/assets/gallery/pregnant-aqua.jpg";
import g1 from "@/assets/gallery/dad-and-baby.jpg";
import g2 from "@/assets/gallery/shooting-aquatique-maternite.jpg";
import g3 from "@/assets/gallery/natation-split-underwater.jpg";
import g4 from "@/assets/gallery/photo-aquatique-artistique.jpg";
import g5 from "@/assets/gallery/nageur-action-eau.jpg";
import g6 from "@/assets/gallery/natation-entrainement.jpg";

const WHATSAPP = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20organiser%20une%20s%C3%A9ance%20photo%20b%C3%A9b%C3%A9%20nageur.%20Pouvez-vous%20me%20renseigner%20sur%20les%20disponibilit%C3%A9s%20%3F";

const ShootingBebeNageurPaysBasque = () => (
  <ServicePage
    seo={{
      title: "Shooting bébé nageur Pays Basque | Photos dans l'eau",
      description: "Séance photo bébé nageur au Pays Basque, en piscine ou dans l'eau, pour des souvenirs doux, naturels et sécurisés.",
      keywords: "shooting bébé nageur pays basque, photo bébé piscine anglet, photographe bébé eau biarritz",
      path: "/shooting-bebe-nageur-pays-basque",
    }}
    eyebrow="Bébé nageur · Pays Basque"
    h1="Shooting bébé nageur au Pays Basque"
    intro="Un souvenir unique de votre bébé dans l'eau, en piscine ou dans l'océan, dans un cadre rassurant et bienveillant. Des images douces, naturelles et pleines d'émotion."
    heroImage={heroImg}
    heroAlt="Shooting bébé nageur en piscine au Pays Basque"
    whatsapp={WHATSAPP}
    galleryImages={[
      { src: g1, alt: "Papa et bébé dans l'eau" },
      { src: g2, alt: "Séance aquatique douce" },
      { src: g3, alt: "Vue split-underwater" },
      { src: g4, alt: "Photo aquatique artistique" },
      { src: g5, alt: "Nageur en action" },
      { src: g6, alt: "Entraînement natation enfant" },
    ]}
    process={[
      { title: "On en parle", desc: "Tu m'expliques l'âge de bébé, le lieu (piscine privée, océan, bassin bébé nageur) et tes envies." },
      { title: "Séance courte et douce", desc: "30 à 45 min, au rythme de bébé, avec un parent dans l'eau pour le rassurer." },
      { title: "Galerie privée", desc: "Tu reçois la galerie quelques jours plus tard, prête à imprimer ou à partager." },
    ]}
    pricing={
      <>
        Session dès <strong>45€</strong>. Packs photos et tirages premium disponibles (voir page d'accueil).
      </>
    }
    discoverLinks={[allLinks.famille, allLinks.grossesse, allLinks.hubFamille]}
    hubHref="/famille-bebe-groupes-pays-basque"
    hubLabel="Retour à l'univers Famille, bébé & groupes"
    breadcrumb={[
      { name: "Accueil", path: "/" },
      { name: "Famille, bébé & groupes", path: "/famille-bebe-groupes-pays-basque" },
      { name: "Bébé nageur", path: "/shooting-bebe-nageur-pays-basque" },
    ]}
    faqItems={[
      { question: "À partir de quel âge peut-on faire une séance bébé nageur ?", answer: "Dès que bébé est à l'aise dans l'eau, souvent à partir de 4-6 mois. On adapte toujours la séance à son rythme." },
      { question: "Où se déroule la séance ?", answer: "En piscine privée, en bassin bébé nageur ou dans l'océan selon la saison et le confort de bébé. On choisit ensemble." },
      { question: "Combien de temps dure une séance ?", answer: "30 à 45 minutes, c'est l'idéal pour respecter la fatigue de bébé tout en capturant de vraies émotions." },
      { question: "Un parent doit-il être dans l'eau ?", answer: "Oui, toujours. La présence d'un parent rassure bébé et permet des photos pleines de complicité." },
    ]}
  />
);

export default ShootingBebeNageurPaysBasque;
