import { useState } from "react";
import "../../styles/Consolidated.css";
import StocksPopup from "../../components/popups/StocksPopup";
import EmergencyFundPopup from "../../components/popups/EmergencyFundPopup";

const Consolidated = () => {
  const [inputValues, setInputValues] = useState({
    emergencyFundInput: 0,
    brazilianStocksInput: 0,
    bondsInput: 0,
    brazilianRealEstateInput: 0,
    otherInput: 0,
    reitsInput: 0,
    brazilianTreasureInput: 0,
    stocksInput: 0,
  });

  const [result, setResult] = useState(0);

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
  // stocks
  const [isStocksPopupOpen, setIsStocksPopupOpen] = useState(false);
  const [stocksNote, setStocksNote] = useState("");

  const handleOpenStocksPopup = () => {
    setIsStocksPopupOpen(true);
  };
  const handleCloseStocksPopup = () => {
    setIsStocksPopupOpen(false);
  };

  const handleSaveStocksNote = (updatedNote) => {
    setStocksNote(updatedNote);
  };
// emergency fund

const [isEmergencyFundOpen, setIsEmergencyFundOpen ] = useState(false);
const [ emergencyFundNote, setEmergencyFundNote ]  = useState("")

const handleOpenEmergencyFundPopup = () => {
  setIsEmergencyFundOpen(true);
}

const handleCloseEmergencyFundPopup = () => {
  setIsEmergencyFundOpen(false);
};

const handleSaveEmergencyFundNote = (updatedNote) => {
  setEmergencyFundNote(updatedNote);
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
                <img
                onClick={handleOpenEmergencyFundPopup}
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  onClick={handleOpenStocksPopup}
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
              </td>
            </tr>
            <tr>
              <td>Debt</td>
              <td>$ {0}</td>
              <td></td>
              <td className={"goal-input-td"}>{}</td>
              <td>✔</td>
              <td>
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
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
                <img
                  className="notebook"
                  src="/src/assets/icons/icons8-notes-240.png"
                  alt="notebook"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Consolidated;
