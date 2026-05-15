import { useEffect } from "react";
import { setSeo } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Waves, MapPin, Camera, Users } from "lucide-react";
import { SurfContactForm } from "@/components/SurfContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bodysurfHero from "@/assets/bodysurf-hero.jpg";
import bodysurfAction from "@/assets/bodysurf-action.jpg";
import bodysurfLifestyle from "@/assets/bodysurf-lifestyle.jpg";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%20au%20Pays%20Basque.%20Voici%20mes%20disponibilit%C3%A9s%20%3A%20...";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const faqItems = [
  {
    question: "Qu'est-ce qu'un shooting body surf au Pays Basque ?",
    answer: "C'est une séance photo dédiée au body surf, réalisée directement dans l'eau ou depuis les digues. L'objectif est de capturer l'énergie brute de la glisse, les trajectoires dans la vague et les sensations uniques de cette pratique sur les spots d'Anglet et Biarritz.",
  },
  {
    question: "Où se déroulent les séances photo body surf ?",
    answer: "Sur toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers. Le spot est choisi en fonction des conditions de houle, de vent et de marée pour garantir les meilleures images.",
  },
  {
    question: "Faut-il être un bon body surfeur pour faire un shooting ?",
    answer: "Pas nécessairement. Les séances sont adaptées à tous les niveaux. Que tu sois débutant ou confirmé, l'important est de profiter de l'océan. Les photos capturent l'instant, quelle que soit ton expérience.",
  },
  {
    question: "Combien de temps dure une session photo body surf ?",
    answer: "Entre 1h et 2h selon les conditions et l'énergie du moment. On s'adapte à la marée et à la lumière pour maximiser la qualité des images.",
  },
  {
    question: "Peut-on combiner body surf et surf classique dans une même session ?",
    answer: "Oui, c'est tout à fait possible. Beaucoup de pratiquants alternent entre les deux. La séance peut couvrir les deux disciplines pour un rendu varié et complet.",
  },
  {
    question: "Comment réserver un shooting body surf au Pays Basque ?",
    answer: "Un simple message WhatsApp suffit. On échange sur les conditions du jour, le spot idéal et on organise la session rapidement. Je suis basé à Anglet, je peux être opérationnel très vite.",
  },
];

