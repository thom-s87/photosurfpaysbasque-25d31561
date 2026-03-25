import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sun, Users, Camera } from "lucide-react";
import { UniversContactForm } from "@/components/UniversContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const faqItems = [
  {
    question: "Quand réaliser un shooting grossesse au Pays Basque ?",
    answer: "L'idéal se situe entre le 7e et le 8e mois de grossesse. Le ventre est bien arrondi et vous êtes encore à l'aise pour profiter de la séance. Je recommande les fins de journée pour la lumière dorée sur les plages d'Anglet et Biarritz.",
  },
  {
    question: "Où se déroulent les shootings grossesse ?",
    answer: "Les séances ont lieu principalement en extérieur sur les plages du Pays Basque : Anglet, Biarritz, Bidart ou Guéthary. Le choix du lieu dépend de vos envies et des conditions de lumière du jour.",
  },
  {
    question: "Combien de temps dure une séance photo grossesse ?",
    answer: "Une séance dure environ 1h à 1h30 pour prendre le temps de créer des images naturelles, sans stress. Le rythme est adapté à votre confort.",
  },
  {
    question: "Peut-on venir en couple ou en famille ?",
    answer: "Bien sûr. Le shooting peut se faire seule, en couple ou avec vos enfants. Chaque séance est pensée pour capturer votre histoire telle qu'elle est.",
  },
  {
    question: "Comment réserver un shooting grossesse au Pays Basque ?",
    answer: "Un simple message WhatsApp suffit. On échange sur vos envies, la date idéale et le lieu. Je vous guide à chaque étape pour une séance sereine et authentique.",
  },
];

const PhotographeGrossessePaysBasque = () => {
  useEffect(() => {
    document.title = "Photographe Grossesse Pays Basque 🤍 | Shooting maternité Anglet & Biarritz";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Shooting grossesse naturel au Pays Basque. Séances photo maternité en extérieur à Anglet, Biarritz et sur la côte basque. Réservation rapide via WhatsApp.";
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
    name: "PhotoSurfPaysBasque – Shooting grossesse Pays Basque",
    description: "Photographe spécialisé en shooting grossesse et maternité au Pays Basque. Séances en extérieur à Anglet, Biarritz, Bidart et Guéthary.",
    url: "https://photosurfpaysbasque.fr/photographe-grossesse-pays-basque",
    telephone: "+33695349187",
    address: {
      "@type": "PostalAddress",
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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* ===== HERO ===== */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Photographe grossesse · Pays Basque
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-hot-pink to-primary bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide">
              Shooting Grossesse au Pays Basque 🤍
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-10">
              Immortalisez ce moment unique avec un shooting grossesse naturel, en extérieur, entre océan et lumière du Pays Basque. Chaque séance est pensée pour capturer la douceur, la connexion et l'émotion de cette période si particulière.
            </p>
            <Button
              size="lg"
              className="bg-golden hover:bg-golden/90 text-foreground px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Réserver via WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* ===== SECTION 1 ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Heart className="w-10 h-10 text-hot-pink mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Un moment unique à capturer
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              La grossesse est un moment fort, intense et éphémère. Mon approche est simple : créer des images sincères, naturelles et intemporelles, dans un cadre qui vous ressemble.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2 ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Sun className="w-10 h-10 text-golden mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Des lieux naturels entre océan et lumière
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Les shootings se déroulent principalement en extérieur, sur les plages d'Anglet, Biarritz ou les spots plus calmes du Pays Basque. La lumière, le mouvement de l'océan et l'environnement créent une ambiance douce et authentique.
            </p>
          </div>
        </section>

        {/* ===== SECTION 3 ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Camera className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Une approche douce et naturelle
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Aucune expérience n'est nécessaire. Je vous guide avec bienveillance pour des photos spontanées, sans poses figées. L'objectif est de capturer votre complicité et votre énergie.
            </p>
          </div>
        </section>

        {/* ===== SECTION 4 ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Users className="w-10 h-10 text-hot-pink mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Seule, en couple ou en famille
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Le shooting peut se faire seule, en couple ou avec vos enfants. Chaque séance est adaptée à votre histoire.
            </p>
          </div>
        </section>

        {/* ===== SECTION 5 : RÉSERVER ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Réserver votre séance grossesse
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-10">
              Envie de garder un souvenir fort de votre grossesse au Pays Basque ? Contactez-moi pour organiser votre séance en fonction de vos envies et des meilleures conditions de lumière.
            </p>
            <Button
              size="lg"
              className="bg-golden hover:bg-golden/90 text-foreground px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
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
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
              Questions fréquentes – Shooting grossesse Pays Basque
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

        <UniversContactForm />

        {/* ===== CTA FINAL ===== */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Heart className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Prête à immortaliser ce moment ?
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed">
              Un message suffit pour organiser votre séance grossesse au Pays Basque.
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
    </div>
  );
};

export default PhotographeGrossessePaysBasque;
