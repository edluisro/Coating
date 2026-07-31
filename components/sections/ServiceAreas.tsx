import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const serviceAreaGroups = [
  {
    label: "Miami-Dade Core",
    description: "Urban, coastal and commercial corridors.",
    cities: [
      { name: "Miami", x: 298, y: 440 },
      { name: "Miami Beach", x: 335, y: 430 },
      { name: "Brickell", x: 306, y: 450 },
      { name: "Downtown Miami", x: 303, y: 434 },
      { name: "Wynwood", x: 298, y: 420 },
      { name: "Edgewater", x: 306, y: 414 },
      { name: "Coral Gables", x: 277, y: 462 },
      { name: "Coconut Grove", x: 291, y: 472 },
      { name: "Key Biscayne", x: 338, y: 480 },
    ],
  },
  {
    label: "Miami-Dade West & South",
    description: "Industrial, residential and suburban service areas.",
    cities: [
      { name: "Doral", x: 258, y: 410 },
      { name: "Medley", x: 250, y: 390 },
      { name: "Hialeah", x: 268, y: 382 },
      { name: "Hialeah Gardens", x: 254, y: 374 },
      { name: "Miami Lakes", x: 265, y: 356 },
      { name: "Kendall", x: 272, y: 506 },
      { name: "Pinecrest", x: 286, y: 492 },
      { name: "Palmetto Bay", x: 291, y: 532 },
      { name: "Cutler Bay", x: 296, y: 552 },
      { name: "Homestead", x: 304, y: 586 },
    ],
  },
  {
    label: "North Miami & Beaches",
    description: "Northern coastal communities and condo corridors.",
    cities: [
      { name: "Aventura", x: 324, y: 348 },
      { name: "North Miami", x: 304, y: 362 },
      { name: "North Miami Beach", x: 318, y: 356 },
      { name: "Sunny Isles Beach", x: 337, y: 340 },
      { name: "Bal Harbour", x: 339, y: 382 },
      { name: "Surfside", x: 338, y: 394 },
    ],
  },
  {
    label: "Broward County",
    description: "Commercial centers from Hollywood to Deerfield Beach.",
    cities: [
      { name: "Hollywood", x: 318, y: 322 },
      { name: "Hallandale Beach", x: 330, y: 335 },
      { name: "Pembroke Pines", x: 282, y: 316 },
      { name: "Miramar", x: 278, y: 334 },
      { name: "Davie", x: 300, y: 296 },
      { name: "Plantation", x: 310, y: 282 },
      { name: "Sunrise", x: 300, y: 270 },
      { name: "Fort Lauderdale", x: 320, y: 328 },
      { name: "Lauderhill", x: 306, y: 292 },
      { name: "Pompano Beach", x: 330, y: 262 },
      { name: "Deerfield Beach", x: 336, y: 236 },
    ],
  },
  {
    label: "Palm Beach County",
    description: "Northern service area for commercial and institutional projects.",
    cities: [
      { name: "Boca Raton", x: 336, y: 220 },
      { name: "Delray Beach", x: 340, y: 202 },
      { name: "Boynton Beach", x: 342, y: 184 },
      { name: "West Palm Beach", x: 344, y: 214 },
    ],
  },
];

const defaultCity = serviceAreaGroups[0].cities[0];

const partners = [
  "Commercial Property Owners",
  "Property Management Companies",
  "Facility Managers",
  "General Contractors",
  "HOA & Condominium Associations",
  "Industrial Facilities",
  "Schools & Universities",
  "Hospitals & Healthcare Facilities",
  "Municipal Buildings",
  "Government Agencies",
  "Retail Centers",
  "Hotels & Hospitality Properties",
  "Warehouses & Distribution Centers",
];

