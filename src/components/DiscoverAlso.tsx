import { Waves } from "lucide-react";

interface DiscoverLink {
  label: string;
  href: string;
}

interface DiscoverAlsoProps {
  links: DiscoverLink[];
}

const allLinks: Record<string, DiscoverLink> = {
  surf: { label: "Photographe surf à Anglet", href: "/photographe-surf-anglet" },
  bodysurf: { label: "Photographe body surf", href: "/photographe-body-surf-pays-basque" },
  famille: { label: "Shooting famille à la plage", href: "/shooting-famille-bebe-eau-pays-basque" },
  grossesse: { label: "Séance grossesse au bord de l'eau", href: "/shooting-grossesse-pays-basque" },
  vvf: { label: "Mon spot coup de cœur à Anglet", href: "/spot-photo-petite-chambre-amour-anglet" },
  natation: { label: "Photographe natation à Anglet", href: "/photographe-natation-pays-basque" },
};

export { allLinks };

export const DiscoverAlso = ({ links }: DiscoverAlsoProps) => {
  return (
    <section className="py-12 md:py-16 px-5 md:px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <Waves className="w-8 h-8 text-primary mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
          🌊 Découvrir aussi
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-block bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
