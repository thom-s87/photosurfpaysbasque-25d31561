import { createFileRoute } from "@tanstack/react-router";
import FamilleBebeGroupesPaysBasque from "@/pages/FamilleBebeGroupesPaysBasque";

export const Route = createFileRoute("/famille-bebe-groupes-pays-basque")({
  head: () => ({
    meta: [
      { title: "Shooting famille, bébé & groupes au Pays Basque" },
      { name: "description", content: "Séances famille à la plage, bébé nageur et shootings de groupe au Pays Basque. Des souvenirs naturels et vivants à Anglet et Biarritz." },
      { name: "keywords", content: "shooting famille pays basque, bébé nageur anglet, photographe surf pays basque" },
      { property: "og:title", content: "Shooting famille, bébé & groupes au Pays Basque" },
      { property: "og:description", content: "Séances famille à la plage, bébé nageur et shootings de groupe au Pays Basque. Des souvenirs naturels et vivants à Anglet et Biarritz." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/famille-bebe-groupes-pays-basque" },
      { name: "twitter:title", content: "Shooting famille, bébé & groupes au Pays Basque" },
      { name: "twitter:description", content: "Séances famille à la plage, bébé nageur et shootings de groupe au Pays Basque. Des souvenirs naturels et vivants à Anglet et Biarritz." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/famille-bebe-groupes-pays-basque" }],
  }),
  component: FamilleBebeGroupesPaysBasque,
});
