

import "../styles/organDonation.css";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-card">
          <h3>100K+</h3>
          <p>Waiting Patients</p>
        </div>

        <div className="stat-card">
          <h3>8</h3>
          <p>Lives Per Donor</p>
        </div>

        <div className="stat-card">
          <h3>17</h3>
          <p>Die Daily Waiting</p>
        </div>

        <div className="stat-card">
          <h3>50K+</h3>
          <p>Registered Donors</p>
        </div>
      </div>
    </section>
  );
}
