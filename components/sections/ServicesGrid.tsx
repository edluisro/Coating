import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Fences and Railings",
    text: "Restore faded, rusted or chipped metal fencing and railing systems without full replacement.",
    label: "High-demand exterior surfaces",
  },
  {
    title: "Storefronts and Entry Systems",
    text: "Refinish commercial storefront frames, mullions, doors and trim with a smooth factory-like finish.",
    label: "Commercial first impressions",
  },
  {
    title: "Metal Doors and Frames",
    text: "Refresh worn doors, shutters and metal frames while keeping your property operating.",
    label: "Operational assets",
  },
  {
    title: "Equipment and Industrial Assets",
    text: "Protect machinery, enclosures and metal components with durable electrostatic coatings.",
    label: "Industrial protection",
  },
  {
    title: "Gates, Handrails and Common Areas",
    text: "Improve appearance and durability in high-traffic residential and commercial spaces.",
    label: "High-touch environments",
  },
  {
    title: "Custom Restoration Projects",
    text: "We assess your existing metal surfaces and recommend the most cost-effective restoration path.",
    label: "Specialized scopes",
  },
];

export function ServicesGrid() {
  return (
    <section className="services section section--alt" id="servicios" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="services__layout" stagger={90}>
          <article className="services__intro card">
            <span className="services__eyebrow">Services</span>
            <h2 id="services-title">Electrostatic painting services for commercial and industrial metal surfaces.</h2>
            <p className="services__introText">
              Targeted restoration solutions designed to improve appearance, extend lifespan and avoid replacement costs.
            </p>

            <div className="services__introStats" aria-label="Service strengths">
              <div className="services__stat">
                <strong>On-site</strong>
                <span>Application with minimal disruption</span>
              </div>
              <div className="services__stat">
                <strong>Factory-like</strong>
                <span>Smooth finishes for existing metal assets</span>
              </div>
              <div className="services__stat">
                <strong>South Florida</strong>
                <span>Commercial and industrial surface specialists</span>
              </div>
            </div>

            <a className="btn btn-primary services__introCta" href="#contacto">
              Request estimate
            </a>
          </article>

          <div className="services__showcase">
            <Reveal className="services__grid" stagger={80}>
              {services.map((service, index) => (
                <article className="services__item card" key={service.title}>
                  <div className="services__meta">
                    <span className="services__itemNumber" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="services__serviceLabel">{service.label}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="services__serviceLink" href="#contacto">
                    Request estimate
                  </a>
                </article>
              ))}
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
