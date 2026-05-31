import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import boySurfer from "@/assets/gallery/surf-night-girl.jpg";
import shootingMaternite from "@/assets/gallery/shooting-aquatique-maternite.jpg";
import dadAndBaby from "@/assets/gallery/dad-and-baby.jpg";
import surfGlassy from "@/assets/gallery/surf-glassy-session.jpg";

const blocks = [
  {
    title: "SURF & GLISSE",
    desc: "Sessions surf, body surf et paddle sur les spots du Pays Basque.",
    image: boySurfer,
    alt: "Photographe surf, body surf et paddle au Pays Basque",
    to: "/surf-glisse-pays-basque",
    cta: "Découvrir les sessions",
  },
  {
    title: "FAMILLE, BÉBÉ & GROUPES",
    desc: "Famille, bébé nageur, souvenirs à la plage et moments entre amis.",
    image: dadAndBaby,
    alt: "Shooting famille, bébé nageur et groupes au Pays Basque",
    to: "/famille-bebe-groupes-pays-basque",
    cta: "Découvrir les séances",
  },
  {
    title: "GROSSESSE & MATERNITÉ",
    desc: "Séances grossesse à la plage, lumière douce et souvenirs naturels.",
    image: shootingMaternite,
    alt: "Shooting grossesse et maternité Pays Basque",
    to: "/photographe-grossesse-pays-basque",
    cta: "Découvrir les séances",
  },
  {
    title: "SPORTS AQUATIQUES",
    desc: "Natation, longe-côte, apnée et suivi de clubs ou d'athlètes.",
    image: surfGlassy,
    alt: "Photographe sports aquatiques au Pays Basque",
    to: "/sports-aquatiques-pays-basque",
    cta: "Découvrir les disciplines",
  },
];

export const Univers = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="univers" className="scroll-mt-24 pt-10 min-[375px]:pt-12 md:pt-16 pb-16 min-[375px]:pb-20 md:pb-32 px-5 md:px-4 bg-background">
      <span id="nos-univers" className="block -mt-24 pt-24" aria-hidden="true" />
      <div ref={ref} className="container mx-auto fade-in-section">
        <p className="text-center text-hot-pink font-medium tracking-[0.3em] uppercase text-xs mb-4">Nos univers</p>
        <h2 className="font-display text-4xl min-[375px]:text-5xl md:text-6xl lg:text-7xl text-foreground text-center mb-4 tracking-wide">
          L'OCÉAN COMME TERRAIN DE JEU
        </h2>
        <p className="text-center text-muted-foreground text-base min-[375px]:text-lg mb-10 min-[375px]:mb-16 max-w-2xl mx-auto">
          Quatre grandes familles de prestations — choisis ton univers pour voir le détail.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {blocks.map((block, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg gallery-item shadow-lg retro-grain block"
            >
              <Link to={block.to} className="absolute inset-0 z-[1]" aria-label={block.title}>
                <img
                  src={block.image}
                  alt={block.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-[2] pointer-events-none">
                <h3 className="font-display text-2xl min-[375px]:text-3xl text-primary-foreground mb-2 tracking-wider">{block.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">{block.desc}</p>
                <Link
                  to={block.to}
                  className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-sunset text-foreground text-xs font-semibold tracking-widest uppercase shadow-lg hover:opacity-90 transition-opacity whitespace-normal"
                >
                  {block.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
