import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sun, Camera, MapPin } from "lucide-react";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionCTA } from "@/components/SectionCTA";

import heroImg from "@/assets/grossesse-plage-1.jpg";
import coupleImg from "@/assets/grossesse-couple-2.jpg";
import silhouetteImg from "@/assets/grossesse-silhouette-3.jpg";

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
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* ===== HERO ===== */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
                Mon spot coup de cœur · Anglet
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-hot-pink to-primary bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide">
                La Petite Chambre d'Amour (VVF) 🌊
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10">
                La plage de la Petite Chambre d'Amour, appelée encore aujourd'hui le VVF par les locaux, est l'un de mes spots préférés à Anglet pour réaliser des séances photo en famille ou pendant la grossesse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-sunset text-foreground px-10 py-6 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    📸 Réserver ma séance à Anglet
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-6 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-6 h-6 mr-2" />
                    Contact rapide WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Shooting grossesse au coucher de soleil à la Petite Chambre d'Amour Anglet"
                width={1280}
                height={864}
                className="w-full h-auto object-cover"
              />
            </div>
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

        {/* ===== LA LUMIÈRE ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img
                src={coupleImg}
                alt="Lumière dorée coucher de soleil Petite Chambre d'Amour Anglet photographe famille"
                loading="lazy"
                width={1280}
                height={864}
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

        {/* ===== MON APPROCHE ===== */}
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
              <img
                src={silhouetteImg}
                alt="Séance photo naturelle famille grossesse Petite Chambre d'Amour VVF Anglet"
                loading="lazy"
                width={1280}
                height={864}
                className="w-full h-auto object-cover"
              />
            </div>
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
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Heart className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Envie d'une séance à la Petite Chambre d'Amour ?
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed">
              Un message suffit pour organiser votre shooting grossesse ou famille sur mon spot coup de cœur à Anglet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-golden hover:bg-golden/90 text-foreground px-12 py-8 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  📸 Réserver ma séance à Anglet
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-12 py-8 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
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
