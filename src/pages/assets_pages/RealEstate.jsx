import { useEffect, useState } from "react";
import "../../styles/RealEstate.css";

const RealEstate = () => {
  const [typeOfRealEstate, setTypeOfRealEstate] = useState(
    "Residential Real Estate"
  );
  const [PaidValue, setPaidValue] = useState(0);
  const [Soldfor, setSoldfor] = useState(0);
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState("none");

  const handleOptionSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  // Render the explanation based on the selected option
  const renderExplanation = () => {
    switch (selectedOption) {
      case "residential":
        return (
          <p className="explanation" id="residentialExplain">
            Properties used for personal living, such as single-family homes, townhouses, condominiums, and apartments.
          </p>
        );
      case "commercial":
        return (
          <p className="explanation" id="commercialExplain">
            Properties used for business purposes, including office buildings, retail spaces, shopping malls, and warehouses.
          </p>
        );
      case "industrial":
        return (
          <p className="explanation" id="industrialExplain">
            Properties designed for manufacturing, distribution, and storage, such as factories, warehouses, and industrial parks.
          </p>
        );
      case "rawLand":
        return (
          <p className="explanation" id="rawLandExplain">
            Undeveloped or vacant land that has not been built upon or improved.
          </p>
        );
      case "commercialLand":
        return (
          <p className="explanation" id="commercialLandExplain">
            Land specifically zoned for commercial use, typically used for retail, office, or industrial developments.
          </p>
        );
      case "reits":
        return (
          <p className="explanation" id="reitsExplain">
            Investment vehicles that allow individuals to invest in a portfolio of income-producing real estate assets, such as commercial properties and apartment complexes.
          </p>
        );
      case "hotels":
        return (
          <p className="explanation" id="hotelsExplain">
            Properties designed to provide accommodations to travelers, including hotels, motels, and resorts.
          </p>
        );
      case "crowdfunding":
        return (
          <p className="explanation" id="crowdfundingExplain">
            Online platforms that allow multiple investors to pool their resources to invest in real estate projects.
          </p>
        );
      case "flipping":
        return (
          <p className="explanation" id="flippingExplain">
            Buying properties with the intention of renovating or improving them and then selling them for a profit.
          </p>
        );
      case "mixedUse":
        return (
          <p className="explanation" id="mixedUseExplain">
            Properties that combine two or more types of real estate, such as a building with both commercial and residential units.
          </p>
        );
      case "multifamily":
        return (
          <p className="explanation" id="multifamilyExplain">
            Properties that contain multiple residential units, such as apartment buildings and duplexes.
          </p>
        );
      case "countryEstates":
        return (
          <p className="explanation" id="countryEstatesExplain">
            Large, rural properties often used for recreational purposes or as primary residences in rural areas.
          </p>
        );
      case "manufacturedHousing":
        return (
          <p className="explanation" id="manufacturedHousingExplain">
            Homes that are factory-built and transported to a specific location, often in mobile home parks.
          </p>
        );
      case "rentalProperties":
        return (
          <p className="explanation" id="rentalPropertiesExplain">
            Properties owned and leased to tenants for residential or commercial use.
          </p>
        );
      case "retailRealEstate":
        return (
          <p className="explanation" id="retailRealEstateExplain">
            Properties designed for retail businesses, including standalone stores, shopping centers, and malls.
          </p>
        );
      case "specialPurpose":
        return (
          <p className="explanation" id="specialPurposeExplain">
            Properties designed for specific, non-standard purposes, such as churches, schools, and theaters.
          </p>
        );
      case "apartmentBuildings":
        return (
          <p className="explanation" id="apartmentBuildingsExplain">
            Multi-unit residential buildings with multiple apartments or units for rent.
          </p>
        );
      case "vegetableFarmland":
        return (
          <p className="explanation" id="vegetableFarmlandExplain">
            Agricultural land used for growing crops or vegetables.
          </p>
        );
      default:
        return null;
    }
  };
  // Load items from local storage when the component mounts
  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("realEstateItems")) || [];
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
    <div className="realestate-container-upper-div">
      <h1>Real Estate</h1>
      <h2>Types of Real Estate</h2>
      <div className="realestate-container">
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
            <option>Flipping</option>
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
          className="button-save-add-real-estate"
          onClick={
            editIndex === null ? addItems : () => saveEditedItem(editIndex)
          }
        >
          {editIndex === null ? "Add" : "Save"}
        </button>

       
        <div className="divTable">

      
<table className="table">
   <thead>
     <tr>
       <th>Type of Real Estate</th>
       <th>Paid Value</th>
       <th>
         Sold for <br />
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
                   src="https://raw.githubusercontent.com/lswebdevelops/gorilla-system/main/src/assets/icons/icons8-edit-100.png"
                   alt="edit"
                 />
               </button>
               <button
                 className="button-delete-real-estate"
                 onClick={() => deleteItem(index)}
               >
                 <img
                   className="img-delete-button-icon"
                   src="https://raw.githubusercontent.com/lswebdevelops/gorilla-system/main/src/assets/icons/icons8-delete-100.png"
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

 </div>

     
        <div>
          <p>
            Total Profit: 
            <span 
                className={calculateTotalProfit() > 0 ? 'positive-amount': 'negative-amount'}>
                    {formatCurrency(calculateTotalProfit())}
            </span>
          
          </p>
        </div>
      </div>
      <h3 className="list-real-estate-ul-h3">
        Here is an explanation of the various types of real estate
      </h3>  
      <select
        id="realEstateSelect"
        className="explanation-select"
        value={selectedOption}
        onChange={handleOptionSelect}
      >
        <option value="none">Select an option</option>
        <option value="residential">Residential Real Estate</option>
        <option value="commercial">Commercial Real Estate</option>
        <option value="industrial">Industrial Real Estate</option>
        <option value="rawLand">Raw Land</option>
        <option value="commercialLand">Commercial Land</option>
        <option value="reits">Real Estate Investment Trusts (REITs)</option>
        <option value="hotels">Hotels</option>
        <option value="crowdfunding">Crowdfunding Platforms</option>
        <option value="flipping">Flipping</option>
        <option value="mixedUse">Mixed Use</option>
        <option value="multifamily">Multifamily Real Estate</option>
        <option value="countryEstates">Country Estates</option>
        <option value="manufacturedHousing">Manufactured Housing</option>
        <option value="rentalProperties">Rental Properties</option>
        <option value="retailRealEstate">Retail Real Estate</option>
        <option value="specialPurpose">Special Purpose Real Estate</option>
        <option value="apartmentBuildings">Apartment Buildings</option>
        <option value="vegetableFarmland">Vegetable Farmland</option>
      </select>
      {renderExplanation()}
    </div>
  );
};

export default RealEstate;
