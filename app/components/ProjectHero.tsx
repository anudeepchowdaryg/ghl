import Image from "next/image";

interface ProjectHeroProps {
  imageSrc: string;
  imageAlt: string;
  scrollY: number;
  subtitle: string;
  titleWords: string[];
  badgeLines: string[];
}

export function ProjectHero({
  imageSrc,
  imageAlt,
  scrollY,
  subtitle,
  titleWords,
  badgeLines,
}: ProjectHeroProps) {
  return (
    <section style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%",
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div
        className="hero-enter-badge"
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          zIndex: 10,
          color: "#fff",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          fontSize: "0.8rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {badgeLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "5%",
          right: "5%",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      >
        <p
          className="hero-enter-subtitle"
          style={{
            fontSize: "clamp(0.85rem, 2vw, 1.15rem)",
            color: "#fff",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            fontWeight: 800,
          }}
        >
          {subtitle}
        </p>
        <h1
          style={{
            fontSize: "clamp(5.5rem, 16vw, 13rem)",
            fontWeight: 800,
            margin: 0,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {titleWords.map((word, index) => (
            <span key={word}>
              {index > 0 ? " " : null}
              <span className="hero-title-mask">
                <span
                  className={`hero-title-word hero-title-word--${Math.min(index + 1, 4)}`}
                >
                  {word}
                </span>
              </span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
