"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  {
    label: "Servicios",
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
    label: "Proceso",
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
    label: "Contacto",
    href: "#contacto",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5Z" />
        <path d="m6 8 6 5 6-5" />
      </svg>
    ),
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

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
  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2);

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

          <a className="brand brand--orb" href="#" aria-label="Fast Answer Agency inicio" onClick={closeMenu}>
            <span className="brandOrb" aria-hidden="true">
              <Image
                src="https://res.cloudinary.com/wqsitnyu/image/upload/v1784936802/Logo_m2syj2.png"
                alt="Florida ElectroStatic logo"
                fill
                sizes="70px"
                className="brandOrb__image"
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
                Request Estimate
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
            Request Estimate
          </Button>
        </nav>
      </div>
    </header>
  );
}
