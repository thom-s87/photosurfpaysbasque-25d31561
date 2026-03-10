import surfeurProNight from "@/assets/gallery/surfeur-pro-night.jpg";
import shootingMaternite from "@/assets/gallery/shooting-aquatique-maternite.jpg";
import duoFriends from "@/assets/gallery/duo-friends.jpg";
import surfGlassy from "@/assets/gallery/surf-glassy-session.jpg";

const blocks = [
  {
    title: "Surf",
    image: surfeurProNight,
    alt: "Surfeur action photographe surf Anglet Pays Basque",
  },
  {
    title: "Famille plage",
    image: duoFriends,
    alt: "Séance photo famille plage Pays Basque",
  },
  {
    title: "Shooting prénatal",
    image: shootingMaternite,
    alt: "Shooting grossesse aquatique Pays Basque",
  },
  {
    title: "Sports aquatiques",
    image: surfGlassy,
    alt: "Photo sport aquatique côte basque",
  },
];

export const Univers = () => {
  return (
    <section id="univers" className="py-24 md:py-32 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-center mb-4">
          L'océan comme terrain de jeu
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Chaque séance capture l'énergie de l'océan et la beauté du moment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blocks.map((block, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-lg gallery-item cursor-pointer">
              <img
                src={block.image}
                alt={block.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-primary-foreground">{block.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
