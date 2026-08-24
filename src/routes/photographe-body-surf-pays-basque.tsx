import { createFileRoute } from "@tanstack/react-router";
import PhotographeBodySurfPaysBasque from "@/pages/PhotographeBodySurfPaysBasque";

export const Route = createFileRoute("/photographe-body-surf-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photographe bodysurf Pays Basque | Photos à l'eau" },
      { name: "description", content: "Spécialiste de la photo bodysurf au Pays Basque : tes vagues sans planche immortalisées à Anglet et Biarritz. Sessions dès 45 €." },
      { name: "keywords", content: "photographe surf pays basque, photo bodysurf anglet, bodysurf biarritz" },
      { property: "og:title", content: "Photographe bodysurf Pays Basque | Photos à l'eau" },
      { property: "og:description", content: "Spécialiste de la photo bodysurf au Pays Basque : tes vagues sans planche immortalisées à Anglet et Biarritz. Sessions dès 45 €." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/photographe-body-surf-pays-basque" },
      { name: "twitter:title", content: "Photographe bodysurf Pays Basque | Photos à l'eau" },
      { name: "twitter:description", content: "Spécialiste de la photo bodysurf au Pays Basque : tes vagues sans planche immortalisées à Anglet et Biarritz. Sessions dès 45 €." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/photographe-body-surf-pays-basque" }],
  }),
  component: PhotographeBodySurfPaysBasque,
});
