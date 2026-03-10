import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const WHATSAPP_URL = "https://wa.me/33695349187";
const INSTAGRAM_URL = "https://www.instagram.com/photosurfpaysbasque?igsh=MTBybTU2ejM2bDB5dQ%3D%3D&utm_source=qr";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const ContactCTA = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="contact" className="py-16 min-[375px]:py-20 md:py-32 px-4 bg-gradient-night relative overflow-hidden retro-grain">
      {/* Wave decoration top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[40px] rotate-180">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,30 L1440,60 L0,60 Z" fill="hsl(30 50% 97%)" />
        </svg>
      </div>
      
      {/* Sunset glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-sunset-orange/5 blur-3xl" />
      
      <div ref={ref} className="container mx-auto max-w-2xl text-center relative z-10 fade-in-section">
        <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 tracking-wide">
          RÉSERVER VOTRE SÉANCE
        </h2>
        <p className="text-primary-foreground/60 text-lg mb-10 max-w-lg mx-auto">
          Surf, moment en famille, grossesse, session aquatique ou instant spontané sur la plage : chaque séance est pensée pour capturer quelque chose de vrai.
        </p>

        <Button 
          size="lg" 
          className="bg-gradient-sunset text-foreground px-10 py-7 text-lg font-semibold rounded-full shadow-2xl mb-8 hover:opacity-90 transition-opacity"
          asChild
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="w-6 h-6 mr-3" />
            Contacter sur WhatsApp
          </a>
        </Button>

        <div className="pt-4">
          <a 
            href={INSTAGRAM_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@photosurfpaysbasque</span>
          </a>
        </div>
      </div>
    </section>
  );
};
