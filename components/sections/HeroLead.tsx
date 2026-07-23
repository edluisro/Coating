import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";

export function HeroLead() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">Servicio premium local</p>
          <h1 id="hero-title">Convierte visitas en clientes con una landing clara.</h1>
          <p>
            Creamos una presencia digital rapida, confiable y preparada para captar solicitudes desde el primer scroll.
          </p>
          <div className="hero__actions">
            <Button href="#contacto">Solicitar propuesta</Button>
            <Button href="tel:+10000000000" variant="secondary">Llamar ahora</Button>
          </div>
          <ul className="trustRow" aria-label="Indicadores de confianza">
            <li>4.9 rating</li>
            <li>Respuesta el mismo dia</li>
            <li>Soporte directo</li>
          </ul>
        </div>

        <form className="hero__form" aria-label="Formulario rapido de contacto">
          <h2>Recibe una cotizacion</h2>
          <Input id="lead-name" label="Nombre" name="name" autoComplete="name" required />
          <Input id="lead-phone" label="Telefono" name="phone" autoComplete="tel" required />
          <Select id="lead-service" label="Necesidad" name="service" defaultValue="">
            <option value="" disabled>Selecciona una opcion</option>
            <option>Landing page</option>
            <option>Automatizacion</option>
            <option>Optimizar web actual</option>
          </Select>
          <button className="btn btn-primary" type="submit">Enviar solicitud</button>
        </form>
      </div>
    </section>
  );
}
