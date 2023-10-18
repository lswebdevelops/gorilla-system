import { useState } from "react";

import "../../../styles/PersonalFinancesPages.css";

const IncomevsExpenditure = ({
  personalFinanceData,
  editPersonalFinance,
  deletePersonalFinance,
}) => {
  const [editIndex, setEditIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const handleSaveClick = (index) => {
    // Capture the edited values from the input fields
    const editedPersonalFinance = {
      type: document.getElementById(`type_${index}`).value,
      category: document.getElementById(`category_${index}`).value,
      date: document.getElementById(`date_${index}`).value,
      description: document.getElementById(`description_${index}`).value,
      amount: document.getElementById(`amount_${index}`).value,
    };

    // Call the editPersonalFinance function passed as a prop to update the finance item
    editPersonalFinance(editedPersonalFinance, index);

    // Clear the edit mode by setting editIndex to null
    setEditIndex(null);
  };

  const handleDeleteClick = (index) => {
    // Call the deleteFinance function passed as a prop to delete the finance item
    deletePersonalFinance(index);
  };

  // Calculate the total personal finances sum based on type
  const totalPersonalFinance = personalFinanceData.reduce(
    (sum, personalFinance) =>
      personalFinance.type === "Income"
        ? sum + parseFloat(personalFinance.amount)
        : sum - parseFloat(personalFinance.amount),
    0
  );

  const displayItems = 
  personalFinanceData.map((personalFinance, index) => (
    <li key={index}>
      {editIndex === index ? (
        <div className="container-edit-personal-finances">
          <div >
            {/* type */}
            <div className="div-container-edit-personal-finances">
              <label htmlFor={`type_${index}`}>Type</label>
              <select
                id={`type_${index}`}
                defaultValue={personalFinance.type}
              >
                <option value="Income">Income</option>
                <option value="Expenditure">Expenditure</option>
              </select>
            </div>
            {/* category */}
            <div className="div-container-edit-personal-finances">

              <label htmlFor={`category_${index}`}>category:</label>
              <input
                type="text"
                id={`category_${index}`}
                defaultValue={personalFinance.category}
              />
            </div>
            {/* date */}
            <div className="div-container-edit-personal-finances">

              <label htmlFor={`date_${index}`}>Date:</label>
              <input
                type="date"
                id={`date_${index}`}
                defaultValue={personalFinance.date}
              />
            </div>
            {/* description */}
            <div className="div-container-edit-personal-finances">

              <label htmlFor={`description_${index}`}>Description:</label>
              <input
                type="text"
                id={`description_${index}`}
                defaultValue={personalFinance.description}
              />
            </div>
            {/* amount */}
            <div className="div-container-edit-personal-finances">

              <label htmlFor={`amount_${index}`}>Amount:</label>
              <input
                type="number"
                id={`amount_${index}`}
                defaultValue={personalFinance.amount}
              />
            </div>

            <button onClick={() => handleSaveClick(index)}>Save</button>
          </div>
        </div>
      ) : (
        <>
          <div className={personalFinance.type === "Expenditure" ? "expenditure div-container-show-finances" : "income div-container-show-finances"} >
            <strong>Type:</strong> {personalFinance.type}
            <br />
            <>
              <strong>Category:</strong>
            </>{" "}
            {personalFinance.category}
            <br />
            <strong>date:</strong> {personalFinance.date}
            <br />
            <strong>Description:</strong> {personalFinance.description}
            <br />
            <strong>Amount:</strong>{" "}
            {formatCurrency(personalFinance.amount)}
            <hr />
            <div className="buttons-edit-save">
            <button onClick={() => handleEditClick(index)}>Edit</button>
            <button onClick={() => handleDeleteClick(index)}>
              Delete
            </button>
            </div>
          </div>
        </>
      )}
    </li>
  ))
  return (
    <div>
    <h1>Income vs Expenditure</h1>
      {/* display the personal finance total amount */}
      <div className="total-amount">
        <strong>Balance:</strong>
        <span
          className={
            totalPersonalFinance < 0 ? "negative-amount" : "positive-amount"
          }
        >
          {formatCurrency(totalPersonalFinance)}
        </span>
      </div>

<div className="div-container-income-expenditure">
      <ul className="ul-container-income-expenditure">
        {/*  test here */}
        {displayItems}
      </ul>

     </div>
    
    </div>
  );
};

export default IncomevsExpenditure;
