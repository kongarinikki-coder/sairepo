export default function LearnMoreModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2>Organ & Tissue Donation</h2>
        <p>
          Organ donation saves lives by providing healthy organs to people
          suffering from organ failure.
        </p>

        <h3>Organs That Can Be Donated</h3>
        <ul>
          <li>Heart</li>
          <li>Kidneys</li>
          <li>Liver</li>
          <li>Lungs</li>
          <li>Pancreas</li>
          <li>Intestines</li>
        </ul>

        <h3>Tissues That Can Be Donated</h3>
        <ul>
          <li>Corneas</li>
          <li>Skin</li>
          <li>Bone</li>
          <li>Heart Valves</li>
        </ul>
      </div>
    </div>
  );
}
