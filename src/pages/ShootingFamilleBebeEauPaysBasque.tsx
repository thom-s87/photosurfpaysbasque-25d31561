import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sun, Baby, Sparkles, Users } from "lucide-react";
import { FamilleContactForm } from "@/components/FamilleContactForm";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/famille-bebe-eau-1.jpg";
import detailImg from "@/assets/famille-bebe-eau-2.jpg";
import silhouetteImg from "@/assets/famille-bebe-eau-3.jpg";

const WHATSAPP_URL = "https://wa.me/33695349187";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const faqItems = [
  {
    question: "À partir de quel âge peut-on faire un shooting bébé dans l'eau ?",
    answer: "Les séances sont adaptées dès les premiers mois. Le rythme et la durée sont ajustés à l'âge et au confort de votre enfant. La sécurité est toujours la priorité.",
  },
  {
    question: "Où se déroulent les séances famille à l'eau ?",
    answer: "Sur toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers. Le lieu est choisi ensemble selon vos envies et les conditions du jour.",
  },
  {
    question: "Combien de temps dure une séance ?",
    answer: "Entre 45 minutes et 1h30, selon l'âge des enfants et le rythme de la famille. Aucune pression, on prend le temps qu'il faut.",
  },
  {
    question: "Faut-il prévoir des tenues spéciales ?",
    answer: "Non, venez comme vous êtes ! Des vêtements légers et confortables suffisent. L'essentiel est de se sentir bien pour profiter du moment.",
  },
  {
    question: "Comment réserver une séance famille ?",
    answer: "Un simple message WhatsApp suffit. On échange sur vos envies, la date et le lieu idéal. Je vous guide à chaque étape.",
  },
];

const ShootingFamilleBebeEauPaysBasque = () => {
  useEffect(() => {
    document.title = "Photographe Famille Pays Basque | Séance plage & bébé nageur";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Photographe famille au Pays Basque 📸 Séance plage & bébé nageur à Anglet et Biarritz. Photos naturelles en famille dans l'eau. Réservation rapide via WhatsApp 🌊";
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
    name: "PhotoSurfPaysBasque – Shooting famille & bébé à l'eau",
    description: "Photographe spécialisé en shooting famille et bébé dans l'eau au Pays Basque. Séances naturelles à Anglet, Biarritz et sur la côte basque.",
    url: "https://photosurfpaysbasque.fr/shooting-famille-bebe-eau-pays-basque",
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
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* HERO */}
        <section className="relative py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
                Shooting famille & bébé · Pays Basque
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-hot-pink to-primary bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide">
                Shooting Famille & Bébé à l'eau au Pays Basque 👶🌊
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10">
                Capturez vos moments en famille dans l'océan avec un shooting naturel et authentique. Entre rires, éclaboussures et douceur, chaque séance est pensée pour créer des souvenirs uniques avec votre bébé ou vos enfants.
              </p>
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-3" />
                  Réserver via WhatsApp
                </a>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt="Famille avec bébé jouant dans l'eau au coucher du soleil au Pays Basque" width={1280} height={864} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Heart className="w-10 h-10 text-hot-pink mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Des moments vrais, capturés dans l'eau</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Les plus beaux souvenirs sont souvent les plus simples. Un regard, un rire, un instant partagé dans l'eau… Mon approche est de capturer ces moments spontanés, sans mise en scène, dans un cadre naturel.
            </p>
          </div>
        </section>

        {/* SECTION 2 + IMAGE */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img src={detailImg} alt="Maman et bébé pieds dans l'eau sur la plage au Pays Basque" loading="lazy" width={1280} height={864} className="w-full h-auto object-cover" />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <Sun className="w-10 h-10 text-golden mx-auto md:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Un cadre idéal entre océan et lumière</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Les séances se déroulent sur toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers. L'océan, la lumière et le mouvement créent une atmosphère douce, vivante et pleine d'émotion.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Baby className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Adapté aux bébés et enfants</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Chaque séance est adaptée à l'âge de votre enfant. Le rythme est respecté pour garantir confort, sécurité et plaisir. L'objectif : une expérience agréable pour toute la famille.
            </p>
          </div>
        </section>

        {/* SECTION 4 + IMAGE */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <Sparkles className="w-10 h-10 text-hot-pink mx-auto md:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Une expérience avant tout</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Plus qu'un shooting, c'est un moment à vivre ensemble. Un souvenir à partager aujourd'hui… et à garder toute une vie.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={silhouetteImg} alt="Famille marchant ensemble dans l'eau au coucher du soleil" loading="lazy" width={1280} height={864} className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* RÉSERVER */}
        <section className="py-16 px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Users className="w-10 h-10 text-golden mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Réserver votre séance famille</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-10">
              Envie de capturer vos moments en famille au Pays Basque ? Contactez-moi pour organiser votre séance en fonction des conditions et de vos envies.
            </p>
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Réserver via WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* PACK FAMILLE */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Heart className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Pack Famille 💜</h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-4">
              Capturez les moments qui comptent vraiment.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-8">
              De la grossesse aux premiers moments dans l'eau, jusqu'aux souvenirs en famille, je vous propose de suivre votre histoire à travers plusieurs séances.
            </p>
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              <li className="flex items-center gap-3 text-foreground/80 text-lg">
                <Sparkles className="w-5 h-5 text-hot-pink flex-shrink-0" />
                Séance grossesse
              </li>
              <li className="flex items-center gap-3 text-foreground/80 text-lg">
                <Sparkles className="w-5 h-5 text-hot-pink flex-shrink-0" />
                Séance bébé ou bébé nageur
              </li>
              <li className="flex items-center gap-3 text-foreground/80 text-lg">
                <Sparkles className="w-5 h-5 text-hot-pink flex-shrink-0" />
                Séance famille plage ou piscine
              </li>
            </ul>
            <p className="text-lg italic text-foreground/60 mb-10">
              Parce que ces moments passent vite… autant les garder pour toujours.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Heart className="w-5 h-5 mr-2" />
                Découvrir le pack famille
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

        <FamilleContactForm />

        {/* CTA FINAL */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Heart className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Prêts à créer des souvenirs en famille ?</h2>
            <p className="text-primary-foreground/90 text-xl mb-10 leading-relaxed">
              Un message suffit pour organiser votre séance famille dans l'eau au Pays Basque.
            </p>
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-12 py-8 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
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

export default ShootingFamilleBebeEauPaysBasque;
