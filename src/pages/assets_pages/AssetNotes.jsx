import  { useEffect, useState } from "react";
import '../../styles/AssetNotes.css';
import PropTypes from "prop-types";

const AssetNotes = () => {
  const [note, setNote] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveNote = () => {
    // Save the note to local storage
    localStorage.setItem("myNotes", note);
    setIsSaved(true);
  };

  // Load note from local storage when the component mounts
  useEffect(() => {
    const storedNote = localStorage.getItem("myNotes");
    if (storedNote) {
      setNote(storedNote);
    }
  }, []);

  return (
    <div className="notes-assets-container">
      <h1>Check your notes</h1>
      <p>If you edit, click on<span>Save Note</span> before leaving the page.</p>
      <textarea
        onChange={(e) => {
          setNote(e.target.value);
          setIsSaved(false); // Reset to "Save Note" when the text changes
        }}
        value={note}
      />
      <br />
      <button 
      className={isSaved ? "saved-note" : "save-note"}
      onClick={handleSaveNote}>{isSaved ? "Saved" : "Save Note"}</button>
    </div>
  );
};

AssetNotes.propTypes = {
  noteText: PropTypes.string,
};

export default AssetNotes;
