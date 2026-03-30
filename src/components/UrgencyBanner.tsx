import { Clock, Waves } from "lucide-react";

export const UrgencyBanner = () => {
  return (
    <section className="py-8 px-4 bg-gradient-sunset">
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-foreground text-center">
          <div className="flex items-center gap-2 font-medium">
            <Waves className="w-5 h-5 flex-shrink-0" />
            <span>Places limitées selon les marées 🌊</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-foreground/40" />
          <div className="flex items-center gap-2 font-medium">
            <Clock className="w-5 h-5 flex-shrink-0" />
            <span>Réservation conseillée 48h à l'avance</span>
          </div>
        </div>
      </div>
    </section>
  );
};
