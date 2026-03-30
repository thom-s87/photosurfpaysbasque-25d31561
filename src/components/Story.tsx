import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { WatermarkedImage } from "@/components/WatermarkedImage";
import surfeurProNight from "@/assets/gallery/surfeur-pro-night.jpg";

export const Story = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="pt-14 min-[375px]:pt-16 md:pt-36 pb-10 min-[375px]:pb-12 md:pb-16 px-5 md:px-4 bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto fade-in-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with retro grain */}
          <div className="relative retro-grain">
            <p className="text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">L'art de capturer l'action</p>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <WatermarkedImage
                src={surfeurProNight}
                alt="Surfeur professionnel session photographe Pays Basque"
                className="w-full h-[350px] min-[375px]:h-[420px] md:h-[500px] lg:h-[600px] object-cover"
                loading="eager"
              />
            </div>
            {/* Retro sunset accent bar */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-sunset opacity-30 -z-10 hidden md:block" />
            {/* Thin retro line */}
            <div className="absolute -top-3 -left-3 w-16 h-[3px] bg-gradient-sunset" />
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <p className="text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-6">Notre histoire</p>
            <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 min-[375px]:mb-8 leading-[0.9] tracking-wide">
              L'OCÉAN CRÉE DES SOUVENIRS UNIQUES
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Entre surf, lumière, instants partagés et émotions brutes, chaque séance capture un moment vrai face à l'océan.
            </p>
            {/* Retro sunset stripe */}
            <div className="flex gap-1">
              <div className="w-12 h-[3px] bg-golden" />
              <div className="w-8 h-[3px] bg-sunset-orange" />
              <div className="w-6 h-[3px] bg-hot-pink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
