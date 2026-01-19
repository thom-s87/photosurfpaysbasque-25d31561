import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, ExternalLink } from "lucide-react";

// Import gallery images
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

const WHATSAPP_URL = "https://wa.me/33695349187";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const galleryImages = [
  { src: surfeurProNight, alt: 'Surfeur professionnel session nocturne - photographe surf Pays Basque nuit', label: 'Night Pro', position: 'center' },
  { src: surfeuseBiarritz, alt: 'Surfeuse shortboard Biarritz - photo sport nautique côte basque', label: 'Surf Biarritz', position: 'center' },
  { src: surfeusePinkBoard, alt: 'Surfeuse planche rose - shooting surf féminin Pays Basque', label: 'Surf Style', position: 'center' },
  { src: surfNight, alt: 'Session surf nocturne flash - photographe surf Pays Basque nuit', label: 'Night Session', position: 'center' },
  { src: bodyboard, alt: 'Bodyboard Pays Basque - vidéaste sport nautique Anglet', label: 'Bodyboard', position: 'center' },
  { src: surfGlassy, alt: 'Session surf glassy côte basque - photographe surf Bidart Guéthary', label: 'Surf Glassy', position: 'center right' },
  { src: surfeuseHossegor, alt: 'Surfeuse vague Hossegor - shooting surf féminin Pays Basque', label: 'Surf Hossegor', position: 'center' },
  { src: bodyboardDay, alt: 'Bodyboard session jour Anglet - photographe sport nautique Pays Basque', label: 'Bodyboard Day', position: 'center' },
  { src: photoAquatique, alt: 'Shooting aquatique artistique noir et blanc - photographe underwater Pays Basque', label: 'Photo Aquatique', position: 'top center' },
  { src: shootingMaternite, alt: 'Shooting maternité aquatique - photographe grossesse underwater côte basque', label: 'Maternité Aquatique', position: 'center' },
];

export const Gallery = () => {
  return (
    <section id="galerie" className="py-16 px-4 bg-white/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins">
          Galerie Photo & Vidéo Surf
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Quelques moments capturés sur la côte basque – Anglet, Biarritz, Hossegor
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((photo, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <img 
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                style={{ objectPosition: photo.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{photo.label}</p>
                <p className="text-sm">Côte basque</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <Card className="max-w-md mx-auto bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50 border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-600 flex items-center justify-center gap-2">
                <Camera className="w-5 h-5" />
                Récupère tes photos
              </CardTitle>
              <CardDescription className="text-gray-700">
                Accède directement à tes clichés HD sur notre plateforme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold"
                onClick={() => window.open('https://www.app.sportpxl.com/dashboard', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                SportPXL Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Contacte-moi
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
