import { useState } from "react";

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState(1000);
  const [monthlyPayment, setMonthlyPayment] = useState(100);
  const [months, setMonths] = useState(12);
  const [rate, setRate] = useState(12);
  const [result, setResult] = useState("");
  const [investedAmount, setInvestedAmount] = useState("");
  const [interestAmount, setInterestAmount] = useState("");

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

    setResult(compoundInterest);

    // Calculate invested amount
    const investedAmount = P + t * PMT;
    setInvestedAmount(investedAmount);

    // Calculate interest amount
    const interestAmount = compoundInterest - investedAmount;
    setInterestAmount(interestAmount);

    // Format numbers with commas and dots when displaying
    const formattedCompoundInterest = formatNumber(compoundInterest.toFixed(2));
    setResult(formattedCompoundInterest);
  };

// Format number with commas and dots
const formatNumber = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };
  // Format result with commas and dots
const formatResult = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return (
    <>
      <h1>Compound Interest Calculator</h1>
      <label htmlFor="principal">
        Principal:
        <input
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </label>
      <label htmlFor="monthlyPayment">
        Monthly Payment:
        <input
          type="number"
          id="monthlyPayment"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(e.target.value)}
        />
      </label>
      <label htmlFor="months">
        Months:
        <input
          type="number"
          id="months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </label>
      <label htmlFor="rate">
        Annual Rate (%):
        <input
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </label>
      <button onClick={calculate}>Calculate</button>

      <div>
        <p>Compound Interest: $ {formatResult(result)}</p>
        <p>Invested Amount: $ {formatNumber(investedAmount)}</p>
        <p>Interest Amount: $ {formatNumber(interestAmount)}</p>
      </div>
    </>
  );
};

export default CompoundInterest;
