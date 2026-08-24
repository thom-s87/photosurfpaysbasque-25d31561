import { createFileRoute } from "@tanstack/react-router";
import PhotographeSurfAnglet from "@/pages/PhotographeSurfAnglet";

export const Route = createFileRoute("/photographe-surf-anglet")({
  head: () => ({
    meta: [
      { title: "Photographe surf Anglet | Shooting photo dans l'eau" },
      { name: "description", content: "Photographe surf à Anglet : shooting dans l'eau au VVF, Cavaliers, Sables d'Or et La Barre. Sessions dès 45 €, photos livrées en 48 h." },
      { name: "keywords", content: "photographe surf anglet, photo surf anglet, photographe surf pays basque" },
      { property: "og:title", content: "Photographe surf Anglet | Shooting photo dans l'eau" },
      { property: "og:description", content: "Photographe surf à Anglet : shooting dans l'eau au VVF, Cavaliers, Sables d'Or et La Barre. Sessions dès 45 €, photos livrées en 48 h." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/photographe-surf-anglet" },
      { name: "twitter:title", content: "Photographe surf Anglet | Shooting photo dans l'eau" },
      { name: "twitter:description", content: "Photographe surf à Anglet : shooting dans l'eau au VVF, Cavaliers, Sables d'Or et La Barre. Sessions dès 45 €, photos livrées en 48 h." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/photographe-surf-anglet" }],
  }),
  component: PhotographeSurfAnglet,
});
