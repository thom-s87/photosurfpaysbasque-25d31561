import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Clock, Users, ExternalLink, Phone, MessageCircle, AlertCircle } from "lucide-react";

const PHONE_NUMBER = "0695349187";

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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {/* Tarif Particuliers */}
          <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-yellow-50 border-yellow-200">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500 rounded-bl-full"></div>
            <CardHeader className="text-center pb-4">
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                🏄 Particuliers
              </div>
              <CardTitle className="flex items-center justify-center text-purple-600 text-xl mb-2">
                <Camera className="w-5 h-5 mr-2" />
                Session Surf
              </CardTitle>
              <CardDescription className="text-gray-700 text-base">Solo, couple ou entre amis</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-purple-600 to-blue-600 bg-clip-text mb-2">
                À partir de 80<span className="text-xl">€</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">en fonction solo / duo / groupe</p>
              <div className="space-y-3 text-gray-700 mb-6 text-left">
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
                  <span>Solo, duo ou groupe</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Livraison rapide via SportPXL</span>
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
                    📞 Appeler
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

          {/* Tarif Clubs & Écoles */}
          <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border-blue-200">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-bl-full"></div>
            <CardHeader className="text-center pb-4">
              <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                🏫 Clubs & Écoles
              </div>
              <CardTitle className="flex items-center justify-center text-blue-600 text-xl mb-2">
                <Users className="w-5 h-5 mr-2" />
                Partenariat
              </CardTitle>
              <CardDescription className="text-gray-700 text-base">Tarifs adaptés aux volumes</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                Sur devis
              </div>
              <p className="text-gray-600 text-sm mb-6">Tarifs dégressifs selon volume</p>
              <div className="space-y-3 text-gray-700 mb-6 text-left">
                <div className="flex items-center">
                  <Camera className="w-4 h-4 mr-2 text-blue-500" />
                  <span>Photos de cours & stages</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-blue-500" />
                  <span>Souvenirs pour vos élèves</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  <span>Disponibilité flexible</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-blue-500" />
                  <span>Galerie privée par session</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                  asChild
                >
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    📞 Discutons-en
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold py-3"
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

        {/* Notice tarifs indicatifs */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 text-amber-700 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>Tarifs indicatifs – validation selon les conditions météo.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};