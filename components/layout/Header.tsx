"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  {
    label: "Restore",
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
    label: "Uses",
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
    label: "Work",
    href: "#projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M7 19l2-3" />
        <path d="M17 19l-2-3" />
      </svg>
    ),
  },
  {
    label: "Areas",
    href: "#service-areas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-4.7 7-11a7 7 0 0 0-14 0c0 6.3 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
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
    label: "Reviews",
    href: "#testimonials",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 17.5 6.7 20l1-5.7-4.2-4.1 5.8-.8L12 4l2.7 5.4 5.8.8-4.2 4.1 1 5.7Z" />
      </svg>
    ),
  },
  {
    label: "FAQ",
    href: "#faq",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M9.5 9a2.6 2.6 0 0 1 5 1c0 2-2.5 2-2.5 3.8" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const logoSrc = "https://res.cloudinary.com/wqsitnyu/image/upload/v1785449990/ChatGPT_Image_30_jul_2026__06_12_13_p.m.-removebg-preview_t2r0pe.png";

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

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const leftItems = navItems.slice(0, 5);
  const rightItems = navItems.slice(5);
  const ctaLabel = isScrolled || isMenuOpen ? "Request Now" : "Send Request";

  return (
    <header ref={headerRef} className={`siteHeader ${isScrolled ? "is-sticky" : ""}`}>
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
                sizes="95px"
                className="brandOrb__image"
                data-logo-default="https://res.cloudinary.com/wqsitnyu/image/upload/v1785449990/ChatGPT_Image_30_jul_2026__06_12_13_p.m.-removebg-preview_t2r0pe.png"
                data-logo-scrolled="https://res.cloudinary.com/wqsitnyu/image/upload/v1785449990/ChatGPT_Image_30_jul_2026__06_12_13_p.m.-removebg-preview_t2r0pe.png"
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
