import React, { useState } from "react";

const Debt = ({ debtData, editDebt, deleteDebt }) => {
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
    const editedDebt = {
      description: document.getElementById(`description_${index}`).value,
      totalAmount: document.getElementById(`totalAmount_${index}`).value,
      paidAmount: document.getElementById(`paidAmount_${index}`).value,
      deadline: document.getElementById(`deadline_${index}`).value,
      owed: document.getElementById(`owed_${index}`).value,
    };

    // Call the editDebt function passed as a prop to update the debt item
    editDebt(editedDebt, index);

    // Clear the edit mode by setting editIndex to null
    setEditIndex(null);
  };

  const handleDeleteClick = (index) => {
    // Call the deleteDebt function passed as a prop to delete the debt item
    deleteDebt(index);
  };
 // Calculate the total debt sum
 const totalDebt = debtData.reduce((sum, debt) => sum + parseFloat(debt.owed), 0);


  return (
    <>
      <h1>My Debt listed here</h1>
      <ul>
        {debtData.map((debt, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                {/* Render input fields for editing */}
                <div>
                  <label htmlFor={`description_${index}`}>
                    Description:
                  </label>
                  <input
                    type="text"
                    id={`description_${index}`}
                    defaultValue={debt.description}
                  />
                </div>
                <div>
                  <label htmlFor={`totalAmount_${index}`}>Total Amount:</label>
                  <input
                    type="number"
                    id={`totalAmount_${index}`}
                    defaultValue={debt.totalAmount}
                  />
                </div>
                <div>
                  <label htmlFor={`paidAmount_${index}`}>Paid Amount:</label>
                  <input
                    type="number"
                    id={`paidAmount_${index}`}
                    defaultValue={debt.paidAmount}
                  />
                </div>
                <div>
                  <label htmlFor={`deadline_${index}`}>Deadline:</label>
                  <input
                    type="date"
                    id={`deadline_${index}`}
                    defaultValue={debt.deadline}
                  />
                </div>
                <div>
                  <label htmlFor={`owed_${index}`}>Amount Still Due:</label>
                  <input
                    type="number"
                    id={`owed_${index}`}
                    defaultValue={debt.owed}
                  />
                </div>
                <button onClick={() => handleSaveClick(index)}>Save</button>
              </>
            ) : (
              <>
              <strong>Description:</strong> {debt.description}
              <br />
              <strong>Total Amount:</strong> {formatCurrency(debt.totalAmount)}
              <br />
              <strong>Paid Amount:</strong> {formatCurrency(debt.paidAmount)}
              <br />
              <strong>Deadline:</strong> {debt.deadline}
              <br />
              <strong>Amount Still Due:</strong> {formatCurrency(debt.owed)}
              <br />
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => handleDeleteClick(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
    
    {/* Display the total debt */}
    <div>
      <strong>Total Debt:</strong> {formatCurrency(totalDebt)}
    </div>
  </>
);
};

export default Debt;