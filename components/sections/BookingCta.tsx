import { Input, Select, Textarea } from "@/components/ui/Input";
import { Reveal } from "@/components/ui/Reveal";

export function BookingCta() {
  return (
    <section className="bookingCta" id="contacto" aria-labelledby="booking-title">
      <div className="container bookingCta__grid">
        <Reveal variant="slide-right">
          <p className="eyebrow">Request an Estimate</p>
          <h2 id="booking-title">Tell us what you need restored.</h2>
          <p>
            Share the metal surfaces, property type and timeline. We will review your project and recommend the best
            restoration approach.
          </p>
        </Reveal>
        <Reveal variant="slide-left" delay={120}>
          <form className="formPanel" aria-label="Project estimate form">
            <Input id="booking-name" label="Full Name" name="name" required />
            <Input id="booking-email" label="Email Address" name="email" type="email" required />
            <Select id="booking-type" label="Project Type" name="projectType" defaultValue="">
              <option value="" disabled>
                Select one option
              </option>
              <option>Commercial property</option>
              <option>Industrial facility</option>
              <option>Residential community</option>
            </Select>
            <Input id="booking-date" label="Preferred Timeline" name="date" type="date" />
            <Textarea id="booking-message" label="Project Details" name="message" />
            <button className="btn btn-primary formPanel__submit" type="submit">
              Request My Estimate
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
