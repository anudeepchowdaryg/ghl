"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Reveal } from "./components/Reveal";
import { SiteFooter } from "./components/SiteFooter";

const testimonials = [
  {
    quote: "Anudeep was very approachable and respectful... We got a sense of belonging and connected very well with him. The legalities were well explained in detail and  patiently, his professional approach made the entire process smooth and trustworthy. The construction quality, elegant design and overall ambience of the apartment are truly commendable. We were fortunate to meet GHL and got this home for us... It's all happy living ",
    author: "Chetan Raju",
    rating: "★★★★★",
    image: "/mortgage_img.png"
  },
  {
    quote: "Anudeep sir treated us with respect from day one. He explained the project clearly and honestly, which built a strong sense of trust and confidence. The apartment stands out for its quality construction, modern architecture, peaceful surroundings and well-maintained ambience. You can clearly see the attention given to every detail. It is rare to find a combination of good quality, aesthetics and positive customer experience together. Falcon Ritz a perfect place to call home.",
    author: "Deepa Chetan",
    rating: "★★★★★",
    image: "/management_img.png"
  },
  {
    quote: "Their architectural vision balances stunning modern aesthetics with everyday functionality. The luxury apartment complex they built for us is a landmark in Bangalore, reflecting absolute craftsmanship in every corner.",
    author: "ALISTAIR VANCE",
    rating: "★★★★★",
    image: "/vision.png"
  },
  {
    quote: "We commissioned GHL for our custom heritage villa remodel. They preserved the character of the space while introducing state-of-the-art structural support and luxury interior updates. Absolutely outstanding communication!",
    author: "MEERA SEN",
    rating: "★★★★★",
    image: "/mission.jpeg"
  },
  {
    quote: "GHL's end-to-end management took all the stress out of our luxury residential build. From site preparation and foundation work to the gorgeous modern elevation, they executed every detail with absolute perfection.",
    author: "DAVID & SARAH MILLER",
    rating: "★★★★★",
    image: "/Redefining%20luxury.png"
  }
];

