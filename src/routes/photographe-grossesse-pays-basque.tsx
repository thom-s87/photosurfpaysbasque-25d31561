import { createFileRoute } from "@tanstack/react-router";
import PhotographeGrossessePaysBasque from "@/pages/PhotographeGrossessePaysBasque";

export const Route = createFileRoute("/photographe-grossesse-pays-basque")({
  head: () => ({
    meta: [
      { title: "Photographe grossesse Pays Basque | Plage & océan" },
      { name: "description", content: "Séance photo grossesse au Pays Basque, à la plage ou dans l'eau, à Anglet et Biarritz. Images naturelles, douces et authentiques." },
      { name: "keywords", content: "photographe grossesse pays basque, photo grossesse anglet, séance maternité biarritz" },
      { property: "og:title", content: "Photographe grossesse Pays Basque | Plage & océan" },
      { property: "og:description", content: "Séance photo grossesse au Pays Basque, à la plage ou dans l'eau, à Anglet et Biarritz. Images naturelles, douces et authentiques." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/photographe-grossesse-pays-basque" },
      { name: "twitter:title", content: "Photographe grossesse Pays Basque | Plage & océan" },
      { name: "twitter:description", content: "Séance photo grossesse au Pays Basque, à la plage ou dans l'eau, à Anglet et Biarritz. Images naturelles, douces et authentiques." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/photographe-grossesse-pays-basque" }],
  }),
  component: PhotographeGrossessePaysBasque,
});
