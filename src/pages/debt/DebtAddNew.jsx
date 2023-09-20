import { useState } from "react";

const DebtAddNew = ({ addDebt }) => {
  // Initialize form state
  const [description, setDescription] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [owed, setOwed] = useState("");
 
  // Handle form input changes
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTotalAmountChange = (e) => {
    setTotalAmount(e.target.value);
  };

  const handlePaidAmountChange = (e) => {
    setPaidAmount(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleOwedChange = (e) => {
    setOwed(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new debt object with form data
    const newDebt = {
      description,
      totalAmount,
      paidAmount,
      deadline,
      owed,
    };

    // Call the addDebt function from props to update debt data
    addDebt(newDebt);

    // Clear the form fields
    setDescription("");
    setTotalAmount("");
    setPaidAmount("");
    setDeadline("");
    setOwed("");
  };

  return (
    <>
      <h1>Add new debt</h1>
      <form onSubmit={handleSubmit}>
        {/* Description input */}
        <div>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              id="description"
              placeholder="add description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
        </div>
        
        {/* Total Amount input */}
        <div>
          <label htmlFor="totalAmount">
            Total Amount:
            <input
              type="number"
              id="totalAmount"
              placeholder="add value owed"
              value={totalAmount}
              onChange={handleTotalAmountChange}
            />
          </label>
        </div>
        
        {/* Paid Amount input */}
        <div>
          <label htmlFor="paidAmount">
            Paid Amount:
            <input
              type="number"
              id="paidAmount"
              placeholder="quantity paid so far"
              value={paidAmount}
              onChange={handlePaidAmountChange}
            />
          </label>
        </div>

        {/* Deadline input */}
        <div>
          <label htmlFor="deadline">
            Goal payment date:
            <input
              type="date"
              id="deadline"
              value={deadline}
              onChange={handleDeadlineChange}
            />
          </label>
        </div>

        {/* Amount Still Due input */}
        <div>
          <label htmlFor="owed">
            Amount still due
            <input
              type="number"
              id="owed"
              value={owed}
              onChange={handleOwedChange}
            />
          </label>
        </div>
        
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default DebtAddNew;
