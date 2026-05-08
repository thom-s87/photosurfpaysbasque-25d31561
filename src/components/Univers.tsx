import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Camera } from "lucide-react";
import { Link } from "react-router-dom";
import boySurfer from "@/assets/gallery/surf-night-girl.jpg";
import shootingMaternite from "@/assets/gallery/shooting-aquatique-maternite.jpg";
import dadAndBaby from "@/assets/gallery/dad-and-baby.jpg";
import surfGlassy from "@/assets/gallery/surf-glassy-session.jpg";

const wa = (msg: string) =>
  `https://wa.me/33695349187?text=${encodeURIComponent(msg)}`;

const blocks = [
  {
    title: "SURF",
    desc: "Sessions surf, body surf et performances dans l'eau.",
    image: boySurfer,
    alt: "Surfeur action photographe surf Anglet Pays Basque",
    to: "/photographe-surf-anglet",
    whatsapp: wa("Bonjour, je souhaite réserver une session photo surf avec Photosurf Pays Basque 🏄"),
  },
  {
    title: "FAMILLE & MOMENTS PLAGE OU PISCINE",
    desc: "Parents, enfants, bébés nageurs et souvenirs naturels entre plage et piscine.",
    image: dadAndBaby,
    alt: "Séance photo famille plage Pays Basque",
    to: "/shooting-famille-bebe-eau-pays-basque",
    whatsapp: wa("Bonjour, je souhaite réserver une séance famille / bébé près de l'eau avec Photosurf Pays Basque 👨‍👩‍👧"),
  },
  {
    title: "SHOOTING PRÉNATAL",
    desc: "Séances grossesse à la plage, lumière douce, émotion et élégance.",
    image: shootingMaternite,
    alt: "Shooting grossesse aquatique Pays Basque",
    to: "/shooting-grossesse-pays-basque",
    whatsapp: wa("Bonjour, je souhaite réserver une séance grossesse à la plage avec Photosurf Pays Basque 🤰"),
  },
  {
    title: "SPORTS AQUATIQUES",
    desc: "Paddle, natation, longe-côte et disciplines nautiques.",
    image: surfGlassy,
    alt: "Photo sport aquatique côte basque",
    to: "/photographe-natation-pays-basque",
    whatsapp: wa("Bonjour, je souhaite réserver une séance sports aquatiques avec Photosurf Pays Basque 🌊"),
  },
];

export const Univers = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="univers" className="scroll-mt-24 pt-10 min-[375px]:pt-12 md:pt-16 pb-16 min-[375px]:pb-20 md:pb-32 px-5 md:px-4 bg-background">
      <div ref={ref} className="container mx-auto fade-in-section">
        <p className="text-center text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">Nos univers</p>
        <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl lg:text-7xl text-foreground text-center mb-4 tracking-wide">
          L'OCÉAN COMME TERRAIN DE JEU
        </h2>
        <p className="text-center text-muted-foreground text-base min-[375px]:text-lg mb-10 min-[375px]:mb-16 max-w-2xl mx-auto">
          Chaque séance capture l'énergie de l'océan et la beauté du moment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {blocks.map((block, i) => (
            <Link
              key={i}
              to={block.to}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg gallery-item cursor-pointer shadow-lg retro-grain block"
            >
              <img
                src={block.image}
                alt={block.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-3xl text-primary-foreground mb-2 tracking-wider">{block.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">{block.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-golden opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Camera className="w-4 h-4" />
                  Réserver cette séance
                </span>
              </div>
              {/* Retro top accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
