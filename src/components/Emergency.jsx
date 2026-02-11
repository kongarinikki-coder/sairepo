import "../styles/emergency.css";

export default function Emergency() {
  return (
    <>
      {/* HERO */}
      <section className="emergency-hero">
        <div className="emergency-content">
          <div className="emergency-badge">⚠ Emergency Services</div>
          <h1 className="emergency-title">Need Immediate Help?</h1>
          <p className="emergency-text">
            Call emergency services immediately or use our quick access buttons
            below.
          </p>

          <div className="emergency-actions">
            <button className="emergency-btn primary">📞 Call 911 Now</button>
            <button className="emergency-btn secondary">
              📍 Find Nearest Hospital
            </button>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="emergency-cards">
        <div className="emergency-card">
          <div className="emergency-icon">📞</div>
          <h3>Emergency Hotline</h3>
          <p className="number">911</p>
          <span>For immediate medical emergencies</span>
        </div>

        <div className="emergency-card">
          <div className="emergency-icon">🩸</div>
          <h3>Blood Bank Emergency</h3>
          <p className="number">1-800-BLOOD-NOW</p>
          <span>Urgent blood requests</span>
        </div>

        <div className="emergency-card">
          <div className="emergency-icon">🚑</div>
          <h3>Ambulance Service</h3>
          <p className="number">1-800-AMBULANCE</p>
          <span>24/7 ambulance dispatch</span>
        </div>
      </section>

      {/* EMERGENCY BLOOD REQUEST FORM */}
      <section className="emergency-form-section">
        <div className="emergency-form-card">
          <div className="form-header">
            <div className="form-icon">🩸</div>
            <div>
              <h2>Emergency Blood Request</h2>
              <p>Get blood within 30 minutes</p>
            </div>
          </div>

          <form className="emergency-form">
            <div className="form-row">
              <div>
                <label>Patient Name</label>
                <input type="text" placeholder="Full name" />
              </div>
              <div>
                <label>Blood Group Required</label>
                <input type="text" placeholder="e.g., O-" />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Hospital Name</label>
                <input type="text" placeholder="Where patient is admitted" />
              </div>
              <div>
                <label>Units Required</label>
                <input type="number" placeholder="Number of units" />
              </div>
            </div>

            <div>
              <label>Contact Number</label>
              <input type="text" placeholder="Emergency contact number" />
            </div>

            <button type="button" className="submit-btn">
              ⚠ Submit Urgent Request
            </button>
          </form>
        </div>
      </section>

      {/* NEARBY EMERGENCY HOSPITALS */}
      <section className="nearby-hospitals">
        <div className="nearby-header">
          <h2>Nearby Emergency Hospitals</h2>
          <button className="location-btn">📍 Use My Location</button>
        </div>

        <div className="hospital-list">
          {/* Hospital 1 */}
          <div className="hospital-card">
            <div className="hospital-left">
              <div className="hospital-icon">🏥</div>
              <div>
                <h3>City General Hospital</h3>
                <p>📍 123 Main Street, Downtown</p>
                <div className="hospital-meta">
                  <span>📍 1.2 km</span>
                  <span>⏱ 4 mins</span>
                </div>
              </div>
            </div>

            <div className="hospital-right">
              <div className="tags">
                <span className="tag red">24/7 ER</span>
                <span className="tag red-light">Blood Bank</span>
              </div>
              <button className="direction-btn">Get Directions</button>
            </div>
          </div>

          {/* Hospital 2 */}
          <div className="hospital-card">
            <div className="hospital-left">
              <div className="hospital-icon">🏥</div>
              <div>
                <h3>St. Mary's Medical Center</h3>
                <p>📍 456 Healthcare Avenue</p>
                <div className="hospital-meta">
                  <span>📍 2.8 km</span>
                  <span>⏱ 8 mins</span>
                </div>
              </div>
            </div>

            <div className="hospital-right">
              <div className="tags">
                <span className="tag red">24/7 ER</span>
              </div>
              <button className="direction-btn">Get Directions</button>
            </div>
          </div>

          {/* Hospital 3 */}
          <div className="hospital-card">
            <div className="hospital-left">
              <div className="hospital-icon">🏥</div>
              <div>
                <h3>Regional Trauma Center</h3>
                <p>📍 789 Emergency Lane</p>
                <div className="hospital-meta">
                  <span>📍 3.5 km</span>
                  <span>⏱ 10 mins</span>
                </div>
              </div>
            </div>

            <div className="hospital-right">
              <div className="tags">
                <span className="tag red">24/7 ER</span>
                <span className="tag red-light">Blood Bank</span>
              </div>
              <button className="direction-btn">Get Directions</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
