import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, ExternalLink, Phone, MessageCircle } from "lucide-react";

// Import gallery images
import surfVirage from "@/assets/gallery/surf-virage-anglet.jpg";
import surfeuseBiarritz from "@/assets/gallery/surfeuse-biarritz.jpg";
import surfeuseHossegor from "@/assets/gallery/surfeuse-hossegor.jpg";
import surfNight from "@/assets/gallery/surf-night-session.jpg";
import surfeurPro from "@/assets/gallery/surfeur-pro-competition.jpg";
import surfNightAerial from "@/assets/gallery/surf-night-aerial.jpg";
import bodyboard from "@/assets/gallery/bodyboard-pays-basque.jpg";
import surfGlassy from "@/assets/gallery/surf-glassy-session.jpg";
import photoAquatique from "@/assets/gallery/photo-aquatique-artistique.jpg";
import shootingMaternite from "@/assets/gallery/shooting-aquatique-maternite.jpg";

const PHONE_NUMBER = "0600000000";

const galleryImages = [
  { src: surfVirage, alt: 'Virage puissant surf Anglet - photographe surf Pays Basque', label: 'Surf Anglet' },
  { src: surfeuseBiarritz, alt: 'Surfeuse shortboard Biarritz - photo sport nautique côte basque', label: 'Surf Biarritz' },
  { src: surfNight, alt: 'Session surf nocturne flash - photographe surf Pays Basque nuit', label: 'Night Session' },
  { src: bodyboard, alt: 'Bodyboard Pays Basque - vidéaste sport nautique Anglet', label: 'Bodyboard' },
  { src: surfeurPro, alt: 'Surfeur professionnel compétition - photo surf Hossegor', label: 'Compétition' },
  { src: surfGlassy, alt: 'Session surf glassy côte basque - photographe surf Bidart Guéthary', label: 'Surf Glassy' },
  { src: surfeuseHossegor, alt: 'Surfeuse vague Hossegor - shooting surf féminin Pays Basque', label: 'Surf Hossegor' },
  { src: surfNightAerial, alt: 'Aerial surf nocturne - vidéaste surf Pays Basque session flash', label: 'Night Aerial' },
  { src: photoAquatique, alt: 'Shooting aquatique artistique noir et blanc - photographe underwater Pays Basque', label: 'Photo Aquatique' },
  { src: shootingMaternite, alt: 'Shooting maternité aquatique - photographe grossesse underwater côte basque', label: 'Maternité Aquatique' },
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 hover:from-yellow-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold"
              asChild
            >
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="w-5 h-5 mr-2" />
                📞 Appeler pour réserver
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold"
              asChild
            >
              <a href={`sms:${PHONE_NUMBER}`}>
                <MessageCircle className="w-5 h-5 mr-2" />
                💬 Envoyer un SMS
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
