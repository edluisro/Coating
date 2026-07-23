import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="finalCta" aria-labelledby="final-cta-title">
      <div className="container finalCta__card">
        <div>
          <p className="eyebrow">Siguiente paso</p>
          <h2 id="final-cta-title">Deja la base lista y empieza a personalizar.</h2>
        </div>
        <Button href="#contacto">Empezar ahora</Button>
      </div>
    </section>
  );
}
