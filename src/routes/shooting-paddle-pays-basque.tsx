import { createFileRoute } from "@tanstack/react-router";
import ShootingPaddlePaysBasque from "@/pages/ShootingPaddlePaysBasque";

export const Route = createFileRoute("/shooting-paddle-pays-basque")({
  head: () => ({
    meta: [
      { title: "Shooting paddle & SUP Pays Basque | Anglet, Biarritz" },
      { name: "description", content: "Séance photo paddle et SUP au Pays Basque : lumière du matin, océan et côte basque. Shooting à Anglet, Biarritz et Hossegor, réservation WhatsApp." },
      { name: "keywords", content: "shooting paddle pays basque, paddle anglet, photographe surf pays basque" },
      { property: "og:title", content: "Shooting paddle & SUP Pays Basque | Anglet, Biarritz" },
      { property: "og:description", content: "Séance photo paddle et SUP au Pays Basque : lumière du matin, océan et côte basque. Shooting à Anglet, Biarritz et Hossegor, réservation WhatsApp." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/shooting-paddle-pays-basque" },
      { name: "twitter:title", content: "Shooting paddle & SUP Pays Basque | Anglet, Biarritz" },
      { name: "twitter:description", content: "Séance photo paddle et SUP au Pays Basque : lumière du matin, océan et côte basque. Shooting à Anglet, Biarritz et Hossegor, réservation WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/shooting-paddle-pays-basque" }],
  }),
  component: ShootingPaddlePaysBasque,
});
