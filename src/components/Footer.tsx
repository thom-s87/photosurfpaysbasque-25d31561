import { Camera, Instagram, ExternalLink, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "0695349187";
const INSTAGRAM_URL = "https://www.instagram.com/photosurfpaysbasque?igsh=MTBybTU2ejM2bDB5dQ%3D%3D&utm_source=qr";
const GOOGLE_URL = "https://share.google/igaZ47JraNbU92gJ4";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-600 to-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-yellow-100 font-semibold"
              asChild
            >
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="w-5 h-5 mr-2" />
                📞 Appeler
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-semibold"
              asChild
            >
              <a href={`sms:${PHONE_NUMBER}`}>
                <MessageCircle className="w-5 h-5 mr-2" />
                💬 Envoyer un SMS
              </a>
            </Button>
          </div>

          <div className="flex items-center space-x-8">
            <a 
              href={INSTAGRAM_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a 
              href={GOOGLE_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Avis Google</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/90">
          <p className="mb-2">&copy; 2024 photoSURF pays basque - Thom, photographe & vidéaste surf professionnel</p>
          <p className="text-sm text-white/70">Photographe surf Pays Basque | Photo vidéo sport nautique Anglet, Biarritz, Hossegor</p>
        </div>
      </div>
    </footer>
  );
};