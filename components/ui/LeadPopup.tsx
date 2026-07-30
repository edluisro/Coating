export function LeadPopup() {
  return (
    <div className="leadPopup" id="lead-popup" role="dialog" aria-modal="true" aria-labelledby="lead-popup-title" hidden>
      <button className="leadPopup__backdrop" type="button" aria-label="Close estimate form" data-lead-popup-close />
      <div className="leadPopup__dialog">
        <button className="leadPopup__close" type="button" aria-label="Close estimate form" data-lead-popup-close>
          x
        </button>

        <div className="leadPopup__content">
          <div className="leadPopup__copy stack-md">
            <p className="leadPopup__eyebrow">Free Project Estimate</p>
            <h2 id="lead-popup-title">Tell Us What You Need Restored.</h2>
            <p>
              Share a few details about your metal surfaces, property type and timeline. Our team will review your
              project and recommend the best electrostatic painting solution.
            </p>
            <div className="leadPopup__trust" aria-label="Estimate form trust signals">
              <span>On-Site Evaluation</span>
              <span>Commercial Specialists</span>
              <span>South Florida Service</span>
            </div>
          </div>

          <form className="leadPopup__form" aria-label="Free electrostatic painting estimate form">
            <label className="leadPopup__field" htmlFor="popup-full-name">
              <span>Full Name</span>
              <input id="popup-full-name" name="fullName" autoComplete="name" required />
            </label>

            <label className="leadPopup__field" htmlFor="popup-company">
              <span>Company</span>
              <input id="popup-company" name="company" autoComplete="organization" />
            </label>

            <label className="leadPopup__field" htmlFor="popup-phone">
              <span>Phone Number</span>
              <input id="popup-phone" name="phone" autoComplete="tel" required />
            </label>

            <label className="leadPopup__field" htmlFor="popup-email">
              <span>Email Address</span>
              <input id="popup-email" name="email" type="email" autoComplete="email" required />
            </label>

            <label className="leadPopup__field leadPopup__field--full" htmlFor="popup-project-type">
              <span>Project Type</span>
              <select id="popup-project-type" name="projectType" defaultValue="">
                <option value="" disabled>
                  Select one option
                </option>
                <option>Commercial property</option>
                <option>Industrial facility</option>
                <option>Condominium or HOA</option>
                <option>Storefront or retail center</option>
                <option>Other metal restoration project</option>
              </select>
            </label>

            <label className="leadPopup__field leadPopup__field--full" htmlFor="popup-details">
              <span>Project Details</span>
              <textarea id="popup-details" name="projectDetails" rows={4} />
            </label>

            <button className="btn btn-primary leadPopup__submit" type="submit">
              Request My Free Estimate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
