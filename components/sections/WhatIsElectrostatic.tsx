import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  "Superior adhesion to properly prepared metal surfaces.",
  "Extremely smooth and uniform factory-like appearance.",
  "Minimal overspray compared to conventional spray methods.",
  "Excellent coverage, including difficult angles and profiles.",
  "Reduced paint waste and a cleaner application process.",
  "Long-lasting protection against corrosion, weather and daily wear.",
];

const surfaceGroups = [
  {
    title: "Exterior Metal Surfaces",
    description: "High-exposure assets restored for durability, appearance and weather resistance.",
    items: ["Aluminum Fences", "Steel Fences", "Railings", "Security Gates", "Staircases"],
  },
  {
    title: "Commercial Building Systems",
    description: "Visible property elements refinished without unnecessary replacement or downtime.",
    items: ["Storefront Frames", "Hollow Metal Doors", "Window Frames", "Elevator Doors"],
  },
  {
    title: "Industrial & Facility Assets",
    description: "Operational metal surfaces protected with a smooth, professional coating system.",
    items: ["Industrial Equipment", "Structural Steel", "Warehouse Racking", "Loading Dock Equipment"],
  },
  {
    title: "Specialty Metal Features",
    description: "Interior, decorative and facility details restored with a cleaner premium finish.",
    items: ["Metal Partitions", "Metal Furniture", "Decorative Metal Features"],
  },
];

const benefitIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12.5 8.5 17 20 6" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14c4-5.3 12-5.3 16 0" />
    <path d="M6 10.5c3-3.6 9-3.6 12 0" />
    <path d="M12 8v8" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h8" />
    <path d="M12 9v6" />
    <path d="M16 10c1.7 0 3 1.3 3 3s-1.3 3-3 3" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 19V8l7-3 7 3v11" />
    <path d="M9 13h6" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h6" />
    <path d="M15 12h6" />
    <path d="M9 8h6v8H9z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4l6 3v5c0 4.2-2.6 6.8-6 8-3.4-1.2-6-3.8-6-8V7l6-3Z" />
    <path d="M9.5 12.5 11 14l3.5-4" />
  </svg>,
];

const surfaceGroupIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 19V7" />
    <path d="M19 19V7" />
    <path d="M4 10h16" />
    <path d="M4 15h16" />
    <path d="M8 7v12" />
    <path d="M16 7v12" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20V6h14v14" />
    <path d="M8 10h8" />
    <path d="M8 14h8" />
    <path d="M12 6v14" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 20V5h12v15" />
    <path d="M9 9h.01" />
    <path d="M15 12h.01" />
    <path d="M9 16h6" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18h16" />
    <path d="M6 18V8l6-3 6 3v10" />
    <path d="M9 12h6" />
  </svg>,
];

