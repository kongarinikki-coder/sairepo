import "../styles/organDonation.css";

export default function FAQ() {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <span className="faq-badge">FAQs</span>
        <h2 className="faq-title">Common Questions</h2>

        <div className="faq-list">
          <details className="faq-item">
            <summary>
              <span>Who can become an organ donor?</span>
              <span className="arrow">▼</span>
            </summary>
            <p>
              Almost anyone can become an organ donor regardless of age or
              medical history.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              <span>Will my religion allow organ donation?</span>
              <span className="arrow">▼</span>
            </summary>
            <p>
              Most major religions support organ donation as an act of
              compassion.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              <span>Can I change my mind after registering?</span>
              <span className="arrow">▼</span>
            </summary>
            <p>Yes. You can update or withdraw your consent at any time.</p>
          </details>

          <details className="faq-item">
            <summary>
              <span>Will organ donation affect my funeral?</span>
              <span className="arrow">▼</span>
            </summary>
            <p>No. Organ donation does not prevent an open-casket funeral.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
