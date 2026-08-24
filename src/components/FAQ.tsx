import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const visibleFaqs = [
  {
    question: "Combien coûte une session photo surf à Anglet ?",
    answer:
      "Les séances démarrent à 45 €/h. Tu peux aussi opter pour un pack photos selon tes besoins : 5 photos numériques, 10 photos, ou l'intégralité de la session. Le paiement se fait après la séance, une fois que tu as vu les photos.",
  },
  {
    question: "Comment réserver une session ?",
    answer:
      "Le plus simple est de m'envoyer un message WhatsApp au 06 95 34 91 87 ou de remplir le formulaire de contact en bas de page. Prévoir environ 48h à l'avance pour qu'on puisse checker ensemble les conditions météo et marées.",
  },
  {
    question: "Comment retrouver mes photos si je n'ai pas réservé de session (session libre) ?",
    answer:
      "Pas besoin d'avoir réservé ! Je shoote régulièrement en session libre sur les spots d'Anglet (VVF, Marinella, Sables d'Or, Chambre d'Amour). Après chaque session, les photos sont mises en ligne sur Water Social Club, classées par date et par spot. Tu navigues, tu repères tes vagues et tu télécharges directement en haute résolution.",
  },
  {
    question: "Où sont livrées mes photos après la session ? (Water Social Club)",
    answer:
      "Après une session réservée, tu reçois un lien vers ta galerie privée en ligne sous 48 à 72h. Pour les sessions libres, tout passe par Water Social Club. Dans les deux cas, tu télécharges tes photos en haute résolution, sans watermark.",
  },
  {
    question: "Quelles plages/spots sont couverts ?",
    answer:
      "Je shoote principalement à Anglet (VVF, Marinella, Sables d'Or, Chambre d'Amour, Les Cavaliers, La Barre), mais aussi sur Biarritz, Bidart et jusqu'à Hossegor selon les conditions. Dis-moi où tu surfs et on organise la session au meilleur spot.",
  },
  {
    question: "Sous combien de temps je reçois mes photos ?",
    answer:
      "Tes photos sont disponibles sous 48 à 72h maximum après la séance. Pour les urgences (cadeau, départ, concours…), un traitement express est possible sur demande.",
  },
];

const accordionFaqs = [
  {
    question: "Et si les conditions ne sont pas bonnes ?",
    answer:
      "On décale ! Je surveille la houle, le vent et les marées en permanence. Si les conditions ne sont pas optimales, on reprogramme ensemble sans frais supplémentaires. L'objectif est toujours d'avoir les meilleures photos possibles.",
  },
  {
    question: "Peut-on venir en groupe ?",
    answer:
      "Bien sûr ! Sessions en duo, en famille, entre potes… Plus on est, plus c'est fun. Le tarif de la séance reste le même, seul le nombre de photos peut varier selon la durée.",
  },
  {
    question: "Je suis débutant, c'est possible ?",
    answer:
      "Absolument ! Que tu sois débutant ou confirmé, je m'adapte. Les photos de débutants ont souvent un charme unique — l'énergie, les premiers take-off, les wipeouts épiques.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Virement bancaire, PayPal ou espèces. Le paiement se fait après la séance, une fois que tu as vu les photos. Pas de mauvaise surprise.",
  },
];

const allFaqs = [...visibleFaqs, ...accordionFaqs];

export const FAQ = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="faq" className="py-16 min-[375px]:py-20 md:py-28 px-5 md:px-4 bg-background">
      <div ref={ref} className="container mx-auto max-w-5xl fade-in-section">
        <p className="text-center text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">
          Questions fréquentes
        </p>
        <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl text-foreground text-center mb-10 min-[375px]:mb-14 tracking-wide">
          FAQ
        </h2>

        {/* FAQ visible dans le HTML */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-14 md:mb-20">
          {visibleFaqs.map((faq, i) => (
            <article
              key={i}
              className="bg-sand rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-display text-xl md:text-2xl text-deep-purple mb-3 leading-tight">
                {faq.question}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-base">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        {/* Accordéon complémentaire */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-muted-foreground text-sm uppercase tracking-[0.2em] mb-6">
            Autres questions
          </p>
          <Accordion type="single" collapsible className="w-full">
            {accordionFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-foreground hover:no-underline text-base min-[375px]:text-lg font-medium py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};
