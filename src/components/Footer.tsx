import { Camera, Instagram, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold font-poppins">
                <span>photo</span><span className="font-black">SURF</span>
              </div>
              <div className="relative">
                <span className="text-sm font-script">pays basque</span>
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-white/40"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <a 
              href="https://www.instagram.com/euska_lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@euska_lab</span>
            </a>
            <a 
              href="https://www.app.sportpxl.com/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Mes photos</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/90">
          <p>&copy; 2024 photoSURF pays basque - Thom, photographe passionné</p>
        </div>
      </div>
    </footer>
  );
};
