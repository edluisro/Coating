import { Reveal } from "@/components/ui/Reveal";
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
        <Reveal className="whyUs__visual" variant="fade-in" aria-hidden="true" />
        <Reveal variant="slide-left">
          <SectionHeading
            eyebrow="Diferenciales"
            title="Una estructura limpia para crecer sin rehacer todo."
            text="La carpeta queda preparada para agregar nuevas secciones, formularios, imagenes y rutas sin mezclar responsabilidades."
          />
          <Reveal className="whyUs__benefits" stagger={50}>
            {benefits.map((benefit) => (
              <div className="benefitItem" key={benefit}>
                {benefit}
              </div>
            ))}
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
