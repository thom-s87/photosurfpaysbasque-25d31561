import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import surfeurProNight from "@/assets/gallery/surfeur-pro-night.jpg";

export const Story = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="py-24 md:py-36 px-4 bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto fade-in-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={surfeurProNight}
                alt="Surfeur professionnel session photographe Pays Basque"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Sunset accent bar */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gradient-sunset opacity-20 -z-10" />
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <p className="text-hot-pink font-medium tracking-widest uppercase text-sm mb-4">Notre histoire</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              L'océan crée des souvenirs uniques
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Entre surf, lumière, instants partagés et émotions brutes, chaque séance capture un moment vrai face à l'océan.
            </p>
            <div className="w-20 h-1 bg-gradient-sunset rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
