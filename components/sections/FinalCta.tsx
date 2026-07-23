import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="finalCta" aria-labelledby="final-cta-title">
      <Reveal className="container finalCta__card">
        <div>
          <p className="eyebrow">Siguiente paso</p>
          <h2 id="final-cta-title">Deja la base lista y empieza a personalizar.</h2>
        </div>
        <Button href="#contacto">Empezar ahora</Button>
      </Reveal>
    </section>
  );
}
