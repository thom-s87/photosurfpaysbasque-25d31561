import { createFileRoute } from "@tanstack/react-router";
import ShootingFamilleBebeEauPaysBasque from "@/pages/ShootingFamilleBebeEauPaysBasque";

export const Route = createFileRoute("/shooting-famille-bebe-eau-pays-basque")({
  head: () => ({
    meta: [
      { title: "Shooting famille & bébé à l'eau | Pays Basque" },
      { name: "description", content: "Photos de famille et bébé à l'eau au Pays Basque : souvenirs sur les plages d'Anglet et Biarritz. Shooting dès 90 €, réservation WhatsApp." },
      { name: "keywords", content: "shooting famille plage pays basque, photographe bébé eau anglet, photo famille biarritz" },
      { property: "og:title", content: "Shooting famille & bébé à l'eau | Pays Basque" },
      { property: "og:description", content: "Photos de famille et bébé à l'eau au Pays Basque : souvenirs sur les plages d'Anglet et Biarritz. Shooting dès 90 €, réservation WhatsApp." },
      { property: "og:url", content: "https://photosurfpaysbasque.fr/shooting-famille-bebe-eau-pays-basque" },
      { name: "twitter:title", content: "Shooting famille & bébé à l'eau | Pays Basque" },
      { name: "twitter:description", content: "Photos de famille et bébé à l'eau au Pays Basque : souvenirs sur les plages d'Anglet et Biarritz. Shooting dès 90 €, réservation WhatsApp." },
    ],
    links: [{ rel: "canonical", href: "https://photosurfpaysbasque.fr/shooting-famille-bebe-eau-pays-basque" }],
  }),
  component: ShootingFamilleBebeEauPaysBasque,
});
