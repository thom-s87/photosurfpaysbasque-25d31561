import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sun, Camera, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionCTA } from "@/components/SectionCTA";
import { WatermarkedImage } from "@/components/WatermarkedImage";

import coupleGoalImg from "@/assets/couple_goal.JPG";
import rocherImg from "@/assets/femme_enceinte_rocher.JPG";
import vvfImg from "@/assets/femme_enceinte_vvf.JPG";
import wifeBabyImg from "@/assets/wife_ice_baby.JPG";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const highlights = [
  { icon: MapPin, text: "Spot emblématique à Anglet" },
  { icon: Heart, text: "Ambiance intimiste" },
  { icon: Sun, text: "Bord rocheux naturel" },
  { icon: Camera, text: "Lumière exceptionnelle au coucher de soleil" },
];

const galleryImages = [
  { src: coupleGoalImg, alt: "Shooting grossesse couple plage Anglet Petite Chambre d'Amour photographe" },
  { src: rocherImg, alt: "Photographe Anglet Petite Chambre d'Amour femme enceinte rochers coucher de soleil" },
  { src: wifeBabyImg, alt: "photographe anglet petite chambre d'amour vvf" },
  { src: vvfImg, alt: "Photo famille grossesse plage Anglet VVF lumière dorée photographe" },
];

