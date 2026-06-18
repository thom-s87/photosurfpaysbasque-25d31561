import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Gift } from "lucide-react";

const STORAGE_KEY = "fdp-popup-dismissed-v1";

export const FeteDesPeresPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Offre Fête des Pères"
      className="fixed z-[60] left-1/2 -translate-x-1/2 bottom-20 md:bottom-6 md:left-auto md:right-6 md:translate-x-0 w-[92vw] max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="relative rounded-2xl shadow-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#2a0a4a] via-[#4a1a7a] to-[#ff5a8a] text-white">
        <button
          onClick={close}
          aria-label="Fermer"
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white/15 hover:bg-white/25 transition"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="p-4 pr-10">
          <div className="flex items-center gap-2 mb-1">
            <Gift className="w-5 h-5 text-yellow-300" />
            <span className="text-xs uppercase tracking-wider font-bold text-yellow-300">
              Offre Fête des Pères
            </span>
          </div>
          <p className="font-bold text-lg leading-tight">
            Bon cadeau photo à <span className="text-yellow-300">45 €</span>
          </p>
          <p className="text-sm text-white/90 mt-0.5">
            + 5 photos offertes · Valable jusqu'à dimanche
          </p>
          <Link
            to="/bon-cadeau-fete-des-peres"
            onClick={close}
            className="mt-3 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-yellow-300 text-[#2a0a4a] font-bold text-sm hover:bg-yellow-200 transition"
          >
            Voir l'offre →
          </Link>
        </div>
      </div>
    </div>
  );
};
