import { Camera } from "lucide-react";

export const About = () => {
  return (
    <section id="apropos" className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <Camera className="w-5 h-5 text-accent-foreground" />
          </div>
          <h2 className="font-serif text-2xl text-foreground">
            Thom — Photographe surf
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Photographe et vidéaste spécialisé sports nautiques au Pays Basque depuis plusieurs années. 
          Je shoote sur toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers. 
          Équipement pro adapté aux conditions marines. Réactif et disponible – un message WhatsApp suffit pour organiser ta session.
        </p>
      </div>
    </section>
  );
};
