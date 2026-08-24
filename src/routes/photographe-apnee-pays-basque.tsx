import { createFileRoute } from "@tanstack/react-router";
import PhotographeApneePaysBasque from "@/pages/PhotographeApneePaysBasque";

export const Route = createFileRoute("/photographe-apnee-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photographe apnée Pays Basque | Photos sous-marines" },
      { name: "description", content: "Photographe apnée au Pays Basque : images sous-marines et de surface pour apnéistes à Anglet, Biarritz et sur la côte basque." },
      { name: "keywords", content: "photographe apnée pays basque, photo apnée anglet, photographe surf pays basque" },
      { property: "og:title", content: "Photographe apnée Pays Basque | Photos sous-marines" },
      { property: "og:description", content: "Photographe apnée au Pays Basque : images sous-marines et de surface pour apnéistes à Anglet, Biarritz et sur la côte basque." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/photographe-apnee-pays-basque" },
      { name: "twitter:title", content: "Photographe apnée Pays Basque | Photos sous-marines" },
      { name: "twitter:description", content: "Photographe apnée au Pays Basque : images sous-marines et de surface pour apnéistes à Anglet, Biarritz et sur la côte basque." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/photographe-apnee-pays-basque" }],
  }),
  component: PhotographeApneePaysBasque,
});
