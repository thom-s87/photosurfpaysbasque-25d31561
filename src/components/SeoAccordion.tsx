import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SeoAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-800 hover:bg-white/50 font-medium"
          >
            Qui suis-je ?
            <ChevronDown 
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </Button>
        </div>

        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 font-poppins">
              Photographe surf à Anglet – Expert photo & vidéo au Pays Basque
            </h3>
            
            <p>
              Tu cherches un <strong>photographe surf à Anglet</strong> capable de capturer l'intensité de tes sessions sur les meilleurs spots de la côte basque ? Basé à Anglet, je connais chaque plage, chaque marée, chaque créneau de lumière idéal pour immortaliser tes vagues.
            </p>
            
            <p>
              Mes sessions photo et vidéo surf couvrent en priorité les plages d'<strong>Anglet</strong> – Cavaliers, Marinella, Sables d'Or, Chambre d'Amour – mais aussi <strong>Biarritz</strong> (Grande Plage, Côte des Basques), Bidart, Guéthary et le sud des Landes jusqu'à Hossegor. Chaque spot est choisi en fonction de la houle, du vent, des marées et de la lumière.
            </p>
            
            <p>
              En tant que <strong>photographe sport nautique à Anglet</strong>, j'utilise du matériel professionnel adapté aux conditions marines : boîtiers haute performance, objectifs longue focale, et prises de vue depuis la plage ou l'eau. Les photos et vidéos sont livrées rapidement via une plateforme sécurisée.
            </p>
            
            <p>
              Chaque session est unique et programmée uniquement quand les conditions sont optimales à Anglet ou sur la côte basque. Un message WhatsApp suffit pour vérifier les conditions du jour et organiser ta session photo surf.
            </p>
            
            <h4 className="text-base font-semibold text-gray-800 font-poppins pt-2">
              Pourquoi choisir photoSURF pays basque à Anglet ?
            </h4>
            
            <p>
              Parce que je suis un photographe local, expert des spots d'Anglet et de la côte basque. Pas de formulaire, pas de réservation automatique : un échange direct, des conditions vérifiées, et un shooting surf réussi à Anglet ou Biarritz. <strong>Photographe surf Anglet</strong>, <strong>photo surf Biarritz</strong>, <strong>vidéaste surf Pays Basque</strong> – une seule adresse : photoSURF pays basque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
