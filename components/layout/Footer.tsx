const primaryFooterLinks = [
  { label: "Restore", href: "#why-restore" },
  { label: "What Is", href: "#what-is" },
  { label: "Uses", href: "#applications" },
  { label: "Work", href: "#projects" },
  { label: "Areas", href: "#service-areas" },
];

const secondaryFooterLinks = [
  { label: "Services", href: "#servicios" },
  { label: "Process", href: "#proceso" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Request Estimate", href: "#contacto" },
  { label: "Back to Top", href: "#main-content" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a className="footer__brand" href="#">
            Florida ElectroStatic
          </a>
          <p>
            On-site electrostatic painting for fences, railings, storefronts, doors, equipment and commercial metal
            surfaces across South Florida.
          </p>
        </div>
        <div>
          <h3>Menu</h3>
          {primaryFooterLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Explore</h3>
          {secondaryFooterLinks.map((link) => (
            <a key={`${link.href}-${link.label}`} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:info@floridaelectrostatic.com">info@floridaelectrostatic.com</a>
          <a href="tel:+10000000000">+1 000 000 0000</a>
          <a href="#service-areas">Miami-Dade • Broward • Palm Beach</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>&copy; 2026 Florida ElectroStatic</span>
      </div>
    </footer>
  );
}
