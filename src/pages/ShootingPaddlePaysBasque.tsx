import { ServicePage } from "@/components/ServicePage";
import { allLinks } from "@/components/DiscoverAlso";
import heroImg from "@/assets/gallery/paddle-hero.jpg";
import g1 from "@/assets/gallery/paddle-silhouette.jpg";
import g2 from "@/assets/gallery/paddle-femme-assise.jpg";
import g3 from "@/assets/gallery/paddle-aerien.jpg";
import g4 from "@/assets/gallery/paddle-couple.jpg";
import g5 from "@/assets/gallery/paddle-detail-pieds.jpg";

const WHATSAPP = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20organiser%20une%20s%C3%A9ance%20photo%20paddle%20au%20Pays%20Basque.%20Pouvez-vous%20me%20renseigner%20sur%20les%20disponibilit%C3%A9s%20%3F";

const ShootingPaddlePaysBasque = () => (
  <ServicePage
    seo={{
      title: "Shooting paddle au Pays Basque | Photo sur l'eau",
      description: "📸 Séance photo paddle au Pays Basque. Images naturelles sur l'eau, lever ou coucher de soleil à Anglet et Biarritz. Réservation WhatsApp.",
      keywords: "shooting paddle pays basque, photographe paddle anglet, stand up paddle biarritz",
      path: "/shooting-paddle-pays-basque",
    }}
    eyebrow="Paddle · Pays Basque"
    h1="Shooting paddle au Pays Basque"
    intro="Une séance photo sur l'eau, en stand up paddle, dans la lumière douce du matin ou du coucher de soleil. Sportif ou contemplatif, le paddle se prête à des images simples, naturelles et puissantes."
    heroImage={heroImg}
    heroAlt="Shooting paddle au lever du soleil au Pays Basque"
    whatsapp={WHATSAPP}
    galleryImages={[
      { src: g1, alt: "Silhouette d'un paddleur au coucher de soleil au Pays Basque" },
      { src: g2, alt: "Paddle assise sur eau turquoise" },
      { src: g3, alt: "Paddle vue aérienne sur eau cristalline" },
      { src: g4, alt: "Couple en paddle au lever du soleil" },
      { src: g5, alt: "Détail des pieds sur un paddle dans l'eau claire" },
    ]}
    process={[
      { title: "On échange par WhatsApp", desc: "Tu me dis tes envies, on choisit le spot et le créneau (idéalement matin ou golden hour)." },
      { title: "Séance sur l'eau", desc: "1h environ, en paddle, je shoote depuis l'eau ou la plage selon les conditions." },
      { title: "Galerie privée", desc: "Tu reçois ta galerie sous quelques jours et tu choisis tes photos préférées." },
    ]}
    pricing={
      <>
        Session photo dès <strong>45€</strong> (1h sur l'eau). Tarifs packs photos détaillés sur la page d'accueil.
      </>
    }
    discoverLinks={[allLinks.surf, allLinks.bodysurf, allLinks.hubSurf]}
    hubHref="/surf-glisse-pays-basque"
    hubLabel="Retour à l'univers Surf & glisse"
    breadcrumb={[
      { name: "Accueil", path: "/" },
      { name: "Surf & glisse", path: "/surf-glisse-pays-basque" },
      { name: "Paddle", path: "/shooting-paddle-pays-basque" },
    ]}
    faqItems={[
      { question: "Où se déroule la séance paddle ?", answer: "Sur les plans d'eau calmes du Pays Basque : plages d'Anglet protégées, lac d'Hossegor ou spots glassy au lever du soleil selon les conditions." },
      { question: "Faut-il avoir son propre paddle ?", answer: "Idéalement oui. Si besoin, je peux te conseiller des loueurs sur Anglet et Biarritz pour récupérer une planche à proximité du spot." },
      { question: "Combien de temps dure la session ?", answer: "Environ 1h sur l'eau, le temps de profiter de la lumière douce du matin ou du coucher de soleil." },
      { question: "Comment réserver ?", answer: "Un message WhatsApp suffit : on cale ensemble la date, le spot et le créneau selon la météo." },
    ]}
  />
);

export default ShootingPaddlePaysBasque;
