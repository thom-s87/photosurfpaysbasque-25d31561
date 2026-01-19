import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const spots = [
  { name: "Anglet", description: "Plages variées idéales pour tous niveaux – shooting surf Anglet" },
  { name: "Biarritz", description: "Spots iconiques de la côte basque – Grande Plage, Côte des Basques" },
  { name: "Hossegor", description: "Vagues puissantes et conditions world-class pour photos spectaculaires" },
  { name: "Bidart", description: "Plage familiale avec de belles vagues accessibles" },
  { name: "Guéthary", description: "Spot authentique au charme basque typique" },
  { name: "Hendaye", description: "Longue plage avec diverses conditions de surf" }
];

export const Spots = () => {
  return (
    <section id="spots" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins">
          Zones de shooting
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Photographe sport nautique Anglet, Biarritz, Hossegor et toute la côte basque
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spots.map((spot, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-l-4 border-l-purple-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-600 text-xl">
                  <MapPin className="w-5 h-5 mr-2" />
                  {spot.name}
                </CardTitle>
                <CardDescription className="text-gray-700 text-base">{spot.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
