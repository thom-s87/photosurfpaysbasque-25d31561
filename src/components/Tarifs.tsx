import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const WHATSAPP_URL = "https://wa.me/33695349187";

const packs = [
  {
    name: "Pack Découverte",
    photos: "5 photos",
    price: "45€",
    highlight: false,
    badge: null,
  },
  {
    name: "Pack Session",
    photos: "10 photos",
    price: "80€",
    highlight: true,
    badge: "Le plus choisi",
  },
  {
    name: "Pack Premium",
    photos: "25 photos",
    price: "150€",
    highlight: false,
    badge: "Meilleur rapport",
  },
];

const seanceInclus = [
  "Prise de vue pendant la session",
  "Captation dans l'eau ou en extérieur",
  "Sélection des meilleures images",
  "Mise en ligne dans une galerie privée",
  "Photos HD haute résolution",
];

export const Tarifs = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="tarifs" className="py-16 min-[375px]:py-20 md:py-32 px-5 md:px-4 bg-gradient-night relative overflow-hidden retro-grain">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hot-pink/5 blur-3xl" />

      <div ref={ref} className="container mx-auto max-w-4xl relative z-10 fade-in-section">
        <p className="text-gradient-sunset font-medium tracking-[0.3em] uppercase text-xs mb-6 text-center inline-block w-full">📸 Nos formules</p>

        {/* Séance photo */}
        <div className="bg-night/60 backdrop-blur-sm rounded-lg p-6 min-[375px]:p-8 md:p-10 border border-electric-violet/20 mb-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2 tracking-wider">
            Séance photo
          </h2>
          <p className="font-display text-6xl min-[375px]:text-7xl text-primary-foreground mb-2">45€</p>
          <p className="text-primary-foreground/50 text-lg mb-6 tracking-widest uppercase">/ heure</p>
          <ul className="space-y-3 text-left max-w-sm mx-auto">
            {seanceInclus.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-primary-foreground">
                <Check className="w-5 h-5 text-golden flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Packs photos */}
        <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6 text-center tracking-wider">
          Choisis ton pack photos
        </h3>
        <div className="grid grid-cols-1 min-[375px]:grid-cols-3 gap-3 min-[375px]:gap-3 md:gap-4 mb-8">
          {packs.map((pack, i) => (
            <div
              key={i}
              className={`bg-night/60 backdrop-blur-sm rounded-lg p-5 min-[375px]:p-6 md:p-8 border text-center relative ${
                pack.highlight ? "border-golden/50 ring-1 ring-golden/20" : "border-electric-violet/20"
              }`}
            >
              {pack.badge && (
                <span className="inline-flex items-center gap-1 text-golden text-xs font-medium tracking-widest uppercase mb-3">
                  <Star className="w-3 h-3 fill-golden" /> {pack.badge}
                </span>
              )}
              <h4 className="font-display text-xl text-primary-foreground mb-2 tracking-wider">{pack.name}</h4>
              <p className="font-display text-5xl text-primary-foreground mb-1">{pack.price}</p>
              <p className="text-primary-foreground/60 text-sm">{pack.photos}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-primary-foreground/60 italic mb-8">Tu choisis uniquement les photos que tu aimes. Pas d'engagement.</p>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-sunset text-foreground px-8 min-[375px]:px-12 py-6 min-[375px]:py-7 text-base min-[375px]:text-lg font-semibold rounded-full shadow-2xl w-full sm:w-auto hover:opacity-90 transition-opacity"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              👉 Réserver ma session
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
