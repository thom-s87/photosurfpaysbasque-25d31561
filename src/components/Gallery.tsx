import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, ExternalLink, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "0600000000";

const galleryImages = [
  { id: 'photo-1500375592092-40eb2168fd21', alt: 'Session surf Biarritz - photographe surf pays basque' },
  { id: 'photo-1518877593221-1f28583780b4', alt: 'Shooting surf Anglet - photo sport nautique' },
  { id: 'photo-1482938289607-e9573fc25ebb', alt: 'Vidéo surf Hossegor - vidéaste surf professionnel' },
  { id: 'photo-1500375592092-40eb2168fd21', alt: 'Photo surf Bidart - photographe sport nautique' },
  { id: 'photo-1518877593221-1f28583780b4', alt: 'Session photo surf Guéthary - côte basque' },
  { id: 'photo-1482938289607-e9573fc25ebb', alt: 'Shooting surf Hendaye - photo vidéo surf' }
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
                src={`https://images.unsplash.com/${photo.id}?w=400&h=300&fit=crop`}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">Session surf</p>
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