import { createFileRoute } from "@tanstack/react-router";
import PhotographeLongeCotePaysBasque from "@/pages/PhotographeLongeCotePaysBasque";

export const Route = createFileRoute("/photographe-longe-cote-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photographe longe-côte Pays Basque | Groupes & clubs" },
      { name: "description", content: "Photographe longe-côte au Pays Basque : reportage photo pour clubs et groupes de marche aquatique à Anglet, Biarritz et alentours." },
      { name: "keywords", content: "photographe longe-côte pays basque, longe-côte anglet, photographe surf pays basque" },
      { property: "og:title", content: "Photographe longe-côte Pays Basque | Groupes & clubs" },
      { property: "og:description", content: "Photographe longe-côte au Pays Basque : reportage photo pour clubs et groupes de marche aquatique à Anglet, Biarritz et alentours." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/photographe-longe-cote-pays-basque" },
      { name: "twitter:title", content: "Photographe longe-côte Pays Basque | Groupes & clubs" },
      { name: "twitter:description", content: "Photographe longe-côte au Pays Basque : reportage photo pour clubs et groupes de marche aquatique à Anglet, Biarritz et alentours." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/photographe-longe-cote-pays-basque" }],
  }),
  component: PhotographeLongeCotePaysBasque,
});
