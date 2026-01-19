import { Wind, CheckCircle, MessageCircle, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/33695349187";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Conditions = () => {
  return (
    <section id="conditions" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-poppins">
          Conditions Météo & Fonctionnement
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Chaque session dépend des conditions réelles
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Conditions réelles</h3>
              <p className="text-gray-600 text-sm">
                Houle, vent et lumière optimales pour des photos exceptionnelles
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Validation échange</h3>
              <p className="text-gray-600 text-sm">
                Le créneau est confirmé après discussion WhatsApp
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Référence Windy</h3>
              <p className="text-gray-600 text-sm">
                Je consulte les prévisions pour te proposer le meilleur moment
              </p>
            </div>
          </div>
          
          {/* Windy Link */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wind className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Prévisions météo</h3>
            </div>
            <p className="text-blue-700 mb-4">
              Consulte les conditions en temps réel sur la côte basque
            </p>
            <a 
              href="https://www.windy.com/?43.483,-1.522,5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 rounded-full border border-blue-200 transition-all duration-300"
            >
              <Wind className="w-5 h-5" />
              Voir sur Windy →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
