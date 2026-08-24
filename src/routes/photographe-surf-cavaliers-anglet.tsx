import { createFileRoute } from "@tanstack/react-router";
import PhotographeSurfCavaliersAnglet from "@/pages/PhotographeSurfCavaliersAnglet";

export const Route = createFileRoute("/photographe-surf-cavaliers-anglet")({
  head: () => ({
    meta: [
      { title: "Photographe surf Cavaliers Anglet | Photos à l'eau" },
      { name: "description", content: "Photographe surf aux Cavaliers à Anglet : shooting à l'eau sur ce beach break puissant. Réservation rapide par WhatsApp, photos en haute résolution." },
      { name: "keywords", content: "photographe surf anglet, cavaliers anglet surf, photographe surf pays basque" },
      { property: "og:title", content: "Photographe surf Cavaliers Anglet | Photos à l'eau" },
      { property: "og:description", content: "Photographe surf aux Cavaliers à Anglet : shooting à l'eau sur ce beach break puissant. Réservation rapide par WhatsApp, photos en haute résolution." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/photographe-surf-cavaliers-anglet" },
      { name: "twitter:title", content: "Photographe surf Cavaliers Anglet | Photos à l'eau" },
      { name: "twitter:description", content: "Photographe surf aux Cavaliers à Anglet : shooting à l'eau sur ce beach break puissant. Réservation rapide par WhatsApp, photos en haute résolution." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/photographe-surf-cavaliers-anglet" }],
  }),
  component: PhotographeSurfCavaliersAnglet,
});
