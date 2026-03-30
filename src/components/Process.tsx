import { MessageCircle, Camera, ImageDown, Heart } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Tu réserves",
    description: "Un message WhatsApp suffit pour caler ta session selon la houle et la lumière.",
  },
  {
    icon: Camera,
    number: "02",
    title: "On shoot ta session",
    description: "Je capture tes meilleures vagues depuis la plage ou dans l'eau.",
  },
  {
    icon: ImageDown,
    number: "03",
    title: "Tu reçois tes photos",
    description: "Tes images HD sont livrées rapidement sur une galerie privée sécurisée.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Tu choisis tes préférées",
    description: "Tu sélectionnes uniquement les photos que tu aimes. Pas de mauvaise surprise.",
  },
];

export const Process = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="process" className="py-16 min-[375px]:py-20 md:py-32 px-5 md:px-4 bg-background">
      <div ref={ref} className="container mx-auto max-w-4xl fade-in-section">
        <p className="text-center text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">Simple & rapide</p>
        <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl text-foreground text-center mb-10 min-[375px]:mb-16 tracking-wide">
          COMMENT ÇA MARCHE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-gradient-sunset font-display text-4xl md:text-6xl mb-3 md:mb-4 inline-block tracking-wider">{step.number}</div>
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-deep-purple/10 flex items-center justify-center mx-auto mb-3 md:mb-5">
                <step.icon className="w-6 h-6 text-deep-purple" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3 tracking-wider">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
