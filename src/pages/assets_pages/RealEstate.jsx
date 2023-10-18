import { useEffect, useState } from "react";
import "../../styles/RealEstate.css";

const RealEstate = () => {
  const [typeOfRealEstate, setTypeOfRealEstate] = useState("Residential Real Estate");
  const [PaidValue, setPaidValue] = useState(0);
  const [Soldfor, setSoldfor] = useState(0);
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load items from local storage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("realEstateItems")) || [];
    setItems(storedItems);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const calculateTotalProfit = () => {
    let totalProfit = 0;
    items.forEach((item) => {
      totalProfit += item.profit;
    });
    return totalProfit;
  };
  const addItems = () => {
    // Calculate the profit based on PaidValue and Soldfor
    const profit = Soldfor - PaidValue;

    // Create a new item object
    const newItem = {
      typeOfRealEstate,
      PaidValue,
      Soldfor,
      profit,
    };

    // Add the new item to the items array
    const updatedItems = [...items, newItem];

    // Update local storage with the new items
    localStorage.setItem("realEstateItems", JSON.stringify(updatedItems));

    // Update the state with the new items
    setItems(updatedItems);

    // Reset the input fields
    setTypeOfRealEstate("Residential Real Estate");
    setPaidValue(0);
    setSoldfor(0);
  };

  const editItem = (index) => {
    // Set the editIndex to the selected item's index
    setEditIndex(index);

    // Initialize the input fields with the values of the item being edited
    const itemToEdit = items[index];
    setTypeOfRealEstate(itemToEdit.typeOfRealEstate);
    setPaidValue(itemToEdit.PaidValue);
    setSoldfor(itemToEdit.Soldfor);
  };

  const saveEditedItem = (index) => {
    // Calculate the profit based on PaidValue and Soldfor
    const profit = Soldfor - PaidValue;

    // Create a new item object
    const editedItem = {
      typeOfRealEstate,
      PaidValue,
      Soldfor,
      profit,
    };

    // Update the item at the specified index
    const updatedItems = [...items];
    updatedItems[index] = editedItem;

    // Update local storage with the edited items
    localStorage.setItem("realEstateItems", JSON.stringify(updatedItems));

    // Reset the editIndex to exit edit mode
    setEditIndex(null);

    // Reset the input fields
    setTypeOfRealEstate("Residential Real Estate");
    setPaidValue(0);
    setSoldfor(0);

    // Update the state with the edited item
    setItems(updatedItems);
  };

  const deleteItem = (index) => {
    // Create a new array without the deleted item
    const updatedItems = items.filter((_, i) => i !== index);

    // Update local storage with the updated items
    localStorage.setItem("realEstateItems", JSON.stringify(updatedItems));

    // Update the state with the updated items
    setItems(updatedItems);
  };
  return (
    <div>
      <h1>Real Estate</h1>
      <h2>Types of Real Estate</h2>
      <label htmlFor="selection">
        Select
        <select
          value={typeOfRealEstate}
          id="selection"
          onChange={(e) => setTypeOfRealEstate(e.target.value)}
        >
          <option>Residential Real Estate</option>
          <option>Commercial Real Estate</option>
          <option>Industrial Real Estate</option>
          <option>Raw Land</option>
          <option>Commercial Land</option>
          <option>Real Estate Investment Trusts (REITs)</option>
          <option>Hotels</option>
          <option>Crowdfunding Platforms</option>
          <option>Foptionpping</option>
          <option>Mixed Use</option>
          <option>Multifamily Real Estate</option>
          <option>Country Estates</option>
          <option>Manufactured Housing</option>
          <option>Rental Properties</option>
          <option>Retail Real Estate</option>
          <option>Special Purpose Real Estate</option>
          <option>Apartment Buildings</option>
          <option>Vegetable Farmland</option>
          <option>Other</option>
        </select>
      </label>
      <label htmlFor="value">
        Value:
        <input
          type="number"
          id="value"
          value={PaidValue}
          onChange={(e) => setPaidValue(e.target.value)}
        />
      </label>
      <label htmlFor="soldFor">
        Sold for:
       
        <input
          type="number"
          id="soldFor"
          value={Soldfor}
          onChange={(e) => setSoldfor(e.target.value)}
        />
      </label>
      <button
        onClick={
          editIndex === null ? addItems : () => saveEditedItem(editIndex)
        }
      >
        {editIndex === null ? "Add" : "Save"}
      </button>

      <table>
        <thead>
          <tr>
            <th>Type of Real Estate</th>
            <th>Paid Value</th>
            <th>Sold for <br />
            (not sold? add paid value)
            </th>
            <th>Profit</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.typeOfRealEstate}</td>
              <td>{formatCurrency(item.PaidValue)}</td>
              <td>{formatCurrency(item.Soldfor)}</td>
              <td>{formatCurrency(item.profit)}</td>
              <td>
                {editIndex === index ? (
                  <button
                    className="button-edit-real-estate"
                    onClick={() => saveEditedItem(index)}
                  ></button>
                ) : (
                  <>
                    <button
                      className="button-edit-real-estate"
                      onClick={() => editItem(index)}
                    >
                      <img
                      className="img-edit-button-icon"
                        src="/src/assets/icons/icons8-edit-100.png"
                        alt="delete"
                      />
                    </button>
                    <button
                      className="button-delete-real-estate"
                      onClick={() => deleteItem(index)}
                    >
                      <img
                      className="img-delete-button-icon"
                        src="/src/assets/icons/icons8-delete-100.png"
                        alt="delete"
                      />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>
          Total Profit: <span>{formatCurrency(calculateTotalProfit())}</span>
        </p>
      </div>
    </div>
  );
};

export default RealEstate;
