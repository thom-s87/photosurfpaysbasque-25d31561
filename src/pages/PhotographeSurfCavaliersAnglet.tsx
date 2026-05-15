import { useEffect } from "react";
import { setSeo } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Waves, Camera, Clock, Users } from "lucide-react";
import { SurfContactForm } from "@/components/SurfContactForm";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SectionCTA } from "@/components/SectionCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import surfHero from "@/assets/surf-anglet-hero.jpg";
import surfSession from "@/assets/surf-anglet-session.jpg";
import surfLifestyle from "@/assets/surf-anglet-lifestyle.jpg";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%20au%20Pays%20Basque.%20Voici%20mes%20disponibilit%C3%A9s%20%3A%20...";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const faqItems = [
  {
    question: "Pourquoi choisir les Cavaliers pour une session photo surf ?",
    answer: "Les Cavaliers est l'un des spots les plus puissants d'Anglet. Son beach break génère des vagues creuses et rapides, parfaites pour des photos dynamiques et spectaculaires. La plage offre un espace dégagé avec une lumière exceptionnelle, surtout en fin de journée quand le soleil descend sur l'océan.",
  },
  {
    question: "Comment se passe une session photo surf aux Cavaliers à Anglet ?",
    answer: "On échange d'abord sur les conditions du jour : houle, vent, marée. Je me positionne sur la plage des Cavaliers ou depuis les zones surélevées pour capter les meilleurs angles. Je shoote ta session en continu pendant que tu surfes, puis je sélectionne et retouche les meilleures images. Livraison rapide via un lien sécurisé.",
  },
  {
    question: "Quel est le meilleur moment pour surfer et se faire shooter aux Cavaliers ?",
    answer: "Les Cavaliers fonctionne bien avec une houle d'ouest à nord-ouest, idéalement à mi-marée montante. Les meilleures lumières pour la photo sont tôt le matin ou en fin d'après-midi. Je surveille les conditions en temps réel et je te conseille le créneau optimal.",
  },
  {
    question: "Est-ce que tu shootes aussi sur les autres plages d'Anglet ?",
    answer: "Oui ! Je couvre toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague et les Dunes. Les Cavaliers reste mon spot de prédilection pour le surf puissant.",
  },
  {
    question: "Combien de temps pour recevoir mes photos des Cavaliers ?",
    answer: "Tes photos sont disponibles sous 48 à 72h maximum dans ta galerie privée en ligne. Pour les urgences (cadeau, départ…), un traitement express est possible. Chaque image est retouchée individuellement pour un rendu professionnel.",
  },
  {
    question: "Je suis débutant, c'est possible aux Cavaliers ?",
    answer: "Les Cavaliers peut être puissant, mais selon les conditions du jour, c'est tout à fait adapté aux intermédiaires. Si tu débutes, je peux te recommander un spot plus accessible sur Anglet comme les Sables d'Or ou Marinella, et on shoote là-bas. L'essentiel, c'est de capturer ton moment.",
  },
];

