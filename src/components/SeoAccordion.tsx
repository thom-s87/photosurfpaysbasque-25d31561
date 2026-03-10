import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const SeoAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-foreground transition-colors text-xs tracking-[0.2em] uppercase flex items-center gap-2 font-medium"
          >
            En savoir plus
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
          <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
            <h3 className="font-display text-2xl text-foreground tracking-wider">
              PHOTOGRAPHE SURF À ANGLET — EXPERT PHOTO & VIDÉO AU PAYS BASQUE
            </h3>
            <p>
              Tu cherches un <strong className="text-foreground">photographe surf à Anglet</strong> capable de capturer l'intensité de tes sessions sur les meilleurs spots de la côte basque ? Basé à Anglet, je connais chaque plage, chaque marée, chaque créneau de lumière idéal pour immortaliser tes vagues.
            </p>
            <p>
              Mes sessions photo et vidéo surf couvrent en priorité les plages d'<strong className="text-foreground">Anglet</strong> – Cavaliers, Marinella, Sables d'Or, Chambre d'Amour – mais aussi <strong className="text-foreground">Biarritz</strong> (Grande Plage, Côte des Basques), Bidart, Guéthary et le sud des Landes jusqu'à Hossegor.
            </p>
            <p>
              En tant que <strong className="text-foreground">photographe sport nautique à Anglet</strong>, j'utilise du matériel professionnel adapté aux conditions marines : boîtiers haute performance, objectifs longue focale, et prises de vue depuis la plage ou l'eau. Les photos et vidéos sont livrées rapidement via une plateforme sécurisée.
            </p>
            <h4 className="font-display text-xl text-foreground pt-2 tracking-wider">
              POURQUOI CHOISIR PHOTOSURFPAYSBASQUE À ANGLET ?
            </h4>
            <p>
              Parce que je suis un photographe local, expert des spots d'Anglet et de la côte basque. Pas de formulaire, pas de réservation automatique : un échange direct, des conditions vérifiées, et un shooting surf réussi à Anglet ou Biarritz. <strong className="text-foreground">Photographe surf Anglet</strong>, <strong className="text-foreground">photo surf Biarritz</strong>, <strong className="text-foreground">vidéaste surf Pays Basque</strong> — une seule adresse : PhotoSurfPaysBasque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
