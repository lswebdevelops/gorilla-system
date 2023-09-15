import "../../styles/popups/StocksPopup.css";
import { useState } from "react";
import PropTypes from "prop-types";

const EmergencyFundPopup = ({ onSave, onClose, noteText }) => {
  const [note, setNote] = useState(noteText);
  const handleSave = () => {
    onSave(note);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Emergency Fund</h2>
        <textarea
          placeholder="Add your note about emergency fund"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="button-notes" onClick={handleSave}>
          ✔
        </button>
      </div>
    </div>
  );
};
EmergencyFundPopup.propTypes = {
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  noteText: PropTypes.string,
};

export default EmergencyFundPopup;
