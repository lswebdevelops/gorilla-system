import { useState, useEffect } from "react";
import "../../styles/Investiments.css";

const Purchases = ( {addToPortfolio} ) => {
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

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
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
        const priceResponse = await fetch(
          `https://api.twelvedata.com/price?symbol=${newSymbol}&apikey=${apiKey}`
        );
        const priceData = await priceResponse.json();

        const newStock = {
          symbol: newSymbol,
          name: data.name || "No Data",
          price: priceData.price || "No Data",
          currency: data.currency || "No Data",
          exchange: data.exchange || "No Data",
          quantity: 1, // Initialize quantity to 1
          subTotal: priceData.price || "No Data", // Initialize subTotal to the price
        };

        setStockDataList([...stockDataList, newStock]);
        tickerInput.value = ""; // Clear the input field
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
                <button
                  className="button-add-to-portfolio"  
                  onClick={()=> {
                    addToPortfolio(stockData)}}                
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Purchases;
