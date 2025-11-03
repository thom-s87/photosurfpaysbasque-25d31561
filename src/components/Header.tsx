import { Camera } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-yellow-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold font-poppins">
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  photo
                </span>
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent font-black">
                  SURF
                </span>
              </div>
              <div className="relative">
                <span className="text-lg text-purple-600 font-script font-medium">
                  pays basque
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#accueil" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Accueil</a>
            <a href="#galerie" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Galerie</a>
            <a href="#spots" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Spots</a>
            <a href="#tarifs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Tarifs</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Réservation</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
