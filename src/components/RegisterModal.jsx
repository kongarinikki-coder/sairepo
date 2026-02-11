import { useState } from "react";

export default function RegisterModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    consent: false,
  });

  if (!open) return null;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.consent) {
      alert("You must give consent to register");
      return;
    }

    // Send data to backend
    try {
      const res = await fetch("http://localhost:8080/api/register-donor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Registration failed");

      alert("🎉 Registration successful!");
      onClose();
    } catch (err) {
      alert("❌ Something went wrong");
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2>Register as an Organ Donor</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />

          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <input type="date" name="dob" onChange={handleChange} />

          <label>
            <input type="checkbox" name="consent" onChange={handleChange} />I
            give consent to donate my organs
          </label>

          <button type="submit" className="hero-btn primary">
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}
