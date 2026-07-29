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
          <h3>Services</h3>
          <a href="#servicios">Fences and railings</a>
          <a href="#servicios">Doors and frames</a>
          <a href="#servicios">Storefront restoration</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#proceso">Our process</a>
          <a href="#contacto">Request estimate</a>
          <a href="#main-content">Back to top</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:info@floridaelectrostatic.com">info@floridaelectrostatic.com</a>
          <a href="tel:+10000000000">+1 000 000 0000</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>&copy; 2026 Florida ElectroStatic</span>
      </div>
    </footer>
  );
}
