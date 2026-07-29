import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What is electrostatic painting?",
    answer:
      "Electrostatic painting is a specialized coating process designed specifically for metal surfaces. The paint is electrically charged while the metal is grounded, allowing the coating to wrap evenly around the surface for a smooth, factory-like finish with minimal overspray.",
  },
  {
    question: "Is electrostatic painting better than conventional spray painting?",
    answer:
      "For properly prepared metal surfaces, electrostatic painting provides a more uniform finish, significantly reduces overspray and delivers excellent adhesion. It is one of the preferred methods for refinishing commercial and industrial metal assets.",
  },
  {
    question: "Can you paint metal without removing it?",
    answer:
      "Yes. In many cases, our electrostatic painting process is performed on-site, allowing existing fences, railings, storefronts, doors and other metal components to be professionally refinished without removing or replacing them.",
  },
  {
    question: "What types of properties do you work on?",
    answer:
      "We work with commercial buildings, office complexes, industrial facilities, warehouses, retail centers, hospitals, schools, condominiums, hotels, municipalities and many other types of commercial properties throughout South Florida.",
  },
  {
    question: "Can electrostatic painting help prevent rust?",
    answer:
      "A properly prepared and professionally coated metal surface helps protect against moisture, corrosion and everyday wear. The appropriate coating system will depend on the environment and the condition of the existing metal.",
  },
  {
    question: "How long does an electrostatic finish last?",
    answer:
      "The lifespan of any coating depends on several factors, including surface preparation, coating selection, environmental exposure and ongoing maintenance. When properly applied and maintained, electrostatic finishes provide long-lasting performance.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. We offer professional on-site evaluations and free project estimates throughout our service area. Every project is assessed individually so we can recommend the most appropriate solution.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We proudly serve businesses throughout Miami-Dade, Broward and Palm Beach County, including Miami, Doral, Hialeah, Kendall, Coral Gables, Fort Lauderdale, Hollywood, Boca Raton, West Palm Beach and many surrounding communities.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function FAQItemCard({ item, index }: { item: FAQItem; index: number }) {
  const panelId = `faq-panel-${index + 1}`;
  const buttonId = `faq-button-${index + 1}`;
  const isOpen = index === 0;

  return (
    <article className={`faqAccordion__item ${isOpen ? "is-open" : ""}`.trim()} data-faq-item>
      <h3>
        <button
          id={buttonId}
          className="faqAccordion__button"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          data-faq-button
        >
          <span>{item.question}</span>
          <span className="faqAccordion__icon" aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        className="faqAccordion__panel"
        role="region"
        aria-labelledby={buttonId}
        data-faq-panel
        hidden={!isOpen}
      >
        <div className="faqAccordion__answer">
          <p>{item.answer}</p>
        </div>
      </div>
    </article>
  );
}

export function FAQAccordion() {
  return (
    <section className="faqAccordion section section--alt" id="faq" aria-labelledby="faq-title">
      <div className="container faqAccordion__inner">
        <Reveal variant="fade-up">
          <header className="faqAccordion__header stack-md text-center">
            <h2 id="faq-title">Frequently Asked Questions About Electrostatic Painting</h2>
            <h3>Everything You Need to Know Before Starting Your Project.</h3>
            <p>
              Choosing the right company for your metal restoration project is an important decision. Below are answers
              to some of the questions we receive most often. If you don&apos;t see your question here, our team will be
              happy to help.
            </p>
          </header>
        </Reveal>

        <Reveal className="faqAccordion__list" variant="fade-up" stagger={70}>
          {faqItems.map((item, index) => (
            <FAQItemCard key={item.question} item={item} index={index} />
          ))}
        </Reveal>

        <Reveal className="faqAccordion__ctaWrap" variant="fade-up" delay={180}>
          <div className="faqAccordion__cta stack-md">
            <h3>Still Have Questions?</h3>
            <p>
              Our team is always available to discuss your project, explain our process and help you determine whether
              electrostatic painting is the right solution for your property.
            </p>
            <Button href="#contacto">Speak With Our Team</Button>
          </div>
        </Reveal>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
