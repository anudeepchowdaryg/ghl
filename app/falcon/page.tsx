"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { ProjectHero } from '../components/ProjectHero';
import { ProjectPageStyles } from '../components/ProjectPageStyles';

export default function FalconProject() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ backgroundColor: '#fff', color: '#111', minHeight: '100vh', fontFamily: 'var(--font-instrument-sans)', overflowX: 'hidden' }}>

      <ProjectPageStyles />
      <style jsx global>{`
        .amenity-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .amenity-card:hover {
          border-color: #111 !important;
          background-color: #fafafa !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        .amenity-card:hover svg {
          stroke: #111 !important;
          transform: scale(1.1) rotate(2deg);
        }

        .spec-item {
          transition: all 0.4s ease;
          border-bottom: 1px solid #eaeaea;
        }
        .spec-item:hover {
          border-bottom-color: #111;
          padding-left: 8px;
        }

        .gallery-item {
          cursor: pointer;
          position: relative;
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
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%);
          z-index: 1;
          opacity: 0.85;
          transition: opacity 0.5s ease;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 0.95;
        }

        .loc-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .loc-card:hover {
          background: rgba(255,255,255,0.03) !important;
          border-color: rgba(255,255,255,0.2) !important;
          transform: translateY(-5px);
        }

        .brochure-container:hover .brochure-mockup {
          transform: rotateY(-5deg) rotateX(5deg) scale(1.15) translateZ(20px) !important;
          box-shadow: -30px 30px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08) !important;
        }

        .download-btn {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .download-btn:hover {
          background-color: #111 !important;
          color: #fff !important;
          transform: scale(1.03) translateY(-2px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Dynamic Transparent/Solid Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        padding: '2rem clamp(1.5rem, 5vw, 4rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrollY > 50 ? 'rgba(255,255,255,0.98)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo.png"
            alt="GHL"
            width={150}
            height={50}
            priority
            style={{
              objectFit: 'contain',
              height: '44px',
              width: 'auto',
              filter: scrollY > 50 ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 0.5s',
            }}
          />
        </Link>
        <Link href="/#projects" className="nav-btn" style={{
          fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700,
          border: scrollY > 50 ? '1px solid rgba(0,0,0,0.15)' : '1px solid rgba(255,255,255,0.3)',
          padding: '0.9rem 1.8rem', borderRadius: '50px', textDecoration: 'none',
          color: scrollY > 50 ? '#111' : '#fff', backgroundColor: 'transparent'
        }}>
          Close Project
        </Link>
      </nav>

      <ProjectHero
        imageSrc="/falcon.jpeg"
        imageAlt="Falcon"
        scrollY={scrollY}
        subtitle="Residences"
        titleWords={['FALCON', 'RITZ']}
        badgeLines={['STATUS: COMMISSIONED']}
      />

      {/* Editorial Overview Section */}
      <section style={{ padding: '12rem clamp(2rem, 8vw, 10rem)', backgroundColor: '#fff', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8rem', justifyContent: 'center' }}>
          <Reveal direction="left" style={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#a0a0a0', marginBottom: '3rem', textTransform: 'uppercase', fontWeight: 700 }}>01 / The Vision</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#111' }}>
              Redefining urban <span style={{ color: '#888', fontWeight: 800 }}>sophistication & luxury.</span>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={150} style={{ flex: '1 1 400px', maxWidth: '600px', paddingTop: '4rem' }}>
            <p style={{ fontSize: '1.45rem', lineHeight: 1.8, color: '#222', marginBottom: '2.5rem', fontWeight: 400 }}>
              Discover Falcon Ritz: Boasting exquisite 3BHK apartments that epitomize luxury, comfort, and convenience while offering spacious interiors.
            </p>
            <p style={{ fontSize: '1.45rem', lineHeight: 1.8, color: '#666', fontWeight: 400 }}>
              An address built for the selective few, standing tall in a highly coveted neighborhood, engineered to perfection by GHL.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Massive Visual Break */}
      <section style={{ width: '100vw', height: '85vh', position: 'relative', padding: '0 clamp(2rem, 5vw, 5rem)' }}>
        <Reveal direction="up" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.05)' }}>
          <Image src="/FALCON RITZ.jpg" alt="Interior Detail" fill sizes="(max-width: 1200px) 100vw, 85vw" style={{ objectFit: 'cover' }} />
        </Reveal>
      </section>

      {/* Specifications - Ultra Luxury Editorial Table (Dark Mode) */}
      <section style={{ padding: '12rem clamp(2rem, 8vw, 10rem)', backgroundColor: '#0a0a0a', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Reveal direction="up">
            <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#666', marginBottom: '8rem', textTransform: 'uppercase', fontWeight: 700 }}>02 / Technical Specifications</p>
          </Reveal>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Category 1 */}
            <Reveal direction="left" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', padding: '5rem 0', borderTop: '1px solid #333', width: '100%' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1 }}>Structural<br/>Core</h3>
              </div>
              <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Cement</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Ramco Supercrete / Ultratech</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Steel & Concrete</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>TMT 550D Grade / M25 Grade Mix</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Masonry (Walls)</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>8" THK Blocks (External) <br/> 4" & 6" THK Blocks (Internal)</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Roof Height</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>10.5 Feet Clear Height</p>
                </div>
              </div>
            </Reveal>

            {/* Category 2 */}
            <Reveal direction="right" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', padding: '5rem 0', borderTop: '1px solid #333', width: '100%' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1 }}>Doors &<br/>Windows</h3>
              </div>
              <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Main Door</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>8 Feet high Teak Wood Frame & Shutter with premium Polish</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Internal Doors</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>8 Feet Veneer flush doors with premium Polish & Teak Frames</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Windows</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>6 Feet high wood/white finish UPVC with toughened glass shutters</p>
                </div>
              </div>
            </Reveal>

            {/* Category 3 */}
            <Reveal direction="left" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', padding: '5rem 0', borderTop: '1px solid #333', width: '100%' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1 }}>Flooring &<br/>Bath</h3>
              </div>
              <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Living & Bed Areas</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Vitrified Tiles (Somany make)</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Master Bedroom</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Premium Wooden-finish Tiles</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Common Spaces</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Polished Granite Flooring in Parking & Corridors</p>
                </div>
              </div>
            </Reveal>

            {/* Category 4 */}
            <Reveal direction="right" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', padding: '5rem 0', borderTop: '1px solid #333', width: '100%' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1 }}>Infrastructure<br/>& Power</h3>
              </div>
              <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Elevator</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Schindler 10-Passenger High-Speed Elevator</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Power Backup</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Kirloskar DG Set (5kva Max Load)</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Electrical Core</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Finolex Wires & Legrand Switches</p>
                </div>
              </div>
            </Reveal>

            {/* Category 5 */}
            <Reveal direction="left" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', padding: '5rem 0', borderTop: '1px solid #333', borderBottom: '1px solid #333', width: '100%' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1 }}>Fittings &<br/>Plumbing</h3>
              </div>
              <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Fittings</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Grohe Bath Fittings & Jaguar Sanitary</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Plumbing Lines</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>Supreme / Ashirwad CPVC & PVC Lines</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 700 }}>Philosophy</p>
                  <p style={{ fontSize: '1.25rem', color: '#eee', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>100% Vaastu Compliant Homes</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Visual Narrative Grid Section */}
      <section style={{ padding: '12rem clamp(2rem, 8vw, 10rem)', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Reveal direction="up">
            <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#a0a0a0', marginBottom: '6rem', textTransform: 'uppercase', fontWeight: 700 }}>03 / Visual Narrative</p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem' }}>
            {/* Main large image */}
            <Reveal direction="left" className="gallery-item" style={{ gridColumn: 'span 8', position: 'relative', height: '550px', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <div className="gallery-overlay" />
              <Image src="/falcon.jpeg" alt="Falcon Architectural View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', color: '#fff', zIndex: 2 }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8, fontWeight: 700 }}>Exterior Aspect</span>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.3rem 0 0 0', letterSpacing: '-0.02em' }}>Symmetrical Facade</h4>
              </div>
            </Reveal>

            {/* Small right image */}
            <Reveal direction="right" delay={120} className="gallery-item" style={{ gridColumn: 'span 4', position: 'relative', height: '550px', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <div className="gallery-overlay" />
              <Image src="/vision.png" alt="Falcon Interior" fill sizes="(max-width: 768px) 100vw, 30vw" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', color: '#fff', zIndex: 2 }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8, fontWeight: 700 }}>Living Pavilion</span>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.3rem 0 0 0', letterSpacing: '-0.02em' }}>Bespoke Interior</h4>
              </div>
            </Reveal>

            {/* Bottom left small image */}
            <Reveal direction="left" delay={200} className="gallery-item" style={{ gridColumn: 'span 4', position: 'relative', height: '420px', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <div className="gallery-overlay" />
              <Image src="/Construction_Renovations_Remodeling.jpeg" alt="Falcon Detail" fill sizes="(max-width: 768px) 100vw, 30vw" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', color: '#fff', zIndex: 2 }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8, fontWeight: 700 }}>Detail Element</span>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.3rem 0 0 0', letterSpacing: '-0.02em' }}>Precision Core</h4>
              </div>
            </Reveal>

            {/* Bottom right large image */}
            <Reveal direction="right" delay={280} className="gallery-item" style={{ gridColumn: 'span 8', position: 'relative', height: '420px', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <div className="gallery-overlay" />
              <Image src="/contrcution_image.jpeg" alt="Falcon Structural" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw" style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', color: '#fff', zIndex: 2 }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8, fontWeight: 700 }}>Structural Core</span>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.3rem 0 0 0', letterSpacing: '-0.02em' }}>Solid Infrastructure</h4>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Curated Amenities - Premium Interactive Cards */}
      <section style={{ padding: '12rem clamp(2rem, 8vw, 10rem)', backgroundColor: '#fafafa', borderBottom: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Reveal direction="up">
            <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#a0a0a0', marginBottom: '6rem', textTransform: 'uppercase', fontWeight: 700 }}>04 / Curated Amenities</p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

            {/* Amenity 1 */}
            <Reveal direction="up" delay={0} className="amenity-card" style={{ padding: '3rem 2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: '#fff' }}>
              <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.5s' }}>
                  <path d="M12 2L2 22h20L12 2z" />
                  <path d="M12 6l-6 12h12l-6-12z" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.75rem 0', letterSpacing: '-0.02em', color: '#111' }}>Curated Landscape</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>Architecturally manicured green spaces designed to harmonize nature with urban geometry.</p>
              </div>
            </Reveal>

            {/* Amenity 2 */}
            <Reveal direction="up" delay={80} className="amenity-card" style={{ padding: '3rem 2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: '#fff' }}>
              <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.5s' }}>
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M12 2v9M8 5h8" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.75rem 0', letterSpacing: '-0.02em', color: '#111' }}>Gym & Yoga</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>A fully equipped private fitness center, yoga pavilion, and tranquil meditation room.</p>
              </div>
            </Reveal>

            {/* Amenity 3 */}
            <Reveal direction="up" delay={160} className="amenity-card" style={{ padding: '3rem 2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: '#fff' }}>
              <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.5s' }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.75rem 0', letterSpacing: '-0.02em', color: '#111' }}>Party Hall</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>An exquisitely designed social space for hosting celebrations and community gatherings.</p>
              </div>
            </Reveal>

            {/* Amenity 4 */}
            <Reveal direction="up" delay={240} className="amenity-card" style={{ padding: '3rem 2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: '#fff' }}>
              <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.5s' }}>
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                  <line x1="7" y1="2" x2="7" y2="22" />
                  <line x1="17" y1="2" x2="17" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="2" y1="7" x2="7" y2="7" />
                  <line x1="2" y1="17" x2="7" y2="17" />
                  <line x1="17" y1="17" x2="22" y2="17" />
                  <line x1="17" y1="7" x2="22" y2="7" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.75rem 0', letterSpacing: '-0.02em', color: '#111' }}>Car Parking</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>Ample, well-planned and highly secure parking spaces dedicated to residents and guests.</p>
              </div>
            </Reveal>

            {/* Amenity 5 */}
            <Reveal direction="up" delay={320} className="amenity-card" style={{ padding: '3rem 2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: '#fff' }}>
              <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.5s' }}>
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.75rem 0', letterSpacing: '-0.02em', color: '#111' }}>CCTV in Common</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>Comprehensive 24/7 digital security monitoring covering all entrance, lobby, and staircase areas.</p>
              </div>
            </Reveal>

            {/* Amenity 6 */}
            <Reveal direction="up" delay={400} className="amenity-card" style={{ padding: '3rem 2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: '#fff' }}>
              <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.5s' }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.75rem 0', letterSpacing: '-0.02em', color: '#111' }}>Zen Garden & BBQ</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>A sky-high landscaped oasis complete with cozy seating and a premium open-air barbeque pavilion.</p>
              </div>
            </Reveal>

            {/* Amenity 7 */}
            <Reveal direction="up" delay={480} className="amenity-card" style={{ padding: '3rem 2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: '#fff' }}>
              <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.5s' }}>
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.75rem 0', letterSpacing: '-0.02em', color: '#111' }}>Dual Water Supply</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>Reliable dual water source supply system ensuring continuous domestic and drinking water accessibility.</p>
              </div>
            </Reveal>

            {/* Amenity 8 */}
            <Reveal direction="up" delay={560} className="amenity-card" style={{ padding: '3rem 2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: '#fff' }}>
              <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'all 0.5s' }}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 0.75rem 0', letterSpacing: '-0.02em', color: '#111' }}>Power Backup</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>Automatic diesel generator (DG) power back-up system ensuring uninterrupted living comfort.</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Location / Status with Embedded Architectural Google Map */}
      <section style={{ padding: '15rem clamp(2rem, 8vw, 10rem)', backgroundColor: '#111', color: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem' }}>

          <Reveal direction="left" style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#666', marginBottom: '2.5rem', textTransform: 'uppercase', fontWeight: 700 }}>05 / Location</p>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5.2rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 2.5rem 0' }}>The Center<br />of Everything.</h2>
            <p style={{ fontSize: '1.25rem', color: '#aaa', lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
              Nestled in the most coveted real estate zone. Unrivaled connectivity combined with the seclusion of a private estate.
            </p>
          </Reveal>

          <Reveal direction="right" delay={150} style={{ position: 'relative', width: '100%', height: '480px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}>
            <iframe
              src="https://maps.google.com/maps?q=Falcon+Ritz+Apartment@13.0077792,77.6532321&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            />
          </Reveal>

        </div>
      </section>

      {/* Ultra Premium CTA Brochure with CSS Mockup */}
      <section className="brochure-container" style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#fff', borderTop: '1px solid #eaeaea' }}>
        <Reveal direction="left" style={{ flex: '1 1 500px', position: 'relative', minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f7f8', perspective: '1200px', overflow: 'hidden' }}>
          {/* CSS Brochure Mockup */}
          <a
            href="/FALCON%20RITZ.pdf"
            download="FALCON RITZ.pdf"
            className="brochure-mockup"
            style={{
              position: 'relative',
              width: '280px',
              height: '400px',
              backgroundColor: '#fff',
              boxShadow: '-20px 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
              transform: 'rotateY(-15deg) rotateX(10deg) scale(1.05)',
              transformStyle: 'preserve-3d',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2.5rem',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            {/* Brochure Spine/Edge effect */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '12px', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.08), rgba(0,0,0,0) 30%, rgba(255,255,255,0.9) 70%, rgba(0,0,0,0.03) 100%)', borderRight: '1px solid rgba(0,0,0,0.05)' }} />

            {/* Brochure Content/Cover */}
            <p style={{ fontSize: '0.75rem', letterSpacing: '6px', color: '#888', textTransform: 'uppercase', marginBottom: 'auto', marginTop: '1.5rem', zIndex: 2, fontWeight: 800 }}>GHL BUILDERS</p>
            <h3 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#111', margin: 0, letterSpacing: '-0.04em', textAlign: 'center', zIndex: 2, lineHeight: 1.1 }}>FALCON</h3>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#111', margin: '2.5rem 0', zIndex: 2 }} />
            <p style={{ fontSize: '0.85rem', color: '#555', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: 'auto', zIndex: 2, fontWeight: 700 }}>SPECIFICATIONS</p>

            {/* Subtle overlay for realism */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(110deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.03) 100%)', pointerEvents: 'none', zIndex: 3 }} />
          </a>
        </Reveal>
        <Reveal direction="right" delay={150} style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(4rem, 8vw, 10rem)', backgroundColor: '#fafafa' }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#a0a0a0', marginBottom: '2.5rem', textTransform: 'uppercase', fontWeight: 700 }}>06 / The Portfolio</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '2.5rem', lineHeight: 1.1, color: '#111' }}>Acquire the<br />Portfolio.</h2>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '4.5rem', fontWeight: 400, lineHeight: 1.7, maxWidth: '450px' }}>
            Explore floor plans, detailed architectural specifications, and curated galleries inside our comprehensive digital brochure.
          </p>
          <a
            href="/FALCON%20RITZ.pdf"
            download="FALCON RITZ.pdf"
            className="download-btn"
            style={{
              background: 'transparent', color: '#111', border: '2px solid #111', borderRadius: '50px',
              padding: '1.4rem 5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', cursor: 'pointer',
              width: 'fit-content', fontWeight: 700, textDecoration: 'none', display: 'inline-block',
            }}
          >
            Download Brochure
          </a>
        </Reveal>
      </section>

    </main>
  );
}
