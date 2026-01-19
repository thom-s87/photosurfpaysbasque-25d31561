import { Camera, Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "0695349187";
const INSTAGRAM_URL = "https://www.instagram.com/photosurfpaysbasque?igsh=MTBybTU2ejM2bDB5dQ%3D%3D&utm_source=qr";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-purple-900/90 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="text-xl font-poppins">
              <span className="text-pink-400 italic font-medium">photo</span>
              <span className="text-yellow-400 font-black ml-1">SURF</span>
            </div>
            <span className="text-sm text-purple-300 font-script">pays basque</span>
          </div>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#accueil" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">Accueil</a>
            <a href="#galerie" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">Galerie</a>
            <a href="#spots" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">Météo</a>
            <a href="#tarifs" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">Tarifs</a>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-full px-5"
                asChild
              >
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Camera className="w-4 h-4 mr-2" />
                  📸 Réserver
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="flex md:hidden items-center gap-3">
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-full"
              asChild
            >
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};