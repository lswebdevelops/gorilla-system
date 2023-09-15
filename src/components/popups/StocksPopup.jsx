import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/popups/StocksPopup.css";

function StocksPopup({ onSave, onClose, noteText }) {
  const [note, setNote] = useState(noteText);
  const handleSave = () => {
    onSave(note);
    onClose();
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Stocks</h2>
        <textarea
          placeholder="Add your note about stocks..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="button-notes" onClick={handleSave}>
          ✔
        </button>
      </div>
    </div>
  );
}
StocksPopup.propTypes = {
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  noteText: PropTypes.string,
};
export default StocksPopup;
