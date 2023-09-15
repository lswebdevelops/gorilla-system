import { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/popups/StocksPopup.css";

function OthersPopup({ onSave, onClose, noteText }) {
  const [note, setNote] = useState(noteText);
  const handleSave = () => {
    onSave(note);
    onClose();
  };
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Others</h2>
        <textarea
          placeholder="Add your note about others..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="button-notes" onClick={handleSave}>
          ✔
        </button>
        <button className="button-notes-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
OthersPopup.propTypes = {
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  noteText: PropTypes.string,
};
export default OthersPopup;
