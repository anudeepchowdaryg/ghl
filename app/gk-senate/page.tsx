"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { ProjectHero } from '../components/ProjectHero';
import { ProjectPageStyles } from '../components/ProjectPageStyles';

export default function GkSenateProject() {
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
        imageSrc="/gk.jpg"
        imageAlt="GK Senate"
        scrollY={scrollY}
        subtitle="Commercial Hub"
        titleWords={['GK', 'SENATE']}
        badgeLines={['LAT: 17.3850° N', 'ELEV: 542M', 'STATUS: COMMISSIONED']}
      />
      
      {/* Editorial Overview Section */}
      <section style={{ padding: '12rem clamp(2rem, 8vw, 10rem)', backgroundColor: '#fff', position: 'relative', zIndex: 20 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8rem', justifyContent: 'center' }}>
          <Reveal direction="left" style={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#a0a0a0', marginBottom: '3rem', textTransform: 'uppercase', fontWeight: 700 }}>01 / The Vision</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#111' }}>
              Uncompromising scaling & <span style={{ color: '#888', fontWeight: 800 }}>commercial safety standards.</span>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={150} style={{ flex: '1 1 400px', maxWidth: '600px', paddingTop: '4rem' }}>
            <p style={{ fontSize: '1.45rem', lineHeight: 1.8, color: '#222', marginBottom: '2.5rem', fontWeight: 400 }}>
              GK Senate delivers robust, highly efficient commercial contracting solutions designed to scale for large enterprises. Built with cutting-edge engineering templates, architectural longevity, and uncompromising workplace safety frameworks.
            </p>
            <p style={{ fontSize: '1.45rem', lineHeight: 1.8, color: '#666', fontWeight: 400 }}>
              A state-of-the-art office/commercial landmark engineered strictly inside modern green energy codes and luxury standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Massive Visual Break */}
      <section style={{ width: '100vw', height: '85vh', position: 'relative', padding: '0 clamp(2rem, 5vw, 5rem)' }}>
         <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.05)' }}>
            <Image src="/gk.jpg" alt="Interior Detail" fill sizes="(max-width: 1200px) 100vw, 85vw" style={{ objectFit: 'cover' }} />
         </div>
      </section>

      {/* Engineering Core Section */}
      <section style={{ padding: '12rem clamp(2rem, 8vw, 10rem)', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#a0a0a0', marginBottom: '6rem', textTransform: 'uppercase', fontWeight: 700 }}>02 / Engineering Core</p>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Item 1 */}
            <Reveal direction="left" className="craft-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3.5rem 0', flexWrap: 'wrap', gap: '2rem', transition: 'all 0.5s ease', width: '100%' }}>
              <h4 style={{ fontSize: '2.6rem', fontWeight: 800, margin: 0, color: '#111', letterSpacing: '-0.02em' }}>High load core</h4>
              <p style={{ fontSize: '1.25rem', color: '#555', maxWidth: '450px', margin: 0, fontWeight: 400, lineHeight: 1.7 }}>Heavy-duty structural framing engineered with premium concrete block configurations and seismic dampers.</p>
            </Reveal>
            {/* Item 2 */}
            <Reveal direction="right" className="craft-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3.5rem 0', flexWrap: 'wrap', gap: '2rem', transition: 'all 0.5s ease', width: '100%' }}>
              <h4 style={{ fontSize: '2.6rem', fontWeight: 800, margin: 0, color: '#111', letterSpacing: '-0.02em' }}>Thermal Insul</h4>
              <p style={{ fontSize: '1.25rem', color: '#555', maxWidth: '450px', margin: 0, fontWeight: 400, lineHeight: 1.7 }}>Integrated facade layering reflecting solar warmth and protecting low air-conditioning loads.</p>
            </Reveal>
            {/* Item 3 */}
            <Reveal direction="left" className="craft-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3.5rem 0', flexWrap: 'wrap', gap: '2rem', transition: 'all 0.5s ease', width: '100%' }}>
              <h4 style={{ fontSize: '2.6rem', fontWeight: 800, margin: 0, color: '#111', letterSpacing: '-0.02em' }}>Smart Security</h4>
              <p style={{ fontSize: '1.25rem', color: '#555', maxWidth: '450px', margin: 0, fontWeight: 400, lineHeight: 1.7 }}>24/7 automated fire-control networks, concealed sprinkler lines, and smart elevator systems.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual Narrative Grid Section */}
      <section className="project-gallery-section">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Reveal direction="up">
            <p className="project-gallery-label">03 / Visual Narrative</p>
          </Reveal>

          <div className="project-gallery-grid">
            {/* Main large image */}
            <Reveal direction="left" className="gallery-item gallery-item--wide">
              <div className="gallery-overlay" />
              <Image src="/gk.jpg" alt="GK Senate Architectural View" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw" style={{ objectFit: 'cover' }} />
              <div className="gallery-caption">
                <span className="gallery-caption__eyebrow">Commercial Hub</span>
                <h4 className="gallery-caption__title">Modern Elevation</h4>
              </div>
            </Reveal>
            
            {/* Small right image */}
            <Reveal direction="right" delay={120} className="gallery-item gallery-item--narrow-tall">
              <div className="gallery-overlay" />
              <Image src="/constrcution_contracting.jpeg" alt="GK Senate Structural" fill sizes="(max-width: 768px) 100vw, 30vw" style={{ objectFit: 'cover' }} />
              <div className="gallery-caption">
                <span className="gallery-caption__eyebrow">Structural Elements</span>
                <h4 className="gallery-caption__title">Commercial Scale</h4>
              </div>
            </Reveal>

            {/* Bottom left small image */}
            <Reveal direction="left" delay={200} className="gallery-item gallery-item--narrow">
              <div className="gallery-overlay" />
              <Image src="/contrcution_image.jpeg" alt="GK Senate Detail" fill sizes="(max-width: 768px) 100vw, 30vw" style={{ objectFit: 'cover' }} />
              <div className="gallery-caption">
                <span className="gallery-caption__eyebrow">Engineering detail</span>
                <h4 className="gallery-caption__title">Precision Core</h4>
              </div>
            </Reveal>

            {/* Bottom right large image */}
            <Reveal direction="right" delay={280} className="gallery-item gallery-item--wide-short">
              <div className="gallery-overlay" />
              <Image src="/Site_preparation_infrastructure.jpeg" alt="GK Senate Infrastructure" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw" style={{ objectFit: 'cover' }} />
              <div className="gallery-caption">
                <span className="gallery-caption__eyebrow">Infrastructure</span>
                <h4 className="gallery-caption__title">Heavy Duty base</h4>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location / Status with Embedded Google Maps */}
      <section style={{ padding: '15rem clamp(2rem, 8vw, 10rem)', backgroundColor: '#111', color: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem' }}>
          
          <Reveal direction="left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#666', marginBottom: '2.5rem', textTransform: 'uppercase', fontWeight: 700 }}>04 / Location</p>
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5.2rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 2.5rem 0' }}>The Center<br />of Everything.</h2>
              <p style={{ fontSize: '1.25rem', color: '#aaa', lineHeight: 1.8, fontWeight: 400, marginBottom: '3rem' }}>
                Positioned in absolute proximity to major commercial routes and prime airport channels.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div className="loc-card" style={{ padding: '2.5rem 1.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#161616' }}>
                <p style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 0.5rem 0', lineHeight: 1, letterSpacing: '-1px', color: '#fff' }}>05 <span style={{ fontSize: '1.1rem', color: '#666', fontWeight: 700, letterSpacing: '0' }}>mins</span></p>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#aaa', margin: 0, fontWeight: 700 }}>To Financial District</p>
              </div>
              <div className="loc-card" style={{ padding: '2.5rem 1.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#161616' }}>
                <p style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 0.5rem 0', lineHeight: 1, letterSpacing: '-1px', color: '#fff' }}>15 <span style={{ fontSize: '1.1rem', color: '#666', fontWeight: 700, letterSpacing: '0' }}>mins</span></p>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#aaa', margin: 0, fontWeight: 700 }}>To International Airport</p>
              </div>
            </div>
          </Reveal>
          
          {/* Architectural Google Maps embedded */}
          <Reveal direction="right" delay={150} style={{ position: 'relative', width: '100%', height: '480px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=GK%20Senate%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) opacity(0.8)' }}
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
          <div className="brochure-mockup" style={{
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
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {/* Brochure Spine/Edge effect */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '12px', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.08), rgba(0,0,0,0) 30%, rgba(255,255,255,0.9) 70%, rgba(0,0,0,0.03) 100%)', borderRight: '1px solid rgba(0,0,0,0.05)' }} />
            
            {/* Brochure Content/Cover */}
            <p style={{ fontSize: '0.75rem', letterSpacing: '6px', color: '#888', textTransform: 'uppercase', marginBottom: 'auto', marginTop: '1.5rem', zIndex: 2, fontWeight: 800 }}>GHL BUILDERS</p>
            <h3 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#111', margin: 0, letterSpacing: '-0.04em', textAlign: 'center', zIndex: 2, lineHeight: 1.1 }}>GK SENATE</h3>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#111', margin: '2.5rem 0', zIndex: 2 }} />
            <p style={{ fontSize: '0.85rem', color: '#555', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: 'auto', zIndex: 2, fontWeight: 700 }}>SPECIFICATIONS</p>
            
            {/* Subtle overlay for realism */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(110deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.03) 100%)', pointerEvents: 'none', zIndex: 3 }} />
          </div>
        </Reveal>
        <Reveal direction="right" delay={150} style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(4rem, 8vw, 10rem)', backgroundColor: '#fafafa' }}>
          <p style={{ fontSize: '0.85rem', letterSpacing: '4px', color: '#a0a0a0', marginBottom: '2.5rem', textTransform: 'uppercase', fontWeight: 700 }}>05 / The Portfolio</p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '2.5rem', lineHeight: 1.1, color: '#111' }}>Acquire the<br />Portfolio.</h2>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '4.5rem', fontWeight: 400, lineHeight: 1.7, maxWidth: '450px' }}>
            Explore floor plans, detailed architectural specifications, and curated galleries inside our comprehensive digital brochure.
          </p>
          <button className="download-btn" style={{ 
            background: 'transparent', color: '#111', border: '2px solid #111', borderRadius: '50px', 
            padding: '1.4rem 5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', cursor: 'pointer',
            width: 'fit-content', fontWeight: 700
          }}>
            Download Brochure
          </button>
        </Reveal>
      </section>

    </main>
  );
}
