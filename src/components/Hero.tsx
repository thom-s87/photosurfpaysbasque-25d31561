import { Button } from "@/components/ui/button";
import { Camera, Wind } from "lucide-react";

const PHONE_NUMBER = "0695349187";
const WHATSAPP_URL = `https://wa.me/33695349187`;

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with purple/pink overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-700/70 to-pink-600/60" />
      
      <div className="container mx-auto text-center relative z-10 px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Logo principal */}
          <div className="mb-6">
            <div className="text-6xl md:text-8xl font-bold font-poppins leading-none">
              <span className="text-pink-400 italic font-medium">photo</span>
            </div>
            <div className="text-7xl md:text-9xl font-black font-poppins tracking-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                SURF
              </span>
            </div>
            <p className="text-3xl md:text-4xl text-purple-300/90 font-script mt-2">
              pays basque
            </p>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-yellow-400 font-medium mb-10 italic">
            Capture tes plus belles vagues
          </p>
          
          {/* CTA Principal WhatsApp */}
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-6 h-6 mr-3" />
              Contacte-moi
            </a>
          </Button>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <button 
              onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// WhatsApp Icon for export
export { WhatsAppIcon };

// Section séparée pour le contenu détaillé
export const HeroContent = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Particuliers */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              🏄 Pour toi, surfeur
            </div>
            <p className="text-xl md:text-2xl text-gray-800 mb-4 font-medium">
              Moi c'est <span className="text-purple-600 font-bold">Thom</span>, photographe et vidéaste passionné de surf.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Envie de garder un souvenir inoubliable de ta session ?</strong> Je capture tes plus belles vagues à <strong>Anglet</strong>, <strong>Biarritz</strong>, <strong>Hossegor</strong> et tous les spots mythiques du Pays Basque.
            </p>
            <p className="text-base text-gray-600 mb-8">
              Solo, en duo ou entre potes – photos HD et vidéos livrées rapidement. Un message suffit !
            </p>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg rounded-full"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Contacte-moi
                </a>
              </Button>
            </div>
          </div>

          {/* Section Clubs & Écoles */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-200 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-left">
                <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
                  🏫 Clubs & Écoles de surf
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Offre des souvenirs à tes élèves
                </h3>
                <p className="text-gray-700 mb-4">
                  Partenariat simple et flexible : je photographie tes cours et stages, tes élèves repartent avec des images pro de leur progression. Tarifs adaptés aux volumes.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button 
                    size="default" 
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full"
                    asChild
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="w-4 h-4 mr-2" />
                      Discutons-en
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Text Block */}
          <article className="mt-12 text-left bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ton photographe surf et vidéaste professionnel au Pays Basque
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Tu cherches un <strong>photographe surf au Pays Basque</strong> capable de capturer l'intensité de tes sessions ? 
                Je suis Thom, <strong>vidéaste surf</strong> et photographe spécialisé dans les sports nautiques depuis plusieurs années. 
                Mon objectif : t'offrir des images et vidéos professionnelles qui immortalisent tes plus beaux moments sur l'eau.
              </p>
              <p>
                Que tu sois surfeur débutant ou confirmé, mes services de <strong>photo vidéo sport nautique</strong> s'adaptent à tous les niveaux. 
                Je couvre l'ensemble de la côte basque française : <strong>shooting surf Anglet</strong>, <strong>Biarritz</strong>, <strong>Hossegor</strong>, 
                mais aussi les spots légendaires de Bidart, Guéthary, Lafitenia et Hendaye.
              </p>
              <p>
                Chaque session photo ou vidéo est unique. Je sélectionne les meilleurs créneaux en fonction des conditions météo, 
                de la houle et des marées pour garantir des images exceptionnelles. Ma connaissance du terrain et mon expérience 
                me permettent de te proposer le spot idéal au moment parfait.
              </p>
              <p>
                En tant que <strong>photographe sport nautique Anglet, Biarritz et Hossegor</strong>, j'utilise un équipement professionnel 
                adapté aux conditions marines : appareils haute performance, objectifs longue focale, et bientôt caisson étanche 
                pour des prises de vue depuis l'eau. Tu reçois tes clichés HD et vidéos via une plateforme sécurisée.
              </p>
              <p>
                Pourquoi choisir photoSURF pays basque ? Parce que je suis passionné, réactif et disponible. 
                Un simple message WhatsApp suffit pour organiser ta session. Les créneaux sont validés après échange 
                pour s'assurer que les conditions seront optimales. Pas de formulaire compliqué, pas d'attente : 
                contacte-moi directement et surfons ensemble vers tes plus beaux souvenirs.
              </p>
            </div>
          </article>

          {/* Weather Conditions Notice */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wind className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Conditions météo</h3>
            </div>
            <p className="text-blue-700 mb-4 text-center">
              Les séances photo et vidéo dépendent des conditions météo réelles (houle, vent et lumière). 
              Le créneau est validé après échange sur WhatsApp.
            </p>
            <div className="text-center">
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
      </div>
    </section>
  );
};
