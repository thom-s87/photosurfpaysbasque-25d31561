import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import satisfactionSurfer from "@/assets/gallery/satisfaction-surfer.jpg";
import coursSurfLaBarre from "@/assets/gallery/cours-surf-la-barre.jpg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const SurfEnClub = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      id="surf-en-club"
      className="scroll-mt-24 py-16 min-[375px]:py-20 md:py-28 px-5 md:px-4"
      style={{ backgroundColor: "#f5efe8" }}
    >
      <div ref={ref} className="container mx-auto max-w-6xl fade-in-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Texte */}
          <div>
            <p
              className="uppercase mb-4"
              style={{
                color: "#5a3e8a",
                fontSize: "11px",
                letterSpacing: "0.25em",
                fontWeight: 600,
              }}
            >
              SURF EN CLUB · PAYS BASQUE
            </p>
            <h2
              className="mb-6 uppercase"
              style={{
                fontFamily: "'Barlow Condensed', 'Bebas Neue', sans-serif",
                fontWeight: 900,
                color: "#3a1f6e",
                fontSize: "clamp(2.25rem, 6vw, 4rem)",
                lineHeight: 0.95,
                letterSpacing: "0.01em",
              }}
            >
              C'EST LE MOMENT DE TRACER TON{" "}
              <span style={{ color: "#d44faa" }}>ÉVOLUTION</span> 🤙
            </h2>

            <p
              className="mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#3a3a3a",
                lineHeight: 1.65,
              }}
            >
              Tu surfs en club ? Chaque session est une étape, chaque vague une progression. Je capture ces moments en eau, sur le sable, avant et après la session.
            </p>
            <p
              className="mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#3a3a3a",
                lineHeight: 1.65,
              }}
            >
              Dis-moi à quel club tu adhères et on planifie un shooting sur mesure.
            </p>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                backgroundColor: "#ede3f7",
                color: "#5a3e8a",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              <span style={{ color: "#d44faa", fontSize: "14px" }}>●</span>
              Anglet Surf Club · Plage de la Barre
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href="#tarifs"
                className="inline-flex items-center justify-center gap-3 booking-hover"
                style={{
                  background: "linear-gradient(90deg, #f9b35a 0%, #f08a5d 50%, #e85a8a 100%)",
                  color: "#1a1033",
                  fontWeight: 800,
                  borderRadius: "9999px",
                  padding: "18px 36px",
                  fontSize: "18px",
                  boxShadow: "0 10px 28px rgba(232, 90, 138, 0.35)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span style={{ fontSize: "20px" }}>📸</span>
                Réserver ma session
              </a>
            </div>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-2 gap-4">
            <figure
              className="relative overflow-hidden group"
              style={{
                borderRadius: "10px",
                aspectRatio: "3 / 4",
                marginTop: "32px",
              }}
            >
              <img
                src={satisfactionSurfer}
                alt="Surfeurs après une session au club, Plage des Cavaliers Anglet"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transformOrigin: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <figcaption
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(245, 239, 232, 0.92)",
                  color: "#3a1f6e",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                Après session
              </figcaption>
            </figure>

            <figure
              className="relative overflow-hidden group"
              style={{
                borderRadius: "10px",
                aspectRatio: "3 / 4",
              }}
            >
              <img
                src={coursSurfLaBarre}
                alt="Cours de surf en club à La Barre, Anglet"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500"
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <figcaption
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(245, 239, 232, 0.92)",
                  color: "#3a1f6e",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                Cours · La Barre
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