const PhotographeBodySurfPaysBasque = () => {
  useEffect(() => {
    setSeo({ title: 'Photographe Bodysurf Pays Basque | Anglet', description: "Photographe bodysurf au Pays Basque : shooting dans l'eau à Anglet, La Barre et les Cavaliers. Photos immersives, réservation par WhatsApp.", path: '/photographe-body-surf-pays-basque' });
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Photographer"],
    name: "PhotoSurfPaysBasque – Photographe body surf Pays Basque",
    description: "Photographe spécialisé en body surf au Pays Basque. Photos immersives dans l'eau à Anglet, La Barre, Les Cavaliers et Biarritz.",
    url: "https://photosurfpaysbasque.fr/photographe-body-surf-pays-basque",
    telephone: "+33695349187",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anglet",
      postalCode: "64600",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 43.505, longitude: -1.541 },
    areaServed: [
      { "@type": "City", name: "Anglet" },
      { "@type": "City", name: "Biarritz" },
      { "@type": "City", name: "Bidart" },
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
        <section className="py-12 md:py-24 px-5 md:px-4">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
                Photographe body surf · Anglet, Pays Basque
              </p>
              <h1 className="text-3xl min-[375px]:text-4xl md:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary via-primary to-ring bg-clip-text text-transparent leading-tight font-bebas-neue tracking-wide">
                Photographe Body Surf au Pays Basque 🌊
              </h1>
              <p className="text-base min-[375px]:text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 md:mb-10">
                Le body surf, c'est le plaisir brut de la glisse, au plus près de l'eau et des sensations. Je shoote sur toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers.
              </p>
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-7 py-4 min-[375px]:px-8 min-[375px]:py-5 md:px-10 md:py-6 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-3" />
                  Réserver via WhatsApp
                </a>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={bodysurfHero}
                alt="Body surfeur en action dans les vagues du Pays Basque à Anglet"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 1: AU CŒUR DE L'ACTION */}
        <section className="py-12 md:py-16 px-5 md:px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <Camera className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-5 md:mb-6" />
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">
              Des images au cœur de l'action
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              En body surf, tout se joue dans l'instant. Mon approche consiste à photographier au plus près de la session, dans l'eau, pour capter les trajectoires, les éclaboussures, les regards et l'énergie de chaque vague. Contrairement au surf classique, le body surf place le pratiquant au ras de l'eau, ce qui offre des perspectives uniques et des images chargées d'émotion. Je travaille depuis les digues d'Anglet ou directement dans l'océan pour saisir chaque moment avec précision.
            </p>
          </div>
        </section>

        {/* IMAGE ACTION */}
        <section className="px-5 md:px-4 py-6 md:py-8">
          <div className="container mx-auto max-w-5xl">
            <img
              src={bodysurfAction}
              alt="Body surf en mouvement sur la côte basque Anglet Cavaliers"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* SECTION 2: PRATIQUE LIBRE */}
        <section className="py-12 md:py-16 px-5 md:px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Waves className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground mx-auto mb-5 md:mb-6" />
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">
              Une pratique libre et accessible
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Le body surf séduit autant les passionnés d'océan que ceux qui recherchent une glisse plus instinctive et naturelle. Que vous soyez habitué des vagues ou simplement en quête de sensations, une séance photo body surf permet de garder une trace forte et authentique de ce moment. C'est la forme de glisse la plus pure : pas de planche, pas d'équipement complexe, juste le corps et la vague. Le résultat en images est brut, puissant et sincère.
            </p>
          </div>
        </section>

        {/* SECTION 3: SPOTS */}
        <section className="py-12 md:py-16 px-5 md:px-4 bg-card/60">
          <div className="container mx-auto max-w-5xl">
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-5 md:mb-6" />
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-primary">
              Les spots de body surf au Pays Basque
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center mb-6 md:mb-8">
              Je shoote sur toute la côte d'Anglet, de la Petite Chambre d'Amour (VVF) jusqu'à La Barre, en passant par les Sables d'Or, Marinella, les Corsaires, la Madrague, les Dunes et les Cavaliers. La Barre, avec ses vagues longues et régulières, est idéale pour le body surf. Les Cavaliers offrent des conditions puissantes, parfaites pour des images dynamiques. La Petite Chambre d'Amour, avec ses digues, permet des angles de prise de vue uniques en contre-plongée.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              {[
                { name: "La Barre", description: "Vagues longues et régulières, spot idéal pour le body surf" },
                { name: "Les Cavaliers", description: "Beach break puissant, images dynamiques et intenses" },
               { name: "Petite Chambre d'Amour (VVF)", description: "Angles uniques depuis les digues, contre-plongées immersives" },
                { name: "Les Sables d'Or", description: "Ambiance douce, lumières de fin de journée" },
                { name: "Marinella", description: "Beach break régulier, spot polyvalent" },
                { name: "Les Corsaires", description: "Vagues techniques pour les confirmés" },
                { name: "La Madrague", description: "Cadre sauvage, lumière spectaculaire" },
                { name: "Les Dunes", description: "Espace dégagé, houle constante" },
              ].map((spot) => (
                <div key={spot.name} className="bg-background/80 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all border border-border/50">
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

        {/* SECTION 4: POUR QUI */}
        <section className="py-12 md:py-16 px-5 md:px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-hot-pink mx-auto mb-5 md:mb-6" />
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">
              Pour qui ?
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Le shooting body surf s'adresse aux passionnés d'océan, aux amateurs de sensations fortes, aux groupes d'amis qui partagent une session, aux familles sportives ou à tous ceux qui veulent garder un souvenir unique de leur passage sur la côte basque. Que tu sois en vacances au Pays Basque ou résident à Anglet, Biarritz ou dans le sud des Landes, je m'adapte à ton niveau et à tes envies pour créer des images qui te ressemblent.
            </p>
          </div>
        </section>

        {/* IMAGE LIFESTYLE */}
        <section className="px-5 md:px-4 py-6 md:py-8">
          <div className="container mx-auto max-w-5xl">
            <img
              src={bodysurfLifestyle}
              alt="Moment lifestyle body surf lumière dorée Pays Basque Anglet"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* SECTION 5: DÉROULEMENT */}
        <section className="py-12 md:py-16 px-5 md:px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">
              Comment se déroule une séance photo body surf ?
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              On commence par échanger sur les conditions du jour : direction de la houle, force du vent, coefficient de marée. Je choisis ensuite le spot le plus adapté entre La Barre, Les Cavaliers ou la Petite Chambre d'Amour à Anglet. Je me positionne depuis les digues ou directement dans l'eau selon l'angle recherché. Tu surfes ta session normalement, et je capture les meilleurs moments. Les photos sont livrées rapidement via un lien sécurisé. Chaque séance dure entre 1h et 2h, en fonction de la lumière et de l'énergie.
            </p>
          </div>
        </section>

        {/* SECTION LIEN SURF */}
        <section className="py-8 md:py-10 px-5 md:px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-base md:text-lg text-foreground/70 mb-5">
              Tu pratiques aussi le surf classique ? Découvre mes shootings surf à Anglet pour une couverture complète de tes sessions.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-bold rounded-full shadow-lg hover:opacity-90 transition-opacity w-full sm:w-auto" asChild>
              <a href="/photographe-surf-anglet">
                Découvrir le Shooting Surf 🏄
              </a>
            </Button>
          </div>
        </section>

        {/* RÉSERVER */}
        <section className="py-12 md:py-16 px-5 md:px-4 bg-card/60">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">
              Réserver votre séance body surf
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10">
              Envie de capturer une session body surf au Pays Basque ? Contactez-moi pour organiser votre séance en fonction des conditions météo et des marées sur les spots d'Anglet et Biarritz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-7 py-4 min-[375px]:px-8 min-[375px]:py-5 md:px-10 md:py-6 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-6 h-6 mr-3" />
                  Réserver via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-7 py-4 md:px-10 md:py-6 text-base md:text-xl font-bold rounded-full shadow-lg w-full sm:w-auto" asChild>
                <a href="tel:+33695349187">
                  📞 Appeler directement
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ SEO */}
        <section className="py-12 md:py-16 px-5 md:px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl min-[375px]:text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-primary">
              Questions fréquentes – Body surf Pays Basque
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

        {/* CTA FINAL */}
        <section className="py-14 md:py-20 px-5 md:px-4 bg-gradient-to-r from-primary via-hot-pink to-golden">
          <div className="container mx-auto text-center max-w-3xl">
            <Waves className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground/80 mx-auto mb-5 md:mb-6" />
            <h2 className="text-3xl min-[375px]:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Prêt à capturer ta session body surf ?
            </h2>
            <p className="text-primary-foreground/90 text-base min-[375px]:text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
              Un message suffit. Je vérifie les conditions à Anglet et on s'organise dans l'heure.
            </p>
            <Button size="lg" className="bg-golden hover:bg-golden/90 text-foreground px-8 py-5 min-[375px]:px-10 min-[375px]:py-6 md:px-12 md:py-7 text-base min-[375px]:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:opacity-90 transition-opacity w-full sm:w-auto" asChild>
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

export default PhotographeBodySurfPaysBasque;
