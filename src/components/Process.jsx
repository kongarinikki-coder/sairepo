

import "../styles/organDonation.css";

export default function Process() {
  return (
    <section className="process-section">
      <div className="process-container">
        <span className="process-badge">Simple Process</span>

        <h2 className="process-title">How to Become a Donor</h2>

        <p className="process-subtitle">
          Registering as an organ donor is quick, easy, and can be done entirely
          online.
        </p>

        <div className="process-grid">
          <div className="process-card">
            <span className="step">1</span>
            <div className="icon-box">📄</div>
            <h3>Register Online</h3>
            <p>
              Fill out our simple registration form with your details and
              consent.
            </p>
          </div>

          <div className="process-card active">
            <span className="step">2</span>
            <div className="icon-box">🛡️</div>
            <h3>Verification</h3>
            <p>Your registration is verified for authenticity and security.</p>
          </div>

          <div className="process-card">
            <span className="step">3</span>
            <div className="icon-box">🎖️</div>
            <h3>Receive Donor Card</h3>
            <p>Get your official organ donor card and share with family.</p>
          </div>

          <div className="process-card">
            <span className="step">4</span>
            <div className="icon-box">💚</div>
            <h3>Save Lives</h3>
            <p>Your gift can save up to 8 lives when the time comes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
