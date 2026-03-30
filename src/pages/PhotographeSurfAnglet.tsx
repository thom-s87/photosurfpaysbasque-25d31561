import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Waves } from "lucide-react";
import { SurfContactForm } from "@/components/SurfContactForm";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import surfHero from "@/assets/surf-anglet-hero.jpg";
import surfSession from "@/assets/surf-anglet-session.jpg";
import surfLifestyle from "@/assets/surf-anglet-lifestyle.jpg";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const spots = [
  { name: "Petite Chambre d'Amour (VVF)", description: "Digues immersives, angles uniques en contre-plongée" },
  { name: "Les Sables d'Or", description: "Ambiance familiale, lumières douces en fin de journée" },
  { name: "Marinella", description: "Beach break régulier, idéal pour les longboardeurs" },
  { name: "Les Corsaires", description: "Vagues techniques, spot pour les confirmés" },
  { name: "La Madrague", description: "Cadre sauvage, lumière spectaculaire" },
  { name: "Les Dunes", description: "Espace dégagé, houle constante" },
  { name: "Les Cavaliers", description: "Beach break puissant, idéal pour des images dynamiques" },
  { name: "La Barre", description: "Vagues longues et régulières, parfait pour le suivi en série" },
];

const faqItems = [
  {
    question: "Où trouver un photographe de surf à Anglet ?",
    answer: "Je suis basé à Anglet et je shoote sur toute la côte, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers. Un message WhatsApp suffit pour organiser une session sur le spot le plus adapté aux conditions du jour.",
  },
  {
    question: "Comment se déroule une session photo surf à Anglet ?",
    answer: "On échange d'abord sur les conditions du jour : houle, vent, marée. Je choisis le spot le plus adapté sur toute la côte d'Anglet – Petite Chambre d'Amour (VVF), Sables d'Or, Marinella, Corsaires, Madrague, Dunes, Cavaliers ou La Barre. Je me positionne depuis les digues ou la plage selon l'angle idéal, et je shoote ta session en conditions réelles. Les photos sont livrées rapidement via un lien sécurisé.",
  },
  {
    question: "Quel est le meilleur spot photo surf à Anglet ?",
    answer: "La Petite Chambre d'Amour (anciennement VVF) est mon spot principal. Les digues offrent des angles uniques en contre-plongée et à hauteur d'eau. Les Cavaliers et La Barre sont aussi excellents, selon la direction de la houle et les bancs de sable du moment.",
  },
  {
    question: "Peut-on réserver une session photo surf aujourd'hui à Anglet ?",
    answer: "Oui, sous réserve de conditions favorables. Je vérifie en temps réel la houle, le vent et la marée sur les spots d'Anglet. Envoie-moi un message WhatsApp et je te confirme la faisabilité dans l'heure. Ma proximité avec les plages me permet d'être opérationnel très rapidement.",
  },
  {
    question: "Photographe surf Anglet ou Biarritz : quelle différence ?",
    answer: "Anglet offre des beach breaks variés avec moins de monde à l'eau, ce qui facilite le cadrage. Les digues de la Petite Chambre d'Amour donnent des angles de prise de vue impossibles à reproduire ailleurs. Biarritz a la Côte des Basques et la Grande Plage, des spots iconiques mais plus fréquentés. Je couvre les deux zones.",
  },
  {
    question: "Combien coûte une session photo de surf à Anglet ?",
    answer: "Les tarifs varient selon la durée et le type de prestation (photo seule, vidéo, ou les deux). Contacte-moi directement sur WhatsApp pour un devis personnalisé. Chaque session est unique et adaptée aux conditions du jour.",
  },
];

