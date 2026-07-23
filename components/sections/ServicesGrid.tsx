import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  ["Landing pages", "Paginas enfocadas en captar leads y presentar una oferta con claridad."],
  ["Formularios", "Campos visibles, accesibles y listos para conectar con tus procesos."],
  ["SEO base", "Metadata, jerarquia semantica y estructura preparada para buscadores."],
  ["Responsive", "Diseño adaptable para movil, tablet y desktop desde el inicio."],
  ["Performance", "Base liviana sin librerias innecesarias ni animaciones pesadas."],
  ["Conversion", "CTAs claros, confianza visible y recorrido pensado para decidir rapido."],
];

export function ServicesGrid() {
  return (
    <section className="services section section--alt" id="servicios" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Servicios"
          title="Secciones listas para una landing que vende."
          text="Componentes reutilizables para ordenar beneficios, confianza, proceso y contacto."
        />
        <div className="services__grid">
          {services.map(([title, text], index) => (
            <Card className="serviceCard" key={title}>
              <span className="serviceCard__icon" aria-hidden="true">{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a className="serviceCard__link" href="#contacto">Ver mas</a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
