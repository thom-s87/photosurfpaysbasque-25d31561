import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { WatermarkedImage } from "@/components/WatermarkedImage";
import { useRef, useState, useEffect, useCallback } from "react";

import surferIlbaritz from "@/assets/gallery/surfer-ilbaritz.jpg";
import pregnantAqua from "@/assets/gallery/pregnant-aqua.jpg";
import surfeuseBiarritz from "@/assets/gallery/surfeuse-biarritz.jpg";
import bodySurferYellow from "@/assets/gallery/body-surfer-yellow.jpg";
import surfeusePinkBoard from "@/assets/gallery/surfeuse-pink-board.jpg";
import surfNight from "@/assets/gallery/surf-night-session.jpg";
import bodyboard from "@/assets/gallery/bodyboard-pays-basque.jpg";
import photoAquatique from "@/assets/gallery/photo-aquatique-artistique.jpg";
import surfeuseHossegor from "@/assets/gallery/surfeuse-hossegor.jpg";
import bodyboardDay from "@/assets/gallery/bodyboard-day-session.jpg";
import surfClub from "@/assets/gallery/surf-club.jpg";
import duoFriends from "@/assets/gallery/duo-friends.jpg";

const galleryImages = [
  { src: surferIlbaritz, alt: "Surfeur virage Ilbaritz - photographe surf Pays Basque action" },
  { src: surfeuseBiarritz, alt: "Surfeuse shortboard Biarritz - photo sport nautique côte basque" },
  { src: bodySurferYellow, alt: "Bodysurf planche jaune - photographe sport nautique Pays Basque" },
  { src: surfeusePinkBoard, alt: "Surfeuse planche rose - shooting surf féminin Pays Basque" },
  { src: surfNight, alt: "Session surf nocturne - photographe surf Pays Basque nuit" },
  { src: bodyboard, alt: "Bodyboard Pays Basque - vidéaste sport nautique Anglet" },
  { src: photoAquatique, alt: "Shooting aquatique artistique - photographe underwater Pays Basque" },
  { src: surfeuseHossegor, alt: "Surfeuse Hossegor - shooting surf féminin Pays Basque" },
  { src: bodyboardDay, alt: "Bodyboard session jour Anglet - photographe sport nautique" },
  { src: surfClub, alt: "Cours de surf école plage - photographe surf club Pays Basque" },
  { src: duoFriends, alt: "Duo surfeurs amis plage - photographe surf Pays Basque" },
];

export const Gallery = () => {
  const ref = useScrollFadeIn();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".carousel-card")?.clientWidth ?? 400;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section id="galerie" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="fade-in-section">
        <div className="px-4 container mx-auto">
          <p className="text-center text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">Portfolio</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground text-center mb-16 tracking-wide">
            GALERIE
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 transition-all duration-300 hover:bg-hot-pink hover:text-primary-foreground hover:border-hot-pink ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 transition-all duration-300 hover:bg-hot-pink hover:text-primary-foreground hover:border-hot-pink ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {galleryImages.map((photo, i) => (
              <div
                key={i}
                className="carousel-card flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[32vw] lg:w-[28vw] snap-start overflow-hidden rounded-xl retro-grain"
              >
                <WatermarkedImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-[50vh] md:h-[60vh] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 px-4">
          <Button
            variant="outline"
            className="border-deep-purple text-deep-purple hover:bg-deep-purple hover:text-primary-foreground rounded-full px-8 py-6 text-base tracking-wider uppercase"
            onClick={() => window.open('https://www.app.sportpxl.com', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Accéder à vos photos — SportPXL
          </Button>
        </div>
      </div>
    </section>
  );
};