const HorizontalGallery = ({ images, id }: { images: typeof galleryImages; id: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="relative group">
      {/* Scroll buttons – desktop */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-lg border border-border/50 text-foreground hover:bg-background transition-all"
          aria-label="Précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-lg border border-border/50 text-foreground hover:bg-background transition-all"
          aria-label="Suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => (
          <div
            key={`${id}-${i}`}
            className="flex-none w-[85vw] sm:w-[70vw] md:w-[45%] lg:w-[40%] snap-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <WatermarkedImage
                src={img.src}
                alt={img.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-[55vh] sm:h-[60vh] md:h-[500px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SpotPhotoPetiteChambreAmour = () => {
  useEffect(() => {
    document.title = "Mon spot coup de cœur à Anglet 🌊 Petite Chambre d'Amour (VVF)";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Découvrez la Petite Chambre d'Amour (VVF) à Anglet, mon spot coup de cœur pour vos shootings grossesse et famille 📸 Bord rocheux, lumière dorée et ambiance intimiste. Photographe Anglet.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    return () => {
      document.title = "PhotoSurfPaysBasque – Photographe Surf & Océan au Pays Basque";
    };
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Photographer"],
    name: "PhotoSurfPaysBasque – Photographe Anglet Petite Chambre d'Amour",
    description: "Photographe spécialisé en shootings grossesse et famille à la Petite Chambre d'Amour (VVF) à Anglet. Séances naturelles au coucher de soleil sur la côte basque.",
    url: "https://photosurfpaysbasque.fr/spot-photo-petite-chambre-amour-anglet",
    telephone: "+33695349187",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plage de la Petite Chambre d'Amour",
      addressLocality: "Anglet",
      postalCode: "64600",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 43.505, longitude: -1.541 },
    areaServed: [
      { "@type": "City", name: "Anglet" },
      { "@type": "City", name: "Biarritz" },
    ],
    priceRange: "€€",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary pb-16 md:pb-0 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* ===== HERO VISUEL ===== */}
        <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
          <WatermarkedImage
            src={wifeBabyImg}
            alt="photographe anglet petite chambre d'amour vvf"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-10 md:pb-16 text-center">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/80 font-medium mb-3">
              Mon spot coup de cœur · Anglet
            </p>
            <h1 className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-hot-pink to-primary bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide mb-5 md:mb-6">
              La Petite Chambre d'Amour (VVF) 🌊
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-gradient-sunset text-foreground px-6 py-4 min-[375px]:px-8 min-[375px]:py-5 text-sm min-[375px]:text-base font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  📸 Réserver ma séance à Anglet
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 min-[375px]:px-8 min-[375px]:py-5 text-sm min-[375px]:text-base font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Contact WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              La Petite Chambre d'Amour (VVF) à Anglet est l'un des meilleurs spots pour des shootings photo en bord d'océan, notamment pour la grossesse et les séances en famille.
            </p>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              En tant que photographe à Anglet, c'est mon spot préféré pour un shooting plage authentique. La lumière, les rochers et l'océan créent un cadre idéal pour des photos naturelles.
            </p>
          </div>
        </section>

        {/* ===== GALERIE 1 ===== */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
              Ambiance & lumière au VVF
            </h2>
            <HorizontalGallery images={galleryImages} id="gallery-top" />
          </div>
        </section>

        {/* ===== LE LIEU ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl">
            <Heart className="w-10 h-10 text-hot-pink mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Un cadre naturel unique à Anglet
            </h2>
            <div className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                Ce spot se distingue par son <strong className="text-foreground">bord rocheux</strong>, qui apporte du relief et un caractère unique aux images. L'océan, les rochers et la plage créent un cadre naturel parfait pour des photos authentiques.
              </p>
              <p>
                Quand je réalise un <strong className="text-foreground">shooting grossesse à la plage d'Anglet</strong>, la Petite Chambre d'Amour est souvent mon premier choix. Les rochers forment un décor sculptural, presque intime, qui isole naturellement la scène et crée une atmosphère de cocon face à l'océan. C'est un lieu qui parle de lui-même — pas besoin de décor artificiel.
              </p>
              <p>
                En tant que <strong className="text-foreground">photographe à Anglet</strong>, je connais chaque recoin de ce spot : les passages entre les rochers, les petites criques abritées du vent, les zones où le sable est le plus beau. Cette connaissance du terrain me permet de t'amener exactement là où la photo sera la plus belle.
              </p>
            </div>
          </div>
        </section>

        <SectionCTA />

        {/* ===== LA LUMIÈRE + IMAGE ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <WatermarkedImage
                src={rocherImg}
                alt="Photographe Anglet Petite Chambre d'Amour shooting grossesse rochers coucher de soleil"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <Sun className="w-10 h-10 text-golden mx-auto md:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Une lumière qui fait toute la différence
              </h2>
              <div className="text-lg text-foreground/70 leading-relaxed space-y-4">
                <p>
                  La lumière y est particulièrement belle, surtout au coucher de soleil. Selon les saisons, le soleil vient se placer différemment à l'horizon, offrant des ambiances variées : lumière douce, reflets dorés, atmosphère chaleureuse.
                </p>
                <p>
                  C'est cette lumière qui transforme un simple <strong className="text-foreground">shooting grossesse plage Anglet</strong> en une série d'images intemporelles. Les contre-jours sur les rochers, les silhouettes face à l'océan, les reflets sur l'eau — chaque minute offre une palette différente que j'exploite pour créer des photos uniques.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionCTA />

        {/* ===== MON APPROCHE + IMAGE ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <Camera className="w-10 h-10 text-primary mx-auto md:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Des séances naturelles et sans pose forcée
              </h2>
              <div className="text-lg text-foreground/70 leading-relaxed space-y-4">
                <p>
                  J'y réalise des séances naturelles et sans pose forcée, en profitant du décor et de la lumière pour capturer des moments simples et sincères.
                </p>
                <p>
                  Mon approche de <strong className="text-foreground">photographe famille à Anglet</strong> est guidée par l'authenticité. Je te guide doucement dans le mouvement, je laisse les interactions se créer naturellement — un regard, un rire, une main sur le ventre. Ce sont ces instants vrais qui font les meilleures photos.
                </p>
                <p>
                  Que tu viennes pour un <strong className="text-foreground">shooting grossesse</strong> ou une <strong className="text-foreground">séance famille</strong>, la Petite Chambre d'Amour offre un terrain de jeu idéal : les enfants peuvent explorer les rochers, les couples peuvent marcher au bord de l'eau, et chaque photo raconte une histoire.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <WatermarkedImage
                src={coupleGoalImg}
                alt="Photo famille plage Anglet couple grossesse Petite Chambre d'Amour photographe"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== GALERIE 2 ===== */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
              Moments capturés au coucher de soleil
            </h2>
            <HorizontalGallery images={[...galleryImages].reverse()} id="gallery-bottom" />
          </div>
        </section>

        {/* ===== HIGHLIGHTS ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
              Pourquoi ce spot est spécial
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-border/50 flex items-center gap-4"
                >
                  <item.icon className="w-8 h-8 text-primary shrink-0" />
                  <p className="text-foreground font-medium text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionCTA />

        {/* ===== CTA FINAL ===== */}
        <section className="py-14 md:py-20 px-5 md:px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground/80 mx-auto mb-5 md:mb-6" />
            <h2 className="text-3xl min-[375px]:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Envie d'une séance à la Petite Chambre d'Amour ?
            </h2>
            <p className="text-primary-foreground/90 text-base min-[375px]:text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
              Un message suffit pour organiser votre shooting grossesse ou famille sur mon spot coup de cœur à Anglet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-golden hover:bg-golden/90 text-foreground px-8 py-5 min-[375px]:px-10 min-[375px]:py-6 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  📸 Réserver ma séance à Anglet
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 min-[375px]:px-10 min-[375px]:py-6 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-8 h-8 mr-3" />
                  Contact WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileFixedCTA />
    </div>
  );
};

export default SpotPhotoPetiteChambreAmour;
