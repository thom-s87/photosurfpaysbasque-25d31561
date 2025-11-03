import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="accueil" className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold mb-4 font-poppins">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                photo
              </span>
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent font-black">
                SURF
              </span>
            </div>
            <div className="relative inline-block">
              <p className="text-3xl md:text-4xl text-purple-600 mb-6 font-script font-medium">
                pays basque
              </p>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-transparent"></div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-800 mb-6 font-medium">
              Moi c'est <span className="text-purple-600 font-bold">Thom</span>, photographe passionné de surf.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Je capture vos sessions depuis la plage, et bientôt directement dans l'eau. 
              Chaque vague raconte une histoire, chaque ride mérite d'être immortalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500 hover:from-yellow-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Réserver ma session
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir mes photos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
