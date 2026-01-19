import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Wind, Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "0695349187";

const spots = [
  { name: "Anglet", description: "Plages variées idéales pour tous niveaux – shooting surf Anglet" },
  { name: "Biarritz", description: "Spots iconiques de la côte basque – Grande Plage, Côte des Basques" },
  { name: "Hossegor", description: "Vagues puissantes et conditions world-class pour photos spectaculaires" },
  { name: "Bidart", description: "Plage familiale avec de belles vagues accessibles" },
  { name: "Guéthary", description: "Spot authentique au charme basque typique" },
  { name: "Hendaye", description: "Longue plage avec diverses conditions de surf" }
];

export const Spots = () => {
  return (
    <section id="spots" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins">
          Zones de shooting photo & vidéo surf
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Photographe sport nautique Anglet, Biarritz, Hossegor et toute la côte basque
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spots.map((spot, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-l-4 border-l-purple-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600 text-xl">
                  <MapPin className="w-5 h-5 mr-2" />
                  {spot.name}
                </CardTitle>
                <CardDescription className="text-gray-700 text-base">{spot.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        {/* Weather & Conditions */}
        <div className="mt-12 space-y-6">
          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-3 text-blue-600 mb-3">
                <Wind className="w-6 h-6" />
                <span className="font-semibold text-lg">Conditions météo & créneaux</span>
              </div>
              <p className="text-blue-700 mb-4 text-center">
                Les séances photo et vidéo dépendent des conditions météo réelles (houle, vent et lumière). 
                Le créneau est validé après échange par appel ou SMS.
              </p>
              <div className="text-center">
                <a 
                  href="https://www.windy.com/?43.483,-1.522,5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <Wind className="w-4 h-4" />
                  Consulter Windy pour les conditions →
                </a>
              </div>
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
                📞 Appeler
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