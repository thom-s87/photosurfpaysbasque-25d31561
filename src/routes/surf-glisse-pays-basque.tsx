import { createFileRoute } from "@tanstack/react-router";
import SurfGlissePaysBasque from "@/pages/SurfGlissePaysBasque";

export const Route = createFileRoute("/surf-glisse-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photos surf, bodysurf & paddle au Pays Basque" },
      { name: "description", content: "Sessions photo et vidéo surf, bodysurf, bodyboard et paddle à Anglet, Biarritz et sur toute la côte basque, par un photographe surf Pays Basque." },
      { name: "keywords", content: "photographe surf pays basque, photographe surf biarritz, photo bodysurf anglet" },
      { property: "og:title", content: "Photos surf, bodysurf & paddle au Pays Basque" },
      { property: "og:description", content: "Sessions photo et vidéo surf, bodysurf, bodyboard et paddle à Anglet, Biarritz et sur toute la côte basque, par un photographe surf Pays Basque." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/surf-glisse-pays-basque" },
      { name: "twitter:title", content: "Photos surf, bodysurf & paddle au Pays Basque" },
      { name: "twitter:description", content: "Sessions photo et vidéo surf, bodysurf, bodyboard et paddle à Anglet, Biarritz et sur toute la côte basque, par un photographe surf Pays Basque." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/surf-glisse-pays-basque" }],
  }),
  component: SurfGlissePaysBasque,
});
