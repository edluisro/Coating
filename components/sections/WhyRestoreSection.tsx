import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    text: "Restore existing metal for a fraction of the replacement cost.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 10h6" />
        <path d="M8.5 14c.9 1 2.1 1.5 3.5 1.5 1.8 0 3-1 3-2.2 0-3.1-6-1.4-6-4.3 0-1.2 1.1-2.2 2.9-2.2 1.2 0 2.3.4 3.1 1.2" />
      </svg>
    ),
  },
  {
    text: "Keep your business operating with minimal interruption.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18h16" />
        <path d="M6 18V9l6-4 6 4v9" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
  {
    text: "Protect metal against corrosion, moisture and daily wear.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4l6 3v5c0 4.2-2.6 6.8-6 8-3.4-1.2-6-3.8-6-8V7l6-3Z" />
        <path d="M9.5 12.5 11 14l3.5-4" />
      </svg>
    ),
  },
  {
    text: "Achieve a smooth factory-quality finish with minimal overspray.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13h6" />
        <path d="M10 10v6" />
        <path d="M14 10c1.8 0 3 1.2 3 3s-1.2 3-3 3" />
        <path d="M17 11.5 20 10" />
        <path d="M17.3 13 21 13" />
        <path d="M17 14.5 20 16" />
      </svg>
    ),
  },
  {
    text: "Increase the lifespan of fences, railings, doors, storefronts and equipment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
  {
    text: "Improve the appearance and value of your commercial property.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 17.5 6.7 20l1-5.7-4.2-4.1 5.8-.8L12 4l2.7 5.4 5.8.8-4.2 4.1 1 5.7Z" />
      </svg>
    ),
  },
];

const stackedImages = [
  {
    className: "whyRestore__card--1",
    src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_900,h_1100,f_auto,q_auto/v1785541766/exec-fa9f28ba-b704-4203-af50-fc94b7db07a5_uhztpm.png",
    alt: "Technician restoring exterior metal railings on-site with electrostatic painting equipment.",
  },
  {
    className: "whyRestore__card--2",
    src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_900,h_1100,f_auto,q_auto/v1785541771/exec-0a1d3922-087a-46fe-b0e4-543201a65049_bgw3wn.png",
    alt: "Professional coating application on commercial metal doors in a controlled work area.",
  },
  {
    className: "whyRestore__card--3",
    src: "https://res.cloudinary.com/wqsitnyu/image/upload/c_fill,g_auto,w_900,h_1100,f_auto,q_auto/v1785541771/exec-ff873891-d8bc-44f2-a8da-9b5c551f05be_lxrtcc.png",
    alt: "Close-up electrostatic spray application on a black metal fence.",
  },
];

export function WhyRestoreSection() {
  return (
    <section className="whyRestore section section--alt" id="why-restore" aria-labelledby="why-restore-title">
      <div className="container whyRestore__grid">
        <div className="whyRestore__media" aria-label="Metal restoration image stack">
          {stackedImages.map((image, index) => (
            <Reveal
              className={`whyRestore__card ${image.className} ${index > 0 ? "whyRestore__card--mobileHidden" : ""}`.trim()}
              variant="slide-right"
              delay={index * 120}
              key={image.className}
            >
              <Image
                className="whyRestore__stackImage"
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
              />
            </Reveal>
          ))}
        </div>

        <div className="whyRestore__content stack-lg">
          <Reveal variant="fade-up">
            <div className="whyRestore__heading stack-md">
              <h2 id="why-restore-title">Why Replace Metal That Can Be Professionally Restored?</h2>
              <h3>Save Money. Reduce Downtime. Extend the Life of Your Existing Metal Assets.</h3>
              <div className="whyRestore__body stack-md">
                <p>
                  Replacing metal fences, railings, storefronts, doors, window frames, structural steel or commercial
                  equipment is often unnecessary and expensive. In many cases, the existing metal is still structurally
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
                    <div className="whyRestore__benefitItem" key={benefit.text}>
                      <span className="whyRestore__benefitIcon" aria-hidden="true">
                        {benefit.icon}
                      </span>
                      <p>{benefit.text}</p>
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
