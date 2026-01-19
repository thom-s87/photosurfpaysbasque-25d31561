import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Clock, Users, ExternalLink, AlertCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/33695349187";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
                🏄 Pour toi
              </div>
              <CardTitle className="flex items-center justify-center text-purple-600 text-xl mb-2">
                <Camera className="w-5 h-5 mr-2" />
                Session Surf
              </CardTitle>
              <CardDescription className="text-gray-700 text-base">Solo, duo ou entre potes</CardDescription>
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
              
              {/* CTA Button WhatsApp */}
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Contacte-moi
                </a>
              </Button>
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
                  <span>Souvenirs pour tes élèves</span>
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
              
              {/* CTA Button WhatsApp */}
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Discutons-en
                </a>
              </Button>
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
