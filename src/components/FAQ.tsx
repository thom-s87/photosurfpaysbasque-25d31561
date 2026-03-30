import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const faqs = [
  {
    question: "Et si les conditions ne sont pas bonnes ?",
    answer:
      "On décale ! Je surveille la houle, le vent et les marées en permanence. Si les conditions ne sont pas optimales, on reprogramme ensemble sans frais supplémentaires. L'objectif est toujours d'avoir les meilleures photos possibles.",
  },
  {
    question: "Combien de temps pour recevoir les photos ?",
    answer:
      "Tes photos sont disponibles sous 48 à 72h maximum dans ta galerie privée en ligne. Pour les urgences (cadeau, départ…), un traitement express est possible.",
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

export const FAQ = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="faq" className="py-16 min-[375px]:py-20 md:py-28 px-4 bg-background">
      <div ref={ref} className="container mx-auto max-w-2xl fade-in-section">
        <p className="text-center text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">
          Questions fréquentes
        </p>
        <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl text-foreground text-center mb-10 min-[375px]:mb-14 tracking-wide">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
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

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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
