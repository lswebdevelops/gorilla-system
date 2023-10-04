import { useState } from "react";
import "../../styles/CompoundInterest.css";
import { Chart } from "react-google-charts";

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState(10000);
  const [monthlyPayment, setMonthlyPayment] = useState(1000);
  const [months, setMonths] = useState(360);
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
      ["Invested Amount", totalInvestedAmount], // Use the correct invested amount here
      ["Interest Amount", interestAmountValue], // Use the correct interest amount here
    ];

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
        Monthly Investment:
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
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="PieChart"
          data={chartData}
          options={{
            title: "Compound Interest",
            // change pie's  background color
            // slices: {
            //   0: { color: "orange" },
            //   1: { color: "green" }, 
            // },
          }}
        />
      </div>
    </div>
  );
};

export default CompoundInterest;
