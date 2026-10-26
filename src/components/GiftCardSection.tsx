import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Gift, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import giftCardAsset from "@/assets/carte-cadeau-photosurf-pays-basque.png.asset.json";
import { giftCardPolicy } from "@/lib/gift-card-policy";

export function GiftCardSection() {
  return (
    <section id="cartes-cadeaux" aria-labelledby="gift-card-heading" className="scroll-mt-28 border-b border-border bg-background px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-primary"><Gift className="size-4" aria-hidden="true" /> Nouveauté</p>
        <h2 id="gift-card-heading" className="mb-4 text-center font-display text-4xl text-foreground md:text-5xl">Carte cadeau PhotoSurfPaysBasque</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">Ton shooting photo surf. Toutes les photos numériques incluses.</p>
        <Link to="/carte-cadeau-surf-pays-basque" className="block overflow-hidden rounded-lg shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4" aria-label="Découvrir la carte cadeau surf au Pays Basque">
          <img src={giftCardAsset.url} alt="Exemple de carte cadeau PhotoSurfPaysBasque : shooting photo surf avec toutes les photos numériques incluses" width={1536} height={1024} loading="lazy" className="aspect-[3/2] h-auto w-full object-contain" />
        </Link>
        <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><CalendarDays className="size-4 text-primary" aria-hidden="true" /> Valable {giftCardPolicy.validityMonths} mois</span>
          <span className="flex items-center gap-2"><RefreshCw className="size-4 text-primary" aria-hidden="true" /> {giftCardPolicy.maxReschedules} report accepté</span>
          <span>Non remboursable*</span>
        </div>
        <div className="mt-7 text-center">
          <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal rounded-full bg-gradient-sunset px-7 py-3 text-foreground hover:opacity-90">
            <Link to="/carte-cadeau-surf-pays-basque">Découvrir la carte cadeau <ArrowRight aria-hidden="true" /></Link>
          </Button>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">* Sous réserve des droits légaux applicables, notamment du droit de rétractation.</p>
        </div>
      </div>
    </section>
  );
}