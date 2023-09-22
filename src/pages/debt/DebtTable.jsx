const DebtTable = ({ debtData }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

   // Calculate the total debt sum
   const totalDebt = debtData.reduce(
    (sum, debt) => sum + parseFloat(debt.owed),
    0
  );

  return (
    <div>
    <h1>Personal Finances Spreadsheet</h1>
    <table className="personal-finances-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Total Amount</th>
          <th>Paid Amount</th>
          <th>Deadline</th>
          <th>Amount Owed</th>
        </tr>
      </thead>
      <tbody>
        {debtData.map((debt, index) => (
          <tr key={index}>
            <td>{debt.description}</td>
            <td>{formatCurrency(debt.totalAmount)}</td>
            <td>{formatCurrency(debt.paidAmount)}</td>
            <td>{debt.deadline}</td>
            <td>{formatCurrency(debt.owed)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* display the personal finance total amount */}
  <div className="total-amount">
    <strong>Owed Amount:&nbsp;</strong>
    <span
      className="total-debt"
    >
      {formatCurrency(totalDebt)}
    </span>
  </div>
  </div>

  )
};

export default DebtTable;
