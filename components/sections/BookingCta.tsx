import { Input, Select, Textarea } from "@/components/ui/Input";

export function BookingCta() {
  return (
    <section className="bookingCta" id="contacto" aria-labelledby="booking-title">
      <div className="container bookingCta__grid">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 id="booking-title">Cuéntanos que necesitas construir.</h2>
          <p>Deja los datos principales y usa este bloque como punto de partida para conectar tu CRM, email o WhatsApp.</p>
        </div>
        <form className="formPanel" aria-label="Formulario de proyecto">
          <Input id="booking-name" label="Nombre" name="name" required />
          <Input id="booking-email" label="Email" name="email" type="email" required />
          <Select id="booking-type" label="Tipo de proyecto" name="projectType" defaultValue="">
            <option value="" disabled>Selecciona una opcion</option>
            <option>Landing nueva</option>
            <option>Rediseño</option>
            <option>Automatizacion</option>
          </Select>
          <Input id="booking-date" label="Fecha ideal" name="date" type="date" />
          <Textarea id="booking-message" label="Mensaje" name="message" />
          <button className="btn btn-primary formPanel__submit" type="submit">Enviar proyecto</button>
        </form>
      </div>
    </section>
  );
}
