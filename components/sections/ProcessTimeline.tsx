import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { ReactNode } from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "On-Site Consultation & Project Evaluation",
    description:
      "Every project begins with a detailed evaluation of your metal surfaces, existing coating condition, environmental exposure and project requirements. We identify any damaged areas, determine the appropriate coating system and provide recommendations based on your goals, timeline and budget.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-3.5-3.5" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Surface Preparation",
    description:
      "Proper preparation is the foundation of every successful coating system. Depending on the condition of the surface, we remove contaminants, oxidation, loose coatings and other imperfections to ensure maximum adhesion and long-term performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15h10" />
        <path d="M14 8h6" />
        <path d="M14 8v8" />
        <path d="M7 11 4 15l3 4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Masking & Surface Protection",
    description:
      "Before painting begins, surrounding areas, adjacent finishes, glass, hardware and sensitive components are carefully protected. This helps maintain a clean work environment and allows us to complete projects with minimal disruption to your facility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18h16" />
        <path d="M7 18V8l5-3 5 3v10" />
        <path d="M9 11h6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Professional Electrostatic Application",
    description:
      "Using specialized electrostatic equipment, we apply the coating evenly across the prepared metal surface. The charged paint particles are attracted to the grounded metal, creating exceptional coverage, a smooth appearance and significantly reducing overspray.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13h6" />
        <path d="M10 10v6" />
        <path d="M14 10c1.8 0 3 1.2 3 3s-1.2 3-3 3" />
        <path d="M17 11.5 20 10" />
        <path d="M17.3 13H21" />
        <path d="M17 14.5 20 16" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Inspection & Quality Control",
    description:
      "Every completed project undergoes a detailed inspection to verify finish consistency, appearance and overall workmanship. We don’t consider the project complete until it meets our quality standards and your expectations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4l6 3v5c0 4.2-2.6 6.8-6 8-3.4-1.2-6-3.8-6-8V7l6-3Z" />
        <path d="M9.5 12.5 11 14l3.5-4" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Project Completion & Final Walkthrough",
    description:
      "Once the work is complete, we perform a final walkthrough with your team to ensure everything has been completed as planned. We leave the work area clean, organized and ready for normal operation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12.5 8.5 17 20 6" />
        <path d="M4 19h16" />
      </svg>
    ),
  },
];

const expectations = [
  "Professional project planning",
  "Clear communication from start to finish",
  "Thorough surface preparation",
  "High-performance coating systems",
  "Minimal overspray",
  "Minimal interruption to your operations",
  "Factory-quality appearance",
  "Clean and organized job sites",
  "Reliable scheduling",
  "Long-lasting protection for your metal assets",
];

function TimelineStep({ step }: { step: ProcessStep }) {
  return (
    <li className="processTimeline__item">
      <article className="processTimeline__card">
        <div className="processTimeline__face processTimeline__face--content">
          <div className="processTimeline__copy stack-sm">
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </div>

        <div className="processTimeline__face processTimeline__face--cover" aria-hidden="true">
          <div className="processTimeline__coverGlow" />
          <div className="processTimeline__coverInner">
            <div className="processTimeline__coverTop">
              <div className="processTimeline__number">{step.number}</div>
              <span className="processTimeline__icon">{step.icon}</span>
            </div>
            <div className="processTimeline__coverTitleWrap">
              <strong className="processTimeline__coverTitle">{step.title}</strong>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export function ProcessTimeline() {
  return (
    <section className="processTimeline section section--alt" id="proceso" aria-labelledby="process-title">
      <div className="container processTimeline__inner">
        <Reveal variant="fade-up">
          <header className="processTimeline__header stack-md text-center">
            <h2 id="process-title">Our Proven Electrostatic Painting Process</h2>
            <h3>Every Project Follows a Carefully Planned Process to Deliver Consistent, Long-Lasting Results.</h3>
            <p>
              A high-quality finish doesn’t happen by accident. It is the result of proper planning, thorough surface
              preparation, professional application and detailed quality control. At Florida ElectroStatic, every
              project follows a proven step-by-step process designed to maximize durability, minimize disruption and
              deliver a factory-quality finish that stands the test of time.
            </p>
          </header>
        </Reveal>

        <Reveal className="processTimeline__line" variant="fade-in" aria-hidden="true">
          <span className="processTimeline__lineTrack" />
        </Reveal>

        <Reveal className="processTimeline__stepsWrap" variant="fade-up" delay={60}>
          <ol className="processTimeline__steps" aria-label="Electrostatic painting process steps">
            {steps.map((step, index) => (
              <Reveal key={step.number} variant="fade-up" delay={index * 100} className="processTimeline__stepReveal">
                <TimelineStep step={step} />
              </Reveal>
            ))}
          </ol>
        </Reveal>

        <Reveal className="processTimeline__highlightReveal" variant="fade-up" delay={120}>
          <article className="card processTimeline__highlight">
            <div className="processTimeline__highlightInner stack-md">
              <p className="processTimeline__highlightLabel">QUALITY IS BUILT INTO EVERY STEP.</p>
              <p>
                The durability of an electrostatic finish depends on much more than the paint itself. Surface
                preparation, application technique and attention to detail all play a critical role in the final
                result. That&apos;s why we follow the same disciplined process on every project, regardless of its size.
              </p>
            </div>
          </article>
        </Reveal>

        <div className="processTimeline__footer stack-lg">
          <Reveal variant="fade-up" delay={160}>
            <div className="processTimeline__expectations stack-md">
              <h3>What You Can Expect From Every Project</h3>
              <Reveal className="processTimeline__expectationsReveal" variant="fade-in" stagger={60}>
                <ul className="processTimeline__expectationsList" aria-label="What you can expect from every project">
                  {expectations.map((item) => (
                    <li key={item} className="processTimeline__expectationItem">
                      <span className="processTimeline__expectationDot" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Reveal>

          <Reveal className="processTimeline__quoteWrap" variant="fade-up" delay={210}>
            <blockquote className="processTimeline__quote">
              &quot;Great finishes begin long before the first coat of paint is applied.&quot;
            </blockquote>
          </Reveal>

          <Reveal className="processTimeline__ctaWrap" variant="fade-up" delay={260}>
            <Button href="#contacto">Schedule Your On-Site Consultation</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
