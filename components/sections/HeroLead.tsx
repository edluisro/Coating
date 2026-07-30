import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Reveal } from "@/components/ui/Reveal";

const trustSignals = [
  "On-Site Service",
  "Commercial & Industrial Specialists",
  "Minimal Business Disruption",
  "Factory-Like Finish",
  "Licensed & Insured",
  "Serving All South Florida",
];

export function HeroLead() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/wqsitnyu/video/upload/v1785382156/electrostatic_painting_industrial_spray_hd_pexels_wndrgm.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="container hero__inner">
        <Reveal className="hero__copy" stagger={80}>
          <div className="hero__panel">
            <div className="hero__kicker">
              <span className="hero__badge">SERVING MIAMI-DADE, BROWARD &amp; PALM BEACH COUNTY</span>
            </div>
            <h1 id="hero-title">Electrostatic Painting Services That Restore Metal Instead of Replacing It.</h1>
            <p className="hero__subheading">
              Give your metal fences, railings, storefronts, equipment, doors and commercial assets a smooth
              factory-quality finish while saving thousands in replacement costs.
            </p>
            <div className="hero__body stack-md">
              <p>
                Florida ElectroStatic specializes in professional on-site electrostatic painting for commercial,
                industrial and institutional properties throughout South Florida. Our advanced electrostatic application
                process creates an exceptionally smooth, durable finish with minimal overspray, allowing us to restore
                existing metal surfaces quickly, efficiently and with minimal disruption to your daily operations.
              </p>
              <p>
                Whether you&apos;re managing an office building, condominium, warehouse, school, hospital, manufacturing
                facility or retail property, our team helps extend the life of your valuable metal assets while delivering
                results that look factory finished.
              </p>
            </div>
            <div className="hero__actions">
              <Button href="#contacto">Request Your Free Estimate</Button>
              <Button href="tel:+10000000000" variant="secondary">
                Call Now
              </Button>
            </div>
            <Reveal className="trustRow trustRow--hero" stagger={70} aria-label="Service trust signals">
              {trustSignals.map((signal) => (
                <div className="trustChip" key={signal}>
                  <span className="trustChip__icon" aria-hidden="true">
                    +
                  </span>
                  <span>{signal}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </Reveal>

        <Reveal className="hero__aside" variant="slide-left" delay={180}>
          <form className="hero__form" aria-label="Free estimate form">
            <h3 className="hero__formTitle">Get a factory-like finish without replacement costs.</h3>
            <Input id="lead-full-name" label="Full Name" name="fullName" autoComplete="name" required />
            <Input id="lead-company" label="Company" name="company" autoComplete="organization" />
            <Input id="lead-phone-number" label="Phone Number" name="phoneNumber" autoComplete="tel" required />
            <Input id="lead-email-address" label="Email Address" name="emailAddress" type="email" autoComplete="email" required />
            <Textarea
              id="lead-project-details"
              label="Tell us about your project..."
              name="projectDetails"
              required
            />
            <button className="btn btn-primary hero__formButton" type="submit">
              Get My Free Estimate
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
