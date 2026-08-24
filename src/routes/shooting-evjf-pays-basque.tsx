import { createFileRoute } from "@tanstack/react-router";
import ShootingEVJFPaysBasque from "@/pages/ShootingEVJFPaysBasque";

export const Route = createFileRoute("/shooting-evjf-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photographe EVJF Biarritz | Shooting plage & océan" },
      { name: "description", content: "Shooting EVJF à Biarritz, Anglet et au Pays Basque : photos naturelles à la plage, ambiance fun, océan, sunset et souvenirs de groupe." },
      { name: "keywords", content: "shooting evjf pays basque, evjf biarritz, evjf anglet, photographe surf pays basque" },
      { property: "og:title", content: "Photographe EVJF Biarritz | Shooting plage & océan" },
      { property: "og:description", content: "Shooting EVJF à Biarritz, Anglet et au Pays Basque : photos naturelles à la plage, ambiance fun, océan, sunset et souvenirs de groupe." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/shooting-evjf-pays-basque" },
      { name: "twitter:title", content: "Photographe EVJF Biarritz | Shooting plage & océan" },
      { name: "twitter:description", content: "Shooting EVJF à Biarritz, Anglet et au Pays Basque : photos naturelles à la plage, ambiance fun, océan, sunset et souvenirs de groupe." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/shooting-evjf-pays-basque" }],
  }),
  component: ShootingEVJFPaysBasque,
});
