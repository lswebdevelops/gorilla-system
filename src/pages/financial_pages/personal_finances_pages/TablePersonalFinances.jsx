
const TablePersonalFinances = ({ personalFinanceData }) => {
    

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        }).format(amount);
      };

  // Calculate the total personal finances sum based on type
  const totalPersonalFinance = personalFinanceData.reduce(
    (sum, personalFinance) =>
      personalFinance.type === "Income"
        ? sum + parseFloat(personalFinance.amount)
        : sum - parseFloat(personalFinance.amount),
    0
  );

    return (
      <div>
        <h1>Personal Finances Spread Sheet</h1>
        <table className="personal-finances-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {personalFinanceData.map((personalFinance, index) => (
              <tr key={index}>
                <td>{personalFinance.type}</td>
                <td>{personalFinance.category}</td>
                <td>{personalFinance.date}</td>
                <td>{personalFinance.description}</td>
                <td>{formatCurrency(personalFinance.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
      </div>
    );
  };
  
  export default TablePersonalFinances;
  