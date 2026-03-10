import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { WatermarkedImage } from "@/components/WatermarkedImage";

import surfeuseBiarritz from "@/assets/gallery/surfeuse-biarritz.jpg";
import surfeuseHossegor from "@/assets/gallery/surfeuse-hossegor.jpg";
import surfNight from "@/assets/gallery/surf-night-session.jpg";
import bodyboardDay from "@/assets/gallery/bodyboard-day-session.jpg";
import bodyboard from "@/assets/gallery/bodyboard-pays-basque.jpg";
import photoAquatique from "@/assets/gallery/photo-aquatique-artistique.jpg";
import surfeusePinkBoard from "@/assets/gallery/surfeuse-pink-board.jpg";
import surfClub from "@/assets/gallery/surf-club.jpg";
import bodySurferYellow from "@/assets/gallery/body-surfer-yellow.jpg";
import surfeurProCompetition from "@/assets/gallery/surfeur-pro-competition.jpg";

const galleryImages = [
{ src: surfeuseBiarritz, alt: "Surfeuse shortboard Biarritz - photo sport nautique côte basque", position: "center" },
{ src: bodySurferYellow, alt: "Bodysurf planche jaune - photographe sport nautique Pays Basque", position: "center" },
{ src: surfeusePinkBoard, alt: "Surfeuse planche rose - shooting surf féminin Pays Basque", position: "center" },
{ src: surfNight, alt: "Session surf nocturne - photographe surf Pays Basque nuit", position: "center" },
{ src: bodyboard, alt: "Bodyboard Pays Basque - vidéaste sport nautique Anglet", position: "center" },
{ src: photoAquatique, alt: "Shooting aquatique artistique - photographe underwater Pays Basque", position: "top center" },
{ src: surfeuseHossegor, alt: "Surfeuse Hossegor - shooting surf féminin Pays Basque", position: "center" },
{ src: bodyboardDay, alt: "Bodyboard session jour Anglet - photographe sport nautique", position: "center" },
{ src: surfeurProCompetition, alt: "Surfeur professionnel compétition Pays Basque", position: "center" },
{ src: surfClub, alt: "Cours de surf école plage - photographe surf club Pays Basque", position: "center" }];


export const Gallery = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="galerie" className="py-24 md:py-32 px-4 bg-background">
      <div ref={ref} className="container mx-auto fade-in-section">
        <p className="text-center text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">Portfolio</p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground text-center mb-16 tracking-wide">
          GALERIE
        </h2>

        {/* Magazine-style masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mb-16">
          {galleryImages.map((photo, i) =>
          <div key={i} className="break-inside-avoid gallery-item overflow-hidden rounded-lg group relative retro-grain">
              <WatermarkedImage
              src={photo.src}
              alt={photo.alt}
              className="w-full object-cover"
              style={{ objectPosition: photo.position }}>
              
                {/* Hover overlay */}
                
              </WatermarkedImage>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-deep-purple text-deep-purple hover:bg-deep-purple hover:text-primary-foreground rounded-full px-8 py-6 text-base tracking-wider uppercase"
            onClick={() => window.open('https://www.app.sportpxl.com', '_blank')}>
            
            <ExternalLink className="w-4 h-4 mr-2" />
            Accéder à vos photos — SportPXL
          </Button>
        </div>
      </div>
    </section>);

};