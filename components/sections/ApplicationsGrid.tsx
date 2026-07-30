import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { ReactNode } from "react";

type ApplicationCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const applications = [
  {
    title: "Metal Fences",
    description:
      "Restore aluminum and steel fences without the expense of replacing them. Perfect for commercial properties, condominiums, schools, parks and industrial facilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 20V6" />
        <path d="M12 20V4" />
        <path d="M19 20V6" />
        <path d="M3 10h18" />
        <path d="M3 16h18" />
      </svg>
    ),
  },
  {
    title: "Railings & Handrails",
    description:
      "Refinish stair railings, balcony railings and safety handrails with a smooth, durable finish that resists corrosion and everyday wear.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18h12" />
        <path d="M6 18v-6" />
        <path d="M11 18v-9" />
        <path d="M16 18v-12" />
        <path d="M6 12h10l4-4" />
      </svg>
    ),
  },
  {
    title: "Storefronts & Window Frames",
    description:
      "Refresh aging storefront frames and commercial window systems to give your property a clean, modern and professional appearance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V7h16v13" />
        <path d="M4 11h16" />
        <path d="M9 11v9" />
        <path d="M15 11v9" />
      </svg>
    ),
  },
  {
    title: "Metal Doors & Frames",
    description:
      "Restore hollow metal doors, security doors and door frames without disrupting your daily operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20V5h10v15" />
        <path d="M16 20h2" />
        <path d="M10 12h.01" />
      </svg>
    ),
  },
  {
    title: "Gates & Security Barriers",
    description:
      "Protect entrance gates, access control systems and perimeter security barriers with long-lasting electrostatic finishes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V8h16v12" />
        <path d="M8 8V4h8v4" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
      </svg>
    ),
  },
  {
    title: "Structural Steel",
    description:
      "Restore exposed steel components while helping protect them against corrosion, weather exposure and daily use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 6h14" />
        <path d="M7 6v12" />
        <path d="M17 6v12" />
        <path d="M5 18h14" />
        <path d="M9.5 12h5" />
      </svg>
    ),
  },
  {
    title: "Industrial Equipment",
    description:
      "Improve the appearance and longevity of machinery, production equipment, metal housings and industrial assets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="7" width="16" height="10" rx="2" />
        <path d="M8 17v3" />
        <path d="M16 17v3" />
        <path d="M8 10h4" />
        <path d="M15 10h1" />
      </svg>
    ),
  },
  {
    title: "Warehouse & Distribution Facilities",
    description:
      "Restore warehouse racks, safety barriers, bollards, dock equipment and other metal infrastructure with minimal downtime.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20V6h16v14" />
        <path d="M8 6v14" />
        <path d="M16 6v14" />
        <path d="M4 11h16" />
        <path d="M4 15.5h16" />
      </svg>
    ),
  },
  {
    title: "Institutional & Government Facilities",
    description:
      "Schools, hospitals, municipalities and government buildings trust electrostatic painting as a cost-effective alternative to replacing metal assets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9 12 4l9 5" />
        <path d="M5 10v8" />
        <path d="M9 10v8" />
        <path d="M15 10v8" />
        <path d="M19 10v8" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
];

const industryGroups = [
  {
    id: "commercial",
    label: "Commercial",
    eyebrow: "Client Type 01",
    description: "Business-facing properties where appearance, schedule and access matter.",
    items: [
      "Commercial Office Buildings",
      "Retail Shopping Centers",
      "Restaurants",
      "Hotels & Resorts",
      "Property Management Companies",
      "General Contractors",
    ],
  },
  {
    id: "industrial",
    label: "Industrial",
    eyebrow: "Client Type 02",
    description: "High-use facilities that need durable coatings with minimal operational disruption.",
    items: [
      "Industrial Manufacturing",
      "Warehouses & Distribution Centers",
      "Marine Facilities",
      "Airports & Transportation Facilities",
    ],
  },
  {
    id: "institutional",
    label: "Institutional",
    eyebrow: "Client Type 03",
    description: "Public and mission-critical properties requiring professional planning and reliable execution.",
    items: ["Hospitals & Healthcare Facilities", "Educational Institutions", "Government Buildings"],
  },
  {
    id: "communities",
    label: "Communities",
    eyebrow: "Client Type 04",
    description: "Residential and shared-use properties that need clean, long-lasting metal restoration.",
    items: ["Condominium Associations (HOAs)", "Apartment Communities", "Recreational Facilities"],
  },
];

