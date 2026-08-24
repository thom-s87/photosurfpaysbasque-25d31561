import { createFileRoute } from "@tanstack/react-router";
import PhotographeNatationPaysBasque from "@/pages/PhotographeNatationPaysBasque";

export const Route = createFileRoute("/photographe-natation-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photographe natation Pays Basque | Open water & triathlon" },
      { name: "description", content: "Shooting natation pour nageurs, triathlètes et clubs au Pays Basque : piscine, eau libre et océan à Anglet et Biarritz." },
      { name: "keywords", content: "photographe natation pays basque, open water anglet, photographe surf pays basque" },
      { property: "og:title", content: "Photographe natation Pays Basque | Open water & triathlon" },
      { property: "og:description", content: "Shooting natation pour nageurs, triathlètes et clubs au Pays Basque : piscine, eau libre et océan à Anglet et Biarritz." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/photographe-natation-pays-basque" },
      { name: "twitter:title", content: "Photographe natation Pays Basque | Open water & triathlon" },
      { name: "twitter:description", content: "Shooting natation pour nageurs, triathlètes et clubs au Pays Basque : piscine, eau libre et océan à Anglet et Biarritz." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/photographe-natation-pays-basque" }],
  }),
  component: PhotographeNatationPaysBasque,
});
