import { createFileRoute } from "@tanstack/react-router";
import SpotPhotoPetiteChambreAmourAnglet from "@/pages/SpotPhotoPetiteChambreAmourAnglet";

export const Route = createFileRoute("/spot-photo-petite-chambre-amour-anglet")({
  head: () => ({
    meta: [
      { title: "Photo surf Petite Chambre d'Amour | Anglet" },
      { name: "description", content: "Spot photo de la Petite Chambre d'Amour à Anglet : conditions, meilleurs horaires et shooting surf à l'eau avec un photographe surf du Pays Basque." },
      { name: "keywords", content: "photographe surf anglet, chambre d'amour anglet, photographe surf pays basque" },
      { property: "og:title", content: "Photo surf Petite Chambre d'Amour | Anglet" },
      { property: "og:description", content: "Spot photo de la Petite Chambre d'Amour à Anglet : conditions, meilleurs horaires et shooting surf à l'eau avec un photographe surf du Pays Basque." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/spot-photo-petite-chambre-amour-anglet" },
      { name: "twitter:title", content: "Photo surf Petite Chambre d'Amour | Anglet" },
      { name: "twitter:description", content: "Spot photo de la Petite Chambre d'Amour à Anglet : conditions, meilleurs horaires et shooting surf à l'eau avec un photographe surf du Pays Basque." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/spot-photo-petite-chambre-amour-anglet" }],
  }),
  component: SpotPhotoPetiteChambreAmourAnglet,
});
