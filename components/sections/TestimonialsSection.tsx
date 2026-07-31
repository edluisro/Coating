import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Testimonial = {
  quote: string;
  role: string;
  city: string;
};

type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Florida ElectroStatic completely transformed our storefront without interrupting our daily business. The finish looks incredible, and the professionalism of their team exceeded our expectations.",
    role: "Property Manager",
    city: "Miami, Florida",
  },
  {
    quote:
      "Our aluminum railings looked like they needed to be replaced. After the electrostatic refinishing, they honestly looked brand new. We saved a significant amount compared to replacement.",
    role: "Facility Manager",
    city: "Fort Lauderdale, Florida",
  },
  {
    quote:
      "The communication was excellent from beginning to end. The crew arrived on schedule, protected the surrounding areas and delivered exactly what they promised.",
    role: "Commercial Building Owner",
    city: "Doral, Florida",
  },
  {
    quote:
      "The project was completed with minimal disruption to our operations. We were impressed by the attention to detail and the quality of the final finish.",
    role: "Operations Manager",
    city: "Medley, Florida",
  },
  {
    quote:
      "Professional, organized and easy to work with. We will definitely use Florida ElectroStatic again for future restoration projects.",
    role: "General Contractor",
    city: "Coral Gables, Florida",
  },
];

const testimonialDots = testimonials;

const trustPoints = [
  "Professional Communication",
  "Reliable Scheduling",
  "Quality Workmanship",
  "Commercial & Industrial Experience",
  "Factory-Quality Finishes",
  "Long-Term Customer Relationships",
];

const stats: Stat[] = [
  {
    value: "100",
    suffix: "+",
    label: "Commercial Projects Completed",
  },
  {
    value: "98",
    suffix: "%",
    label: "Satisfied Clients",
  },
  {
    value: "3",
    label: "South Florida Service Area",
  },
  {
    value: "100",
    suffix: "%",
    label: "Commitment to Quality",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonialCard">
      <div className="testimonialCard__stars" aria-label="Five star review">
        <span aria-hidden="true">★★★★★</span>
      </div>
      <blockquote>"{testimonial.quote}"</blockquote>
      <footer>
        <strong>— {testimonial.role}</strong>
        <span>{testimonial.city}</span>
      </footer>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="testimonials section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container testimonials__inner">
        <Reveal variant="fade-up">
          <header className="testimonials__header stack-md text-center">
            <h2 id="testimonials-title">Trusted by Businesses Across South Florida</h2>
            <h3>Our Reputation Is Built One Project at a Time.</h3>
            <p>
              We believe the quality of our work is best measured by the satisfaction of our clients. Property managers,
              business owners, contractors and facility managers trust Florida ElectroStatic because we deliver
              professional results, communicate clearly and stand behind our workmanship.
            </p>
          </header>
        </Reveal>

        <Reveal className="testimonials__carousel" variant="fade-up">
          <div className="testimonials__carouselShell" data-testimonials-carousel>
            <div
              className="testimonials__track"
              data-testimonials-track
              aria-label="Client testimonials carousel"
              tabIndex={0}
            >
              {testimonials.map((testimonial) => (
                <div className="testimonials__slide" key={`${testimonial.role}-${testimonial.city}`}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>

            <div className="testimonials__controls" aria-label="Testimonials controls">
              <button className="testimonials__arrow" type="button" aria-label="Previous testimonial" data-testimonials-prev>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 5 8 12l7 7" />
                  <path d="M9 12h11" />
                </svg>
              </button>
              <div className="testimonials__dots" aria-label="Choose testimonial">
                {testimonialDots.map((testimonial, index) => (
                  <button
                    className="testimonials__dot"
                    type="button"
                    aria-label={`Show testimonial view ${index + 1} starting near ${testimonial.city}`}
                    data-testimonials-dot
                    data-index={index}
                    key={`${testimonial.city}-dot`}
                  />
                ))}
              </div>
              <button className="testimonials__arrow" type="button" aria-label="Next testimonial" data-testimonials-next>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                  <path d="M4 12h11" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="testimonials__proof">
          <Reveal className="testimonials__trustBlock" variant="fade-up" delay={120}>
            <div className="testimonials__trustCopy stack-sm">
              <p className="testimonials__eyebrow">WHY CLIENTS CONTINUE TO CHOOSE US</p>
            </div>
            <ul className="testimonials__trustList" aria-label="Why clients continue to choose us">
              {trustPoints.map((point) => (
                <li key={point}>
                  <span aria-hidden="true">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="testimonials__stats" variant="fade-up" stagger={80} aria-label="Company trust statistics">
            {stats.map((stat) => (
              <div className="testimonials__stat" key={stat.label}>
                <strong data-count-to={stat.value} data-count-suffix={stat.suffix || ""}>
                  0{stat.suffix || ""}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="testimonials__quoteWrap" variant="fade-up" delay={180}>
            <blockquote className="testimonials__quote">
              <p>Our goal isn’t simply to complete another project.</p>
              <p>It’s to become the company you call every time your metal assets need professional restoration.</p>
            </blockquote>
          </Reveal>

          <Reveal className="testimonials__ctaWrap" variant="fade-up" delay={240}>
            <Button href="#contacto">Request Your Free Estimate Today</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
