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
              Photographe et vidéaste surf au Pays Basque & sud des Landes
            </h3>
            
            <p>
              Tu recherches un photographe surf au Pays Basque capable de capturer l'intensité de tes sessions dans des conditions réelles ?
            </p>
            
            <p>
              Je réalise des photos et vidéos de surf et de sports nautiques adaptées à tous les niveaux, du surfeur débutant au surfeur confirmé, avec une approche terrain orientée conditions et timing.
            </p>
            
            <p>
              Basé sur la côte basque, je couvre l'ensemble des spots emblématiques de la région et du sud des Landes : shooting surf à Anglet, Biarritz, Hossegor, mais aussi Bidart, Guéthary, Hendaye et les plages environnantes. Chaque spot est choisi en fonction de la houle, du vent, des marées et de la lumière afin d'obtenir des images naturelles et percutantes.
            </p>
            
            <p>
              Chaque session photo ou vidéo surf est unique. Les créneaux sont définis uniquement lorsque les conditions météo sont optimales, pour garantir des images de qualité, que ce soit pour un souvenir personnel, une progression sportive ou un usage professionnel. Cette connaissance du terrain permet de proposer le bon spot au bon moment.
            </p>
            
            <p>
              En tant que photographe sport nautique à Anglet, Biarritz et Hossegor, j'utilise du matériel professionnel adapté aux conditions marines : boîtiers haute performance, objectifs longue focale, et prochainement caisson étanche pour des prises de vue directement depuis l'eau. Les photos HD et vidéos sont livrées via une plateforme sécurisée, accessible facilement après la session.
            </p>
            
            <h4 className="text-base font-semibold text-gray-800 font-poppins pt-2">
              Pourquoi choisir photoSURF pays basque ?
            </h4>
            
            <p>
              Pour une approche simple, directe et efficace. Un appel ou un message suffit pour vérifier les conditions, échanger sur la session et organiser le shooting. Pas de formulaire complexe, pas de réservation automatique : les créneaux sont validés après échange, uniquement lorsque les conditions sont réunies pour un shooting surf réussi au Pays Basque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
