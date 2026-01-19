import { Camera, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
const WHATSAPP_URL = "https://wa.me/33695349187";
const INSTAGRAM_URL = "https://www.instagram.com/photosurfpaysbasque?igsh=MTBybTU2ejM2bDB5dQ%3D%3D&utm_source=qr";

// WhatsApp Icon Component
const WhatsAppIcon = ({
  className
}: {
  className?: string;
}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>;
export const Header = () => {
  return <header className="fixed top-0 w-full bg-purple-900/90 backdrop-blur-md z-50">
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
            <a className="text-white/90 hover:text-yellow-400 transition-colors font-medium" href="https://www.windy.com/?43.483,-1.522,5">Météo</a>
            <a href="#tarifs" className="text-white/90 hover:text-yellow-400 transition-colors font-medium">Tarifs</a>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-5" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  Contacte-moi
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="flex md:hidden items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>;
};