"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  {
    label: "Why Restore",
    href: "#why-restore",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 17.5 6.7 20l1-5.7-4.2-4.1 5.8-.8L12 4l2.7 5.4 5.8.8-4.2 4.1 1 5.7Z" />
      </svg>
    ),
  },
  {
    label: "What Is",
    href: "#what-is",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    label: "Applications",
    href: "#applications",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V8l7-3 7 3v11" />
        <path d="M8 12h2" />
        <path d="M14 12h2" />
        <path d="M8 16h2" />
        <path d="M14 16h2" />
      </svg>
    ),
  },
  {
    label: "Services",
    href: "#servicios",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="16" height="12" rx="3" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
      </svg>
    ),
  },
  {
    label: "Process",
    href: "#proceso",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
        <circle cx="7" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "Why Choose Us",
    href: "#why-choose-us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4l6 3v5c0 4.2-2.6 6.8-6 8-3.4-1.2-6-3.8-6-8V7l6-3Z" />
        <path d="M9.5 12.5 11 14l3.5-4" />
      </svg>
    ),
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const logoSrc = "https://res.cloudinary.com/wqsitnyu/image/upload/v1785031515/ChatGPT_Image_25_jul_2026_10_04_58_p.m._rrjio0.png";

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 16);
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.classList.add("menu-open");
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const leftItems = navItems.slice(0, 3);
  const rightItems = navItems.slice(3);
  const ctaLabel = isScrolled || isMenuOpen ? "Requeste now" : "Send Request";

  return (
    <header className={`siteHeader ${isScrolled || isMenuOpen ? "is-sticky" : ""}`}>
      <a className="skipLink" href="#main-content">
        Saltar al contenido
      </a>
      <div className="navShell container-wide">
        <nav className="mainNav" aria-label="Navegacion principal">
          <div className="navGroup navGroup--left" aria-label="Secciones principales izquierda">
            {leftItems.map((item) => (
              <a key={item.href} className="navPill" href={item.href}>
                <span className="navPill__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <a className="brand brand--orb" href="#" aria-label="Florida ElectroStatic home" onClick={closeMenu}>
            <span className="brandOrb" aria-hidden="true">
              <Image
                src={logoSrc}
                alt="Florida ElectroStatic logo"
                fill
                sizes="70px"
                className="brandOrb__image"
                data-logo-default="https://res.cloudinary.com/wqsitnyu/image/upload/v1785031515/ChatGPT_Image_25_jul_2026_10_04_58_p.m._rrjio0.png"
                data-logo-scrolled="https://res.cloudinary.com/wqsitnyu/image/upload/v1785031515/ChatGPT_Image_25_jul_2026_10_04_58_p.m._rrjio0.png"
                priority
              />
            </span>
          </a>

          <div className="navGroup navGroup--right" aria-label="Secciones principales derecha">
            {rightItems.map((item) => (
              <a key={item.href} className="navPill" href={item.href}>
                <span className="navPill__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
            <div className="navCta">
              <Button href="#contacto" variant="primary">
                {ctaLabel}
              </Button>
            </div>
          </div>

          <button
            className="menuToggle"
            type="button"
            aria-label={isMenuOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </nav>
      </div>

      <div className={`mobileDrawer ${isMenuOpen ? "is-open" : ""}`} id={menuId}>
        <nav className="mobileDrawer__panel container" aria-label="Navegacion movil">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span className="navPill__icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
          <Button href="#contacto" variant="primary" onClick={closeMenu}>
            {ctaLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}
