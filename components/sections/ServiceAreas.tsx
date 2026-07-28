import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const cities = [
  "Miami",
  "Miami Beach",
  "Brickell",
  "Downtown Miami",
  "Wynwood",
  "Edgewater",
  "Coral Gables",
  "Coconut Grove",
  "Key Biscayne",
  "Doral",
  "Medley",
  "Hialeah",
  "Hialeah Gardens",
  "Miami Lakes",
  "Kendall",
  "Pinecrest",
  "Palmetto Bay",
  "Cutler Bay",
  "Homestead",
  "Aventura",
  "North Miami",
  "North Miami Beach",
  "Sunny Isles Beach",
  "Bal Harbour",
  "Surfside",
  "Hollywood",
  "Hallandale Beach",
  "Pembroke Pines",
  "Miramar",
  "Davie",
  "Plantation",
  "Sunrise",
  "Fort Lauderdale",
  "Lauderhill",
  "Pompano Beach",
  "Deerfield Beach",
  "Boca Raton",
  "Delray Beach",
  "Boynton Beach",
  "West Palm Beach",
];

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
            stroke="rgba(244, 123, 32, 0.28)"
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

        <g className="serviceAreas__markerGroup serviceAreas__markerGroup--miami">
          <path d="M325 440C325 454 304 478 298 486C292 478 271 454 271 440C271 425 283 413 298 413C313 413 325 425 325 440Z" fill="#f47b20" />
          <circle cx="298" cy="440" r="8" fill="#fff7f0" />
          <text x="334" y="444" className="serviceAreas__markerLabel">
            Miami
          </text>
        </g>

        <g className="serviceAreas__markerGroup serviceAreas__markerGroup--fort">
          <path d="M347 328C347 342 326 366 320 374C314 366 293 342 293 328C293 313 305 301 320 301C335 301 347 313 347 328Z" fill="#f47b20" />
          <circle cx="320" cy="328" r="8" fill="#fff7f0" />
          <text x="356" y="332" className="serviceAreas__markerLabel">
            Fort Lauderdale
          </text>
        </g>

        <g className="serviceAreas__markerGroup serviceAreas__markerGroup--west">
          <path d="M371 214C371 228 350 252 344 260C338 252 317 228 317 214C317 199 329 187 344 187C359 187 371 199 371 214Z" fill="#f47b20" />
          <circle cx="344" cy="214" r="8" fill="#fff7f0" />
          <text x="380" y="218" className="serviceAreas__markerLabel">
            West Palm Beach
          </text>
        </g>
      </svg>

      <div className="serviceAreas__mapCaption">
        <span>SOUTH FLORIDA COVERAGE</span>
        <strong>Miami-Dade, Broward and Palm Beach County service area</strong>
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
            <ul className="serviceAreas__cities" aria-label="Areas we regularly serve">
              {cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
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

          <Reveal className="serviceAreas__ctaWrap" variant="fade-up" delay={280}>
            <Button href="#contacto">Request Your Free On-Site Estimate</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
