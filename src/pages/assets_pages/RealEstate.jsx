import  { useState } from "react";

const RealEstate = () => {
  const [typeOfRealEstate, setTypeOfRealEstate] = useState("Residential Real Estate");
  const [PaidValue, setPaidValue] = useState(0);
  const [Soldfor, setSoldfor] = useState(0);

  const [items, setItems] = useState([]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
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
    setItems([...items, newItem]);

    // Reset the input fields
    setTypeOfRealEstate("Residential Real Estate");
    setPaidValue(0);
    setSoldfor(0);
  };

  // calculate total profit:
  const calculateTotalProfit = () => {
    let totalProfit = 0;
    items.forEach((item) => {
      totalProfit += item.profit;
    });
    return totalProfit;
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
          {/* ...options ... */}
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
      <button onClick={addItems}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Type of Real Estate</th>
            <th>Paid Value</th>
            <th>Sold for</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.typeOfRealEstate}</td>
              <td>{item.PaidValue}</td>
              <td>{item.Soldfor}</td>
              <td>{formatCurrency(item.profit)}</td>
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
