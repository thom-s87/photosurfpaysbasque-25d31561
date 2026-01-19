import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Clock, Users, ExternalLink, Phone, MessageCircle, AlertCircle } from "lucide-react";

const PHONE_NUMBER = "0600000000";

export const Pricing = () => {
  return (
    <section id="tarifs" className="py-16 px-4 bg-white/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent font-poppins">
          Tarifs Photo & Vidéo Surf
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Des prix transparents pour des souvenirs inoubliables
        </p>
        
        <div className="flex justify-center mb-8">
          <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-md w-full bg-gradient-to-br from-white to-yellow-50 border-yellow-200">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500 rounded-bl-full"></div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center text-purple-600 text-2xl mb-2">
                <Camera className="w-6 h-6 mr-2" />
                Session Photo & Vidéo Surf
              </CardTitle>
              <CardDescription className="text-gray-700 text-base">Solo ou petit groupe</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-purple-600 to-blue-600 bg-clip-text mb-6">
                80<span className="text-2xl">€</span>
              </div>
              <div className="space-y-3 text-gray-700 mb-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-purple-500" />
                  <span>1 heure de shooting</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Jusqu'à 10 photos HD</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Solo ou groupe jusqu'à 3 personnes</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Récupération via SportPXL</span>
                </div>
              </div>

              {/* Notice tarifs indicatifs */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
                <div className="flex items-center gap-2 text-amber-700 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Tarifs indicatifs – validation selon les conditions météo.</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 hover:from-yellow-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-3"
                  asChild
                >
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    📞 Appeler pour réserver
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-3"
                  asChild
                >
                  <a href={`sms:${PHONE_NUMBER}`}>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    💬 Envoyer un SMS
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};