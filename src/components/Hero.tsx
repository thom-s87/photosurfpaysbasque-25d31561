import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Wind } from "lucide-react";

const PHONE_NUMBER = "0695349187";

export const Hero = () => {
  return (
    <section id="accueil" className="pt-24 pb-16 px-4">
      
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins text-gray-900">
              Photographe & Vidéaste Surf au Pays Basque
            </h1>
            <div className="text-6xl md:text-8xl font-bold mb-4 font-poppins">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                photo
              </span>
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent font-black">
                SURF
              </span>
            </div>
            <div className="relative inline-block">
              <p className="text-3xl md:text-4xl text-purple-600 mb-6 font-script font-medium">
                pays basque
              </p>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-transparent"></div>
            </div>
          </div>
          
          {/* Section Particuliers - Priorité 1 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              🏄 Pour les surfeurs
            </div>
            <p className="text-xl md:text-2xl text-gray-800 mb-4 font-medium">
              Moi c'est <span className="text-purple-600 font-bold">Thom</span>, photographe et vidéaste passionné de surf.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Envie de garder un souvenir inoubliable de votre session ?</strong> Je capture vos plus belles vagues à <strong>Anglet</strong>, <strong>Biarritz</strong>, <strong>Hossegor</strong> et tous les spots mythiques du Pays Basque.
            </p>
            <p className="text-base text-gray-600 mb-8">
              Solo, en couple ou entre amis – photos HD et vidéos livrées rapidement. Un appel ou SMS suffit !
            </p>
            
            {/* CTA Appel / SMS - Particuliers */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 hover:from-yellow-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                asChild
              >
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  📞 Appelez-moi
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href={`sms:${PHONE_NUMBER}`}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  💬 Envoyez un SMS
                </a>
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-purple-600 hover:bg-purple-50"
              onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes photos ↓
            </Button>
          </div>

          {/* Section Clubs & Écoles - Priorité 2 */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-200 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-left">
                <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
                  🏫 Clubs & Écoles de surf
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Offrez des souvenirs à vos élèves
                </h3>
                <p className="text-gray-700 mb-4">
                  Partenariat simple et flexible : je photographie vos cours et stages, vos élèves repartent avec des images pro de leur progression. Tarifs adaptés aux volumes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="default" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    asChild
                  >
                    <a href={`tel:${PHONE_NUMBER}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      📞 Discutons-en
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    size="default" 
                    className="border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold"
                    asChild
                  >
                    <a href={`sms:${PHONE_NUMBER}`}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      💬 SMS
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Text Block */}
          <article className="max-w-4xl mx-auto mt-12 text-left bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Votre photographe surf et vidéaste professionnel au Pays Basque
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Vous cherchez un <strong>photographe surf au Pays Basque</strong> capable de capturer l'intensité de vos sessions ? 
                Je suis Thom, <strong>vidéaste surf</strong> et photographe spécialisé dans les sports nautiques depuis plusieurs années. 
                Mon objectif : vous offrir des images et vidéos professionnelles qui immortalisent vos plus beaux moments sur l'eau.
              </p>
              <p>
                Que vous soyez surfeur débutant ou confirmé, mes services de <strong>photo vidéo sport nautique</strong> s'adaptent à tous les niveaux. 
                Je couvre l'ensemble de la côte basque française : <strong>shooting surf Anglet</strong>, <strong>Biarritz</strong>, <strong>Hossegor</strong>, 
                mais aussi les spots légendaires de Bidart, Guéthary, Lafitenia et Hendaye.
              </p>
              <p>
                Chaque session photo ou vidéo est unique. Je sélectionne les meilleurs créneaux en fonction des conditions météo, 
                de la houle et des marées pour garantir des images exceptionnelles. Ma connaissance du terrain et mon expérience 
                me permettent de vous proposer le spot idéal au moment parfait.
              </p>
              <p>
                En tant que <strong>photographe sport nautique Anglet, Biarritz et Hossegor</strong>, j'utilise un équipement professionnel 
                adapté aux conditions marines : appareils haute performance, objectifs longue focale, et bientôt caisson étanche 
                pour des prises de vue depuis l'eau. Vous recevez vos clichés HD et vidéos via une plateforme sécurisée.
              </p>
              <p>
                Pourquoi choisir photoSURF pays basque ? Parce que je suis passionné, réactif et disponible. 
                Un simple appel ou SMS suffit pour organiser votre session. Les créneaux sont validés après échange 
                pour s'assurer que les conditions seront optimales. Pas de formulaire compliqué, pas d'attente : 
                contactez-moi directement et surfons ensemble vers vos plus beaux souvenirs.
              </p>
            </div>
          </article>

          {/* Weather Conditions Notice */}
          <div className="max-w-4xl mx-auto mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wind className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Conditions météo</h3>
            </div>
            <p className="text-blue-700 mb-4">
              Les séances photo et vidéo dépendent des conditions météo réelles (houle, vent et lumière). 
              Le créneau est validé après échange par appel ou SMS.
            </p>
            <a 
              href="https://www.windy.com/?43.483,-1.522,5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <Wind className="w-4 h-4" />
              Voir les conditions sur Windy →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};