import { Camera } from "lucide-react";

interface PlaceholderCardProps {
  whatsapp: string;
  message?: string;
}

export const PlaceholderCard = ({
  whatsapp,
  message = "Vous pourriez être ici",
}: PlaceholderCardProps) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-5 text-center bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 text-white overflow-hidden">
      <div className="absolute inset-0 retro-grain opacity-40" />
      <Camera className="relative z-10 w-10 h-10 min-[375px]:w-12 min-[375px]:h-12 mb-3 opacity-90" />
      <p className="relative z-10 font-display text-2xl min-[375px]:text-3xl md:text-4xl tracking-wide leading-tight mb-5">
        {message}
      </p>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold tracking-widest uppercase backdrop-blur-sm transition-colors whitespace-normal"
      >
        <Camera className="w-4 h-4" />
        Réserver ma session
      </a>
    </div>
  );
};
