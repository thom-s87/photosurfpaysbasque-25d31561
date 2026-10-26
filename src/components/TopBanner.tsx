import { Link } from "@tanstack/react-router";
import { ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TopBanner = () => {
  return (
    <Button
      asChild
      variant="link"
      className="fixed top-0 left-0 right-0 z-[55] h-[30px] w-full gap-2 rounded-none bg-announcement px-3 text-center text-[11px] font-medium text-primary-foreground hover:bg-announcement/90 hover:no-underline md:text-xs"
    >
      <Link to="/carte-cadeau-surf-pays-basque">
        <Gift aria-hidden="true" />
        <span className="sm:hidden">Nouveauté · Cartes cadeaux surf</span>
        <span className="hidden sm:inline">Nouveauté · Offre un shooting photo surf avec une carte cadeau</span>
        <ArrowRight aria-hidden="true" />
      </Link>
    </Button>
  );
};
