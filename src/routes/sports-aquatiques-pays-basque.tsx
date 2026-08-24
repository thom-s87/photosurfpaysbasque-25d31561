import { createFileRoute } from "@tanstack/react-router";
import SportsAquatiquesPaysBasque from "@/pages/SportsAquatiquesPaysBasque";

export const Route = createFileRoute("/sports-aquatiques-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photographe sports aquatiques Pays Basque | Anglet" },
      { name: "description", content: "Photos et vidéos pour clubs, athlètes et passionnés : natation, apnée, longe-côte et paddle à Anglet, Biarritz et sur la côte basque." },
      { name: "keywords", content: "photographe sports aquatiques pays basque, photographe natation anglet, photographe surf pays basque" },
      { property: "og:title", content: "Photographe sports aquatiques Pays Basque | Anglet" },
      { property: "og:description", content: "Photos et vidéos pour clubs, athlètes et passionnés : natation, apnée, longe-côte et paddle à Anglet, Biarritz et sur la côte basque." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/sports-aquatiques-pays-basque" },
      { name: "twitter:title", content: "Photographe sports aquatiques Pays Basque | Anglet" },
      { name: "twitter:description", content: "Photos et vidéos pour clubs, athlètes et passionnés : natation, apnée, longe-côte et paddle à Anglet, Biarritz et sur la côte basque." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/sports-aquatiques-pays-basque" }],
  }),
  component: SportsAquatiquesPaysBasque,
});
