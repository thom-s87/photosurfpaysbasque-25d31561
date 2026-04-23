import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export { WhatsAppIcon };

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section id="accueil" className="relative min-h-screen flex items-end overflow-hidden retro-grain">
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80')`,
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      />
      {/* Premium purple overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-deep-purple/70 to-night/40" />
      {/* Sunset glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-hot-pink/10 to-sunset-orange/15" />
      {/* VHS scanlines */}
      <div className="absolute inset-0 vhs-lines" />
      
      <div className="container mx-auto relative z-10 px-4 pb-16 pt-28 min-[375px]:pb-20 min-[375px]:pt-32 md:pb-32 md:pt-40">
        <div className="max-w-4xl" style={{ opacity: Math.max(0, 1 - scrollY / 600), transform: `translateY(${scrollY * 0.1}px)` }}>
          
          {/* Retro top accent — thin sunset stripe */}
          <div className="w-16 min-[375px]:w-20 h-[3px] bg-gradient-sunset mb-6 min-[375px]:mb-8" />
          
          <h1 className="font-display text-[3.2rem] min-[375px]:text-6xl md:text-9xl lg:text-[10rem] leading-[0.85] mb-4 min-[375px]:mb-6 tracking-wider">
            <span className="text-primary-foreground block">PHOTO</span>
            <span className="text-primary-foreground block">SURF</span>
            <span className="text-gradient-sunset block">PAYS BASQUE</span>
          </h1>

          <p className="text-lg min-[375px]:text-xl md:text-2xl text-primary-foreground font-medium mb-2 min-[375px]:mb-3 max-w-xl">
            Shooting photo à Anglet, Biarritz & sud des Landes 📸
          </p>
          
          <p className="text-base min-[375px]:text-lg md:text-xl text-primary-foreground/80 font-light mb-5 min-[375px]:mb-6 max-w-xl">
            Capture tes meilleures vagues avec un photographe local spécialisé surf
          </p>

          {/* Hero CTA WhatsApp */}
          <div className="mb-5 min-[375px]:mb-6 max-w-xl">
            <a
              href="https://wa.me/33695349187?text=Bonjour%2C%20je%20voudrais%20r%C3%A9server%20une%20s%C3%A9ance%20photo%20surf%20%F0%9F%8F%84"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="relative inline-flex items-center justify-center gap-3 bg-gradient-sunset text-foreground font-bold rounded-full shadow-2xl hover:opacity-90 w-full sm:w-auto text-center animate-pulse-wave-yellow booking-hover shimmer-cta"
              style={{ padding: "16px 32px", fontSize: "18px" }}
            >
              <WhatsAppIcon className="w-6 h-6 flex-shrink-0 relative z-[2]" />
              <span className="relative z-[2]">Réserver ma séance sur WhatsApp</span>
            </a>
            <p className="text-primary-foreground text-center sm:text-left mt-3" style={{ fontSize: "14px" }}>
              À partir de 45€ · Livraison photos en 48h
            </p>
          </div>

          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6 min-[375px]:mb-8">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Je shoote sur toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers.</span>
          </div>
          
          <div className="flex flex-col min-[375px]:flex-row flex-wrap gap-3 min-[375px]:gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-sunset text-foreground px-6 min-[375px]:px-10 py-5 min-[375px]:py-7 text-sm min-[375px]:text-lg font-semibold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full min-[375px]:w-auto whitespace-normal text-center leading-tight"
              asChild
            >
              <a href="#tarifs">
                📸 Réserver ma session
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground px-5 min-[375px]:px-8 py-5 min-[375px]:py-7 text-sm min-[375px]:text-lg rounded-full hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent w-full min-[375px]:w-auto whitespace-normal text-center leading-tight"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 min-[375px]:w-6 min-[375px]:h-6 mr-2 min-[375px]:mr-3 flex-shrink-0" />
                💬 Me contacter sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave transition SVG */}
      <div className="wave-transition z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px]">
          <path d="M0,80 C360,120 720,20 1080,80 C1260,110 1380,90 1440,80 L1440,120 L0,120 Z" fill="hsl(30 50% 97%)" />
        </svg>
      </div>
    </section>
  );
};
