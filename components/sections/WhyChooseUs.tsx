import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  "Arquitectura escalable",
  "Tokens centralizados",
  "Componentes reutilizables",
  "SEO preparado",
  "HTML semantico",
  "Accesibilidad cuidada",
];

export function WhyChooseUs() {
  return (
    <section className="whyUs section" aria-labelledby="why-title">
      <div className="container whyUs__grid">
        <div className="whyUs__visual" aria-hidden="true" />
        <div>
          <SectionHeading
            eyebrow="Diferenciales"
            title="Una estructura limpia para crecer sin rehacer todo."
            text="La carpeta queda preparada para agregar nuevas secciones, formularios, imagenes y rutas sin mezclar responsabilidades."
          />
          <div className="whyUs__benefits">
            {benefits.map((benefit) => (
              <div className="benefitItem" key={benefit}>{benefit}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
