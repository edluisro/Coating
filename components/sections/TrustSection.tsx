import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = ["Proceso claro", "Entrega agil", "Diseno responsive", "Base SEO"];

export function TrustSection() {
  return (
    <section className="trust section" aria-labelledby="trust-title">
      <div className="container trust__grid">
        <Reveal variant="slide-right">
          <SectionHeading
            eyebrow="Confianza"
            title="Una base profesional para vender con mas seguridad."
            text="La estructura combina claridad comercial, buena lectura en movil y una experiencia visual de servicio premium."
          />
          <Reveal className="trust__features" stagger={60}>
            {features.map((feature) => (
              <div className="featureItem" key={feature}>
                <span aria-hidden="true">✓</span>
                <p>{feature}</p>
              </div>
            ))}
          </Reveal>
          <Button href="#contacto" variant="outline">
            Hablar del proyecto
          </Button>
        </Reveal>
        <Reveal className="trust__mediaWrap" variant="fade-in" delay={120} aria-hidden="true">
          <div className="trust__image" />
          <div className="trust__badge">
            <strong>24h</strong>
            <span>Primer avance visual</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
