import { useEffect, useState } from "react";
import "../../styles/CompoundInterest.css";

const WantToRetire = () => {
  const [ageNow, setAgeNow] = useState(35);
  const [ageToRetire, setAgeToRetire] = useState(65);
  const [monthlyExpenses, setMonthlyExpenses] = useState();
  const [rate, setRate] = useState(10.32); // Annual interest rate by S&P 500
  const [inflation, setInflation] = useState(2.65); // last 10 years average inflation rate
  const [totalYearsOfSaving, setTotalYearsOfSaving] = useState(0); // Initialize as 0
  const [monthlyExpenseByRetirement, setMonthlyExpenseByRetirement] =
    useState(NaN); // Initialize as NaN

  const [food, setfood] = useState(400);
  const [transportation, settransportation] = useState(250);
  const [healthCare, sethealthCare] = useState(650);
  const [housing, sethousing] = useState(1500);
  const [education, seteducation] = useState(200);
  const [taxes, settaxes] = useState(100);
  const [others, setothers] = useState(400);

  // Update totalYearsOfSaving based on ageNow and ageToRetire
  useEffect(() => {
    if (ageNow && ageToRetire) {
      const yearsOfSaving = ageToRetire - ageNow;
      setTotalYearsOfSaving(yearsOfSaving);
    }
  }, [ageNow, ageToRetire]);

  const handleCalculate = () => {
    const totalExpenses =
      parseFloat(food) +
      parseFloat(transportation) +
      parseFloat(healthCare) +
      parseFloat(housing) +
      parseFloat(education) +
      parseFloat(taxes) +
      parseFloat(others);

    setMonthlyExpenses(totalExpenses);
// https://www.wikihow.com/Calculate-Compound-Interest

    if (!isNaN(totalYearsOfSaving)) {
      const PMT = totalExpenses; // principal
      const i = parseFloat(inflation / 100); // inflation
      const c = 12; // constant (12 months in a year for compound interest)
      const r = 0; // monthly addition
      const n = totalYearsOfSaving; // years of compound interest
      const FV =
        PMT * (1 + i / c) ** (n * c) +
        (r * ((1 + i / c) ** (n * c) - 1)) / (i / c);
      setMonthlyExpenseByRetirement(FV);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };
 

  //P = FV / (1 + i/c)^(n*c)

// "FV" is the future value. This is the result of the calculation.
// "P" monthly adition to be calculated
// "i" represents the annual interest rate.
// "c" represents the compounding frequency (how many times the interest compounds each year).
// "n" represents the number of years being measured.

let FV = monthlyExpenseByRetirement
const i = rate /100
const c = 12
const n = totalYearsOfSaving
let P = FV / (1 + i/c)**(n*c)
 const calculateTotalSHoulInvest = () => {
    const PMT = 0; // principal
      const i = parseFloat(rate / 100); // inflation
      const c = 12; // constant (12 months in a year for compound interest)
      const r = P; // monthly addition
      const n = totalYearsOfSaving; // years of compound interest
      const FV =
        PMT * (1 + i / c) ** (n * c) +
        (r * ((1 + i / c) ** (n * c) - 1)) / (i / c);
 return FV
 }


  return (
    <div className="container-wanttoretire">
      <h1>How much do I need to save for retirement</h1>
      <h2>First let&apos;s find out your monthly expenses:</h2>
      <div>
        <label htmlFor="food">
          food:
          <input
            type="number"
            id="food"
            value={food}
            onChange={(e) => setfood(e.target.value)}
          />
        </label>
        <label htmlFor="transportation">
          transportation:
          <input
            type="number"
            id="transportation"
            value={transportation}
            onChange={(e) => settransportation(e.target.value)}
          />
        </label>
        <label htmlFor="healthCare">
          healthCare:
          <input
            type="number"
            id="healthCare"
            value={healthCare}
            onChange={(e) => sethealthCare(e.target.value)}
          />
        </label>
        <label htmlFor="housing">
          housing:
          <input
            type="number"
            id="housing"
            value={housing}
            onChange={(e) => sethousing(e.target.value)}
          />
        </label>
        <label htmlFor="education">
          education:
          <input
            type="number"
            id="education"
            value={education}
            onChange={(e) => seteducation(e.target.value)}
          />
        </label>
        <label htmlFor="taxes">
          taxes:
          <input
            type="number"
            id="taxes"
            value={taxes}
            onChange={(e) => settaxes(e.target.value)}
          />
        </label>
        <label htmlFor="others">
          others:
          <input
            type="number"
            id="others"
            value={others}
            onChange={(e) => setothers(e.target.value)}
          />
        </label>
      </div>
      <p>
        Your monthly expenses totay:
        <span>{formatCurrency(monthlyExpenses)}</span>
      </p>

      <div>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            id="age"
            value={ageNow}
            onChange={(e) => setAgeNow(e.target.value)}
          />
        </label>
        <label htmlFor="age-to-retire">
          Age to retire:
          <input
            type="number"
            id="age-to-retire"
            value={ageToRetire}
            onChange={(e) => setAgeToRetire(e.target.value)}
          />
        </label>
        <label htmlFor="inflation-last-ten-years">
        USA average inflation in the last ten years:
          <input
            type="number"
            id="inflation-last-ten-years"
            value={inflation}
            onChange={(e) => setInflation(e.target.value)}
          />
        </label>
        {/* <p>Total years of saving: {totalYearsOfSaving}</p> */}
      </div>

      <button className="button-monthly-expenses-retirement" onClick={handleCalculate}>Calculate monthly expenses in {totalYearsOfSaving} years </button>
      <p>
        Your monthly expenses by retirement:
        <span> {isNaN(monthlyExpenseByRetirement) ? "NaN" : formatCurrency(monthlyExpenseByRetirement)}</span>
      </p>
<hr />
    <p>How much will you need in {totalYearsOfSaving} years to retire having a monthly cost of {formatCurrency(monthlyExpenseByRetirement)}?</p>
    <label htmlFor="SandP500-last-ten-years">
        S&P 500 gains in the last ten years(%):
          <input
            type="number"
            id="SandP500-last-ten-years"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>
        <p>Monthly investment necessary to retire: {formatCurrency(P)}</p>
        <p>Total amount necessary to retire in {totalYearsOfSaving} years: {formatCurrency(calculateTotalSHoulInvest())}</p>
     <p>So to continue having the same life style as you are having today, you will needd a minimal monthly investment of {formatCurrency(P)}. </p>
     <strong>Remember, &rdquo;minimal&rdquo;</strong>
    </div>
  );
};

export default WantToRetire;
