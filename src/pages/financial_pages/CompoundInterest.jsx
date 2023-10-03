import { useState } from "react";
import "../../styles/CompoundInterest.css";
import { Chart } from "react-google-charts";

const CompoundInterest = () => {
    const [principal, setPrincipal] = useState(1000);
    const [monthlyPayment, setMonthlyPayment] = useState(100);
    const [months, setMonths] = useState(12);
    const [rate, setRate] = useState(12);
    const [result, setResult] = useState("");
    const [investedAmount, setInvestedAmount] = useState([]);
    const [interestAmount, setInterestAmount] = useState([]);
    const [chartData, setChartData] = useState([]);
  
    const n = 12;
  
    const calculate = () => {
      const P = parseFloat(principal);
      const r = parseFloat(rate) / 100; // Convert rate to decimal
      const t = parseFloat(months);
      const PMT = parseFloat(monthlyPayment);
  
      // Calculate compound interest
  const compoundInterest =
  P * Math.pow(1 + r / n, n * (t / 12)) +
  PMT * ((Math.pow(1 + r / n, n * (t / 12)) - 1) / (r / n));

// Calculate invested amount
const investedAmountArray = [];
let totalInvestedAmount = P;

for (let month = 1; month <= t; month++) {
  totalInvestedAmount += PMT;
  investedAmountArray.push(totalInvestedAmount);
}

const interestAmountValue = compoundInterest - totalInvestedAmount + P;
setInvestedAmount(totalInvestedAmount);
setInterestAmount(interestAmountValue);

  
      // Format numbers with commas and dots when displaying
      const formattedCompoundInterest = formatNumber(compoundInterest.toFixed(2));
      setResult(formattedCompoundInterest);

   // Prepare the data for the pie chart
   const pieChartData = [
    ["Category", "Amount"],
    ["Invested Amount", investedAmountArray.reduce((acc, value) => acc + value, 0)],
    ["Interest Amount", interestAmountValue],
  ];
      // Update the state with the chart data
        // Update the state with the pie chart data
  setChartData(pieChartData);
    };
  
    // Format number with commas and dots
    const formatNumber = (number) => {
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
    };
  
    
    
    // Format number with commas and dots
  const formatResult = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="container-compound-interest">
      <h1 className="h1-compound-interest">Compound Interest Calculator</h1>
      <label className="label-compound-interest" htmlFor="principal">
        Principal:
        <input
          className="input-compound-interest"
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </label>
      <label className="label-compound-interest" htmlFor="monthlyPayment">
        Monthly Payment:
        <input
          className="input-compound-interest"
          type="number"
          id="monthlyPayment"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(e.target.value)}
        />
      </label>
      <label className="label-compound-interest" htmlFor="months">
        Months:
        <input
          className="input-compound-interest"
          type="number"
          id="months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </label>
      <label className="label-compound-interest" htmlFor="rate">
        Annual Rate (%):
        <input
          className="input-compound-interest"
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </label>
      <div className="container-button-compound-interest">
        <button className="button-compound-interest" onClick={calculate}>
          Calculate
        </button>
      </div>

      <div className="result-container">
  <p>Compound Interest: {formatResult(result)}</p>
  <p>Invested Amount: {formatNumber(investedAmount)}</p>
  <p>Interest Amount: {formatNumber(interestAmount)}</p>
</div>

      <div>
        <h1>Compound Interest Graphic</h1>
        <Chart
  width={"100%"}
  height={"400px"}
  chartType="PieChart" // Use PieChart instead of LineChart
  data={chartData}
  options={{
    title: "Compound Interest",
  }}
/>

      </div>
    </div>
  );
};

export default CompoundInterest;
