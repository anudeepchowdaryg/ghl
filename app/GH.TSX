"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="nav-brand">GHL.</div>
                <div className="nav-links">
                    <a href="#" className="nav-link">Projects</a>
                    <a href="#" className="nav-link">Our Legacy</a>
                    <a href="#" className="nav-link">Availability</a>
                    <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border-color)', margin: '0 10px' }}></div>
                    <button className="btn-outline">Inquire Now</button>
                </div>
            </nav>

            <div style={{ height: '350vh', position: 'relative' }}>
                <section className="hero-layered" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                    <div className="hero-layer hero-sky" style={{ position: 'absolute', transform: `translateY(${scrollY * 0.1}px)` }}>
                        <Image src="/back.webp" alt="Sky" fill style={{ objectFit: 'cover' }} priority />
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
                            <span style={{ fontWeight: 700 }}>Gali Hugh Lining.</span> Crafting tomorrow's landmarks and premium living spaces.
                        </p>
                    </div>

                    {/* Phase 2 & 3: Outline & Filled Text Sequence */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        zIndex: 6, pointerEvents: 'none'
                    }}>

                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
                            {/* Outline Text - Fades in at 300, holds, fades out at 800 */}
                            <h1 style={{
                                fontSize: 'clamp(6rem, 25vw, 25rem)',
                                fontWeight: 900,
                                lineHeight: 0.8,
                                letterSpacing: '-5px',
                                margin: 0,
                                color: 'transparent',
                                WebkitTextStroke: '2px rgba(255,255,255,0.9)',
                                opacity: Math.max(0, Math.min(1, (scrollY - 300) / 300) - Math.max(0, (scrollY - 800) / 400)),
                                pointerEvents: scrollY > 300 && scrollY < 1200 ? 'auto' : 'none'
                            }}>
                                GHL
                            </h1>

                            {/* Filled Text - Fades in at 800 */}
                            <h1 style={{
                                position: 'absolute',
                                top: 0,
                                fontSize: 'clamp(6rem, 25vw, 25rem)',
                                fontWeight: 900,
                                lineHeight: 0.8,
                                letterSpacing: '-5px',
                                margin: 0,
                                backgroundImage: `url(/herobuilding.png)`,
                                backgroundSize: '100vw auto',
                                backgroundPosition: `center bottom`,
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                opacity: Math.min(1, Math.max(0, (scrollY - 800) / 400)),
                                pointerEvents: 'none'
                            }}>
                                GHL
                            </h1>
                        </div>

                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem' }}>
                            {/* Outline Subtext */}
                            <h2 style={{
                                fontSize: 'clamp(2rem, 10vw, 10rem)',
                                fontWeight: 300,
                                lineHeight: 1,
                                margin: 0,
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255,255,255,0.8)',
                                opacity: Math.max(0, Math.min(1, (scrollY - 300) / 300) - Math.max(0, (scrollY - 800) / 400))
                            }}>
                                Real Estate
                            </h2>

                            {/* Filled Subtext */}
                            <h2 style={{
                                position: 'absolute',
                                top: 0,
                                fontSize: 'clamp(2rem, 10vw, 10rem)',
                                fontWeight: 300,
                                lineHeight: 1,
                                margin: 0,
                                backgroundImage: `url(/herobuilding.png)`,
                                backgroundSize: '100vw auto',
                                backgroundPosition: `center bottom`,
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                opacity: Math.min(1, Math.max(0, (scrollY - 800) / 400)),
                                pointerEvents: 'none'
                            }}>
                                Real Estate
                            </h2>
                        </div>
                    </div>

                    {/* Building Layer - Moves up, fades out at 800 */}
                    <div className="hero-layer hero-building" style={{
                        position: 'absolute',
                        bottom: '-25%', /* Brings building higher up initially */
                        transform: `translateY(${-scrollY * 0.2}px)`,
                        opacity: 1 - Math.min(1, Math.max(0, (scrollY - 800) / 400))
                    }}>
                        <img src="/herobuilding.png" alt="Building" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    <div className="hero-layer hero-smoke" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 10,
                        pointerEvents: 'none',
                        transform: 'translateY(70%)' /* Pushes smoke further down */
                    }}>
                        <img src="/smoke.webp" alt="Smoke" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.8 }} />
                    </div>
                </section>
            </div>

            <section className="section">
                <h2 className="section-title">We build more than properties.</h2>
                <p className="section-desc">At GHL, it’s about uncompromising quality and visionary design. We are builders who create exclusive spaces to elevate lifestyles and stand the test of time.</p>
                <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Explore Our Portfolio</button>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <h2 className="section-title">Our Masterpiece Developments</h2>
                <p className="section-desc">Explore our diverse portfolio of residential and commercial projects, each crafted with meticulous attention to detail and modern architectural excellence.</p>

                <div className="services-grid">
                    <div className="service-card">
                        <Image src="/mortgage_img.png" alt="Luxury Residences" width={400} height={300} className="service-img" />
                        <div className="service-content">
                            <h3 className="service-title">Luxury Residences</h3>
                            <p className="service-text">Exclusive villas and high-end apartments designed for ultimate comfort and modern living.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <Image src="/management_img.png" alt="Commercial Spaces" width={400} height={300} className="service-img" />
                        <div className="service-content">
                            <h3 className="service-title">Commercial Hubs</h3>
                            <p className="service-text">State-of-the-art office buildings and retail environments engineered for business success.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <Image src="/construction_img.png" alt="Custom Builds" width={400} height={300} className="service-img" />
                        <div className="service-content">
                            <h3 className="service-title">Custom Builds</h3>
                            <p className="service-text">Bespoke architectural solutions tailored from the ground up to realize your unique vision.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section testimonials">
                <h2 className="section-title" style={{ marginBottom: '4rem' }}>The GHL Standard.</h2>
                <div className="testimonial-quote">
                    "GHL delivered exactly what they promised. The craftsmanship and attention to detail in our new home are simply unmatched. They don't just build houses, they build dreams."
                </div>
                <div className="testimonial-author">— Proud Homeowner</div>
            </section>

            <footer className="footer">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-brand">GHL.</div>
                        <p style={{ color: '#aaa', maxWidth: '300px' }}>Gali Hugh Lining Developments<br />5 West 37th Street, 12th Floor,<br />New York, NY 10018<br /><br />sales@ghlbuilders.com<br />+1 212 994 9965</p>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Leadership</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Properties</h4>
                        <ul>
                            <li><a href="#">Current Projects</a></li>
                            <li><a href="#">Upcoming Launches</a></li>
                            <li><a href="#">Past Developments</a></li>
                            <li><a href="#">Book a Tour</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Social</h4>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Gali Hugh Lining. All rights reserved. | <a href="#" style={{ color: '#888' }}>Privacy Policy</a> | <a href="#" style={{ color: '#888' }}>Terms of Service</a></p>
                </div>
            </footer>
        </>
    );
}
