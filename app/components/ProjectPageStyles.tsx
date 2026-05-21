export function ProjectPageStyles() {
  return (
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap");

      body {
        font-family: "Outfit", sans-serif !important;
        background-color: #fff;
      }

      .nav-btn {
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .nav-btn:hover {
        background-color: #111 !important;
        color: #fff !important;
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
      }

      .craft-item {
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        border-bottom: 1px solid #ddd !important;
      }
      .craft-item:hover {
        border-bottom-color: #111 !important;
        padding: 4rem 1.5rem !important;
        background-color: #fafafa;
      }
      .craft-item h4 {
        transition: transform 0.5s ease;
      }
      .craft-item:hover h4 {
        transform: translateX(10px);
      }

      .amenity-card {
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }
      .amenity-card:hover {
        border-color: #111 !important;
        background-color: #fafafa !important;
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
      }
      .amenity-card:hover svg {
        stroke: #111 !important;
        transform: scale(1.1) rotate(2deg);
      }

      .project-gallery-section {
        padding: clamp(4rem, 10vw, 12rem) clamp(1.25rem, 5vw, 10rem);
        background-color: #fff;
      }

      .project-gallery-label {
        font-size: 0.85rem;
        letter-spacing: 4px;
        color: #a0a0a0;
        margin: 0 0 6rem;
        text-transform: uppercase;
        font-weight: 700;
      }

      .project-gallery-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2.5rem;
      }

      .gallery-item {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
      }

      .gallery-item--wide {
        grid-column: span 8;
        height: 550px;
      }

      .gallery-item--narrow-tall {
        grid-column: span 4;
        height: 550px;
      }

      .gallery-item--narrow {
        grid-column: span 4;
        height: 420px;
      }

      .gallery-item--wide-short {
        grid-column: span 8;
        height: 420px;
      }

      .gallery-caption {
        position: absolute;
        bottom: 2.5rem;
        left: 2.5rem;
        color: #fff;
        z-index: 2;
      }

      .gallery-caption__eyebrow {
        font-size: 0.75rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        opacity: 0.8;
        font-weight: 700;
      }

      .gallery-caption__title {
        font-size: 2rem;
        font-weight: 800;
        margin: 0.3rem 0 0;
        letter-spacing: -0.02em;
      }

      .gallery-item img {
        transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .gallery-item:hover img {
        transform: scale(1.06);
      }
      .gallery-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%);
        z-index: 1;
        opacity: 0.85;
        transition: opacity 0.5s ease;
      }
      .gallery-item:hover .gallery-overlay {
        opacity: 0.95;
      }

      @media (max-width: 1024px) {
        .project-gallery-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .gallery-item--wide,
        .gallery-item--wide-short {
          grid-column: span 2;
          height: clamp(280px, 42vw, 420px);
        }

        .gallery-item--narrow-tall,
        .gallery-item--narrow {
          grid-column: span 1;
          height: clamp(240px, 38vw, 360px);
        }
      }

      @media (max-width: 768px) {
        .project-gallery-section {
          padding: 4rem 1.25rem;
        }

        .project-gallery-label {
          margin-bottom: 2.5rem;
          letter-spacing: 3px;
        }

        .project-gallery-grid {
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .gallery-item--wide,
        .gallery-item--narrow-tall,
        .gallery-item--narrow,
        .gallery-item--wide-short {
          grid-column: 1 / -1;
          height: clamp(220px, 58vw, 320px);
        }

        .gallery-caption {
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
        }

        .gallery-caption__title {
          font-size: 1.35rem;
        }

        .gallery-item:hover img {
          transform: none;
        }
      }

      @media (max-width: 480px) {
        .project-gallery-section {
          padding: 3rem 1rem;
        }

        .gallery-item--wide,
        .gallery-item--narrow-tall,
        .gallery-item--narrow,
        .gallery-item--wide-short {
          height: clamp(200px, 52vw, 280px);
          border-radius: 10px;
        }

        .gallery-caption__eyebrow {
          font-size: 0.65rem;
          letter-spacing: 1.5px;
        }

        .gallery-caption__title {
          font-size: 1.15rem;
        }
      }

      .loc-card {
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .loc-card:hover {
        background: rgba(255, 255, 255, 0.03) !important;
        border-color: rgba(255, 255, 255, 0.2) !important;
        transform: translateY(-5px);
      }

      .brochure-container:hover .brochure-mockup {
        transform: rotateY(-5deg) rotateX(5deg) scale(1.15) translateZ(20px) !important;
        box-shadow: -30px 30px 60px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.08) !important;
      }

      .download-btn {
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .download-btn:hover {
        background-color: #111 !important;
        color: #fff !important;
        transform: scale(1.03) translateY(-2px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      @keyframes heroFadeSlideRight {
        from {
          opacity: 0;
          transform: translateX(28px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes heroTitleRise {
        from {
          transform: translateY(110%);
        }
        to {
          transform: translateY(0);
        }
      }

      @keyframes heroLetterSpacing {
        from {
          letter-spacing: 0.35em;
          opacity: 0;
        }
        to {
          letter-spacing: 12px;
          opacity: 0.95;
        }
      }

      .hero-enter-badge {
        opacity: 0;
        animation: heroFadeSlideRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
      }

      .hero-enter-subtitle {
        opacity: 0;
        animation: heroLetterSpacing 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
      }

      .hero-title-mask {
        overflow: hidden;
        display: inline-block;
      }

      .hero-title-word {
        display: inline-block;
        transform: translateY(110%);
        animation: heroTitleRise 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .hero-title-word--1 {
        animation-delay: 0.55s;
      }
      .hero-title-word--2 {
        animation-delay: 0.72s;
      }
      .hero-title-word--3 {
        animation-delay: 0.89s;
      }
      .hero-title-word--4 {
        animation-delay: 1.06s;
      }

      @media (prefers-reduced-motion: reduce) {
        .hero-enter-badge,
        .hero-enter-subtitle,
        .hero-title-word {
          opacity: 1 !important;
          transform: none !important;
          filter: none !important;
          animation: none !important;
          letter-spacing: 12px;
        }
      }
    `}</style>
  );
}