function SouthFloridaMap() {
  return (
    <div
      className="serviceAreas__mapCard"
      role="img"
      aria-label="Stylized map of South Florida showing service coverage in Miami, Fort Lauderdale and West Palm Beach."
    >
      <svg className="serviceAreas__map" viewBox="0 0 520 620" aria-hidden="true">
        <defs>
          <linearGradient id="serviceAreas-water" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fbff" />
            <stop offset="100%" stopColor="#edf4ff" />
          </linearGradient>
          <linearGradient id="serviceAreas-land" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#eef3f7" />
            <stop offset="100%" stopColor="#dfe9f1" />
          </linearGradient>
          <linearGradient id="serviceAreas-coverage" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(13,71,161,0.24)" />
            <stop offset="100%" stopColor="rgba(13,71,161,0.06)" />
          </linearGradient>
          <filter id="serviceAreas-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="520" height="620" rx="30" fill="url(#serviceAreas-water)" />

        <g opacity="0.8">
          <path
            d="M146 56c59 22 95 36 112 52 19 18 35 46 48 86 12 36 20 75 24 118 4 39 4 79 0 120-4 41-14 82-29 123-14 37-34 73-60 108-14 20-31 44-50 71l-48-18c9-27 18-53 24-77 11-39 17-76 18-112 2-44-5-86-20-127-18-48-47-97-87-146-20-24-45-51-75-82l143-116Z"
            fill="url(#serviceAreas-land)"
          />
          <path
            d="M250 72c57 37 95 84 114 140 17 49 23 99 18 152-5 54-20 110-47 166-18 38-42 78-73 120"
            fill="none"
            stroke="rgba(13, 71, 161, 0.2)"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M213 84c-18 35-24 73-18 113 8 46 31 88 68 125 30 29 52 62 66 98 14 37 18 74 12 111-5 33-15 64-30 93"
            fill="none"
            stroke="rgba(255, 255, 255, 0.62)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>

        <g className="serviceAreas__coverage" filter="url(#serviceAreas-glow)">
          <path
            d="M324 188c40 28 61 66 62 113 1 56-20 125-63 207"
            fill="none"
            stroke="rgba(252, 74, 0, 0.28)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M332 184c37 26 57 62 58 108 1 55-20 122-61 202"
            fill="none"
            stroke="url(#serviceAreas-coverage)"
            strokeWidth="42"
            strokeLinecap="round"
          />
        </g>

        <g className="serviceAreas__gridLines" opacity="0.34">
          <path d="M70 108H448" stroke="rgba(13, 71, 161, 0.12)" strokeWidth="1.2" />
          <path d="M70 220H448" stroke="rgba(13, 71, 161, 0.12)" strokeWidth="1.2" />
          <path d="M70 332H448" stroke="rgba(13, 71, 161, 0.12)" strokeWidth="1.2" />
          <path d="M70 444H448" stroke="rgba(13, 71, 161, 0.12)" strokeWidth="1.2" />
        </g>

        <g
          className="serviceAreas__selectedMarker"
          data-service-area-marker
          transform={`translate(${defaultCity.x} ${defaultCity.y})`}
        >
          <circle className="serviceAreas__selectedHalo" cx="0" cy="0" r="36" />
          <path d="M0-31C17-31 31-17 31 0C31 16 8 43 0 54C-8 43-31 16-31 0C-31-17-17-31 0-31Z" />
          <circle cx="0" cy="0" r="9" />
          <text x="42" y="5" className="serviceAreas__selectedLabel" data-service-area-label>
            Miami
          </text>
        </g>
      </svg>

      <div className="serviceAreas__mapCaption">
        <span>SOUTH FLORIDA COVERAGE</span>
        <strong data-service-area-status>Miami selected in Miami-Dade Core</strong>
      </div>
    </div>
  );
}

export function ServiceAreas() {
  return (
    <section className="serviceAreas section" id="service-areas" aria-labelledby="service-areas-title">
      <div className="container serviceAreas__grid">
        <div className="serviceAreas__visual stack-lg">
          <Reveal variant="fade-in">
            <SouthFloridaMap />
          </Reveal>

          <Reveal variant="fade-in" delay={120}>
            <div className="serviceAreas__cityControls" aria-label="Areas we regularly serve">
              {serviceAreaGroups.map((group) => {
                const isDefaultGroup = group.cities.some((city) => city.name === defaultCity.name);

                return (
                  <label className={`serviceAreas__dropdown${isDefaultGroup ? " is-selected" : ""}`} key={group.label}>
                    <span>
                      <strong>{group.label}</strong>
                      <small>{group.description}</small>
                    </span>
                    <select
                      className="serviceAreas__select"
                      defaultValue={isDefaultGroup ? defaultCity.name : ""}
                      data-service-area-select
                    >
                      <option value="" disabled>
                        Choose a city
                      </option>
                      {group.cities.map((city) => (
                        <option
                          key={city.name}
                          value={city.name}
                          data-x={city.x}
                          data-y={city.y}
                          data-sector={group.label}
                        >
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </label>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="serviceAreas__ctaWrap serviceAreas__ctaWrap--visual" variant="fade-up" delay={180}>
            <Button href="#contacto">Request Your Free On-Site Estimate</Button>
          </Reveal>
        </div>

        <div className="serviceAreas__content stack-lg">
          <Reveal variant="fade-up">
            <div className="serviceAreas__heading stack-md">
              <h2 id="service-areas-title">Proudly Serving Miami and Communities Throughout South Florida</h2>
              <h3>Local Expertise. Reliable Service. Professional Results Wherever You Need Us.</h3>
              <div className="serviceAreas__body stack-md">
                <p>
                  Florida ElectroStatic proudly provides professional electrostatic painting services throughout
                  Miami-Dade County, Broward County and Palm Beach County. Whether you manage a commercial office
                  building in Downtown Miami, a condominium in Brickell, an industrial facility in Medley or a retail
                  center in Fort Lauderdale, our team is ready to help restore and protect your metal assets.
                </p>
                <p>
                  As a South Florida company, we understand the unique challenges that Florida&apos;s climate creates for
                  exposed metal surfaces. Constant humidity, intense UV exposure, heavy rain and coastal salt air
                  accelerate corrosion and deterioration. Our coating systems are selected with these demanding
                  conditions in mind.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={80}>
            <div className="serviceAreas__listBlock stack-md">
              <h3>Areas We Regularly Serve</h3>
              <p className="serviceAreas__supportText">
                We regularly serve high-density urban corridors, coastal communities, commercial districts and
                industrial zones throughout South Florida.
              </p>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={140}>
            <div className="serviceAreas__partners stack-md">
              <h3>Who We Work With</h3>
              <ul className="serviceAreas__partnerList" aria-label="Who we work with">
                {partners.map((partner) => (
                  <li key={partner}>{partner}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="serviceAreas__highlightWrap" variant="fade-up" delay={220}>
            <article className="serviceAreas__highlight card">
              <div className="serviceAreas__highlightInner stack-md">
                <p className="serviceAreas__highlightLabel">LOCAL SERVICE YOU CAN COUNT ON</p>
                <p>
                  Because we&apos;re based in South Florida, we&apos;re able to provide responsive communication, on-site
                  evaluations and reliable scheduling throughout the region. Every project is planned around your
                  operational needs with the goal of minimizing downtime while delivering exceptional results.
                </p>
                <blockquote className="serviceAreas__quote">
                  &quot;Local knowledge makes a difference. We understand South Florida because we work here every day.&quot;
                </blockquote>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
