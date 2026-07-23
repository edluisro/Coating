import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="siteHeader">
      <a className="skipLink" href="#main-content">Saltar al contenido</a>
      <div className="topBar">
        <div className="container">
          <span>Respuesta rapida para negocios de servicios</span>
          <a href="tel:+10000000000">+1 000 000 0000</a>
        </div>
      </div>
      <nav className="mainNav container" aria-label="Navegacion principal">
        <a className="brand" href="#" aria-label="Fast Answer Agency inicio">
          Fast Answer
        </a>
        <div className="navLinks">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <Button href="#contacto" variant="primary">Cotizar ahora</Button>
      </nav>
    </header>
  );
}
