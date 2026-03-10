import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import surfeuseBiarritz from "@/assets/gallery/surfeuse-biarritz.jpg";
import surfeuseHossegor from "@/assets/gallery/surfeuse-hossegor.jpg";
import surfNight from "@/assets/gallery/surf-night-session.jpg";
import bodyboardDay from "@/assets/gallery/bodyboard-day-session.jpg";
import bodyboard from "@/assets/gallery/bodyboard-pays-basque.jpg";
import surfGlassy from "@/assets/gallery/surf-glassy-session.jpg";
import photoAquatique from "@/assets/gallery/photo-aquatique-artistique.jpg";
import shootingMaternite from "@/assets/gallery/shooting-aquatique-maternite.jpg";
import surfeurProNight from "@/assets/gallery/surfeur-pro-night.jpg";
import surfeusePinkBoard from "@/assets/gallery/surfeuse-pink-board.jpg";
import surfClub from "@/assets/gallery/surf-club.jpg";
import duoFriends from "@/assets/gallery/duo-friends.jpg";
import surfVirageAnglet from "@/assets/gallery/surf-virage-anglet.jpg";
import surfeurProCompetition from "@/assets/gallery/surfeur-pro-competition.jpg";

const galleryImages = [
  { src: surfeurProNight, alt: "Surfeur professionnel session nocturne - photographe surf Pays Basque", position: "center" },
  { src: surfeuseBiarritz, alt: "Surfeuse shortboard Biarritz - photo sport nautique côte basque", position: "center" },
  { src: surfVirageAnglet, alt: "Surf virage Anglet - photographe surf Anglet", position: "center" },
  { src: surfeusePinkBoard, alt: "Surfeuse planche rose - shooting surf féminin Pays Basque", position: "center" },
  { src: surfNight, alt: "Session surf nocturne - photographe surf Pays Basque nuit", position: "center" },
  { src: bodyboard, alt: "Bodyboard Pays Basque - vidéaste sport nautique Anglet", position: "center" },
  { src: photoAquatique, alt: "Shooting aquatique artistique - photographe underwater Pays Basque", position: "top center" },
  { src: shootingMaternite, alt: "Shooting maternité aquatique - photographe grossesse côte basque", position: "center" },
  { src: surfGlassy, alt: "Session surf glassy côte basque - photographe surf Bidart", position: "center right" },
  { src: surfeuseHossegor, alt: "Surfeuse Hossegor - shooting surf féminin Pays Basque", position: "center" },
  { src: bodyboardDay, alt: "Bodyboard session jour Anglet - photographe sport nautique", position: "center" },
  { src: surfeurProCompetition, alt: "Surfeur professionnel compétition Pays Basque", position: "center" },
  { src: surfClub, alt: "Cours de surf école plage - photographe surf club Pays Basque", position: "center" },
  { src: duoFriends, alt: "Duo surfeurs amis plage - photographe surf lifestyle côte basque", position: "center" },
];

export const Gallery = () => {
  return (
    <section id="galerie" className="py-24 md:py-32 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-center mb-16">
          Galerie
        </h2>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mb-16">
          {galleryImages.map((photo, i) => (
            <div key={i} className="break-inside-avoid gallery-item overflow-hidden rounded-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover"
                style={{ objectPosition: photo.position }}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-base"
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
