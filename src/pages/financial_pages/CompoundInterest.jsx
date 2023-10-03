import { useState } from "react";

const CompoundInterest = () => {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [months, setMonths] = useState("");
    const [result, setResult] = useState("");
  
    const calculateInterest = () => {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100; // Convert rate to decimal
      const n = 12; // Assuming monthly compounding
      const t = parseFloat(months) / 12; // Convert months to years
  
      const compoundInterest = p * Math.pow(1 + r / n, n * t);
      setResult(compoundInterest); 
    };

// Format number with commas and dots
const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

    return (
        <>
          <h1>Compound Interest</h1>
          <label htmlFor="principal">
            Principal:
            <input
              value={principal}
              type="number"
              onChange={(e) => setPrincipal(e.target.value)}
              id="principal"
            />
          </label>
          <label htmlFor="rate">
            Annual Rate (%):
            <input
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              type="number"
              id="rate"
            />
          </label>
          <label htmlFor="months">
            Months:
            <input
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              type="number"
              id="months"
            />
          </label>
          <button onClick={calculateInterest}>Calculate</button>
    
          <div>Compound Interest: ${formatNumber(result.toFixed(2))}</div>
        </>
      );
    };
    
    export default CompoundInterest;