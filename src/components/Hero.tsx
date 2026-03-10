import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export { WhatsAppIcon };

export const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-end overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      
      <div className="container mx-auto relative z-10 px-4 pb-20 pt-40 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6">
            Photo<span className="italic">Surf</span><br/>
            <span className="text-warm">PaysBasque</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-3 max-w-xl">
            Vos moments dans l'océan méritent plus qu'un souvenir.
          </p>
          
          <p className="text-base md:text-lg text-primary-foreground/60 mb-4">
            Photographe de l'océan au Pays Basque
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-primary-foreground/50 mb-10 tracking-wide">
            <span>Surf</span><span>·</span>
            <span>Famille</span><span>·</span>
            <span>Grossesse</span><span>·</span>
            <span>Sports aquatiques</span><span>·</span>
            <span>Lifestyle plage</span>
          </div>
          
          <Button 
            size="lg" 
            className="bg-warm hover:bg-warm/90 text-primary-foreground px-10 py-7 text-lg font-medium rounded-full shadow-2xl"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-6 h-6 mr-3" />
              Réserver sur WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button 
          onClick={() => document.getElementById('univers')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors animate-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};
