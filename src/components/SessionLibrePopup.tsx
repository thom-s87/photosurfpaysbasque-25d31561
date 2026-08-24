import { useEffect, useRef, useState } from "react";
import { X, Waves } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import popupPhoto from "@/assets/casquette-jaune-session-libre.jpg.asset.json";

const STORAGE_KEY = "session-libre-popup-seen";

export const SessionLibrePopup = () => {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isSessionLibrePage = pathname.includes("session-libre");

  useEffect(() => {
    if (isSessionLibrePage) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = window.setTimeout(() => setOpen(true), 2500);
    return () => window.clearTimeout(timer);
  }, [isSessionLibrePage]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night/70 backdrop-blur-sm px-5 py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Session libre — retrouve tes photos"
      onClick={(e) => {
        if (!cardRef.current?.contains(e.target as Node)) close();
      }}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border/40 bg-card shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Fermer"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Photo — en haut sur mobile, à droite sur desktop */}
          <div className="md:order-2 h-56 min-[375px]:h-64 md:h-full">
            <img
              src={popupPhoto.url}
              alt="Photographe avec sa casquette jaune dans l'eau à Anglet"
              className="h-full w-full object-cover md:rounded-l-none"
              loading="eager"
            />
          </div>

          {/* Texte */}
          <div className="md:order-1 flex flex-col justify-center gap-4 p-6 min-[375px]:p-8 text-center md:text-left">
            <h2 className="font-display text-3xl min-[375px]:text-4xl tracking-wide text-foreground">
              📸 Tu m'as vue à l'eau ?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Si tu as croisé cette casquette jaune en session libre sur les spots
              d'Anglet, tes photos sont ici !
            </p>
            <Button
              size="lg"
              className="bg-gradient-sunset text-foreground font-semibold rounded-full px-8 hover:opacity-90 transition-opacity animate-pulse-wave-yellow booking-hover whitespace-normal"
              asChild
            >
              <a
                href="https://watersocialclub.com/fr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                <Waves className="mr-2 h-5 w-5" />
                Retrouver mes photos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
