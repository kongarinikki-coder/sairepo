import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import RegisterModal from "./RegisterModal";
import "../styles/organDonation.css";

export default function CallToAction() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleRegisterClick = () => {
    // ❌ Not logged in → HealthHub login
    if (!isAuthenticated) {
      navigate("/login", {
        state: { from: "/organ-donation" },
      });
      return;
    }

    // ❌ Logged in but not patient
    if (user?.role !== "patient") {
      alert("Only patients can register as organ donors.");
      return;
    }

    // ✅ Logged-in patient → allow registration
    setOpen(true);
  };

  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <h3>Become an Organ Donor</h3>
            <p>
              Registration is quick, secure, and helps us track donor progress
              in HealthHub.
            </p>

            <button className="cta-btn" onClick={handleRegisterClick}>
              BEGIN REGISTRATION
            </button>
          </div>
        </div>
      </section>

      <RegisterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
