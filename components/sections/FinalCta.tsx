import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  "Factory-Like Finishes",
  "Commercial & Industrial Specialists",
  "On-Site Electrostatic Painting",
  "Minimal Business Disruption",
  "Durable High-Performance Coatings",
  "Professional Project Management",
  "Serving All South Florida",
];

export function FinalCta() {
  return (
    <section className="finalCta" id="final-cta" aria-labelledby="final-cta-title">
      <Image
        className="finalCta__image"
        src="https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_1800,h_1100,f_auto,q_auto/v1785453786/call_aBYTAeH5UUqgtxIrzjjWPIKa_ybelag.png"
        alt=""
        fill
        sizes="100vw"
      />
      <div className="finalCta__overlay" aria-hidden="true" />

      <div className="container finalCta__inner">
        <Reveal className="finalCta__content" variant="fade-up" stagger={90}>
          <div className="finalCta__heading stack-md">
            <h2 id="final-cta-title">Ready to Restore Your Metal Instead of Replacing It?</h2>
            <h3>Professional Electrostatic Painting for Commercial & Industrial Properties Across South Florida.</h3>
            <div className="finalCta__body stack-md">
              <p>
                Whether you&apos;re restoring a single storefront, refinishing an entire commercial property or
                protecting critical industrial equipment, Florida ElectroStatic is ready to help.
              </p>
              <p>
                Our team delivers professional electrostatic painting solutions designed to improve appearance, extend
                the life of your metal assets and reduce the cost of unnecessary replacements.
              </p>
              <p>Let&apos;s discuss your project and build a solution that fits your property, your schedule and your budget.</p>
            </div>
          </div>

          <div className="finalCta__benefitsBlock">
            <p className="finalCta__eyebrow">WHY CHOOSE FLORIDA ELECTROSTATIC?</p>
            <ul className="finalCta__benefits" aria-label="Why choose Florida ElectroStatic">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="finalCta__actions">
            <Button className="finalCta__primary" href="#contacto">
              Request Your Free Estimate
            </Button>
            <Button className="finalCta__secondary" href="tel:+13050000000" variant="outline">
              Call Us Today
            </Button>
          </div>

          <address className="finalCta__contact">
            <strong>Florida ElectroStatic</strong>
            <span>Miami, Florida</span>
            <a href="tel:+13050000000">Phone: (305) XXX-XXXX</a>
            <a href="mailto:info@floridaelectrostatic.com">Email: info@floridaelectrostatic.com</a>
          </address>

          <div className="finalCta__serviceArea">
            <span>Service Area:</span>
            <strong>Miami-Dade • Broward • Palm Beach</strong>
          </div>

          <p className="finalCta__signature">
            <span>Protect.</span>
            <span>Perform.</span>
            <span>Last.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
