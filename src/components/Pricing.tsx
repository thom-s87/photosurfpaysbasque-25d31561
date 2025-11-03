import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Clock, Users, ExternalLink } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="tarifs" className="py-16 px-4 bg-white/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent font-poppins">
          Tarifs
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Des prix transparents pour des souvenirs inoubliables</p>
        
        <div className="flex justify-center">
          <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-md w-full bg-gradient-to-br from-white to-yellow-50 border-yellow-200">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500 rounded-bl-full"></div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center text-purple-600 text-2xl mb-2">
                <Camera className="w-6 h-6 mr-2" />
                Session Photo
              </CardTitle>
              <CardDescription className="text-gray-700 text-base">Solo ou petit groupe</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-purple-600 to-blue-600 bg-clip-text mb-6">
                80<span className="text-2xl">€</span>
              </div>
              <div className="space-y-3 text-gray-700 mb-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-purple-500" />
                  <span>1 heure de shooting</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Jusqu'à 10 photos HD</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Solo ou groupe jusqu'à 3 personnes</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Récupération via SportPXL</span>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 hover:from-yellow-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Réserver maintenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
