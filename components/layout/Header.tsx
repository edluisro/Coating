"use client";

import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
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

  return (
    <header className={`siteHeader ${isScrolled || isMenuOpen ? "is-sticky" : ""}`}>
      <a className="skipLink" href="#main-content">
        Saltar al contenido
      </a>
      <nav className="mainNav container" aria-label="Navegacion principal">
        <a className="brand" href="#" aria-label="Fast Answer Agency inicio" onClick={closeMenu}>
          Fast Answer
        </a>

        <div className="navLinks" aria-label="Secciones principales">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="navCta">
          <Button href="#contacto" variant="primary">
            Cotizar ahora
          </Button>
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

      <div className={`mobileDrawer ${isMenuOpen ? "is-open" : ""}`} id={menuId}>
        <nav className="mobileDrawer__panel container" aria-label="Navegacion movil">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <Button href="#contacto" variant="primary" onClick={closeMenu}>
            Cotizar ahora
          </Button>
        </nav>
      </div>
    </header>
  );
}
