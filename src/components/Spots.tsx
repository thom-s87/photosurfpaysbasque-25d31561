import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

const spots = [
  { name: "Bidart", description: "Plage familiale avec de belles vagues accessibles" },
  { name: "Guéthary", description: "Spot authentique au charme basque typique" },
  { name: "Lafitenia", description: "Vagues puissantes et paysages époustouflants" },
  { name: "Parlementia", description: "Big waves et conditions exceptionnelles" },
  { name: "Hendaye", description: "Longue plage avec diverses conditions de surf" },
  { name: "Biarritz", description: "Spots iconiques de la côte basque" }
];

export const Spots = () => {
  return (
    <section id="spots" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins">
          Mes spots
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Je couvre les plus beaux spots de la côte basque</p>
        
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
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-3 text-blue-600 mb-3">
                <Clock className="w-6 h-6" />
                <span className="font-semibold text-lg">Shootings optimisés selon les marées</span>
              </div>
              <p className="text-blue-700">
                Je te propose toujours les meilleurs créneaux en fonction des conditions de surf et des marées pour capturer tes plus belles vagues.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
