import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Waves, Wind, Sun, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const WHATSAPP_URL = "https://wa.me/33695349187";
const WINDY_URL = "https://www.windy.com/?43.505,-1.541,12";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const surfReportConditions = [
  { icon: Waves, label: "Houle", value: "1,5 m à 3 m – ouest à nord-ouest", color: "text-blue-500" },
  { icon: Clock, label: "Période", value: "> 10 secondes", color: "text-indigo-500" },
  { icon: Wind, label: "Vent", value: "Faible offshore ou side-off", color: "text-green-500" },
  { icon: Sun, label: "Marée", value: "Mi-marée montante recommandée", color: "text-yellow-500" },
];

const faqItems = [
  {
    question: "Où trouver un photographe de surf à Anglet ?",
    answer: "Je suis basé à Anglet, à quelques minutes des plages de la Petite Chambre d'Amour, des Cavaliers et de La Barre. Je shoote exclusivement sur la côte basque, entre Anglet et Biarritz. Un message WhatsApp suffit pour organiser une session sur le spot le plus adapté aux conditions du jour.",
  },
  {
    question: "Comment se déroule une session photo surf à Anglet ?",
    answer: "On échange d'abord sur les conditions du jour : houle, vent, marée. Je choisis le spot le plus adapté entre la Petite Chambre d'Amour, Les Cavaliers ou La Barre. Je me positionne depuis les digues ou la plage selon l'angle idéal, et je shoote ta session en conditions réelles. Les photos sont livrées rapidement via un lien sécurisé.",
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
  const today = new Date();
  const dateStr = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "photoSURF pays basque – Thom, photographe surf",
    description: "Photographe surf professionnel à Anglet. Sessions photo et vidéo sur les spots de la Petite Chambre d'Amour, Les Cavaliers et La Barre au Pays Basque.",
    url: "https://photosurfpaysbasque.fr/photographe-surf-anglet",
    telephone: "+33695349187",
    image: "https://photosurfpaysbasque.fr/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plage de la Petite Chambre d'Amour",
      addressLocality: "Anglet",
      postalCode: "64600",
      addressRegion: "Pays Basque",
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 font-poppins">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <main className="pt-24">

        {/* ============================================= */}
        {/* 1. HERO – Nom, métier, localisation */}
        {/* ============================================= */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-widest text-purple-500 font-medium mb-4">
              Photographe surf professionnel · Anglet, Pays Basque
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 bg-clip-text text-transparent font-poppins leading-tight">
              Photographe surf à Anglet
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto">
              Je capture vos sessions selon les conditions du jour,<br />
              entre la Petite Chambre d'Amour et Les Cavaliers.
            </p>
            <p className="text-lg text-gray-500 mb-10">
              Anglet · Biarritz · Petite Chambre d'Amour · Les Cavaliers · La Barre
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 mr-3" />
                Me contacter pour une session
              </a>
            </Button>
          </div>
        </section>

        {/* ============================================= */}
        {/* 2. EXPERTISE LOCALE */}
        {/* ============================================= */}
        <section className="py-16 px-4 bg-white/40">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-700 font-poppins">
              Photographe spécialisé dans les activités océaniques au Pays Basque
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                Photographe spécialisé dans les activités océaniques au Pays Basque, je réalise des photos et vidéos pour le <strong>surf</strong>, le <strong>bodyboard</strong>, le <strong>longboard</strong>, le <strong>paddle</strong>, le <strong>foil</strong>, le <strong>kitesurf</strong>, la <strong>natation en eau libre</strong> et toutes les pratiques liées à l'océan.
              </p>
              <p>
                Être photographe à Anglet, c'est connaître chaque plage comme sa propre maison. Je sais exactement où la lumière tombe en premier le matin aux Cavaliers, comment les bancs de sable évoluent entre La Barre et la Petite Chambre d'Amour, et à quelle marée les sections deviennent les plus photogéniques.
              </p>
              <p>
                Cette connaissance du terrain fait la différence. Un <strong>photographe surf à Anglet</strong> qui connaît les courants, les cycles de houle et les variations saisonnières peut anticiper l'action avant qu'elle ne se produise. C'est ce qui permet de livrer des images qui racontent la réalité d'une session.
              </p>
              <p>
                Basé à quelques minutes des plages, je suis disponible rapidement quand les conditions s'alignent. Un message WhatsApp suffit pour vérifier si les conditions du jour à Anglet permettent une session photo de qualité.
              </p>
              <p>
                Anglet est l'un des rares spots du Pays Basque à offrir une diversité de pratiques océaniques aussi importante, entre digues, bancs de sable et plages exposées à différentes houles.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 3. SURF REPORT – Petite Chambre d'Amour */}
        {/* ============================================= */}
        <section className="py-16 px-4" id="surf-report">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-700 font-poppins mb-2">
                Surf report Anglet – Petite Chambre d'Amour
              </h2>
              <p className="text-gray-500 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2" />
                {dateStr}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                Conditions idéales pour la photo surf à Anglet
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {surfReportConditions.map((c) => (
                  <Card key={c.label} className="bg-white/90 text-center hover:shadow-lg transition-all border-0">
                    <CardHeader className="pb-2">
                      <c.icon className={`w-8 h-8 ${c.color} mx-auto`} />
                      <CardTitle className="text-base">{c.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 font-medium text-sm">{c.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                La <strong>Petite Chambre d'Amour</strong>, anciennement connue sous le nom de <strong>VVF</strong>, est mon spot principal pour la photographie surf à Anglet. Ce changement de nom reflète l'ancrage historique et géographique du spot, à proximité immédiate de la Chambre d'Amour.
              </p>
              <p>
                Le spot fonctionne principalement avec des <strong>houles d'ouest à nord-ouest</strong>. Entre <strong>Les Cavaliers et La Barre</strong>, les bancs de sable évoluent fréquemment, créant des sections rapides idéales pour la photographie surf.
              </p>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-full" asChild>
                <a href={WINDY_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Conditions en direct sur Windy – Anglet
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 4. AXES DE PRISE DE VUE – Immersion digues */}
        {/* ============================================= */}
        <section className="py-16 px-4 bg-white/40">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-700 font-poppins">
              Angles de prise de vue uniques depuis les digues d'Anglet
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                Les digues d'Anglet permettent une <strong>immersion totale dans l'action</strong>. Elles offrent des axes de prise de vue uniques entre Les Cavaliers, La Barre et la Petite Chambre d'Amour, avec une proximité rare avec les surfeurs et les pratiquants.
              </p>
              <p>
                En me positionnant sur les digues, je capture des images en <strong>contre-plongée</strong> ou <strong>à hauteur d'eau</strong>, ce qui renforce l'impression de puissance et de vitesse. C'est cette immersion qui donne aux photos de surf à Anglet une dimension particulière — le spectateur est au cœur de l'action.
              </p>
              <p>
                La lecture des vagues depuis les digues facilite aussi le timing : je vois les séries arriver, j'anticipe le take-off, et je déclenche au moment exact où le surfeur engage. C'est la combinaison de la connaissance du spot et du positionnement qui fait la différence.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 5. SESSIONS PHOTO SELON CONDITIONS */}
        {/* ============================================= */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-700 font-poppins">
              Sessions photo surf adaptées aux conditions du jour
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all border-0">
                <CardHeader>
                  <Camera className="w-10 h-10 text-purple-500 mb-2" />
                  <CardTitle className="text-lg">Photo depuis la plage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Objectif longue focale, suivi du surfeur sur plusieurs vagues. Idéal aux Cavaliers et à Marinella quand la houle est régulière et le vent faible.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all border-0">
                <CardHeader>
                  <MapPin className="w-10 h-10 text-blue-500 mb-2" />
                  <CardTitle className="text-lg">Photo depuis les digues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Position immersive à la Petite Chambre d'Amour. Angles en contre-plongée, proximité avec la zone d'impact. Les images les plus puissantes viennent d'ici.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all border-0">
                <CardHeader>
                  <Waves className="w-10 h-10 text-pink-500 mb-2" />
                  <CardTitle className="text-lg">Vidéo surf</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Captation vidéo en conditions réelles. Ralentis, angles serrés, ambiance de session. Livraison rapide pour partager ou analyser ta session.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 bg-white/80 rounded-2xl p-8 shadow-lg text-center">
              <p className="text-gray-700 text-lg leading-relaxed">
                Chaque session est programmée uniquement quand les conditions sont réunies. Je ne shoote pas par défaut — je choisis le moment, le spot et l'angle qui garantissent des images de qualité. C'est ce qui fait la différence entre un photographe surf à Anglet et un simple prestataire.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 6. FAQ SEO LOCALE */}
        {/* ============================================= */}
        <section className="py-16 px-4 bg-white/40">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-700 font-poppins">
              Questions fréquentes – Photographe surf à Anglet
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`q${i}`} className="bg-white/80 rounded-xl px-5 border-0">
                  <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ============================================= */}
        {/* 7. CONTACT RAPIDE – CTA */}
        {/* ============================================= */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Une session photo surf à Anglet aujourd'hui ?
            </h2>
            <p className="text-white/90 text-xl mb-10 leading-relaxed">
              Photographe local, réactif, disponible sur WhatsApp. Je vérifie les conditions et on s'organise dans l'heure.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-8 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-8 h-8 mr-3" />
                Me contacter sur WhatsApp
              </a>
            </Button>
            <p className="text-white/70 text-sm mt-6">
              Anglet · Biarritz · Petite Chambre d'Amour · Les Cavaliers · La Barre · Côte Basque
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PhotographeSurfAnglet;