const PhotographeSurfAnglet = () => {
  useEffect(() => {
    document.title = "Photographe Surf Pays Basque | Shooting Surf Anglet, Biarritz, Hossegor";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Photographe surf au Pays Basque 📸 Shooting surf immersif à Anglet, Biarritz et Hossegor. Photos dans l'eau, naturelles et professionnelles. Réservation rapide via WhatsApp 🌊";
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
    name: "PhotoSurfPaysBasque – Thom, photographe surf",
    description: "Photographe surf professionnel à Anglet. Photos et vidéos dans l'eau sur les spots de la Petite Chambre d'Amour, Les Cavaliers et La Barre au Pays Basque.",
    url: "https://photosurfpaysbasque.fr/photographe-surf-anglet",
    telephone: "+33695349187",
    image: "https://photosurfpaysbasque.fr/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plage de la Petite Chambre d'Amour",
      addressLocality: "Anglet",
      postalCode: "64600",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.505,
      longitude: -1.541,
    },
    areaServed: [
      { "@type": "City", name: "Anglet" },
      { "@type": "City", name: "Biarritz" },
      { "@type": "City", name: "Bayonne" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "21:00",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary pb-16 md:pb-0 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* ===== HERO ===== */}
        <section className="py-12 md:py-24 px-5 md:px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Photographe surf · Anglet, Pays Basque
            </p>
            <h1 className="text-3xl min-[375px]:text-4xl md:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary via-primary to-ring bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide">
              Photographe Surf à Anglet 🌊
            </h1>
            <p className="text-base min-[375px]:text-lg md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10">
              Je shoote sur toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers. Chaque session est pensée pour capturer l'énergie de l'océan et vos meilleurs moments.
            </p>
            <Button
              size="lg"
              className="bg-golden hover:bg-golden/90 text-foreground px-7 py-4 min-[375px]:px-8 min-[375px]:py-5 md:px-10 md:py-6 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Réserver via WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* ===== IMAGE HERO ===== */}
        <section className="px-5 md:px-4">
          <div className="container mx-auto max-w-5xl">
            <img
              src={surfHero}
              alt="Surfeur en action dans un tube - photographe surf immersif Anglet Pays Basque"
              width={1920}
              height={1080}
              className="w-full h-[50vh] md:h-[60vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== BODY SURF CTA ===== */}
        <section className="py-8 md:py-10 px-5 md:px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-base md:text-lg text-foreground/70 mb-5">
              Je propose également des shootings en body surf pour une approche encore plus immersive de l'océan.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-bold rounded-full shadow-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
              asChild
            >
              <a href="/photographe-body-surf-pays-basque">
                Découvrir le Body Surf 🌊
              </a>
            </Button>
          </div>
        </section>

        {/* ===== SECTION 1 : POURQUOI ===== */}
        <section className="py-12 md:py-16 px-5 md:px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-primary">
              Pourquoi faire appel à un photographe surf à Anglet ?
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center">
              Anglet est l'un des spots les plus réputés du Pays Basque pour le surf. Avec ses nombreuses plages et ses bancs de sable changeants, chaque session est unique. Faire appel à un photographe surf local permet de capturer les meilleures vagues, au bon moment, avec une vraie connaissance du spot.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2 : DANS L'EAU ===== */}
        <section className="py-12 md:py-16 px-5 md:px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-primary">
              Des photos dans l'eau, au cœur de votre session
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center">
              Je travaille directement dans l'océan pour vous offrir des images immersives, dynamiques et naturelles. L'objectif : capturer vos sensations, vos trajectoires et l'énergie de chaque vague.
            </p>
          </div>
        </section>

        {/* ===== IMAGE SESSION ===== */}
        <section className="px-5 md:px-4 py-6 md:py-8">
          <div className="container mx-auto max-w-5xl">
            <img
              src={surfSession}
              alt="Session surf côte basque - photographe surf Anglet plage et falaises"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== SECTION 3 : SPOTS ===== */}
        <section className="py-12 md:py-16 px-5 md:px-4 bg-card/60">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-primary">
              Les spots couverts à Anglet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              {spots.map((spot) => (
                <div
                  key={spot.name}
                  className="bg-background/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <h3 className="text-lg font-bold text-foreground">{spot.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{spot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4 : POUR QUI ===== */}
        <section className="py-12 md:py-16 px-5 md:px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-primary">
              Pour qui ?
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center">
              Que vous soyez débutant, confirmé ou en vacances au Pays Basque, je vous propose des séances adaptées à votre niveau. Surf, bodyboard, paddle ou simplement des moments dans l'eau.
            </p>
          </div>
        </section>

        {/* ===== IMAGE LIFESTYLE ===== */}
        <section className="px-5 md:px-4 py-6 md:py-8">
          <div className="container mx-auto max-w-5xl">
            <img
              src={surfLifestyle}
              alt="Moment surf lifestyle lumière dorée - photographe surf Anglet Pays Basque"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== SECTION 5 : RÉSERVER ===== */}
        <section className="py-12 md:py-16 px-5 md:px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">
              Réserver votre session photo à Anglet
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10">
              Envie de garder un souvenir unique de votre session surf à Anglet ? Contactez-moi directement pour organiser votre séance en fonction des conditions météo et des marées.
            </p>
            <Button
              size="lg"
              className="bg-golden hover:bg-golden/90 text-foreground px-7 py-4 min-[375px]:px-8 min-[375px]:py-5 md:px-10 md:py-6 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Réserver via WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* ===== FAQ SEO ===== */}
        <section className="py-12 md:py-16 px-5 md:px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
              Questions fréquentes – Photographe surf à Anglet
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`q${i}`} className="bg-card/80 rounded-xl px-5 border-0">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ===== SECTION COURS DE SURF ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              Tu prends un cours de surf ? Profite-en pour capturer ta session en photo et garder un vrai souvenir de ton moment dans l'eau.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Disponible sur toute la côte d'Anglet : Petite Chambre d'Amour (VVF), Sables d'Or, Marinella, Corsaires, Madrague, Dunes, Cavaliers, La Barre.
            </p>
          </div>
        </section>

        <SurfContactForm />

        {/* ===== CTA FINAL ===== */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Waves className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Prêt à capturer ta prochaine session ?
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed">
              Un message suffit. Je vérifie les conditions à Anglet et on s'organise dans l'heure.
            </p>
            <Button
              size="lg"
              className="bg-golden hover:bg-golden/90 text-foreground px-12 py-8 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-8 h-8 mr-3" />
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

export default PhotographeSurfAnglet;
