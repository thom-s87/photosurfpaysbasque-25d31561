import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%20au%20Pays%20Basque.%20Voici%20mes%20disponibilit%C3%A9s%20%3A%20...";

interface SectionCTAProps {
  variant?: "light" | "dark";
}

export const SectionCTA = ({ variant = "light" }: SectionCTAProps) => {
  return (
    <div className="text-center mt-10 min-[375px]:mt-12">
      <Button
        size="lg"
        className="bg-gradient-sunset text-foreground px-8 min-[375px]:px-10 py-5 min-[375px]:py-6 text-sm min-[375px]:text-base font-semibold rounded-full shadow-lg hover:opacity-90 transition-opacity"
        asChild
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          📸 Réserver ma session
        </a>
      </Button>
    </div>
  );
};
