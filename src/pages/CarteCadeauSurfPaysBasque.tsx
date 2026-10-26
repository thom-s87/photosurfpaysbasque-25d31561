import { Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Camera, Gift, MessageCircle, RefreshCw } from "lucide-react";
import { Header } from "@/components/Header";
import { TopBanner } from "@/components/TopBanner";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import giftCardImg from "@/assets/carte-cadeau-photosurf-pays-basque.jpg";
import { giftCardPolicy, giftCardPrice, giftCardDuration, GIFT_CARD_WHATSAPP_URL } from "@/lib/gift-card-policy";

export default function CarteCadeauSurfPaysBasque() {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <main className="px-5 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-4xl">
          <Button asChild variant="link" className="mb-6 h-auto px-0 text-muted-foreground"><Link to="/"><ArrowLeft aria-hidden="true" /> Accueil</Link></Button>
          <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-primary"><Gift className="size-4" aria-hidden="true" /> Nouveauté · PhotoSurfPaysBasque</p>
          <h1 className="mb-4 text-center font-display text-4xl leading-tight text-foreground md:text-6xl">Carte cadeau shooting photo surf au Pays Basque</h1>
          <p className="mx-auto mb-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">Ton shooting photo surf. Toutes les photos numériques incluses.</p>
          <p className="mb-8 text-center text-xl font-semibold text-primary">{giftCardDuration} de shooting · {giftCardPrice}</p>
          <figure>
            <img src={giftCardImg} alt="Carte cadeau PhotoSurfPaysBasque avec un surfeur dans une vague : ton shooting photo surf, toutes les photos numériques incluses" width={1536} height={1024} fetchPriority="high" className="aspect-[3/2] h-auto w-full rounded-lg object-contain shadow-xl" />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">Exemple de carte cadeau PhotoSurfPaysBasque.</figcaption>
          </figure>

          <section aria-labelledby="gift-includes" className="mt-12 border-t border-border pt-10">
            <h2 id="gift-includes" className="mb-5 font-display text-3xl text-foreground">Un shooting photo surf à offrir</h2>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">Pour un anniversaire ou simplement pour faire plaisir, offre une séance photo surf sur les spots du Pays Basque. PhotoSurfPaysBasque capture les sessions à Anglet, Biarritz et sur la côte basque.</p>
            <p className="mt-4 flex items-start gap-3 font-medium text-foreground"><Camera className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" /> Toutes les photos numériques de la séance sont incluses dans la carte cadeau.</p>
          </section>

          <section aria-labelledby="gift-conditions" className="mt-10 border-t border-border pt-10">
            <h2 id="gift-conditions" className="mb-6 font-display text-3xl text-foreground">Conditions de la carte cadeau</h2>
            <dl className="grid gap-6 sm:grid-cols-3">
              <div><dt className="mb-2 flex items-center gap-2 font-semibold text-foreground"><CalendarDays className="size-5 text-primary" aria-hidden="true" /> Validité</dt><dd className="text-sm leading-relaxed text-muted-foreground">{giftCardPolicy.validityMonths} mois à compter de la date d’achat.</dd></div>
              <div><dt className="mb-2 flex items-center gap-2 font-semibold text-foreground"><RefreshCw className="size-5 text-primary" aria-hidden="true" /> Report</dt><dd className="text-sm leading-relaxed text-muted-foreground">Un seul report de la séance est accepté. La nouvelle date est à convenir avec Thom.</dd></div>
              <div><dt className="mb-2 font-semibold text-foreground">Remboursement</dt><dd className="text-sm leading-relaxed text-muted-foreground">Carte cadeau non remboursable, sous réserve des droits légaux applicables, notamment du droit de rétractation lorsqu’il s’applique.</dd></div>
            </dl>
          </section>

          <section aria-labelledby="gift-offer" className="mt-10 border-t border-border pt-10">
            <h2 id="gift-offer" className="mb-4 font-display text-3xl text-foreground">Offrir une carte cadeau</h2>
            <p className="mb-3 text-lg font-semibold text-primary">{giftCardPrice} · {giftCardDuration} de shooting · Toutes les photos numériques incluses</p>
            <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">Contacte Thom pour préparer ta carte cadeau.</p>
            <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal rounded-full bg-gradient-sunset px-7 py-3 text-foreground hover:opacity-90"><a href={GIFT_CARD_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /> Demander ma carte cadeau</a></Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}