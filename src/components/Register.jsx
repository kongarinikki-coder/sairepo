export default function Register({ onClose }) {
  return (
    <>
      <h2>Register as an Organ Donor</h2>
      <p>This is a demo registration form.</p>

      <form>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Email" />
        <input placeholder="Phone Number" />

        <div className="consent-row">
          <input id="consent" type="checkbox" />
          <label htmlFor="consent">I give consent</label>
        </div>

        <button type="button" className="hero-btn primary" onClick={onClose}>
          Complete Registration
        </button>
      </form>
    </>
  );
}
