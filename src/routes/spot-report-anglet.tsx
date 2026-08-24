import { createFileRoute } from "@tanstack/react-router";
import SpotReportAnglet from "@/pages/SpotReportAnglet";

export const Route = createFileRoute("/spot-report-anglet")({
  head: () => ({
    meta: [
      { title: "Spot report Anglet | Conditions surf & photo du jour" },
      { name: "description", content: "Conditions surf à Anglet : houle, vent, marée sur le VVF et la Chambre d'Amour, et conseils pour caler ta session photo avec un photographe surf." },
      { name: "keywords", content: "photographe surf anglet, conditions surf anglet, spot report anglet" },
      { property: "og:title", content: "Spot report Anglet | Conditions surf & photo du jour" },
      { property: "og:description", content: "Conditions surf à Anglet : houle, vent, marée sur le VVF et la Chambre d'Amour, et conseils pour caler ta session photo avec un photographe surf." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/spot-report-anglet" },
      { name: "twitter:title", content: "Spot report Anglet | Conditions surf & photo du jour" },
      { name: "twitter:description", content: "Conditions surf à Anglet : houle, vent, marée sur le VVF et la Chambre d'Amour, et conseils pour caler ta session photo avec un photographe surf." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/spot-report-anglet" }],
  }),
  component: SpotReportAnglet,
});
