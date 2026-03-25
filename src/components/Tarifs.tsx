import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const seanceInclus = [
  "Prise de vue pendant la session",
  "Captation dans l'eau ou en extérieur",
  "Sélection des meilleures images",
  "Mise en ligne dans une galerie privée",
];

export const Tarifs = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="tarifs" className="py-16 min-[375px]:py-20 md:py-32 px-4 bg-gradient-night relative overflow-hidden retro-grain">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hot-pink/5 blur-3xl" />

      <div ref={ref} className="container mx-auto max-w-3xl relative z-10 fade-in-section">
        <p className="text-gradient-sunset font-medium tracking-[0.3em] uppercase text-xs mb-6 text-center inline-block w-full">⭐ Offre lancement 2026</p>

        {/* Séance photo */}
        <div className="bg-night/60 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-electric-violet/20 mb-6 text-center">
          <h2 className="font-display text-6xl min-[375px]:text-7xl md:text-8xl text-primary-foreground mb-2 tracking-wider">
            45€
          </h2>
          <p className="text-2xl text-primary-foreground/50 font-light mb-2 tracking-widest uppercase">/ heure</p>
          <p className="text-primary-foreground/70 text-lg mb-8">Présence du photographe</p>

          <p className="text-primary-foreground/60 mb-6 text-left">Ce tarif correspond à la séance photo :</p>
          <ul className="space-y-4 text-left max-w-sm mx-auto mb-8">
            {seanceInclus.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-primary-foreground">
                <Check className="w-5 h-5 text-golden flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-primary-foreground/50 text-sm">Les photos ne sont pas incluses dans ce tarif.</p>
        </div>

        {/* Achat des photos */}
        <div className="bg-night/60 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-electric-violet/20 mb-6">
          <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-4 text-center tracking-wider">Achat des photos</h3>
          <p className="text-primary-foreground/60 mb-8 text-center">Les photos sont disponibles après la séance dans une galerie en ligne sécurisée et protégée.</p>
          <ul className="space-y-4 max-w-sm mx-auto">
            <li className="flex items-center justify-between text-primary-foreground text-lg">
              <span>Photo à l'unité</span>
              <span className="font-display text-golden">15€</span>
            </li>
            <li className="flex items-center justify-between text-primary-foreground text-lg">
              <span>Pack 5 photos</span>
              <span className="font-display text-golden">45€</span>
            </li>
            <li className="flex items-center justify-between text-primary-foreground text-lg">
              <span>Pack 10 photos</span>
              <span className="font-display text-golden">80€</span>
            </li>
          </ul>
        </div>

        {/* Pack ultime */}
        <div className="bg-night/60 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-golden/30 mb-8 text-center relative">
          <span className="inline-flex items-center gap-1 text-golden text-sm font-medium tracking-widest uppercase mb-4">
            <Star className="w-4 h-4 fill-golden" /> Le plus choisi
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2 tracking-wider">Pack ultime</h3>
          <p className="font-display text-5xl md:text-6xl text-primary-foreground mb-4">100€</p>
          <p className="text-primary-foreground/60 mb-6">Toutes les photos de la séance (jusqu'à 25 images)</p>
          <p className="text-primary-foreground/50 text-sm">Le pack complet est idéal pour ne rien manquer de votre session et garder tous vos souvenirs.</p>
        </div>

        {/* Phrase finale + CTA */}
        <p className="text-center text-primary-foreground/70 italic mb-10">Vous choisissez uniquement les photos que vous aimez.</p>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-sunset text-foreground px-6 min-[375px]:px-10 py-6 min-[375px]:py-7 text-sm min-[375px]:text-lg font-semibold rounded-full shadow-2xl w-full sm:w-auto hover:opacity-90 transition-opacity whitespace-normal text-center leading-tight"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-5 h-5 min-[375px]:w-6 min-[375px]:h-6 mr-2 min-[375px]:mr-3 flex-shrink-0" />
              Réserver sur WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};