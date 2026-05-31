import { useEffect } from "react";
import { setSeo, buildLocalBusiness, buildBreadcrumbs } from "@/lib/seo";
import { UniverseHub } from "@/components/UniverseHub";
import heroImg from "@/assets/gallery/dad-and-baby.jpg";
import familleImg from "@/assets/gallery/dad-and-baby.jpg";
import bebeImg from "@/assets/gallery/pregnant-aqua.jpg";
import evjfImg from "@/assets/gallery/duo-friends.jpg";

const WHATSAPP = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20organiser%20une%20s%C3%A9ance%20famille%2C%20b%C3%A9b%C3%A9%20ou%20groupe%20au%20Pays%20Basque.";

const FamilleBebeGroupesPaysBasque = () => {
  useEffect(() => {
    setSeo({
      title: "Shooting famille, bébé & groupes au Pays Basque",
      description: "📸 Séances famille à la plage, bébé nageur et shootings de groupe au Pays Basque. Des souvenirs naturels et vivants à Anglet et Biarritz.",
      keywords: "shooting famille pays basque, bébé nageur anglet, evjf pays basque, photo groupe plage",
      path: "/famille-bebe-groupes-pays-basque",
      image: heroImg,
      jsonLd: [
        buildLocalBusiness({
          name: "PhotoSurfPaysBasque — Famille, bébé & groupes",
          description: "Photographe famille, bébé nageur et groupes au Pays Basque.",
          path: "/famille-bebe-groupes-pays-basque",
          image: heroImg,
        }),
        buildBreadcrumbs([
          { name: "Accueil", path: "/" },
          { name: "Famille, bébé & groupes", path: "/famille-bebe-groupes-pays-basque" },
        ]),
      ],
    });
  }, []);


  return (
    <UniverseHub
      eyebrow="Famille, bébé & groupes · Pays Basque"
      h1="Shooting famille, bébé et groupes au Pays Basque"
      intro="Des souvenirs naturels à la plage, dans l'océan ou en piscine. Chaque séance est pensée pour capturer des moments vivants, spontanés et sincères."
      heroImage={heroImg}
      heroAlt="Famille et enfants à la plage au Pays Basque"
      whatsapp={WHATSAPP}
      cards={[
        {
          title: "FAMILLE À LA PLAGE",
          desc: "Des photos naturelles entre jeux, éclats de rire et lumière de fin de journée.",
          image: familleImg,
          alt: "Shooting famille à la plage au Pays Basque",
          to: "/shooting-famille-bebe-eau-pays-basque",
          cta: "Découvrir les séances famille",
        },
        {
          title: "BÉBÉ NAGEUR",
          desc: "Un souvenir unique de votre bébé dans l'eau, en piscine ou dans l'océan.",
          image: bebeImg,
          alt: "Shooting bébé nageur au Pays Basque",
          to: "/shooting-bebe-nageur-pays-basque",
          cta: "Découvrir les séances bébé",
        },
        {
          title: "EVJF & GROUPES",
          desc: "Une activité originale au bord de l'océan pour garder des souvenirs vivants et spontanés.",
          image: evjfImg,
          alt: "Shooting EVJF et groupes au Pays Basque",
          to: "/shooting-evjf-pays-basque",
          cta: "Découvrir les séances de groupe",
        },
      ]}
    />
  );
};

export default FamilleBebeGroupesPaysBasque;
