import { useEffect } from "react";
import { setSeo } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Sun, Users, Camera, Clock, CalendarDays } from "lucide-react";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { DiscoverAlso, allLinks } from "@/components/DiscoverAlso";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/gallery/duo-friends.jpg";
import detailImg from "@/assets/gallery/surfeuse-pink-board.jpg";
import silhouetteImg from "@/assets/gallery/souvenir-surfeuse.jpg";
import g1 from "@/assets/gallery/surfeuse-hossegor.jpg";
import g2 from "@/assets/gallery/surf-coucher-soleil.jpg";
import g3 from "@/assets/gallery/satisfaction-surfer.jpg";
import g4 from "@/assets/gallery/photo-aquatique-artistique.jpg";
import g5 from "@/assets/gallery/surf-night-girl.jpg";
import g6 from "@/assets/gallery/surfer-ilbaritz.jpg";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20organiser%20un%20shooting%20EVJF%20au%20Pays%20Basque.%20Voici%20nos%20disponibilit%C3%A9s%20%3A%20...";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const faqItems = [
  {
    question: "Combien de personnes peuvent participer au shooting EVJF ?",
    answer: "Les séances s'adaptent à votre groupe : de 2 à 10 copines environ. Au-delà, on en parle ensemble pour organiser ça au mieux.",
  },
  {
    question: "Où se déroule la séance EVJF au Pays Basque ?",
    answer: "Sur les plages d'Anglet (Petite Chambre d'Amour, Sables d'Or, Marinella, Corsaires, Madrague, Dunes, Cavaliers, La Barre) et Biarritz. Le spot est choisi ensemble selon vos envies et les conditions du jour.",
  },
  {
    question: "Faut-il savoir surfer pour faire le shooting ?",
    answer: "Pas du tout ! Le shooting peut se faire pieds dans l'eau, dans les vagues, sur le sable ou en bord de plage. L'important, c'est l'ambiance et les rires entre copines.",
  },
  {
    question: "Combien de temps dure la séance ?",
    answer: "Environ 1h à 1h30, le temps de profiter, de jouer avec l'eau, de capturer les vraies émotions sans pression.",
  },
  {
    question: "Comment réserver le shooting EVJF ?",
    answer: "Un simple message WhatsApp suffit. On échange sur vos envies, la date et le spot idéal. Je vous guide à chaque étape.",
  },
];

