import { Button } from "@/components/ui/button";
import { Check, Star, Camera, Waves, MessageCircle, CreditCard, CalendarX } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const WHATSAPP_BOOK =
  "https://wa.me/33695349187?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20une%20session%20photo%2Fvid%C3%A9o%20%2845%E2%82%AC%29%20%F0%9F%93%B8";

const sessionInclus = [
  "Session surf, lifestyle ou océan",
  "Jusqu'à 2 à 3 personnes maximum",
  "Session dans l'eau ou à la plage",
  "Anglet, Biarritz, Hossegor & sud Landes",
  "Livraison galerie privée après la session",
];

const packs = [
  {
    name: "Pack Découverte",
    subtitle: "5 photos",
    price: "25€",
    badge: null,
    highlight: false,
    features: [
      "5 photos HD retouchées",
      "Livraison sous 48h",
      "Galerie privée en ligne",
    ],
    whatsapp:
      "https://wa.me/33695349187?text=Bonjour%2C%20je%20souhaite%20le%20Pack%20D%C3%A9couverte%20%2825%E2%82%AC%29%20apr%C3%A8s%20ma%20session%20%F0%9F%93%B8",
  },
  {
    name: "Pack Session",
    subtitle: "10 photos OU 5 vidéos",
    price: "40€",
    badge: "⭐ Le plus choisi",
    highlight: true,
    features: [
      "10 photos HD retouchées",
      "OU 5 clips vidéo courts",
      "Livraison sous 48h",
      "Galerie privée en ligne",
    ],
    whatsapp:
      "https://wa.me/33695349187?text=Bonjour%2C%20je%20souhaite%20le%20Pack%20Session%20%2840%E2%82%AC%29%20apr%C3%A8s%20ma%20session%20%F0%9F%8C%8A",
  },
  {
    name: "Pack Complet",
    subtitle: "Toutes les photos + vidéos",
    price: "75€",
    badge: "⭐ Full Pack",
    highlight: false,
    features: [
      "Toutes les photos réalisées pendant la session",
      "Toutes les vidéos réalisées pendant la session",
      "Retouches incluses",
      "Livraison sous 48h",
      "Galerie privée premium",
    ],
    whatsapp:
      "https://wa.me/33695349187?text=Bonjour%2C%20je%20souhaite%20le%20Pack%20Complet%20%2875%E2%82%AC%29%20apr%C3%A8s%20ma%20session%20%F0%9F%8F%84",
  },
];

const tarifsFaqs = [
  {
    question: "Pourquoi deux étapes (session + pack) ?",
    answer:
      "Les 45€ couvrent ma présence et le travail photo/vidéo pendant la session. Les packs sont des achats de contenus séparés : tu choisis après la session uniquement ce que tu veux récupérer. Tu n'es jamais engagé à acheter un pack.",
  },
  {
    question: "Comment se passe la réservation ?",
    answer:
      "Tu m'envoies un message WhatsApp, on cale le créneau selon les conditions. Je te confirme sous 2h.",
  },
  {
    question: "Que se passe-t-il si les conditions sont mauvaises ?",
    answer:
      "On décale ! Je surveille la houle, le vent et les marées. Si les conditions ne sont pas optimales, on reprogramme sans frais.",
  },
  {
    question: "Quand et comment se fait le paiement ?",
    answer:
      "La session se règle sur place. Le pack choisi est payé à la livraison de la galerie. Espèces, virement ou PayPal.",
  },
];

