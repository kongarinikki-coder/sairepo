import { Link } from "react-router-dom";
import "../styles/organDonation.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">♡ The Greatest Gift</span>

        <h1 className="hero-title">
          One Donor Can Save <br /> Up to 8 Lives
        </h1>

        <p className="hero-text">
          Register as an organ donor today and give the gift of life.
        </p>

        <div className="hero-actions">
          <Link to="/organ-donation" className="hero-btn primary">
            ♡ Register Now
          </Link>

          <Link to="/organ-donation" className="hero-btn secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