const PhotographeSurfCavaliersAnglet = () => {
  useEffect(() => {
    setSeo({ title: 'Photographe Surf Cavaliers Anglet | Pays Basque', description: "Photographe surf aux Cavaliers à Anglet : shooting dans l'eau sur ce beach break puissant. Réservation rapide par WhatsApp.", path: '/photographe-surf-cavaliers-anglet' });
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Photographer"],
    name: "PhotoSurfPaysBasque – Thom, photographe surf Cavaliers Anglet",
    description: "Photographe surf professionnel aux Cavaliers à Anglet. Photos et vidéos immersives sur le beach break le plus puissant de la côte basque.",
    url: "https://photosurfpaysbasque.fr/photographe-surf-cavaliers-anglet",
    telephone: "+33695349187",
    image: "https://photosurfpaysbasque.fr/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plage des Cavaliers",
      addressLocality: "Anglet",
      postalCode: "64600",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.498,
      longitude: -1.548,
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
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* ===== HERO ===== */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Photographe surf · Cavaliers, Anglet
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-primary to-ring bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide">
              Photographe Surf Anglet Cavaliers 🌊
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-10">
              Les Cavaliers, c'est le spot le plus puissant d'Anglet. Des vagues creuses, un beach break qui envoie, et une énergie brute que je capture depuis la plage avec du matos pro. Si tu cherches un <strong className="text-foreground">photographe surf à Anglet</strong>, t'es au bon endroit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-sunset text-foreground px-10 py-6 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  👉 Réserver ma session 📸
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-6 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Me contacter sur WhatsApp 💬
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== IMAGE HERO ===== */}
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <img
              src={surfHero}
              alt="Surfeur en action aux Cavaliers Anglet - photographe surf Pays Basque"
              width={1920}
              height={1080}
              className="w-full h-[50vh] md:h-[60vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        <SectionCTA />

        {/* ===== SECTION 1 : LES CAVALIERS ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Les Cavaliers à Anglet : un spot de surf exceptionnel
            </h2>
            <div className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                La plage des <strong className="text-foreground">Cavaliers à Anglet</strong> est réputée pour être l'un des beach breaks les plus puissants de toute la côte basque. Exposée plein ouest, elle capte toutes les houles atlantiques et offre des vagues creuses, rapides et régulières qui attirent les surfeurs du monde entier.
              </p>
              <p>
                C'est ici que les bancs de sable créent des pics bien définis, avec des sections tubulaires quand la houle monte. Que ce soit à marée basse pour les barrels ou à mi-marée pour des vagues plus longues, les <strong className="text-foreground">Cavaliers Anglet</strong> offre un terrain de jeu incroyable pour la photo surf.
              </p>
              <p>
                En tant que <strong className="text-foreground">photographe surf à Anglet</strong>, je connais ce spot par cœur. Je sais exactement où me placer selon la direction de la houle, le coefficient de marée et l'orientation du vent. Cette connaissance locale fait toute la différence entre une photo correcte et une image qui te donne des frissons.
              </p>
            </div>
          </div>
        </section>

        <SectionCTA />

        {/* ===== IMAGE SESSION ===== */}
        <section className="px-4 py-8">
          <div className="container mx-auto max-w-5xl">
            <img
              src={surfSession}
              alt="Session surf aux Cavaliers Anglet - shooting surf côte basque"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== SECTION 2 : MON APPROCHE ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Mon approche photo aux Cavaliers
            </h2>
            <div className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                Quand je shoote aux Cavaliers, je ne me contente pas de mitrailler depuis le parking. Je descends sur la plage, je me positionne au plus près de l'action, et j'utilise des objectifs longue focale pour capturer chaque détail : le spray qui explose, la trajectoire dans la lèvre, l'expression de concentration sur ton visage.
              </p>
              <p>
                Mon matériel est adapté aux conditions exigeantes de ce spot : boîtier haute performance, objectifs professionnels et prises de vue depuis différents angles — plage basse, dune, ou en contre-plongée depuis le bord de l'eau. Je travaille la lumière naturelle, les reflets sur l'eau et les contrastes pour des images qui racontent une histoire.
              </p>
              <p>
                Chaque <strong className="text-foreground">shooting surf au Pays Basque</strong> est unique. Je m'adapte aux conditions du moment — la taille des vagues, la luminosité, le nombre de surfeurs à l'eau. L'objectif : te livrer des images qui capturent l'énergie brute de ta session aux Cavaliers.
              </p>
            </div>
          </div>
        </section>

        <SectionCTA />

        {/* ===== SECTION 3 : CONDITIONS ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
              Les conditions idéales aux Cavaliers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center border border-border/50">
                <Waves className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Houle</h3>
                <p className="text-muted-foreground text-sm">Ouest à nord-ouest, de 1m à 2m50 pour des vagues de qualité. Les gros jours, les Cavaliers envoie du lourd.</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center border border-border/50">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Marée</h3>
                <p className="text-muted-foreground text-sm">Mi-marée montante pour des vagues bien formées. Marée basse pour les tubes quand la houle est conséquente.</p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center border border-border/50">
                <Camera className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Lumière</h3>
                <p className="text-muted-foreground text-sm">Golden hour en fin d'après-midi pour des photos spectaculaires. Levés de soleil pour une ambiance intime et brute.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== IMAGE LIFESTYLE ===== */}
        <section className="px-4 py-8">
          <div className="container mx-auto max-w-5xl">
            <img
              src={surfLifestyle}
              alt="Surf lifestyle golden hour aux Cavaliers - photographe surf Anglet"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== SECTION 4 : POUR QUI ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Pour qui sont ces sessions photo aux Cavaliers ?
            </h2>
            <div className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                Que tu sois un <strong className="text-foreground">surfeur confirmé</strong> qui veut des images de tes manœuvres, un <strong className="text-foreground">bodyboarder</strong> qui envoie dans le shore break, ou un passionné en vacances au Pays Basque qui veut garder un souvenir unique — cette session est pour toi.
              </p>
              <p>
                Je shoote aussi les <strong className="text-foreground">cours de surf</strong> aux Cavaliers. Ton premier take-off, ta première vraie vague, les wipeouts mémorables — tout ça mérite d'être capturé. Les photos de débutants ont souvent un charme incroyable, plein d'énergie et de spontanéité.
              </p>
              <p>
                Et si les conditions aux Cavaliers sont trop engagées pour ton niveau, pas de souci. Je shoote sur toute la côte d'Anglet, de la <strong className="text-foreground">Petite Chambre d'Amour (VVF)</strong> jusqu'à <strong className="text-foreground">La Barre</strong>, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague et les Dunes. On trouvera toujours le spot adapté.
              </p>
            </div>
          </div>
        </section>

        <SectionCTA />

        {/* ===== SECTION 5 : AUTRES SPOTS ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Toute la côte d'Anglet couverte
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center mb-8">
              Les Cavaliers est mon terrain de jeu principal, mais je couvre l'intégralité de la côte d'Anglet pour m'adapter aux conditions et à ton niveau.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {["VVF", "Sables d'Or", "Marinella", "Corsaires", "Madrague", "Dunes", "Cavaliers", "La Barre"].map((spot) => (
                <div
                  key={spot}
                  className={`bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-md text-center border ${spot === "Cavaliers" ? "border-primary bg-primary/10" : "border-border/50"}`}
                >
                  <MapPin className={`w-5 h-5 mx-auto mb-2 ${spot === "Cavaliers" ? "text-primary" : "text-muted-foreground"}`} />
                  <p className={`text-sm font-medium ${spot === "Cavaliers" ? "text-primary" : "text-foreground"}`}>{spot}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ SEO ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
              Questions fréquentes – Photographe surf Cavaliers Anglet
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

        <SurfContactForm />

        {/* ===== CTA FINAL ===== */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Waves className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Prêt à te faire shooter aux Cavaliers ?
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed">
              Un message suffit. Je vérifie les conditions aux Cavaliers et on s'organise dans l'heure.
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
      <FloatingWhatsApp />
      <MobileFixedCTA />
    </div>
  );
};

export default PhotographeSurfCavaliersAnglet;
