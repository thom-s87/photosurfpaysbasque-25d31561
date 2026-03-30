import { Instagram, ExternalLink } from "lucide-react";
import logoImg from "@/assets/logo-photosurf.png";

const WHATSAPP_URL = "https://wa.me/33695349187";
const INSTAGRAM_URL = "https://www.instagram.com/photosurfpaysbasque?igsh=MTBybTU2ejM2bDB5dQ%3D%3D&utm_source=qr";
const GOOGLE_URL = "https://share.google/igaZ47JraNbU92gJ4";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-night text-primary-foreground py-12 md:py-16 border-t border-electric-violet/10">
      <div className="container mx-auto px-5 md:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <img src={logoImg} alt="PhotoSurf Pays Basque" className="h-12 w-auto" />
            <p className="text-primary-foreground/40 text-sm mt-1 uppercase tracking-widest">Photographe de l'océan au Pays Basque</p>
          </div>

          <div className="flex items-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Retro sunset stripe */}
        <div className="flex gap-0 mb-8">
          <div className="flex-1 h-[2px] bg-golden/30" />
          <div className="flex-1 h-[2px] bg-sunset-orange/30" />
          <div className="flex-1 h-[2px] bg-hot-pink/30" />
          <div className="flex-1 h-[2px] bg-electric-violet/30" />
        </div>

        {/* SEO links */}
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-8 text-xs md:text-sm">
          <a href="/photographe-surf-anglet" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Photographe surf Anglet</a>
          <a href="/photographe-body-surf-pays-basque" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Photographe body surf</a>
          <a href="/photographe-grossesse-pays-basque" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Photographe grossesse</a>
          <a href="/shooting-grossesse-pays-basque" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Shooting grossesse</a>
          <a href="/photographe-natation-pays-basque" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Photographe natation</a>
          <a href="/shooting-famille-bebe-eau-pays-basque" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Shooting famille & bébé</a>
          <a href="/spot-report-anglet" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Spot report Anglet</a>
        </nav>

        <div className="text-center text-primary-foreground/30 text-sm space-y-2">
          <p>&copy; 2026 PhotoSurfPaysBasque — Thom, photographe surf à Anglet, Biarritz</p>
          <p>Toute la côte d'Anglet : Petite Chambre d'Amour (VVF) · Sables d'Or · Marinella · Corsaires · Madrague · Dunes · Cavaliers · La Barre</p>
        </div>
      </div>
    </footer>
  );
};
