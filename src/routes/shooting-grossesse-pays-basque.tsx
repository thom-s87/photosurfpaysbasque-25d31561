import { createFileRoute } from "@tanstack/react-router";
import ShootingGrossessePaysBasque from "@/pages/ShootingGrossessePaysBasque";

export const Route = createFileRoute("/shooting-grossesse-pays-basque")({
  head: () => ({
    meta: [
      { title: "Shooting grossesse Anglet | Photos sunset & océan" },
      { name: "description", content: "Shooting grossesse à Anglet entre plage, lumière dorée et océan. Une séance douce, naturelle et adaptée aux futures mamans." },
      { name: "keywords", content: "shooting grossesse anglet, photographe grossesse pays basque, photo grossesse plage biarritz" },
      { property: "og:title", content: "Shooting grossesse Anglet | Photos sunset & océan" },
      { property: "og:description", content: "Shooting grossesse à Anglet entre plage, lumière dorée et océan. Une séance douce, naturelle et adaptée aux futures mamans." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/shooting-grossesse-pays-basque" },
      { name: "twitter:title", content: "Shooting grossesse Anglet | Photos sunset & océan" },
      { name: "twitter:description", content: "Shooting grossesse à Anglet entre plage, lumière dorée et océan. Une séance douce, naturelle et adaptée aux futures mamans." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/shooting-grossesse-pays-basque" }],
  }),
  component: ShootingGrossessePaysBasque,
});
