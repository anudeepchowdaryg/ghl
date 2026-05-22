import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#projects", label: "Masterpieces" },
  { href: "#about", label: "Our Legacy" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About Us" },
  { href: "#", label: "Inquire Now" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__atmosphere" aria-hidden="true">
        <div className="site-footer__diagonal-sweep" />
        <div className="site-footer__glow site-footer__glow--teal" />
        <div className="site-footer__glow site-footer__glow--bloom" />
        <div className="site-footer__glow site-footer__glow--ember" />
        <div className="site-footer__glow site-footer__glow--magenta" />
        <div className="site-footer__grain" />
        <div className="site-footer__vignette" />
      </div>
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Image
              src="/GHL SYMBOL WHITE PNG.png"
              alt="GHL"
              width={200}
              height={169}
              className="site-footer__logo"
              sizes="(max-width: 768px) 38vw, 200px"
              style={{ height: "auto" }}
              priority={false}
            />
            <p className="site-footer__tagline">
              Premium builders crafting landmarks and residences across India.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <p className="site-footer__column-title">Explore</p>
            <ul className="site-footer__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="site-footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <p className="site-footer__column-title">Get in Touch</p>
            <div className="site-footer__contact-list">
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-label">Office</span>
                <p className="site-footer__contact-value">
                  Site No: 4C-414, Falcon Ritz
                  <br />
                  OMBR Layout, Banaswadi
                  <br />
                  Bengaluru — 560043
                </p>
                <span className="site-footer__contact-meta">GSTIN: 36DTXPP2898J2ZE</span>
              </div>
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-label">Email</span>
                <a href="mailto:galihighliving@gmail.com" className="site-footer__contact-link">
                  galihighliving@gmail.com
                </a>
              </div>
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-label">Phone</span>
                <a href="tel:+919606037011" className="site-footer__contact-link">
                  +91 9606037011
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bar">
          <div className="site-footer__legal">
            <Link href="#" className="site-footer__legal-link">Terms & Conditions</Link>
            <Link href="#" className="site-footer__legal-link">Privacy Policy</Link>
            <Link href="#" className="site-footer__legal-link">Sitemap</Link>
            <a
              href="https://www.instagram.com/gali.highliving/"
              className="site-footer__instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow GHL on Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
          <div className="site-footer__meta">
            <span>GHL Builders & Developers</span>
            <span className="site-footer__meta-divider" aria-hidden="true">·</span>
            <span>Copyright © 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
