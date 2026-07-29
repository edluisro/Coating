import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="finalCta" aria-labelledby="final-cta-title">
      <Reveal className="container finalCta__card">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2 id="final-cta-title">Get a factory-like finish without replacement costs.</h2>
        </div>
        <Button href="#contacto">Request Your Free Estimate</Button>
      </Reveal>
    </section>
  );
}
