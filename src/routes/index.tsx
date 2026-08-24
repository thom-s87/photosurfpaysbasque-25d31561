import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Photographe surf Anglet & Biarritz | Pays Basque" },
      { name: "description", content: "Photographe surf Pays Basque : sessions photo dans l'eau à Anglet et Biarritz dès 45 €. Surf, famille, grossesse et sports aquatiques. Réservation WhatsApp." },
      { name: "keywords", content: "photographe surf anglet, photographe surf biarritz, photographe surf pays basque, photo surf anglet" },
      { property: "og:title", content: "Photographe surf Anglet & Biarritz | Pays Basque" },
      { property: "og:description", content: "Photographe surf Pays Basque : sessions photo dans l'eau à Anglet et Biarritz dès 45 €. Surf, famille, grossesse et sports aquatiques. Réservation WhatsApp." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/" },
      { name: "twitter:title", content: "Photographe surf Anglet & Biarritz | Pays Basque" },
      { name: "twitter:description", content: "Photographe surf Pays Basque : sessions photo dans l'eau à Anglet et Biarritz dès 45 €. Surf, famille, grossesse et sports aquatiques. Réservation WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/" }],
  }),
  component: Index,
});