const ghlLogoPaths = [
  "M 30 0 L 10 0 A 10 10 0 0 0 0 10 L 0 90 A 10 10 0 0 0 10 100 L 30 100 L 30 57.5 L 15 65 L 15 75 L 20 75 L 20 90 L 10 90 L 10 10 L 20 10 L 20 47.5 L 30 42.5 Z",
  "M 40 0 L 50 0 L 50 32.5 L 40 37.5 Z",
  "M 40 52.5 L 50 47.5 L 50 100 L 40 100 Z",
  "M 60 0 L 70 0 L 70 37.5 L 60 32.5 Z",
  "M 60 47.5 L 70 52.5 L 70 100 L 60 100 Z",
  "M 80 0 L 90 0 L 90 47.5 L 80 42.5 Z",
  "M 80 57.5 L 90 62.5 L 90 90 L 100 90 L 100 67.5 L 110 72.5 L 110 90 A 10 10 0 0 1 100 100 L 80 100 Z",
  "M 55 32.5 L 80 45 L 80 55 L 55 42.5 L 30 55 L 30 45 Z",
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const ghlPathRefs = useRef<(SVGPathElement | null)[]>([]);
  const taglineMeasureRef = useRef<SVGTextElement | null>(null);
  const [ghlPathLengths, setGhlPathLengths] = useState<number[]>([]);
  const [taglineLength, setTaglineLength] = useState(3200);

  useLayoutEffect(() => {
    const lengths = ghlPathRefs.current.map((path) => path?.getTotalLength() ?? 0);
    if (lengths.some((length) => length > 0)) {
      setGhlPathLengths(lengths);
    }
    if (taglineMeasureRef.current) {
      setTaglineLength(taglineMeasureRef.current.getComputedTextLength() * 1.15);
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY < 100) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false); // scrolling down
      } else {
        setIsNavVisible(true); // scrolling up
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const GHL_DRAW_DISTANCE = 420;
  const TAGLINE_DRAW_DISTANCE = 540;
  const FILL_START = 850;
  const FILL_DURATION = 480;

  const ghlDrawProgress = Math.max(0, scrollY - 200);
  const ghlOutlineOpacity = 1 - Math.max(0, (scrollY - FILL_START) / FILL_DURATION);
  const ghlFillOpacity = Math.min(1, Math.max(0, (scrollY - FILL_START) / FILL_DURATION));
  const taglineStrokeOffset = Math.max(0, taglineLength - ghlDrawProgress * (taglineLength / TAGLINE_DRAW_DISTANCE));

  const renderGhlSvg = (variant: "desktop" | "mobile") => {
    const isMobile = variant === "mobile";
    const maskId = `ghl-mask-${variant}`;
    const logoTransform = isMobile
      ? "translate(500, 455) scale(3.3) translate(-55, -50)"
      : "translate(500, 400) scale(3.5) translate(-55, -50)";
    const taglineY = isMobile ? 780 : 710;
    const taglineFontSize = isMobile ? 58 : 78;
    const taglineLetterSpacing = isMobile ? 6 : 8;
    const fillImageY = isMobile ? 60 : 40;

    const taglineTextProps = {
      x: 500,
      y: taglineY,
      textAnchor: "middle" as const,
      dominantBaseline: "middle" as const,
      fontSize: taglineFontSize,
      fontWeight: 700,
      letterSpacing: taglineLetterSpacing,
      fontFamily: "var(--font-instrument-sans), system-ui, sans-serif",
    };

    return (
      <svg
        key={variant}
        className={`hero-ghl-outline-svg hero-ghl-svg--${variant}`}
        viewBox="0 -80 1000 1080"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="-80" width="1000" height="1080">
            <rect x="0" y="-80" width="1000" height="1080" fill="black" />
            <g transform={logoTransform} fill="white">
              {ghlLogoPaths.map((d, index) => (
                <path key={`${variant}-mask-${index}`} d={d} />
              ))}
            </g>
            <text {...taglineTextProps} fill="white">
              GALI HIGH LIVING
            </text>
          </mask>
        </defs>

        <g mask={`url(#${maskId})`} opacity={ghlFillOpacity}>
          <image
            href="/mainhero.png"
            x="0"
            y={fillImageY}
            width="1000"
            height="920"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>

        <g opacity={ghlOutlineOpacity}>
          <g transform={logoTransform} fill="transparent" stroke="rgba(255,255,255,0.9)" strokeWidth="1">
            {ghlLogoPaths.map((d, index) => {
              const pathLength = ghlPathLengths[index] || 500;
              return (
                <path
                  key={`${variant}-outline-${index}`}
                  ref={isMobile ? undefined : (element) => {
                    ghlPathRefs.current[index] = element;
                  }}
                  d={d}
                  strokeDasharray={pathLength}
                  strokeDashoffset={Math.max(0, pathLength - ghlDrawProgress * (pathLength / GHL_DRAW_DISTANCE))}
                />
              );
            })}
          </g>
          <text
            {...taglineTextProps}
            fill="transparent"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={taglineLength}
            strokeDashoffset={taglineStrokeOffset}
            opacity={ghlOutlineOpacity * (1 - ghlFillOpacity)}
          >
            GALI HIGH LIVING
          </text>
        </g>
      </svg>
    );
  };

  return (
    <>
      <nav className="navbar" style={{
        backgroundColor: scrollY > 100 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrollY > 100 ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none',
        transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s ease, box-shadow 0.4s ease'
      }}>
        <div className="nav-brand" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <Image src="/logo.png" alt="GHL Logo" width={150} height={50} style={{ objectFit: 'contain', maxHeight: '40px', width: 'auto', height: 'auto' }} priority />
        </div>
        <div className="nav-links" style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '3rem' }}>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#expertise" className="nav-link">Expertise</a>
          <a href="#about" className="nav-link">About Us</a>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-outline">Inquire Now</button>
        </div>
      </nav>

      <div style={{ height: '350vh', position: 'relative' }}>
        <section className="hero-layered" style={{ position: 'sticky', top: 0, height: '100dvh', overflow: 'hidden' }}>
          <div className="hero-layer hero-sky" style={{ position: 'absolute', top: '-10%', left: '-5%', width: '110%', height: '120%', transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}>
            <div className="hero-sky-enter" style={{ width: '100%', height: '100%' }}>
              <div style={{ width: '100%', height: '100%', position: 'absolute', animation: 'slowPan 30s ease-in-out infinite alternate', willChange: 'transform' }}>
                <Image src="/back.webp" alt="Sky" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
              </div>
            </div>
          </div>

          <div className="cloud-left" style={{ position: 'absolute', transform: `translateY(${-scrollY * 0.1}px)` }}>
            <img src="/cloud.webp" alt="Cloud Left" />
          </div>

          <div className="cloud-right" style={{ position: 'absolute', transform: `translateY(${-scrollY * 0.05}px)` }}>
            <img src="/cloud.webp" alt="Cloud Right" />
          </div>

          {/* Phase 1: Initial Solid Text */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            zIndex: 3,
            opacity: Math.max(0, 1 - scrollY / 300),
            transform: `translateY(calc(-15vh + ${scrollY * 0.3}px))`,
            pointerEvents: scrollY < 300 ? 'auto' : 'none'
          }}>
            <h1 className="hero-title-layered" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', marginBottom: '1rem', textAlign: 'center' }}>Build What Moves You</h1>
            <p className="hero-subtitle-layered" style={{ textAlign: 'center', maxWidth: '600px' }}>
              <span style={{ fontWeight: 700 }}>Gali High Living.</span> Crafting tomorrow's landmarks and premium living spaces.
            </p>
          </div>

          {/* Phase 2 & 3: Outline Drawing & Filled Text Sequence */}
          <div className="hero-ghl-stage">
            <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute' }}>
              <text
                ref={taglineMeasureRef}
                x="500"
                y="710"
                fontSize={78}
                fontWeight={700}
                letterSpacing="8"
                fontFamily="var(--font-instrument-sans), system-ui, sans-serif"
              >
                GALI HIGH LIVING
              </text>
            </svg>
            {renderGhlSvg("desktop")}
            {renderGhlSvg("mobile")}
          </div>

          {/* Building Layer - Moves up, fades out at 800 */}
          <div className="hero-layer hero-building" style={{
            position: 'absolute',
            bottom: '-25%', /* Brings building higher up initially */
            transform: `translateY(${-scrollY * 0.2}px)`,
            opacity: 1 - Math.min(1, Math.max(0, (scrollY - FILL_START) / FILL_DURATION))
          }}>
            <img src="/mainhero.png" alt="Building" className="hero-building-img" />
          </div>

          <div className="hero-layer hero-smoke" style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 10,
            pointerEvents: 'none',
            transform: `translateY(calc(70% - ${scrollY * 0.1}px))` /* Moves smoke up on scroll more slowly */
          }}>
            <img src="/smoke.webp" alt="Smoke" className="hero-building-img" style={{ opacity: 0.8 }} />
          </div>
        </section>

        {/* Seamless fade to white transition */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '300px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
          zIndex: 20,
          pointerEvents: 'none'
        }}></div>
      </div>

      <section style={{ backgroundColor: '#fff', color: '#111', fontFamily: 'var(--font-instrument-sans)', padding: '8rem 4rem 4rem 4rem' }}>
        <div style={{ display: 'flex', gap: '4rem', marginBottom: '6rem', flexWrap: 'wrap' }}>
          <Reveal direction="left" style={{ flex: '0 0 30%', fontSize: '1.2rem', fontWeight: 700, paddingTop: '1rem' }}>
            Why GHL
          </Reveal>
          <Reveal direction="right" delay={120} style={{ flex: '1', maxWidth: '1100px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.2rem)', fontWeight: 500, margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Your vision is ambitious. Don’t just build a structure — build a legacy. <span style={{ color: '#a0a0a0' }}>We engineer the future with uncompromising quality, visionary design, and the ultimate expertise by your side.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal direction="up" delay={200} style={{ width: '100%', height: '70vh', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
          <video
            src="/ghlvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Reveal>
      </section>

      <section id="projects" style={{ backgroundColor: '#18181b', color: 'white', padding: '8rem 4rem', fontFamily: 'var(--font-instrument-sans)' }}>
        {/* Header row */}
        <div style={{ display: 'flex', gap: '4rem', marginBottom: '6rem', flexWrap: 'wrap' }}>
          <Reveal direction="left" style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 600, margin: 0, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Our<br />
              Masterpiece <span style={{ color: '#666' }}>Projects<br />& Estates</span>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={150} style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: 1.5, color: '#ccc', marginBottom: '2.5rem', maxWidth: '600px' }}>
              <span style={{ fontWeight: 600, color: 'white' }}>GHL Developments redefine luxury living.</span> Explore our exclusive portfolio of residential and commercial masterpieces engineered for the extraordinary.
            </p>
            <button style={{ backgroundColor: 'white', color: '#111', border: 'none', borderRadius: '50px', padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'background-color 0.3s' }}>
              View All Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </Reveal>
        </div>

        {/* Expandable Flex Grid */}
        <Reveal direction="up" delay={250} className="projects-flex-container">

          {/* Project 1: SKY LARK */}
          <div className="support-card group" style={{ position: 'relative', borderRadius: '0', overflow: 'hidden', cursor: 'pointer' }}>
            <Image src="/skylark.jpeg" alt="Sky Lark Project" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="support-card-img" />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)', zIndex: 1, transition: 'background-color 0.5s ease' }} className="group-hover:bg-black/30"></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem 2rem' }}>
              <div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em', color: 'white' }}>Sky Lark</h3>
                <div className="project-details-content">
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '1.2rem', lineHeight: 1.5 }}>
                    A fully constructed residential masterpiece featuring 5 elegant 3BHK flats, completed in 2023 with high-end finishes.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/skylark" className="support-card-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', borderRadius: '50px', padding: '0.7rem 1.3rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', width: 'fit-content' }}>
                  Explore
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2: Falcon */}
          <div className="support-card group" style={{ position: 'relative', borderRadius: '0', overflow: 'hidden', cursor: 'pointer' }}>
            <Image src="/falcon.jpeg" alt="Falcon Residences" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="support-card-img" />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)', zIndex: 1, transition: 'background-color 0.5s ease' }} className="group-hover:bg-black/30"></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem 2rem' }}>
              <div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em', color: 'white' }}>Falcon</h3>
                <div className="project-details-content">
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '1.2rem', lineHeight: 1.5 }}>
                    Redefining urban sophistication with modern architectural language and premium lifestyle amenities.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/falcon" className="support-card-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', borderRadius: '50px', padding: '0.7rem 1.3rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', width: 'fit-content' }}>
                  Explore
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3: Datta */}
          <div className="support-card group" style={{ position: 'relative', borderRadius: '0', overflow: 'hidden', cursor: 'pointer' }}>
            <Image src="/ghldatta.jpeg" alt="Datta Independent House" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="support-card-img" />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)', zIndex: 1, transition: 'background-color 0.5s ease' }} className="group-hover:bg-black/30"></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem 2rem' }}>
              <div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em', color: 'white' }}>Datta</h3>
                <div className="project-details-content">
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '1.2rem', lineHeight: 1.5 }}>
                    An independent house in Vasanth Nagar, Hyderabad, expertly remodeled in 2023 for a serene living experience.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/datta" className="support-card-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', borderRadius: '50px', padding: '0.7rem 1.3rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', width: 'fit-content' }}>
                  Explore
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4: Vivana */}
          <div className="support-card group" style={{ position: 'relative', borderRadius: '0', overflow: 'hidden', cursor: 'pointer' }}>
            <Image src="/vivana.jpeg" alt="Vivana HRBR Layout" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="support-card-img" />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)', zIndex: 1, transition: 'background-color 0.5s ease' }} className="group-hover:bg-black/30"></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem 2rem' }}>
              <div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em', color: 'white' }}>Vivana</h3>
                <div className="project-details-content">
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '1.2rem', lineHeight: 1.5 }}>
                    10 premium 3 BHK flats in HRBR Layout, Bangalore. Crafted for comfort with spacious layouts and modern finishes.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/vivana" className="support-card-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', borderRadius: '50px', padding: '0.7rem 1.3rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', width: 'fit-content' }}>
                  Explore
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 5: GK Senate */}
          <div className="support-card group" style={{ position: 'relative', borderRadius: '0', overflow: 'hidden', cursor: 'pointer' }}>
            <Image src="/gk.jpg" alt="GK Senate Commercial" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="support-card-img" />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)', zIndex: 1, transition: 'background-color 0.5s ease' }} className="group-hover:bg-black/30"></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem 2rem' }}>
              <div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em', color: 'white' }}>GK Senate</h3>
                <div className="project-details-content">
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '1.2rem', lineHeight: 1.5 }}>
                    Efficient commercial contracting solutions tailored to business needs, ensuring high standards and safety.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/gk-senate" className="support-card-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', borderRadius: '50px', padding: '0.7rem 1.3rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', width: 'fit-content' }}>
                  Explore
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 6: Vajra Avant */}
          <div className="support-card group" style={{ position: 'relative', borderRadius: '0', overflow: 'hidden', cursor: 'pointer' }}>
            <Image src="/avant.jpeg" alt="Vajra Avant Kondapur" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} className="support-card-img" />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)', zIndex: 1, transition: 'background-color 0.5s ease' }} className="group-hover:bg-black/30"></div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem 2rem' }}>
              <div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 500, lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em', color: 'white' }}>Vajra Avant</h3>
                <div className="project-details-content">
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginTop: '1.2rem', lineHeight: 1.5 }}>
                    5 premium 2 BHK and 5 spacious 3 BHK flats in Kondapur, Hyderabad, designed for modern urban living.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/vajra-avant" className="support-card-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white', borderRadius: '50px', padding: '0.7rem 1.3rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', width: 'fit-content' }}>
                  Explore
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>

        </Reveal>
      </section>


      {/* About Us Section */}
      <section id="about" style={{ backgroundColor: '#fff', color: '#111', padding: '8rem 4rem 2rem 4rem', fontFamily: 'var(--font-instrument-sans)' }}>
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <Reveal direction="left" style={{ flex: '0 0 30%', fontSize: '1.2rem', fontWeight: 700, paddingTop: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            About Us
          </Reveal>
          <Reveal direction="right" delay={120} style={{ flex: '1', maxWidth: '1100px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)', fontWeight: 300, margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#111' }}>
              We don’t just construct buildings; we engineer the future of luxury living with precision, passion, and uncompromising quality.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ display: 'flex', flexWrap: 'wrap', minHeight: '80vh', backgroundColor: '#fff', color: '#111', fontFamily: 'var(--font-instrument-sans)' }}>
        <Reveal direction="left" style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem, 8vw, 8rem)' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '4px', color: '#888', marginBottom: '2rem', textTransform: 'uppercase' }}>Our Philosophy</p>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 300, marginBottom: '3rem', lineHeight: 1, letterSpacing: '-0.04em' }}>Vision</h2>
          <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#555', maxWidth: '550px', fontWeight: 300 }}>
            To build strong, modern, and lasting spaces that improve everyday life and shape better communities for the future.
          </p>
        </Reveal>
        <Reveal direction="right" delay={150} style={{ flex: '1 1 500px', position: 'relative', minHeight: '60vh' }}>
          <Image src="/vision.jpeg" alt="Vision Architecture" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </Reveal>
      </section>

      {/* Mission Section */}
      <section style={{ display: 'flex', flexWrap: 'wrap-reverse', minHeight: '80vh', backgroundColor: '#fff', color: '#111', fontFamily: 'var(--font-instrument-sans)' }}>
        <Reveal direction="left" style={{ flex: '1 1 500px', position: 'relative', minHeight: '60vh' }}>
          <Image src="/mission.jpeg" alt="Mission Craftsmanship" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
        </Reveal>
        <Reveal direction="right" delay={150} style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem, 8vw, 8rem)' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '4px', color: '#888', marginBottom: '2rem', textTransform: 'uppercase' }}>Our Commitment</p>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 300, marginBottom: '3rem', lineHeight: 1, letterSpacing: '-0.04em' }}>Mission</h2>
          <p style={{ fontSize: '1.4rem', lineHeight: 1.6, color: '#555', maxWidth: '550px', fontWeight: 300 }}>
            Our mission is to build with care and accuracy, using smart ideas, quality work, and honest practices to create lasting value for our clients and communities.
          </p>
        </Reveal>
      </section>

      <section id="expertise" style={{ backgroundColor: '#111', color: 'white', fontFamily: 'var(--font-instrument-sans)', padding: '8rem 0 4rem 0' }}>
        {/* Header */}
        <div style={{ display: 'flex', padding: '0 clamp(1.5rem, 5vw, 4rem)', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <Reveal direction="left" style={{ flex: '1 1 250px', fontSize: '1.2rem', fontWeight: 600 }}>Expertise</Reveal>
          <Reveal direction="right" delay={120} style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 500, margin: 0, lineHeight: 1.1 }}>What GHL<br /><span style={{ color: '#888' }}>Pioneers In</span></h2>
          </Reveal>
        </div>

        {/* Row 1 */}
        <Reveal direction="left" className="service-row-hover" style={{ position: 'relative', borderTop: '1px solid #333', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '3rem 4rem', minHeight: '250px', cursor: 'pointer', overflow: 'hidden' }}>
          <div className="service-row-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, backgroundImage: 'url(/contrcution_image.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div className="service-row-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', width: '100%', alignItems: 'center' }}>
            <div style={{ flex: '0 0 40%', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', flexShrink: 0 }}>1</div>
              <p style={{ maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, color: '#f0f0f0' }}>From conceptual blueprints to structural execution, our expert architects and engineers construct visionary spaces. We design visionary architectural concepts that balance modern aesthetics with structural brilliance, maximizing both form and function.</p>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em' }}>Construction</h3>
            </div>
            <div style={{ flex: '0 0 10%', display: 'flex', justifyContent: 'flex-end' }}>
              <div className="service-row-arrow" style={{ opacity: 0, transform: 'translateX(-40px)', transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><polyline points="15 5 22 12 15 19"></polyline></svg>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Row 2 */}
        <Reveal direction="right" className="service-row-hover" style={{ position: 'relative', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '3rem 4rem', minHeight: '250px', cursor: 'pointer', overflow: 'hidden' }}>
          <div className="service-row-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, backgroundImage: 'url(/contrcution_consulting_service.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div className="service-row-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', width: '100%', alignItems: 'center' }}>
            <div style={{ flex: '0 0 40%', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', flexShrink: 0 }}>2</div>
              <p style={{ maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, color: '#f0f0f0' }}>We provide expert advice and consulting services to optimize construction processes and outcomes.</p>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em' }}>Consulting Services</h3>
            </div>
            <div style={{ flex: '0 0 10%', display: 'flex', justifyContent: 'flex-end' }}>
              <div className="service-row-arrow" style={{ opacity: 0, transform: 'translateX(-40px)', transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><polyline points="15 5 22 12 15 19"></polyline></svg>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Row 3 */}
        <Reveal direction="left" className="service-row-hover" style={{ position: 'relative', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '3rem 4rem', minHeight: '250px', cursor: 'pointer', overflow: 'hidden' }}>
          <div className="service-row-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, backgroundImage: 'url(/constrcution_contracting.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div className="service-row-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', width: '100%', alignItems: 'center' }}>
            <div style={{ flex: '0 0 40%', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', flexShrink: 0 }}>3</div>
              <p style={{ maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, color: '#f0f0f0' }}>We offer comprehensive general contracting services for residential, commercial, and industrial projects.</p>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em' }}>Contracting</h3>
            </div>
            <div style={{ flex: '0 0 10%', display: 'flex', justifyContent: 'flex-end' }}>
              <div className="service-row-arrow" style={{ opacity: 0, transform: 'translateX(-40px)', transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><polyline points="15 5 22 12 15 19"></polyline></svg>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Row 4 */}
        <Reveal direction="right" className="service-row-hover" style={{ position: 'relative', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '3rem 4rem', minHeight: '250px', cursor: 'pointer', overflow: 'hidden' }}>
          <div className="service-row-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, backgroundImage: 'url(/Residential_&_Apartment_Projects.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div className="service-row-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', width: '100%', alignItems: 'center' }}>
            <div style={{ flex: '0 0 40%', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', flexShrink: 0 }}>4</div>
              <p style={{ maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, color: '#f0f0f0' }}>We are experienced in developing modern apartment complexes that harmonize functional design with aesthetic appeal and hand it over with end to end details (elevation finishes, landscape etc).</p>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em', textAlign: 'center' }}>Residential &<br />Apartment Projects</h3>
            </div>
            <div style={{ flex: '0 0 10%', display: 'flex', justifyContent: 'flex-end' }}>
              <div className="service-row-arrow" style={{ opacity: 0, transform: 'translateX(-40px)', transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><polyline points="15 5 22 12 15 19"></polyline></svg>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Row 5 */}
        <Reveal direction="left" className="service-row-hover" style={{ position: 'relative', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '3rem 4rem', minHeight: '250px', cursor: 'pointer', overflow: 'hidden' }}>
          <div className="service-row-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, backgroundImage: 'url(/construction_img.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div className="service-row-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', width: '100%', alignItems: 'center' }}>
            <div style={{ flex: '0 0 40%', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', flexShrink: 0 }}>5</div>
              <p style={{ maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, color: '#f0f0f0' }}>From site preparation to infrastructure development, we undertake projects with precision and efficiency.</p>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em' }}>Civil Engineering</h3>
            </div>
            <div style={{ flex: '0 0 10%', display: 'flex', justifyContent: 'flex-end' }}>
              <div className="service-row-arrow" style={{ opacity: 0, transform: 'translateX(-40px)', transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><polyline points="15 5 22 12 15 19"></polyline></svg>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Row 6 */}
        <Reveal direction="right" className="service-row-hover" style={{ position: 'relative', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: '3rem 4rem', minHeight: '250px', cursor: 'pointer', overflow: 'hidden' }}>
          <div className="service-row-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, backgroundImage: 'url(/Construction_Renovations_Remodeling.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div className="service-row-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.4s ease' }}></div>
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', width: '100%', alignItems: 'center' }}>
            <div style={{ flex: '0 0 40%', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', flexShrink: 0 }}>6</div>
              <p style={{ maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, color: '#f0f0f0' }}>Specialized in transforming spaces with innovative designs and skilled craftsmanship.</p>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.03em', textAlign: 'center' }}>Renovations &<br />Remodeling</h3>
            </div>
            <div style={{ flex: '0 0 10%', display: 'flex', justifyContent: 'flex-end' }}>
              <div className="service-row-arrow" style={{ opacity: 0, transform: 'translateX(-40px)', transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><polyline points="15 5 22 12 15 19"></polyline></svg>
              </div>
            </div>
          </div>
        </Reveal>
      </section>



      <section style={{ backgroundColor: '#fdfcfb', color: '#111', padding: '4rem 8rem 8rem 8rem', fontFamily: 'var(--font-instrument-sans)' }}>
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap', maxWidth: '1400px', margin: '0 auto' }}>

          {/* Left Content */}
          <Reveal direction="left" style={{ flex: '1 1 500px', marginTop: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, marginBottom: '2.5rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Blueprints to<br /><span style={{ fontWeight: 500 }}>Brilliance</span>
            </h2>
            <div style={{ position: 'relative', paddingLeft: '1rem' }}>
              <span style={{ position: 'absolute', top: '-20px', left: '-20px', fontSize: '6rem', color: '#f0ede6', fontFamily: 'Georgia, serif', lineHeight: 1, zIndex: 0 }}>&ldquo;</span>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '1.2rem', lineHeight: 1.7, color: '#555', fontWeight: 300, maxWidth: '580px' }}>
                At <span style={{ fontWeight: 500, color: '#111', letterSpacing: '0.5px' }}>GALI HIGH LIVING</span>, we believe in a collaborative approach with our clients, architects, and subcontractors. This ensures transparency, effective communication, and superior results throughout the project lifecycle. Our team is committed to upholding the highest standards of safety, sustainability, and quality craftsmanship.
              </p>
            </div>
          </Reveal>

          {/* Right Image */}
          <Reveal direction="right" delay={150} style={{ flex: '1 1 400px', position: 'relative', height: '500px', mixBlendMode: 'multiply' }}>
            <Image
              src="/Redefining%20luxury.png"
              alt="Redefining luxury"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </Reveal>

        </div>
      </section>


      <section style={{ backgroundColor: '#f2f2f2', padding: '8rem 4rem', color: '#111', fontFamily: 'var(--font-instrument-sans)' }}>
        <Reveal direction="up">
          <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 600, marginBottom: '4rem', letterSpacing: '-0.02em' }}>
            Don’t Take <span style={{ color: '#a0a0a0', fontWeight: 400 }}>Our Word for It.</span>
          </h2>
        </Reveal>

        <div style={{ display: 'flex', gap: '6rem', flexWrap: 'wrap', alignItems: 'stretch' }}>
          {/* Left Column (Image) */}
          <Reveal direction="left" style={{ flex: '1 1 500px', position: 'relative', minHeight: '450px' }}>
            <Image
              src={testimonials[activeTestimonial].image}
              alt="Testimonial"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
                transition: 'opacity 0.4s ease'
              }}
            />
          </Reveal>

          {/* Right Column (Content) */}
          <Reveal direction="right" delay={150} style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ borderTop: '1px solid #ccc', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      border: activeTestimonial === idx ? '1px solid #111' : '1px solid #ccc',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      color: activeTestimonial === idx ? '#111' : '#ccc',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {idx + 1}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '5rem', fontFamily: 'Georgia, serif', lineHeight: 0.5, color: '#111', marginTop: '1rem' }}>”</div>
            </div>

            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.7rem', lineHeight: 1.5, marginBottom: '4rem', color: '#111', transition: 'opacity 0.4s ease' }}>
              "{testimonials[activeTestimonial].quote}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: 'auto' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>{testimonials[activeTestimonial].author}</span>
              <span style={{ fontSize: '1.2rem', color: '#111' }}>/</span>
              <span style={{ fontSize: '1rem', letterSpacing: '3px', color: '#111' }}>{testimonials[activeTestimonial].rating}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
