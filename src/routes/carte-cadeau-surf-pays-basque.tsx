import { createFileRoute } from "@tanstack/react-router";
import CarteCadeauSurfPaysBasque from "@/pages/CarteCadeauSurfPaysBasque";
import { giftCardDuration, giftCardPrice } from "@/lib/gift-card-policy";

const title = "Carte cadeau shooting surf Pays Basque | PhotoSurfPaysBasque";
const description = `Carte cadeau surf au Pays Basque : ${giftCardDuration} de shooting à ${giftCardPrice}, toutes les photos numériques incluses. Valable 6 mois, un report accepté. Anglet et Biarritz.`;
const url = "https://photosurfpaysbasque.fr/carte-cadeau-surf-pays-basque";

export const Route = createFileRoute("/carte-cadeau-surf-pays-basque")({
  component: CarteCadeauSurfPaysBasque,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://photosurfpaysbasque.fr/" },
          { "@type": "ListItem", position: 2, name: "Carte cadeau surf", item: url },
        ],
      }),
    }],
  }),
});