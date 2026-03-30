import { Star, ExternalLink } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { SectionCTA } from "@/components/SectionCTA";

const GOOGLE_REVIEWS_URL = "https://share.google/zXtao4SCc4KVm0ePV";

const reviews = [
  {
    name: "Camille L.",
    rating: 5,
    text: "Super expérience, photos incroyables à Anglet ! Thom a un œil de fou, on revit chaque vague.",
    date: "Mars 2026",
  },
  {
    name: "Julien R.",
    rating: 5,
    text: "Top photographe, très pro et rapide. Séance famille sur la plage des Cavaliers, résultat magnifique.",
    date: "Février 2026",
  },
  {
    name: "Marine D.",
    rating: 5,
    text: "Un shooting maternité dans l'eau absolument magique. Résultat au-delà de nos attentes. On recommande à 100%.",
    date: "Janvier 2026",
  },
];

const averageRating = 5.0;
const totalReviews = 12;

export const GoogleReviews = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="py-16 min-[375px]:py-20 md:py-28 px-5 md:px-4 bg-sand-light">
      <div ref={ref} className="container mx-auto max-w-4xl fade-in-section">
        <div className="text-center mb-10 min-[375px]:mb-14">
          <p className="text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Avis clients
          </p>
          <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl text-foreground mb-4 tracking-wide">
            ILS ONT VÉCU L'EXPÉRIENCE
          </h2>
          
          {/* Average rating */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 min-[375px]:w-6 min-[375px]:h-6 fill-golden text-golden"
                />
              ))}
            </div>
            <span className="font-display text-2xl min-[375px]:text-3xl text-foreground tracking-wider">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            {totalReviews} avis sur Google
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 md:p-8 border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-golden text-golden" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.date}</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-deep-purple hover:text-hot-pink transition-colors text-sm font-medium tracking-wider uppercase"
          >
            <ExternalLink className="w-4 h-4" />
            Voir tous les avis sur Google
          </a>
        </div>

        <SectionCTA />
      </div>
    </section>
  );
};
