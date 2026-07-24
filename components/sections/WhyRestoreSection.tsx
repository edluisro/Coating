import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  "Restore existing metal for a fraction of the replacement cost.",
  "Keep your business operating with minimal interruption.",
  "Protect metal against corrosion, moisture and daily wear.",
  "Achieve a smooth factory-quality finish with minimal overspray.",
  "Increase the lifespan of fences, railings, doors, storefronts and equipment.",
  "Improve the appearance and value of your commercial property.",
];

export function WhyRestoreSection() {
  return (
    <section className="whyRestore section section--alt" aria-labelledby="why-restore-title">
      <div className="container whyRestore__grid">
        <Reveal className="whyRestore__media" variant="fade-in">
          <div className="whyRestore__splitFrame whyRestore__scaleIn" aria-label="Before and after metal restoration example">
            <div className="whyRestore__splitHalf whyRestore__splitHalf--before">
              <Image
                className="whyRestore__splitImage whyRestore__splitImage--before"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
                alt="Before and after restoration view of a commercial metal structure."
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
              />
              <span className="whyRestore__splitLabel">Before</span>
            </div>
            <div className="whyRestore__splitHalf whyRestore__splitHalf--after">
              <Image
                className="whyRestore__splitImage"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
                alt=""
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
              />
              <span className="whyRestore__splitLabel">After</span>
            </div>
            <div className="whyRestore__splitDivider" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="whyRestore__content stack-lg">
          <Reveal variant="fade-up">
            <div className="whyRestore__heading stack-md">
              <h2 id="why-restore-title">Why Replace Metal That Can Be Professionally Restored?</h2>
              <h3>Save Money. Reduce Downtime. Extend the Life of Your Existing Metal Assets.</h3>
              <div className="whyRestore__body stack-md">
                <p>
                  Replacing metal fences, railings, storefronts, doors, window frames, structural steel or commercial
                  equipment is often unnecessary—and expensive. In many cases, the existing metal is still structurally
                  sound. The real problem is simply a deteriorated finish caused by years of exposure to Florida&apos;s
                  sun, humidity and coastal environment.
                </p>
                <p>
                  At Florida ElectroStatic, we help property owners, facility managers and businesses restore existing
                  metal surfaces instead of replacing them. Our electrostatic painting process delivers a smooth,
                  factory-like finish that dramatically improves appearance while protecting the metal against future
                  corrosion and wear.
                </p>
                <p>
                  The result is a professional restoration that costs significantly less than replacement while
                  minimizing disruption to your business.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="whyRestore__details stack-lg">
            <Reveal variant="fade-up" delay={80}>
              <div className="whyRestore__benefitsBlock stack-md">
                <h3 className="whyRestore__benefitsTitle">Why Businesses Choose Restoration Instead of Replacement</h3>
                <Reveal className="whyRestore__benefits" stagger={70} aria-label="Benefits of restoration">
                  {benefits.map((benefit) => (
                    <div className="whyRestore__benefitItem" key={benefit}>
                      <span className="whyRestore__benefitIcon" aria-hidden="true">
                        +
                      </span>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </Reveal>
              </div>
            </Reveal>

            <Reveal className="whyRestore__quote" variant="fade-in" delay={140}>
              <blockquote>
                "Why spend thousands replacing quality metal when you can professionally restore it for a fraction of
                the cost?"
              </blockquote>
            </Reveal>

            <Reveal className="whyRestore__highlightLift" variant="fade-up" delay={180}>
              <Card className="whyRestore__highlight" highlight>
                <div className="whyRestore__highlightInner stack-md">
                  <p className="whyRestore__highlightLabel">RESTORATION IS OFTEN THE SMARTER INVESTMENT.</p>
                  <p>
                    If your metal is structurally sound, replacing it may be unnecessary. Professional electrostatic
                    refinishing allows you to restore the appearance, improve durability and extend the life of your
                    existing assets without the cost, downtime and disruption of a full replacement.
                  </p>
                  <Button href="#servicios">See Our Restoration Projects</Button>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