export const Tarifs = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      id="tarifs"
      className="py-16 min-[375px]:py-20 md:py-32 px-5 md:px-4 bg-gradient-night relative overflow-hidden retro-grain"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-hot-pink/5 blur-3xl" />

      <div ref={ref} className="container mx-auto max-w-5xl relative z-10 fade-in-section">
        {/* Header */}
        <p className="text-gradient-sunset font-medium tracking-[0.3em] uppercase text-xs mb-4 text-center">
          Tarifs transparents
        </p>
        <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl text-primary-foreground text-center mb-3 tracking-wide">
          COMMENT ÇA FONCTIONNE&nbsp;?
        </h2>
        <p className="text-primary-foreground/70 text-center max-w-2xl mx-auto mb-12 min-[375px]:mb-16 text-base min-[375px]:text-lg">
          Deux étapes simples : tu réserves ta session, puis tu choisis seulement les contenus
          que tu veux récupérer.
        </p>

        {/* ÉTAPE 1 — SESSION */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-display text-2xl text-golden tracking-widest">ÉTAPE 1</span>
            <span className="h-px flex-1 max-w-[80px] bg-golden/40" />
          </div>

          <div className="bg-night/70 backdrop-blur-sm rounded-2xl p-6 min-[375px]:p-8 md:p-12 border-2 border-golden/40 ring-1 ring-golden/20 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-golden/10 blur-3xl pointer-events-none" />

            <div className="relative grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              {/* Prix */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-golden/15 border border-golden/30">
                  <Camera className="w-4 h-4 text-golden" />
                  <span className="text-golden text-xs tracking-widest uppercase font-medium">
                    Réserve ta session
                  </span>
                </div>
                <h3 className="font-display text-2xl min-[375px]:text-3xl md:text-4xl text-primary-foreground mb-4 tracking-wider">
                  📸 Session photo / vidéo
                </h3>
                <div className="flex items-baseline gap-2 justify-center md:justify-start mb-3">
                  <span className="font-display text-6xl min-[375px]:text-7xl md:text-8xl text-gradient-sunset leading-none">
                    45€
                  </span>
                  <span className="text-primary-foreground/60 text-base tracking-widest uppercase">
                    / heure
                  </span>
                </div>
                <p className="text-primary-foreground/80 text-sm min-[375px]:text-base italic">
                  Les 45€ correspondent à la présence du photographe pendant la session.
                </p>
              </div>

              {/* Inclus */}
              <div>
                <p className="text-primary-foreground/60 text-xs tracking-widest uppercase mb-4">
                  Inclus dans la session
                </p>
                <ul className="space-y-3">
                  {sessionInclus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-primary-foreground text-sm min-[375px]:text-base">
                      <Check className="w-5 h-5 text-golden flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-8 pt-6 border-t border-electric-violet/20 flex flex-col min-[375px]:flex-row items-center justify-between gap-4">
              <p className="text-primary-foreground/60 text-xs min-[375px]:text-sm italic text-center min-[375px]:text-left">
                Pack Team / Groupe disponible sur demande pour les groupes plus importants.
              </p>
              <Button
                asChild
                className="bg-gradient-sunset text-foreground rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:opacity-95 booking-hover shimmer-cta w-full min-[375px]:w-auto"
              >
                <a href={WHATSAPP_BOOK} target="_blank" rel="noopener noreferrer" className="relative z-[2]">
                  Réserver ma session
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* SÉPARATEUR */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <span className="h-px flex-1 max-w-[120px] bg-electric-violet/30" />
          <span className="text-primary-foreground/70 text-xs tracking-[0.4em] uppercase">
            puis
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-electric-violet/30" />
        </div>

        {/* ÉTAPE 2 — PACKS */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-display text-2xl text-hot-pink tracking-widest">ÉTAPE 2</span>
            <span className="h-px flex-1 max-w-[80px] bg-hot-pink/40" />
          </div>

          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-hot-pink/15 border border-hot-pink/30">
              <Waves className="w-4 h-4 text-hot-pink" />
              <span className="text-hot-pink text-xs tracking-widest uppercase font-medium">
                Choisis tes contenus
              </span>
            </div>
            <h3 className="font-display text-2xl min-[375px]:text-3xl md:text-4xl text-primary-foreground mb-3 tracking-wider px-2">
              🌊 Choisis ensuite les contenus que tu souhaites récupérer
            </h3>
            <p className="text-primary-foreground/75 max-w-2xl mx-auto mb-2 text-sm min-[375px]:text-base">
              Après la session, choisis uniquement les photos ou vidéos que tu veux conserver.
            </p>
            <p className="text-golden/90 text-sm min-[375px]:text-base mb-10 italic">
              Photos disponibles aussi à l'unité : 15€ / photo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10">
            {packs.map((pack, i) => (
              <div
                key={i}
                className={`relative bg-night/60 backdrop-blur-sm rounded-2xl p-6 md:p-7 border flex flex-col ${
                  pack.highlight
                    ? "border-golden/60 ring-2 ring-golden/30 md:scale-[1.03] shadow-2xl"
                    : "border-electric-violet/25"
                }`}
              >
                {pack.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-sunset text-foreground text-[10px] min-[375px]:text-xs font-bold tracking-widest uppercase whitespace-nowrap shadow-lg">
                    {pack.badge}
                  </span>
                )}

                <div className="text-center mb-5 mt-2">
                  <h4 className="font-display text-xl md:text-2xl text-primary-foreground mb-2 tracking-wider">
                    {pack.name}
                  </h4>
                  <p className="font-display text-5xl md:text-6xl text-primary-foreground mb-2 leading-none">
                    {pack.price}
                  </p>
                  <p className="text-primary-foreground/60 text-sm tracking-wide">
                    {pack.subtitle}
                  </p>
                </div>

                <ul className="space-y-2.5 text-left mb-6 flex-1">
                  {pack.features.map((feat, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-primary-foreground/90 text-sm"
                    >
                      <Check className="w-4 h-4 text-golden flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-full font-semibold booking-hover ${
                    pack.highlight
                      ? "bg-gradient-sunset text-foreground py-6 text-base shimmer-cta"
                      : "bg-electric-violet/30 text-primary-foreground border border-electric-violet/40 py-5 text-sm hover:bg-electric-violet/40"
                  }`}
                >
                  <a href={pack.whatsapp} target="_blank" rel="noopener noreferrer" className="relative z-[2]">
                    Choisir ce pack
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Réassurance */}
          <div className="grid grid-cols-1 min-[375px]:grid-cols-3 gap-4 mb-10 bg-night/40 rounded-xl p-5 border border-electric-violet/15">
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

          <p className="text-center text-primary-foreground/60 italic mb-10">
            Tu choisis uniquement les photos que tu aimes. Pas d'engagement.
          </p>
        </div>

        {/* FAQ courte */}
        <div className="bg-night/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-electric-violet/20">
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
