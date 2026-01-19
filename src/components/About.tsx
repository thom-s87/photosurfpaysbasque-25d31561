import { Camera } from "lucide-react";

export const About = () => {
  return (
    <section id="apropos" className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Camera className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 font-poppins">
              Thom – Photographe surf
            </h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Photographe et vidéaste spécialisé sports nautiques au Pays Basque depuis plusieurs années. 
            Connaissance terrain des spots d'Anglet à Hossegor. Équipement pro adapté aux conditions marines. 
            Réactif et disponible – un message WhatsApp suffit pour organiser ta session.
          </p>
        </div>
      </div>
    </section>
  );
};
