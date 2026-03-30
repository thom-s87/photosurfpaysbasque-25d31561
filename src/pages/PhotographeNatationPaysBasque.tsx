import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Waves, Target, Droplets, Trophy, Users } from "lucide-react";
import { NatationContactForm } from "@/components/NatationContactForm";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import natationHero from "@/assets/natation-hero.jpg";
import natationPreparation from "@/assets/natation-preparation.jpg";
import natationEffort from "@/assets/natation-effort.jpg";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const faqItems = [
  {
    question: "Où se déroulent les shootings natation au Pays Basque ?",
    answer: "Les séances peuvent avoir lieu en piscine privée pour un rendu technique et maîtrisé, ou en milieu naturel dans l'océan, notamment sur les plages d'Anglet et Biarritz. Le choix dépend de vos objectifs et de votre discipline.",
  },
  {
    question: "Peut-on faire un shooting pour préparer la traversée de Biarritz ?",
    answer: "Oui, j'accompagne les nageurs en préparation avec des images qui capturent l'intensité de l'entraînement en eau libre. C'est aussi un excellent support de communication pour les sponsors et les réseaux sociaux.",
  },
  {
    question: "Ce type de shooting est-il adapté aux triathlètes ?",
    answer: "Absolument. Que ce soit pour la partie natation de votre entraînement ou pour un shooting complet, je m'adapte à votre discipline et à vos objectifs de performance.",
  },
  {
    question: "Combien de temps dure une séance photo natation ?",
    answer: "Une séance dure entre 1h et 2h selon le lieu et le type de shooting. En piscine, on peut travailler plus en détail sur la technique. En océan, on s'adapte aux conditions du jour.",
  },
  {
    question: "Comment réserver un shooting natation au Pays Basque ?",
    answer: "Un simple message WhatsApp suffit. On échange sur vos objectifs, votre niveau et le lieu idéal, puis on organise la séance en fonction de votre planning.",
  },
];

const PhotographeNatationPaysBasque = () => {
  useEffect(() => {
    document.title = "Photographe Natation Pays Basque | Shooting Piscine & Océan";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Photographe natation au Pays Basque 📸 Shooting piscine & océan pour nageurs, triathlètes et sportifs à Anglet et Biarritz. Photos professionnelles et naturelles 🌊";
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
    name: "PhotoSurfPaysBasque – Photographe natation Pays Basque",
    description: "Photographe spécialisé en natation et sports aquatiques au Pays Basque. Shootings en piscine privée ou en océan pour nageurs et triathlètes.",
    url: "https://photosurfpaysbasque.fr/photographe-natation-pays-basque",
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
      { "@type": "City", name: "Bayonne" },
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
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* ===== HERO ===== */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Photographe natation · Pays Basque
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-primary to-ring bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide">
              Photographe Natation & Performance au Pays Basque 🏊‍♂️
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-10">
              Capturez vos entraînements et vos performances dans l'eau avec un shooting dédié aux nageurs, triathlètes et sportifs en préparation. En piscine privée ou en milieu naturel, chaque séance met en valeur votre technique, votre effort et votre progression.
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

        {/* ===== IMAGE HERO ===== */}
        <section className="px-4">
          <div className="container mx-auto max-w-5xl">
            <img
              src={natationHero}
              alt="Nageur en action sous l'eau - photographe natation immersif Pays Basque"
              width={1920}
              height={1080}
              className="w-full h-[50vh] md:h-[60vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== SECTION 1 ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Target className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Un regard précis sur votre performance
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              La natation est un sport exigeant où chaque détail compte. Grâce à des prises de vue adaptées, je capture votre technique, votre posture et vos mouvements pour sublimer votre progression et votre engagement.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2 ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Droplets className="w-10 h-10 text-accent-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              En piscine privée ou en océan
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Les shootings peuvent se faire en piscine privée pour un rendu maîtrisé et technique, ou en extérieur dans l'océan pour une approche plus immersive et dynamique, notamment pour les préparations type traversée de Biarritz.
            </p>
          </div>
        </section>

        {/* ===== IMAGE PRÉPARATION ===== */}
        <section className="px-4 py-8">
          <div className="container mx-auto max-w-5xl">
            <img
              src={natationPreparation}
              alt="Nageuse en préparation sur plongeoir piscine - photographe natation Pays Basque"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== SECTION 3 ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Trophy className="w-10 h-10 text-golden mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Préparation à la traversée de Biarritz
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              J'accompagne également les nageurs dans leur préparation à la traversée de Biarritz avec des images qui capturent l'intensité, la concentration et l'effort avant le jour J.
            </p>
          </div>
        </section>

        {/* ===== SECTION 4 ===== */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Users className="w-10 h-10 text-hot-pink mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Pour qui ?
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Nageurs, triathlètes, sportifs en préparation ou passionnés souhaitant garder une trace de leur progression.
            </p>
          </div>
        </section>

        {/* ===== IMAGE EFFORT ===== */}
        <section className="px-4 py-8">
          <div className="container mx-auto max-w-5xl">
            <img
              src={natationEffort}
              alt="Détail effort nageur dans l'eau - photographe performance natation Pays Basque"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== SECTION 5 : RÉSERVER ===== */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Réserver votre shooting natation
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-10">
              Envie d'images fortes de vos entraînements ou de votre préparation ? Contactez-moi pour organiser une séance adaptée à votre niveau et à vos objectifs.
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
              Questions fréquentes – Shooting natation Pays Basque
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

        <NatationContactForm />

        {/* ===== CTA FINAL ===== */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Waves className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Prêt à capturer votre performance ?
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed">
              Un message suffit pour organiser votre shooting natation au Pays Basque.
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

export default PhotographeNatationPaysBasque;
