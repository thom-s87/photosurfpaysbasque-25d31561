import { useEffect } from "react";
import { setSeo, buildLocalBusiness, buildBreadcrumbs } from "@/lib/seo";
import { UniverseHub } from "@/components/UniverseHub";
import heroImg from "@/assets/gallery/natation-split-underwater.jpg";
import natationImg from "@/assets/gallery/natation-entrainement.jpg";
import longeImg from "@/assets/gallery/nageur-action-eau.jpg";
import apneeImg from "@/assets/gallery/surf-immersif-eau.jpg";

const WHATSAPP = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20s%C3%A9ance%20photo%20sports%20aquatiques%20au%20Pays%20Basque.";

const SportsAquatiquesPaysBasque = () => {
  useEffect(() => {
    setSeo({
      title: "Photographe de sports aquatiques au Pays Basque",
      description: "📸 Natation, longe-côte et apnée au Pays Basque. Photographe spécialisé sports aquatiques pour clubs, athlètes et passionnés à Anglet et Biarritz.",
      keywords: "photographe natation pays basque, photographe longe-côte, photographe apnée anglet, sports aquatiques",
      path: "/sports-aquatiques-pays-basque",
      image: heroImg,
      jsonLd: [
        buildLocalBusiness({
          name: "PhotoSurfPaysBasque — Sports aquatiques",
          description: "Photographe natation, longe-côte et apnée au Pays Basque.",
          path: "/sports-aquatiques-pays-basque",
          image: heroImg,
        }),
        buildBreadcrumbs([
          { name: "Accueil", path: "/" },
          { name: "Sports aquatiques", path: "/sports-aquatiques-pays-basque" },
        ]),
      ],
    });
  }, []);


  return (
    <UniverseHub
      eyebrow="Sports aquatiques · Pays Basque"
      h1="Photographe de sports aquatiques au Pays Basque"
      intro="Je photographie les athlètes, les clubs et les passionnés directement dans leur environnement. Natation, longe-côte, apnée ou suivi sportif : chaque séance est adaptée à la discipline et aux objectifs recherchés."
      heroImage={heroImg}
      heroAlt="Photographe sports aquatiques au Pays Basque"
      whatsapp={WHATSAPP}
      cards={[
        {
          title: "NATATION",
          desc: "Photos en piscine ou en extérieur pour les nageurs, les clubs et les coachs.",
          image: natationImg,
          alt: "Photographe natation au Pays Basque",
          to: "/photographe-natation-pays-basque",
          cta: "Découvrir la natation",
        },
        {
          title: "LONGE-CÔTE",
          desc: "Des images dynamiques dans l'eau pour les pratiquants, les groupes et les clubs.",
          image: longeImg,
          alt: "Photographe longe-côte au Pays Basque",
          to: "/photographe-longe-cote-pays-basque",
          cta: "Découvrir le longe-côte",
        },
        {
          title: "APNÉE",
          desc: "Des images immersives dans l'eau pour capturer la maîtrise, le mouvement et la sensation de profondeur.",
          image: apneeImg,
          alt: "Photographe apnée au Pays Basque",
          to: "/photographe-apnee-pays-basque",
          cta: "Découvrir l'apnée",
        },
      ]}
    />
  );
};

export default SportsAquatiquesPaysBasque;
