export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a className="footer__brand" href="#">Fast Answer</a>
          <p>Landing base para una empresa de servicios moderna, confiable y orientada a conversion.</p>
        </div>
        <div>
          <h3>Servicios</h3>
          <a href="#servicios">Diseno web</a>
          <a href="#servicios">Automatizacion</a>
          <a href="#servicios">Optimizacion</a>
        </div>
        <div>
          <h3>Empresa</h3>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
          <a href="#main-content">Inicio</a>
        </div>
        <div>
          <h3>Contacto</h3>
          <a href="mailto:hola@example.com">hola@example.com</a>
          <a href="tel:+10000000000">+1 000 000 0000</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 Fast Answer Agency</span>
      </div>
    </footer>
  );
}
