import { Camera, Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "0695349187";
const INSTAGRAM_URL = "https://www.instagram.com/photosurfpaysbasque?igsh=MTBybTU2ejM2bDB5dQ%3D%3D&utm_source=qr";

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
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#accueil" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Accueil</a>
            <a href="#galerie" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Galerie</a>
            <a href="#spots" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Spots</a>
            <a href="#tarifs" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Tarifs</a>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="w-4 h-4 mr-1" />
                  Appeler
                </a>
              </Button>
              <Button size="sm" variant="outline" className="border-purple-500 text-purple-600" asChild>
                <a href={`sms:${PHONE_NUMBER}`}>
                  <MessageCircle className="w-4 h-4 mr-1" />
                  SMS
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="flex md:hidden items-center gap-2">
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700" asChild>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="w-4 h-4" />
              </a>
            </Button>
            <Button size="sm" variant="outline" className="border-purple-500 text-purple-600" asChild>
              <a href={`sms:${PHONE_NUMBER}`}>
                <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};