import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["Diagnostico", "Definimos oferta, publico y objetivo principal de la pagina."],
  ["Construccion", "Armamos estructura, componentes, estilos y contenido base."],
  ["Publicacion", "Probamos rendimiento y dejamos el sitio listo para deploy."],
];

export function ProcessSteps() {
  return (
    <section className="process section" id="proceso" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Proceso"
          title="Tres pasos para lanzar sin friccion."
        />
        <div className="process__grid">
          {steps.map(([title, text], index) => (
            <Card className="processCard" key={title}>
              <span className="processCard__step">{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