export function WhatIsElectrostatic() {
  return (
    <section className="whatIsElectrostatic section" id="what-is" aria-labelledby="what-is-electrostatic-title">
      <div className="container whatIsElectrostatic__grid">
        <div className="whatIsElectrostatic__content stack-lg">
          <Reveal variant="fade-up">
            <div className="whatIsElectrostatic__heading stack-md">
              <h2 id="what-is-electrostatic-title">What Is Electrostatic Painting?</h2>
              <h3>A Smarter, Cleaner and More Efficient Way to Refinish Metal Surfaces.</h3>
              <div className="whatIsElectrostatic__body stack-md">
                <p>
                  Electrostatic painting is an advanced coating process specifically designed for metal surfaces.
                  During application, specialized equipment gives the paint a positive electrical charge while the
                  grounded metal surface attracts the paint like a magnet. This creates an even, consistent coating
                  that wraps around the metal, producing a smooth factory-like finish with exceptional adhesion.
                </p>
                <p>
                  Unlike conventional spray painting, electrostatic painting dramatically reduces overspray, minimizes
                  material waste and delivers superior coverage on properly prepared metal surfaces.
                </p>
                <p>
                  Because of its precision and durability, electrostatic painting has become one of the preferred
                  refinishing methods for commercial, industrial and institutional properties looking to restore metal
                  assets without the expense of replacement.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={80}>
            <div className="whatIsElectrostatic__benefitsBlock stack-md">
              <h3 className="whatIsElectrostatic__subheading">Why Electrostatic Painting Delivers Better Results</h3>
              <Reveal variant="fade-up" delay={30}>
                <ul className="whatIsElectrostatic__benefits" aria-label="Electrostatic painting benefits">
                  {benefits.map((benefit, index) => (
                    <li className="whatIsElectrostatic__benefitItem" key={benefit}>
                      <span className="whatIsElectrostatic__benefitIcon" aria-hidden="true">
                        {benefitIcons[index]}
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Reveal>

          <Reveal className="whatIsElectrostatic__highlightLift" variant="fade-up" delay={160}>
            <article className="card card--highlight whatIsElectrostatic__highlight">
              <div className="whatIsElectrostatic__highlightInner stack-md">
                <p className="whatIsElectrostatic__highlightLabel">WHY PROPERTY OWNERS CHOOSE ELECTROSTATIC PAINTING</p>
                <p>
                  Electrostatic painting is more than just applying a new coat of paint. It is a professional
                  refinishing process that restores the appearance of existing metal while helping protect it from
                  Florida&apos;s harsh environmental conditions. The result is a cleaner finish, greater durability and a
                  more cost-effective alternative to replacement.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal variant="fade-up" delay={220}>
            <div className="whatIsElectrostatic__surfacesBlock stack-md">
              <h3 className="whatIsElectrostatic__subheading">Common Metal Surfaces That Can Be Restored</h3>
              <Reveal variant="fade-in" delay={30}>
                <div className="whatIsElectrostatic__surfaces" aria-label="Common metal surfaces that can be restored">
                  {surfaceGroups.map((group, index) => (
                    <details className="whatIsElectrostatic__surfaceGroup" key={group.title} open={index === 0}>
                      <summary className="whatIsElectrostatic__surfaceSummary">
                        <span className="whatIsElectrostatic__surfaceIcon" aria-hidden="true">
                          {surfaceGroupIcons[index % surfaceGroupIcons.length]}
                        </span>
                        <span className="whatIsElectrostatic__surfaceSummaryCopy">
                          <span className="whatIsElectrostatic__surfaceName">{group.title}</span>
                          <span className="whatIsElectrostatic__surfaceType">{group.description}</span>
                        </span>
                        <span className="whatIsElectrostatic__surfaceCount" aria-label={`${group.items.length} surfaces`}>
                          {String(group.items.length).padStart(2, "0")}
                        </span>
                        <span className="whatIsElectrostatic__surfaceChevron" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>
                      </summary>
                      <ul className="whatIsElectrostatic__surfaceList">
                        {group.items.map((surface) => (
                          <li className="whatIsElectrostatic__surfaceItem" key={surface}>
                            <span aria-hidden="true" />
                            {surface}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={260}>
            <Button href="#proceso" className="whatIsElectrostatic__cta">
              Explore Our Electrostatic Painting Process
            </Button>
          </Reveal>
        </div>

        <Reveal className="whatIsElectrostatic__visualWrap" variant="slide-right" delay={120} aria-hidden="true">
          <div className="whatIsElectrostatic__visualCard">
            <div className="whatIsElectrostatic__videoShell">
              <video
                className="whatIsElectrostatic__video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source
                  src="https://res.cloudinary.com/wqsitnyu/video/upload/v1784926827/4771124_Painter_Spraying_1280x720_h4yfkj.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="whatIsElectrostatic__fieldLines">
              <span className="whatIsElectrostatic__fieldLine whatIsElectrostatic__fieldLine--1" />
              <span className="whatIsElectrostatic__fieldLine whatIsElectrostatic__fieldLine--2" />
              <span className="whatIsElectrostatic__fieldLine whatIsElectrostatic__fieldLine--3" />
              <span className="whatIsElectrostatic__fieldLine whatIsElectrostatic__fieldLine--4" />
              <span className="whatIsElectrostatic__spark whatIsElectrostatic__spark--1" />
              <span className="whatIsElectrostatic__spark whatIsElectrostatic__spark--2" />
              <span className="whatIsElectrostatic__spark whatIsElectrostatic__spark--3" />
            </div>

            <div className="whatIsElectrostatic__techBadge">
              <span>ELECTROSTATIC FIELD</span>
              <strong>Charged paint attracted to grounded metal</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
