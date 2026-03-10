import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import surfeurProNight from "@/assets/gallery/surfeur-pro-night.jpg";
import shootingMaternite from "@/assets/gallery/shooting-aquatique-maternite.jpg";
import duoFriends from "@/assets/gallery/duo-friends.jpg";
import surfGlassy from "@/assets/gallery/surf-glassy-session.jpg";

const blocks = [
  {
    title: "Surf",
    desc: "Sessions surf, vagues, action, portraits dans l'eau.",
    image: surfeurProNight,
    alt: "Surfeur action photographe surf Anglet Pays Basque",
  },
  {
    title: "Famille & moments plage",
    desc: "Parents, enfants, souvenirs naturels au bord de l'océan.",
    image: duoFriends,
    alt: "Séance photo famille plage Pays Basque",
  },
  {
    title: "Shooting prénatal",
    desc: "Séances grossesse à la plage, lumière douce, émotion et élégance.",
    image: shootingMaternite,
    alt: "Shooting grossesse aquatique Pays Basque",
  },
  {
    title: "Sports aquatiques",
    desc: "Surf, bodyboard, paddle, natation, longe-côte et disciplines nautiques.",
    image: surfGlassy,
    alt: "Photo sport aquatique côte basque",
  },
];

export const Univers = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="univers" className="py-24 md:py-32 px-4 bg-background">
      <div ref={ref} className="container mx-auto fade-in-section">
        <p className="text-center text-hot-pink font-medium tracking-widest uppercase text-sm mb-4">Nos univers</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-center mb-4">
          L'océan comme terrain de jeu
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Chaque séance capture l'énergie de l'océan et la beauté du moment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blocks.map((block, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-xl gallery-item cursor-pointer shadow-lg">
              <img
                src={block.image}
                alt={block.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-primary-foreground mb-2">{block.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{block.desc}</p>
              </div>
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
