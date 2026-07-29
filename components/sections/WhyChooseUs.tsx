import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  "On-site application",
  "Minimal overspray",
  "Commercial-grade finish",
  "Licensed and insured",
  "South Florida coverage",
  "Lower cost than replacement",
];

export function WhyChooseUs() {
  return (
    <section className="whyUs section" id="why-choose-us" aria-labelledby="why-title">
      <div className="container whyUs__grid">
        <Reveal className="whyUs__visual" variant="fade-in" aria-hidden="true" />
        <Reveal variant="slide-left">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for property managers, facility teams and business owners who need results without disruption."
            text="We focus on surface restoration that protects your assets, improves appearance and avoids unnecessary replacement costs."
          />
          <Reveal className="whyUs__benefits" stagger={50}>
            {benefits.map((benefit) => (
              <div className="benefitItem" key={benefit}>
                {benefit}
              </div>
            ))}
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
