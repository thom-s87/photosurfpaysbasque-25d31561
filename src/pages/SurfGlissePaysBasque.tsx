import { useEffect } from "react";
import { setSeo, buildLocalBusiness, buildBreadcrumbs } from "@/lib/seo";
import { UniverseHub } from "@/components/UniverseHub";
import heroImg from "@/assets/gallery/surf-glassy-session.jpg";
import surfImg from "@/assets/gallery/surfeur-pro-competition.jpg";
import bodyImg from "@/assets/gallery/body-surfer-yellow.jpg";
import paddleImg from "@/assets/gallery/paddle-sup-ocean.jpg";

const WHATSAPP = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%2C%20body%20surf%20ou%20paddle%20au%20Pays%20Basque.";

const SurfGlissePaysBasque = () => {
  useEffect(() => {
    setSeo({
      title: "Photos surf, body surf & paddle au Pays Basque",
      description: "Sessions photo et vidéo pour surf, body surf, bodyboard et paddle à Anglet, Biarritz et sur la côte basque.",
      keywords: "photographe surf pays basque, photographe body surf, paddle anglet, sessions photo glisse",
      path: "/surf-glisse-pays-basque",
      image: heroImg,
      jsonLd: [
        buildLocalBusiness({
          name: "PhotoSurfPaysBasque — Surf, body surf & paddle",
          description: "Photographe surf, body surf et paddle à Anglet et au Pays Basque.",
          path: "/surf-glisse-pays-basque",
          image: heroImg,
        }),
        buildBreadcrumbs([
          { name: "Accueil", path: "/" },
          { name: "Surf & glisse", path: "/surf-glisse-pays-basque" },
        ]),
      ],
    });
  }, []);


  return (
    <UniverseHub
      eyebrow="Surf & glisse · Pays Basque"
      h1="Photographe surf, body surf et paddle au Pays Basque"
      intro="Que tu sois sur une planche, dans les vagues ou sur l'eau au lever du soleil, je capture tes sessions dans leur environnement naturel. Découvre les différentes prestations disponibles à Anglet et sur les spots du Pays Basque."
      heroImage={heroImg}
      heroAlt="Sessions surf, body surf et paddle au Pays Basque"
      whatsapp={WHATSAPP}
      cards={[
        {
          title: "SURF",
          desc: "Photos et vidéos de tes sessions surf sur les spots d'Anglet et du Pays Basque.",
          image: surfImg,
          alt: "Photographe surf Anglet Pays Basque",
          to: "/photographe-surf-anglet",
          cta: "Découvrir le surf",
        },
        {
          title: "BODY SURF",
          desc: "Capture tes trajectoires, tes vagues et tes performances directement dans l'eau.",
          image: bodyImg,
          alt: "Photographe body surf au Pays Basque",
          to: "/photographe-body-surf-pays-basque",
          cta: "Découvrir le body surf",
        },
        {
          title: "PADDLE",
          desc: "Des images naturelles sur l'eau pour une session sportive ou contemplative.",
          image: paddleImg,
          alt: "Shooting paddle au Pays Basque",
          to: "/shooting-paddle-pays-basque",
          cta: "Découvrir le paddle",
        },
      ]}
    />
  );
};

export default SurfGlissePaysBasque;
