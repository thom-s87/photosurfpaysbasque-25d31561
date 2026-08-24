import { Search, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export const SessionLibre = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="session-libre" className="py-16 min-[375px]:py-20 md:py-28 px-5 md:px-4 bg-background relative overflow-hidden">
      {/* Decorative wave blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-electric-violet/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-hot-pink/5 blur-3xl" />

      <div ref={ref} className="container mx-auto max-w-4xl relative z-10 fade-in-section">
        <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-3xl p-6 min-[375px]:p-8 md:p-12 shadow-xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-sunset/20 text-foreground mb-6">
            <Search className="w-7 h-7" />
          </div>

          <p className="text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Session libre
          </p>
          <h2 className="font-display text-3xl min-[375px]:text-4xl md:text-5xl text-foreground mb-6 tracking-wide">
            Tu m'as croisé à l'eau ?
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Pas besoin d'avoir réservé pour retrouver tes photos ! Je shoote régulièrement en session libre sur les spots d'Anglet (VVF, Marinella, Sables d'Or, Chambre d'Amour). Après chaque session, les photos sont mises en ligne sur Water Social Club, classées par date et par spot. Tu navigues, tu repères tes vagues, tu télécharges directement en haute résolution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-sunset text-foreground font-semibold rounded-full px-8 hover:opacity-90 transition-opacity animate-pulse-wave-yellow booking-hover whitespace-normal"
              asChild
            >
              <a
                href="https://watersocialclub.com/fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Waves className="w-5 h-5 mr-2" />
                Retrouver mes photos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
