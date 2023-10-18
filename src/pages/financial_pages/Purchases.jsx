import { useState, useEffect } from "react";
import "../../styles/Investiments.css";
import { Link } from "react-router-dom";

const Purchases = ({ addToPortfolio }) => {
  const apiKey = "21f8243f104a435c88432ff1ab7a7650";
  const endpoint = "https://api.twelvedata.com/quote";

  const [symbol, setSymbol] = useState("AAPL"); // Initialize with AAPL or any default value
  const [stockDataList, setStockDataList] = useState([]);
  const [newStockData, setNewStockData] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (newStockData) {
      setStockDataList([...stockDataList, newStockData]);
      setNewStockData(null);
      setPrice(newStockData.price);
    }
  }, [newStockData, stockDataList]);

  // Function to fetch stock data by symbol
  async function fetchStockData(symbol) {
    try {
      const response = await fetch(
        `${endpoint}?symbol=${symbol}&apikey=${apiKey}`
      );
      const data = await response.json();

      if (data && data.price !== "No Data") {
        return data;
      } else {
        alert("Company not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data");
      return null;
    }
  }

  // Function to handle adding a new stock to the table
  const handleSeach = async () => {
    const tickerInput = document.getElementById("tickerInput");
    const newSymbol = tickerInput.value.toUpperCase(); // Ensure uppercase symbol

    if (newSymbol) {
      const data = await fetchStockData(newSymbol);
      if (data) {
        if (data.price !== "No Data") {
          const priceResponse = await fetch(
            `https://api.twelvedata.com/price?symbol=${newSymbol}&apikey=${apiKey}`
          );
          const priceData = await priceResponse.json();

          if (priceData.price) {
            const newStock = {
              symbol: newSymbol,
              name: data.name,
              price: priceData.price,
              currency: data.currency,
              exchange: data.exchange,
              quantity: 1, // Initialize quantity to 1
              type: "stock",
              subTotal: priceData.price, // Initialize subTotal to the price
            };

            setStockDataList([...stockDataList, newStock]);
            tickerInput.value = ""; // Clear the input field
          } else {
            alert("Company not found");
          }
        } else {
          alert("Company not found");
        }
      }
    }
  };

  return (
    <div className="investments-container">
      <h1>Purchases</h1>
      <form className="form-investiments">
        <label htmlFor="tickerInput">Enter Ticker: </label>
        <input
          type="text"
          id="tickerInput"
          defaultValue={symbol}
          placeholder="e.g., AAPL"
        />
        <button
          className="button-add-investiment"
          type="button"
          onClick={handleSeach}
        >
          Add
        </button>
      </form>
      <table id="stock-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Currency</th>
            <th>Type</th>
            <th>Exchange</th>
            <th>Adjust Quantity</th>
            <th>Sub Total</th>
            <th>Add to Portfolio</th>
          </tr>
        </thead>
        <tbody>
          {stockDataList.map((stockData, index) => (
            <tr key={index}>
              <td>{stockData.symbol}</td>
              <td>{stockData.name}</td>
              <td>{stockData.price}</td>
              <td>{stockData.currency}</td>
              <td>
                <select
                  name={`type-${index}`} // Use a unique name for each select element
                  id={`type-${index}`} // Use a unique id for each select element
                  value={stockData.type} // Set the value to stockData.type
                  onChange={(e) => {
                    const newType = e.target.value;
                    const updatedStockDataList = [...stockDataList];
                    updatedStockDataList[index] = {
                      ...stockData,
                      type: newType,
                    };
                    setStockDataList(updatedStockDataList);
                  }}
                >
                  <option value="stock">Stock</option>
                  <option value="bond">Bond</option>
                  <option value="reit">REITs</option>
                </select>
              </td>
              <td>{stockData.exchange}</td>
              <td>
                <input
                  value={stockData.quantity}
                  onChange={(e) => {
                    const newQuantity = parseFloat(e.target.value) || 0;
                    const newSubTotal =
                      newQuantity * parseFloat(stockData.price);
                    const updatedStockDataList = [...stockDataList];
                    updatedStockDataList[index] = {
                      ...stockData,
                      quantity: newQuantity,
                      subTotal: newSubTotal.toFixed(2),
                    };
                    setStockDataList(updatedStockDataList);
                  }}
                  className="input-quantity-investments"
                  type="number"
                />
              </td>
              <td>{stockData.subTotal}</td>
              <td>
                <Link
                  id="link-portfolio"
                  to={`/finances/investments/investments/portfolio`}
                >
                  <button
                    className="button-add-to-portfolio"
                    onClick={() => {
                      addToPortfolio(stockData);
                    }}
                  >
                    +
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Purchases;