function ApplicationCard({ icon, title, description }: ApplicationCardProps) {
  return (
    <article className="applicationCard">
      <span className="applicationCard__icon" aria-hidden="true">
        {icon}
      </span>
      <div className="applicationCard__body stack-sm">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function ApplicationsGrid() {
  return (
    <section className="applications section" id="applications" aria-labelledby="applications-title">
      <div className="container applications__inner">
        <Reveal variant="fade-up">
          <header className="applications__header stack-md text-center">
            <h2 id="applications-title">Professional Electrostatic Painting for Every Type of Commercial Metal Surface</h2>
            <h3>From Office Buildings to Industrial Facilities, We Restore Metal Assets Across South Florida.</h3>
            <p>
              Every commercial property is different, and so are its metal surfaces. At Florida ElectroStatic, we
              provide professional electrostatic painting services for a wide variety of commercial, industrial and
              institutional applications. Whether your goal is to improve curb appeal, protect valuable infrastructure
              or extend the life of existing assets, our team delivers durable, factory-quality finishes designed to
              perform in South Florida&apos;s demanding environment.
            </p>
          </header>
        </Reveal>

        <Reveal className="applications__grid" variant="fade-up" stagger={80}>
          {applications.map((application) => (
            <ApplicationCard key={application.title} {...application} />
          ))}
        </Reveal>

        <div className="applications__footer stack-lg">
          <Reveal variant="fade-up" delay={120}>
            <div className="applications__industries stack-md">
              <h3>Industries We Proudly Serve</h3>
              <Reveal variant="fade-in" delay={40}>
                <div className="applications__industryTabs" data-industry-tabs>
                  <div className="applications__industryTabList" role="tablist" aria-label="Industries we proudly serve">
                    {industryGroups.map((group, index) => (
                      <button
                        className={`applications__industryTab${index === 0 ? " is-active" : ""}`}
                        type="button"
                        role="tab"
                        aria-selected={index === 0}
                        aria-controls={`industry-panel-${group.id}`}
                        id={`industry-tab-${group.id}`}
                        data-industry-tab={group.id}
                        key={group.id}
                      >
                        <span>{group.eyebrow}</span>
                        <strong>{group.label}</strong>
                      </button>
                    ))}
                  </div>

                  <div className="applications__industryPanels">
                    {industryGroups.map((group, index) => (
                      <article
                        className={`applications__industryPanel${index === 0 ? " is-active" : ""}`}
                        role="tabpanel"
                        id={`industry-panel-${group.id}`}
                        aria-labelledby={`industry-tab-${group.id}`}
                        data-industry-panel={group.id}
                        hidden={index !== 0}
                        key={group.id}
                      >
                        <div className="applications__industryPanelHeader">
                          <span>{group.eyebrow}</span>
                          <h4>{group.label} Properties</h4>
                          <p>{group.description}</p>
                        </div>
                        <ul className="applications__industryList" aria-label={`${group.label} industries we proudly serve`}>
                          {group.items.map((industry) => (
                            <li key={industry}>{industry}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
              <p className="applications__industriesNote">
                No two projects are exactly alike. Every property presents unique challenges, which is why we evaluate
                each project individually before recommending the best preparation methods, coating systems and
                application process. Our goal is always the same: deliver a durable finish that enhances appearance,
                extends service life and minimizes operational disruption.
              </p>
            </div>
          </Reveal>

          <Reveal className="applications__quoteWrap" variant="fade-up" delay={180}>
            <blockquote className="applications__quote">
              &quot;If it&apos;s metal and it can be restored, chances are we can refinish it.&quot;
            </blockquote>
          </Reveal>

          <Reveal className="applications__ctaWrap" variant="fade-up" delay={240}>
            <Button href="#contacto">Request a Project Evaluation</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
