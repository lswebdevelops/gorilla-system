import { useState } from "react";
import "../../styles/Consolidated.css";
import StocksPopup from "../../components/popups/StocksPopup";
import EmergencyFundPopup from "../../components/popups/EmergencyFundPopup";
import BrazilianStocksPopups from "../../components/popups/BrazilianStocksPopup";
import BondsPopup from "../../components/popups/BondsPopup";
import BrazilianRealEstatePopup from "../../components/popups/BrazilianRealEstatePopup";
import OthersPopup from "../../components/popups/OthersPopup";
import REITsPopup from "../../components/popups/REITsPopup";
import BrazilianTreasurePopup from "../../components/popups/BrazilianTreasurePopup";
import DebtPopup from "../../components/popups/DebtPopup";

const Consolidated = () => {
  const [inputValues, setInputValues] = useState({
    emergencyFundInput: 20,
    brazilianStocksInput: 20,
    bondsInput: 10,
    brazilianRealEstateInput: 10,
    otherInput: 10,
    reitsInput: 10,
    brazilianTreasureInput: 10,
    stocksInput: 10,
  });

  const [result, setResult] = useState(100);

  // function to handle input changes
  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: parseFloat(value), // converting inputs to numbers
    });
  };

  // function to calculate the sum and update the result
  const calculateSum = () => {
    const sum =
      inputValues.emergencyFundInput +
      inputValues.brazilianStocksInput +
      inputValues.bondsInput +
      inputValues.brazilianRealEstateInput +
      inputValues.otherInput +
      inputValues.reitsInput +
      inputValues.brazilianTreasureInput +
      inputValues.stocksInput;
    setResult(sum);
  };

  // adding notes
  // emergency fund Popup

  const [isEmergencyFundOpen, setIsEmergencyFundOpen] = useState(false);
  const [emergencyFundNote, setEmergencyFundNote] = useState("");
  const [isEmergencyFundEdited, setIsEmergencyFundEdited] = useState(false); // Track edit status

  const handleOpenEmergencyFundPopup = () => {
    setIsEmergencyFundOpen(true);
  };

  const handleCloseEmergencyFundPopup = () => {
    setIsEmergencyFundOpen(false);
  };

  const handleSaveEmergencyFundNote = (updatedNote) => {
    setEmergencyFundNote(updatedNote);
    setIsEmergencyFundEdited(true); // Set the edit status to true when the note is edited
  };

  // stocks Popup
  const [isStocksPopupOpen, setIsStocksPopupOpen] = useState(false);
  const [stocksNote, setStocksNote] = useState("");
  const [isStocksNoteEdited, setIsStocksNoteEdited] = useState(false); // Track edit status

  const handleOpenStocksPopup = () => {
    setIsStocksPopupOpen(true);
  };
  const handleCloseStocksPopup = () => {
    setIsStocksPopupOpen(false);
  };

  const handleSaveStocksNote = (updatedNote) => {
    setStocksNote(updatedNote);
    setIsStocksNoteEdited(true); // Set the edit status to true when the note is edited
  };

  // brazilian stocks:Popup
  const [isbrazilianStocksPopupOpen, setIsbrazilianStocksPopupOpen] =
    useState(false);
  const [brazilianstocksNote, setbrazilianStocksNote] = useState("");
  const [isBrazilianStocksNoteEdited, setIsBrazilianStocksNoteEdited] =
    useState(false); // Track edit status

  const handleOpenBrazilianStocksPopup = () => {
    setIsbrazilianStocksPopupOpen(true);
  };
  const handleCloseBrazilianStocksPopup = () => {
    setIsbrazilianStocksPopupOpen(false);
  };

  const handleSaveBrazilianStocksNote = (updatedNote) => {
    setbrazilianStocksNote(updatedNote);
    setIsBrazilianStocksNoteEdited(true); // Set the edit status to true when the note is edited
  };


  // bonds Popup
  const [isBondsPopupOpen, setIsBondsPopupOpen] = useState(false);
  const [bondsNote, setBondsNote] = useState("");
  const [isBondsNoteEdited, setIsBondsNoteEdited] = useState(false); // Track edit status

  const handleOpenBondsPopup = () => {
    setIsBondsPopupOpen(true);
  };
  const handleCloseBondsPopup = () => {
    setIsBondsPopupOpen(false);
  };

  const handleSaveBondsNote = (updatedNote) => {
    setBondsNote(updatedNote);
    setIsBondsNoteEdited(true); // Set the edit status to true when the note is edited
  };
  // Brazilian Real Estate Popup
  const [isBrazilianRealEstatePopupOpen, setIsBrazilianRealEstatePopupOpen] = useState(false);
  const [brazilianRealEstateNote, setBrazilianRealEstateNote] = useState("");
  const [isBrazilianRealEstateNoteEdited, setIsBrazilianRealEstateNoteEdited] = useState(false); // Track edit status

  const handleOpenBrazilianRealEstatePopup = () => {
    setIsBrazilianRealEstatePopupOpen(true);
  };
  const handleCloseBrazilianRealEstatePopup = () => {
    setIsBrazilianRealEstatePopupOpen(false);
  };

  const handleSaveBrazilianRealEstateNote = (updatedNote) => {
    setBrazilianRealEstateNote(updatedNote);
    setIsBrazilianRealEstateNoteEdited(true); // Set the edit status to true when the note is edited
  };


  // others Popup
  const [isOthersPopupOpen, setIsOthersPopupOpen] = useState(false);
  const [othersNote, setOthersNote] = useState("");
  const [isOthersNoteEdited, setIsOthersNoteEdited] = useState(false); // Track edit status

  const handleOpenOthersPopup = () => {
    setIsOthersPopupOpen(true);
  };
  const handleCloseOthersPopup = () => {
    setIsOthersPopupOpen(false);
  };

  const handleSaveOthersNote = (updatedNote) => {
    setOthersNote(updatedNote);
    setIsOthersNoteEdited(true); // Set the edit status to true when the note is edited
  };
  // REITs Popup
  const [isREITsPopupOpen, setIsREITsPopupOpen] = useState(false);
  const [rEITsNote, setREITsNote] = useState("");
  const [isREITsNoteEdited, setIsREITsNoteEdited] = useState(false); // Track edit status

  const handleOpenREITsPopup = () => {
    setIsREITsPopupOpen(true);
  };
  const handleCloseREITsPopup = () => {
    setIsREITsPopupOpen(false);
  };

  const handleSaveREITsNote = (updatedNote) => {
    setREITsNote(updatedNote);
    setIsREITsNoteEdited(true); // Set the edit status to true when the note is edited
  };
  // Brazilian Treasure Popup
  const [isBrazilianTreasurePopupOpen, setIsBrazilianTreasurePopupOpen] = useState(false);
  const [brazilianTreasureNote, setBrazilianTreasureNote] = useState("");
  const [isBrazilianTreasureNoteEdited, setIsBrazilianTreasureNoteEdited] = useState(false); // Track edit status

  const handleOpenBrazilianTreasurePopup = () => {
    setIsBrazilianTreasurePopupOpen(true);
  };
  const handleCloseBrazilianTreasurePopup = () => {
    setIsBrazilianTreasurePopupOpen(false);
  };

  const handleSaveBrazilianTreasureNote = (updatedNote) => {
    setBrazilianTreasureNote(updatedNote);
    setIsBrazilianTreasureNoteEdited(true); // Set the edit status to true when the note is edited
  };
  // DebtPopup
  const [isDebtPopupOpen, setIsDebtPopupOpen] = useState(false);
  const [debtNote, setDebtNote] = useState("");
  const [isDebtNoteEdited, setIsDebtNoteEdited] = useState(false); // Track edit status

  const handleOpenDebtPopup = () => {
    setIsDebtPopupOpen(true);
  };
  const handleCloseDebtPopup = () => {
    setIsDebtPopupOpen(false);
  };

  const handleSaveDebtNote = (updatedNote) => {
    setDebtNote(updatedNote);
    setIsDebtNoteEdited(true); // Set the edit status to true when the note is edited
  };

  return (
    <>
      <h1>Consolidated</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Total invested</th>
              <th>Percentage invested</th>
              <th>Goal</th>
              <th>Where to invest</th>
              <th>Add notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emergency Fund</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>
                <input
                  name="emergencyFundInput"
                  value={inputValues.emergencyFundInput}
                  onChange={handleInputChanges}
                  className={"goal-input"}
                  type="number"
                  min={0}
                  max={100}
                  placeholder={"0"}
                />
                %
              </td>
              <td>✔</td>
              <td>
                <button
                  onClick={handleOpenEmergencyFundPopup}
                  className={`notebook ${
                    isEmergencyFundEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isEmergencyFundOpen && (
                  <EmergencyFundPopup
                    onSave={handleSaveEmergencyFundNote}
                    onClose={handleCloseEmergencyFundPopup}
                    noteText={emergencyFundNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Brazilian Stocks</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>
                <input
                  name="brazilianStocksInput"
                  value={inputValues.brazilianStocksInput}
                  onChange={handleInputChanges}
                  className={"goal-input"}
                  type="number"
                  min={0}
                  max={100}
                  placeholder={"0"}
                />
                %
              </td>
              <td>✔</td>
              <td>
                <button
                  onClick={handleOpenBrazilianStocksPopup}
                  className={`notebook ${
                    isBrazilianStocksNoteEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isbrazilianStocksPopupOpen && (
                  <BrazilianStocksPopups
                    onSave={handleSaveBrazilianStocksNote}
                    onClose={handleCloseBrazilianStocksPopup}
                    noteText={brazilianstocksNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Bonds</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>
                <input
                  name="bondsInput"
                  value={inputValues.bondsInput}
                  onChange={handleInputChanges}
                  className={"goal-input"}
                  type="number"
                  min={0}
                  max={100}
                  placeholder={"0"}
                />
                %
              </td>
              <td>✔</td>
              <td>
              <button
                  onClick={handleOpenBondsPopup}
                  className={`notebook ${
                    isBondsNoteEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isBondsPopupOpen && (
                  <BondsPopup
                    onSave={handleSaveBondsNote}
                    onClose={handleCloseBondsPopup}
                    noteText={bondsNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Brazilian Real Estate(FIIs)</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>
                <input
                  name="brazilianRealEstateInput"
                  value={inputValues.brazilianRealEstateInput}
                  onChange={handleInputChanges}
                  className={"goal-input"}
                  type="number"
                  min={0}
                  max={100}
                  placeholder={"0"}
                />
                %
              </td>
              <td>✔</td>
              <td>
              <button
                  onClick={handleOpenBrazilianRealEstatePopup}
                  className={`notebook ${
                    isBrazilianRealEstateNoteEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isBrazilianRealEstatePopupOpen && (
                  <BrazilianRealEstatePopup
                    onSave={handleSaveBrazilianRealEstateNote}
                    onClose={handleCloseBrazilianRealEstatePopup}
                    noteText={brazilianRealEstateNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Other</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>
                <input
                  name="otherInput"
                  value={inputValues.otherInput}
                  onChange={handleInputChanges}
                  className={"goal-input"}
                  type="number"
                  min={0}
                  max={100}
                  placeholder={"0"}
                />
                %
              </td>
              <td>✔</td>
              <td>
              <button
                  onClick={handleOpenOthersPopup}
                  className={`notebook ${
                    isOthersNoteEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isOthersPopupOpen && (
                  <OthersPopup
                    onSave={handleSaveOthersNote}
                    onClose={handleCloseOthersPopup}
                    noteText={othersNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>REITs</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>
                <input
                  name="reitsInput"
                  value={inputValues.reitsInput}
                  onChange={handleInputChanges}
                  className={"goal-input"}
                  type="number"
                  min={0}
                  max={100}
                  placeholder={"0"}
                />
                %
              </td>
              <td>✔</td>
              <td>
              <button
                  onClick={handleOpenREITsPopup}
                  className={`notebook ${
                    isREITsNoteEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isREITsPopupOpen && (
                  <REITsPopup
                    onSave={handleSaveREITsNote}
                    onClose={handleCloseREITsPopup}
                    noteText={rEITsNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Brazilian Treasure</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>
                <input
                  name="brazilianTreasureInput"
                  value={inputValues.brazilianTreasureInput}
                  onChange={handleInputChanges}
                  className={"goal-input"}
                  type="number"
                  min={0}
                  max={100}
                  placeholder={"0"}
                />
                %
              </td>
              <td>✔</td>
              <td>
              <button
                  onClick={handleOpenBrazilianTreasurePopup}
                  className={`notebook ${
                    isBrazilianTreasureNoteEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isBrazilianTreasurePopupOpen && (
                  <BrazilianTreasurePopup
                    onSave={handleSaveBrazilianTreasureNote}
                    onClose={handleCloseBrazilianTreasurePopup}
                    noteText={brazilianTreasureNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Stocks</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>
                <input
                  name="stocksInput"
                  value={inputValues.stocksInput}
                  onChange={handleInputChanges}
                  className={"goal-input"}
                  type="number"
                  min={0}
                  max={100}
                  placeholder={"0"}
                />
                %
              </td>
              <td>✔</td>
              <td>
                <button
                  onClick={handleOpenStocksPopup}
                  className={`notebook ${
                    isStocksNoteEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isStocksPopupOpen && (
                  <StocksPopup
                    onSave={handleSaveStocksNote}
                    onClose={handleCloseStocksPopup}
                    noteText={stocksNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>$ {0}</td>
              <td>{0}%</td>
              <td className={"goal-input-td"}>{}</td>
              <td></td>
              <td>
                
              </td>
            </tr>
            <tr>
              <td>Debt</td>
              <td>$ {0}</td>
              <td></td>
              <td className={"goal-input-td"}>{}</td>
              <td>✔</td>
              <td>
              <button
                  onClick={handleOpenDebtPopup}
                  className={`notebook ${
                    isDebtNoteEdited ? "new-icon" : ""
                  }`}
                ></button>
                {isDebtPopupOpen && (
                  <DebtPopup
                    onSave={handleSaveDebtNote}
                    onClose={handleCloseDebtPopup}
                    noteText={debtNote}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td
                className={
                  result !== 100
                    ? "goal-input-td goal-input-td-highlighted"
                    : "goal-input-td"
                }
              >
                {result}%<button onClick={calculateSum}>✔</button>
              </td>

              <td></td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Consolidated;
