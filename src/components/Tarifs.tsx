import { Button } from "@/components/ui/button";
import { Check, Star, CreditCard, CalendarX, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const WHATSAPP_URL = "https://wa.me/33695349187";

const packs = [
  {
    name: "Pack Découverte",
    photos: "5 photos",
    price: "45€",
    highlight: false,
    badge: null,
    features: [
      "Photos ou vidéo — au choix",
      "5 photos HD retouchées OU 1 clip vidéo",
      "Séance 1h dans l'eau ou en extérieur",
      "Galerie privée en ligne",
      "Livraison sous 48h",
      "Parfait pour tester",
    ],
    whatsapp:
      "https://wa.me/33695349187?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pack%20D%C3%A9couverte%20%2845%E2%82%AC%29%20%F0%9F%8F%84",
  },
  {
    name: "Pack Session",
    photos: "10 photos",
    price: "80€",
    highlight: true,
    badge: "Le plus choisi",
    features: [
      "Photos ET/OU vidéo — au choix",
      "10 photos HD retouchées ET/OU 1 clip vidéo",
      "Séance 1h30 dans l'eau ou en extérieur",
      "Galerie privée en ligne",
      "Livraison sous 48h",
      "Droits d'utilisation personnels inclus",
      "Économise 10€ vs tarif horaire",
    ],
    whatsapp:
      "https://wa.me/33695349187?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pack%20Session%20%2880%E2%82%AC%29%20%F0%9F%8F%84",
  },
  {
    name: "Pack Premium",
    photos: "25 photos",
    price: "150€",
    highlight: false,
    badge: "Meilleur rapport",
    features: [
      "Photos ET vidéo inclus",
      "25 photos HD retouchées + clip vidéo highlight",
      "Séance 2h dans l'eau ou en extérieur",
      "Galerie privée en ligne",
      "Livraison sous 48h",
      "Droits d'utilisation personnels inclus",
      "Idéal pour les compétiteurs et riders réguliers",
    ],
    whatsapp:
      "https://wa.me/33695349187?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pack%20Premium%20%28150%E2%82%AC%29%20%F0%9F%8F%84",
  },
];

const seanceInclus = [
  "Prise de vue pendant la session",
  "Captation dans l'eau ou en extérieur",
  "Sélection des meilleures images",
  "Mise en ligne dans une galerie privée",
  "Photos HD haute résolution",
];

const tarifsFaqs = [
  {
    question: "Comment se passe la réservation ?",
    answer:
      "Tu m'envoies un message WhatsApp, on choisit ensemble le créneau selon les conditions de surf. Je te confirme sous 2h.",
  },
  {
    question: "Puis-je choisir photos ET vidéo dans le même pack ?",
    answer:
      "Oui ! Les packs Session et Premium incluent les deux. Pour le Pack Découverte, on choisit ensemble selon tes priorités.",
  },
  {
    question: "Que se passe-t-il si les conditions sont mauvaises ?",
    answer:
      "On décale ! Je surveille la houle, le vent et les marées en permanence. Si les conditions ne sont pas optimales, on reprogramme ensemble sans frais supplémentaires.",
  },
  {
    question: "Quand et comment se fait le paiement ?",
    answer:
      "Le paiement se fait sur place après la séance, une fois que tu as vu les photos. Espèces, virement ou PayPal acceptés. Pas de mauvaise surprise.",
  },
];

export const Tarifs = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="tarifs" className="py-16 min-[375px]:py-20 md:py-32 px-5 md:px-4 bg-gradient-night relative overflow-hidden retro-grain">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hot-pink/5 blur-3xl" />

      <div ref={ref} className="container mx-auto max-w-4xl relative z-10 fade-in-section">
        <p className="text-gradient-sunset font-medium tracking-[0.3em] uppercase text-xs mb-6 text-center inline-block w-full">📸 Nos formules</p>

        {/* Séance photo & vidéo */}
        <div className="bg-night/60 backdrop-blur-sm rounded-lg p-6 min-[375px]:p-8 md:p-10 border border-electric-violet/20 mb-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2 tracking-wider">
            Séance Photo & Vidéo
          </h2>
          <p className="font-display text-6xl min-[375px]:text-7xl text-primary-foreground mb-2">45€</p>
          <p className="text-primary-foreground/50 text-lg mb-2 tracking-widest uppercase">/ heure</p>
          <p className="text-primary-foreground/80 text-base italic mb-6">
            Choisissez photos, vidéo, ou les deux — selon vos envies
          </p>
          <ul className="space-y-3 text-left max-w-sm mx-auto">
            {seanceInclus.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-primary-foreground">
                <Check className="w-5 h-5 text-golden flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Packs photos */}
        <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6 text-center tracking-wider">
          Choisis ton pack photo & vidéo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
          {packs.map((pack, i) => (
            <div
              key={i}
              className={`bg-night/60 backdrop-blur-sm rounded-lg p-6 md:p-7 border text-center relative flex flex-col ${
                pack.highlight ? "border-golden/60 ring-2 ring-golden/30 md:scale-105" : "border-electric-violet/20"
              }`}
            >
              {pack.badge && (
                <span className="inline-flex items-center justify-center gap-1 text-golden text-xs font-medium tracking-widest uppercase mb-3">
                  <Star className="w-3 h-3 fill-golden" /> {pack.badge}
                </span>
              )}
              <h4 className="font-display text-xl text-primary-foreground mb-2 tracking-wider">{pack.name}</h4>
              <p className="font-display text-5xl text-primary-foreground mb-1">{pack.price}</p>
              <p className="text-primary-foreground/60 text-sm mb-5">{pack.photos}</p>

              <ul className="space-y-2.5 text-left mb-6 flex-1">
                {pack.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 text-primary-foreground/90 text-sm">
                    <Check className="w-4 h-4 text-golden flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full font-semibold hover:opacity-95 booking-hover shimmer-cta ${
                  pack.highlight
                    ? "bg-gradient-sunset text-foreground py-6 text-base shadow-2xl shimmer-cta-fast"
                    : "bg-electric-violet/30 text-primary-foreground border border-electric-violet/40 py-5 text-sm"
                }`}
              >
                <a href={pack.whatsapp} target="_blank" rel="noopener noreferrer" className="relative z-[2]">
                  Réserver ce pack
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bandeau réassurance */}
        <div className="grid grid-cols-1 min-[375px]:grid-cols-3 gap-4 mb-8 bg-night/40 rounded-lg p-5 border border-electric-violet/15">
          <div className="flex items-center justify-center gap-2 text-primary-foreground/85 text-sm">
            <CreditCard className="w-5 h-5 text-golden flex-shrink-0" />
            <span>Paiement sur place</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/85 text-sm">
            <CalendarX className="w-5 h-5 text-golden flex-shrink-0" />
            <span>Annulation gratuite 24h avant</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/85 text-sm">
            <MessageCircle className="w-5 h-5 text-golden flex-shrink-0" />
            <span>Réponse WhatsApp sous 2h</span>
          </div>
        </div>

        <p className="text-center text-primary-foreground/60 italic mb-8">Tu choisis uniquement les photos que tu aimes. Pas d'engagement.</p>

        {/* CTA général */}
        <div className="text-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-sunset text-foreground px-8 min-[375px]:px-12 py-6 min-[375px]:py-7 text-base min-[375px]:text-lg font-semibold rounded-full shadow-2xl w-full sm:w-auto hover:opacity-90 transition-opacity"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              👉 Réserver ma session
            </a>
          </Button>
        </div>

        {/* FAQ courte */}
        <div className="bg-night/40 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-electric-violet/20">
          <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6 text-center tracking-wider">
            Questions fréquentes
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {tarifsFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`tarif-faq-${i}`} className="border-electric-violet/20">
                <AccordionTrigger className="text-left text-primary-foreground hover:no-underline text-base font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/75 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
