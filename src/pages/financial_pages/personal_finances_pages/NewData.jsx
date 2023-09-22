import "../../../styles/PersonalFinancesPages.css";
import { useState } from "react";

const NewData = ({ addPersonalFinance }) => {
  // 
  // Initialize form state
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // // handle for input changes

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();    
   
  

  // Create a new finance object with form data

  const newPersonalFinance = {
    type,
    category,
    date,
    description,
    amount,
  };

  //call the add finance from props

  addPersonalFinance(newPersonalFinance);

  // Clear the form fields
  setType("Income");
  setCategory("");
  setDate("");
  setDescription(""); 
  setAmount("");
};
  return (
    <>
      <h1>Consolidated Personal Finances </h1>
      <p >Here you can add your income and expenses</p>
      <div className="form-finances-container">
        <form onSubmit={handleSubmit}>
          {/* type  */}
          <div>
            <label htmlFor="type">
              Type:
              <select 
              required
              onChange={handleTypeChange}>
                <option></option>
                <option value="Income">Income</option>
                <option value="Expenditure">Expenditure</option>
              </select>
            </label>
          </div>

          {/* category  */}
          <div>
            <label htmlFor="category">
              Category:
              <input
                type="text"
                id="category"
                value={category}
                required
                onChange={handleCategoryChange}
              />
            </label>
          </div>
          {/* date  */}
          <div>
            <label htmlFor="date">
              Date:
              <input
                type="date"
                id="date"
                value={date}
                required
                onChange={handleDateChange}
              />
            </label>
          </div>

          {/*  description */}
          <div>
            <label htmlFor="description">
              Description:
              <input
                type="text"
                id="description"
                value={description}
                required
                onChange={handleDescriptionChange}
              />
            </label>
          </div>
          {/*  amount */}
          <div>
            <label htmlFor="amount">
              Amount:
              <input
                type="number"
                id="amount"
                value={amount}
                required
                onChange={handleAmountChange}
              />
            </label>
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default NewData;