const ShootingEVJFPaysBasque = () => {
  useEffect(() => {
    setSeo({
      title: "Photographe EVJF Biarritz | Shooting plage & océan",
      description: "Shooting EVJF à Biarritz, Anglet et au Pays Basque : photos naturelles à la plage, ambiance fun, océan, sunset et souvenirs de groupe.",
      keywords: "shooting evjf pays basque, evjf anglet, evjf biarritz, photographe evjf, enterrement vie jeune fille pays basque, shooting copines plage",
      path: "/shooting-evjf-pays-basque",
    });
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Photographer"],
    name: "PhotoSurfPaysBasque – Shooting EVJF",
    description: "Photographe spécialisé EVJF au Pays Basque. Séances photo entre copines à Anglet, Biarritz et sur la côte basque.",
    url: "https://photosurfpaysbasque.fr/shooting-evjf-pays-basque",
    telephone: "+33695349187",
    address: { "@type": "PostalAddress", addressLocality: "Anglet", postalCode: "64600", addressRegion: "Nouvelle-Aquitaine", addressCountry: "FR" },
    geo: { "@type": "GeoCoordinates", latitude: 43.505, longitude: -1.541 },
    areaServed: [
      { "@type": "City", name: "Anglet" },
      { "@type": "City", name: "Biarritz" },
      { "@type": "City", name: "Bidart" },
      { "@type": "City", name: "Guéthary" },
    ],
    priceRange: "€€",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary pb-16 md:pb-0 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* HERO */}
        <section className="relative py-12 md:py-24 px-5 md:px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
                Shooting EVJF · Pays Basque
              </p>
              <h1 className="text-3xl min-[375px]:text-4xl md:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary via-hot-pink to-primary bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide">
                Shooting EVJF au Pays Basque 👯‍♀️🌊
              </h1>
              <p className="text-base min-[375px]:text-lg md:text-xl text-foreground/80 leading-relaxed mb-4 md:mb-6">
                Photographe EVJF à Anglet & Biarritz, je capture vos plus belles journées entre copines au bord de l'océan : fous rires, complicité et souvenirs uniques sur la côte basque 🌊
              </p>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8 md:mb-10">
                Une séance fun, naturelle et 100% sans pression, pour fêter la future mariée dans un cadre incroyable.
              </p>
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-7 py-4 min-[375px]:px-8 min-[375px]:py-5 md:px-10 md:py-6 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-3" />
                  Réserver via WhatsApp
                </a>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt="Shooting EVJF entre copines sur la plage du Pays Basque" width={1280} height={864} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Heart className="w-10 h-10 text-hot-pink mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Une EVJF inoubliable, capturée pour de vrai</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Pas de poses figées, juste vos vraies émotions. Je capture la complicité de votre groupe, les fous rires, les regards, les moments suspendus entre copines, dans une ambiance détendue et joyeuse.
            </p>
          </div>
        </section>

        {/* SECTION 2 + IMAGE */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img src={detailImg} alt="Future mariée entre copines sur la plage d'Anglet" loading="lazy" width={1280} height={864} className="w-full h-auto object-cover" />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <Sun className="w-10 h-10 text-golden mx-auto md:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Le Pays Basque comme décor</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Les plages d'Anglet (de la Petite Chambre d'Amour à La Barre) et de Biarritz offrent un décor unique : océan, lumière dorée, vagues et liberté. Le spot est choisi ensemble selon vos envies et les conditions du jour.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Users className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Adapté à votre groupe</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Que vous soyez 2 ou 10 copines, la séance s'adapte à votre énergie. Pieds dans l'eau, sur le sable ou dans les vagues : on choisit ensemble l'ambiance qui vous ressemble.
            </p>
          </div>
        </section>

        {/* SECTION 4 + IMAGE */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <Sparkles className="w-10 h-10 text-hot-pink mx-auto md:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Un souvenir à garder à vie</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Plus qu'un shooting, c'est un moment de partage avant le grand jour. Des photos vraies, naturelles et lumineuses à offrir à la future mariée et à toute la team.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={silhouetteImg} alt="Surfeuse en action - shooting EVJF Pays Basque" loading="lazy" width={1280} height={864} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* GALERIE EXEMPLES */}
        <section className="py-16 px-5 md:px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10 md:mb-12">
              <Camera className="w-10 h-10 text-hot-pink mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Exemples de shootings</h2>
              <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Quelques images pour vous projeter — ambiance, lumière, complicité.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                { src: g1, alt: "Copines à la plage shooting EVJF Pays Basque" },
                { src: g2, alt: "Shooting EVJF coucher de soleil à Anglet" },
                { src: g3, alt: "Future mariée et témoins sur la plage" },
                { src: g4, alt: "Photo artistique EVJF dans l'eau à Biarritz" },
                { src: g5, alt: "Ambiance EVJF en fin de journée au Pays Basque" },
                { src: g6, alt: "Groupe de copines bord de mer Anglet" },
              ].map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-lg group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRÉNEAUX */}
        <section className="py-16 px-5 md:px-4 bg-card/60">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10 md:mb-12">
              <Clock className="w-10 h-10 text-golden mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Créneaux de réservation</h2>
              <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                Trois moments parfaits pour capturer la lumière du Pays Basque — choisissez celui qui colle à votre EVJF.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: <Sun className="w-7 h-7 text-golden" />,
                  title: "Matin doré",
                  time: "7h — 10h",
                  desc: "Lumière douce, plage tranquille, ambiance fraîche et intimiste avant le brunch.",
                },
                {
                  icon: <Sparkles className="w-7 h-7 text-hot-pink" />,
                  title: "Golden hour",
                  time: "1h avant le coucher",
                  desc: "La lumière la plus magique de la journée, idéale pour des photos cinématiques.",
                },
                {
                  icon: <CalendarDays className="w-7 h-7 text-primary" />,
                  title: "Sunset & after",
                  time: "Coucher de soleil",
                  desc: "Couleurs sunset, silhouettes et début de soirée — parfait avant la fête.",
                },
              ].map((c, i) => (
                <div key={i} className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/40 shadow-md">
                  <div className="mb-4">{c.icon}</div>
                  <h3 className="font-bold text-xl text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">{c.time}</p>
                  <p className="text-foreground/70 leading-relaxed text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground/60 text-sm mt-8 max-w-2xl mx-auto">
              Séances proposées du lundi au dimanche, week-ends inclus. Réservation conseillée 48h à l'avance (selon météo et marée).
            </p>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-8 py-5 md:px-10 md:py-6 text-base md:text-lg font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Choisir un créneau sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* RÉSERVER */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Camera className="w-10 h-10 text-golden mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Réserver votre shooting EVJF</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-10">
              Envie d'immortaliser l'EVJF de votre meilleure amie au Pays Basque ? Contactez-moi pour organiser la séance selon vos envies et les conditions du jour.
            </p>
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Réserver via WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`q${i}`} className="bg-card/80 rounded-xl px-5 border-0">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ===== DÉCOUVRIR AUSSI ===== */}
        <DiscoverAlso links={[allLinks.surf, allLinks.famille, allLinks.vvf]} />

        {/* CTA FINAL */}
        <section className="py-14 md:py-20 px-5 md:px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground/80 mx-auto mb-5 md:mb-6" />
            <h2 className="text-3xl min-[375px]:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Prêtes à fêter la future mariée ?</h2>
            <p className="text-primary-foreground/90 text-base min-[375px]:text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
              Un message suffit pour organiser votre shooting EVJF au Pays Basque.
            </p>
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-8 py-5 min-[375px]:px-10 min-[375px]:py-6 md:px-12 md:py-7 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3" />
                Réserver via WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <MobileFixedCTA />
    </div>
  );
};

export default ShootingEVJFPaysBasque;
