import { createFileRoute } from "@tanstack/react-router";
import ShootingBebeNageurPaysBasque from "@/pages/ShootingBebeNageurPaysBasque";

export const Route = createFileRoute("/shooting-bebe-nageur-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photographe bébé nageur Pays Basque | Anglet & Biarritz" },
      { name: "description", content: "Séance photo bébé nageur au Pays Basque : premiers instants dans l'eau, images douces et naturelles à Anglet et Biarritz." },
      { name: "keywords", content: "bébé nageur anglet, photographe bébé nageur pays basque, photo piscine biarritz" },
      { property: "og:title", content: "Photographe bébé nageur Pays Basque | Anglet & Biarritz" },
      { property: "og:description", content: "Séance photo bébé nageur au Pays Basque : premiers instants dans l'eau, images douces et naturelles à Anglet et Biarritz." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/shooting-bebe-nageur-pays-basque" },
      { name: "twitter:title", content: "Photographe bébé nageur Pays Basque | Anglet & Biarritz" },
      { name: "twitter:description", content: "Séance photo bébé nageur au Pays Basque : premiers instants dans l'eau, images douces et naturelles à Anglet et Biarritz." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/shooting-bebe-nageur-pays-basque" }],
  }),
  component: ShootingBebeNageurPaysBasque,
});
