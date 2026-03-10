import { MessageCircle, MapPin, Image } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Premier contact sur WhatsApp",
    description: "Un message suffit pour discuter de votre projet et vérifier les conditions.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Choix du lieu, du moment et de l'ambiance",
    description: "On définit ensemble le meilleur créneau selon la houle, la marée et la lumière.",
  },
  {
    icon: Image,
    number: "03",
    title: "Séance photo et livraison des images",
    description: "Vos images HD sont livrées rapidement sur une plateforme sécurisée.",
  },
];

export const Process = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="process" className="py-24 md:py-32 px-4 bg-background">
      <div ref={ref} className="container mx-auto max-w-4xl fade-in-section">
        <p className="text-center text-hot-pink font-medium tracking-widest uppercase text-sm mb-4">Étapes</p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-16">
          Comment ça se passe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-gradient-sunset font-serif text-5xl mb-4 inline-block">{step.number}</div>
              <div className="w-14 h-14 rounded-full bg-deep-purple/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-deep-purple" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
