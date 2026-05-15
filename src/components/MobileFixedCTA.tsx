import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/33695349187?text=Bonjour%20Thom%20%F0%9F%8C%8A%20Je%20souhaite%20r%C3%A9server%20une%20session%20photo%20surf%20au%20Pays%20Basque.%20Voici%20mes%20disponibilit%C3%A9s%20%3A%20...";

export const MobileFixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-4 py-3 safe-area-bottom">
      <Button size="lg" className="w-full bg-gradient-sunset text-foreground font-bold rounded-full shadow-lg text-base py-5" asChild>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          👉 Réserver maintenant
        </a>
      </Button>
    </div>
  );
};
