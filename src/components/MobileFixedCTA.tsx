import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/33695349187";

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
