"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrollY, setScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (!isHome) return;

      if (currentScrollY < 100) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isHome) {
    const isSolid = scrollY > 100;

    return (
      <header
        className="navbar"
        style={{
          backgroundColor: isSolid ? "rgba(255, 255, 255, 0.95)" : "transparent",
          boxShadow: isSolid ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
          backdropFilter: isSolid ? "blur(10px)" : "none",
          transform: isNavVisible ? "translateY(0)" : "translateY(-100%)",
          transition:
            "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <div className="nav-brand" style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <Link href="/" onClick={handleLogoClick} aria-label="GHL home">
            <Image
              src="/logo.png"
              alt="GHL Logo"
              width={150}
              height={50}
              style={{ objectFit: "contain", maxHeight: "40px", width: "auto", height: "auto" }}
              priority
            />
          </Link>
        </div>
        <nav className="nav-links" style={{ flex: 1, display: "flex", justifyContent: "center", gap: "3rem" }}>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#expertise" className="nav-link">
            Expertise
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
        </nav>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <button type="button" className="btn-outline">
            Inquire Now
          </button>
        </div>
      </header>
    );
  }

  const isSolid = scrollY > 50;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        padding: "2rem clamp(1.5rem, 5vw, 4rem)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: isSolid ? "rgba(255,255,255,0.98)" : "transparent",
        backdropFilter: isSolid ? "blur(20px)" : "none",
        borderBottom: isSolid ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <Link
        href="/"
        onClick={handleLogoClick}
        style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        aria-label="GHL home"
      >
        <Image
          src="/logo.png"
          alt="GHL"
          width={150}
          height={50}
          priority
          style={{
            objectFit: "contain",
            height: "44px",
            width: "auto",
            filter: isSolid ? "none" : "brightness(0) invert(1)",
            transition: "filter 0.5s",
          }}
        />
      </Link>
      <Link
        href="/#projects"
        className="nav-btn"
        style={{
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontWeight: 700,
          border: isSolid ? "1px solid rgba(0,0,0,0.15)" : "1px solid rgba(255,255,255,0.3)",
          padding: "0.9rem 1.8rem",
          borderRadius: "50px",
          textDecoration: "none",
          color: isSolid ? "#111" : "#fff",
          backgroundColor: "transparent",
        }}
      >
        Close Project
      </Link>
    </header>
  );
}
