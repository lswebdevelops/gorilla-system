import { Chart } from "react-google-charts";

const Graphics = ( {personalFinanceData} ) => {

  // Check if there is any data to display
  if (personalFinanceData.length === 0) {
    return (
      <>
        <h1>Personal Finances Graphic</h1>
        <p>No data available for chart.</p>
        <h2>Graphics of personal finances will be printed here.</h2>
      </>
    );
  }

  // Extract the amount and descriptions from personalFinanceData for charting
  const chartData = personalFinanceData.map((personalFinance) => [
    personalFinance.category,
    personalFinance.type === "Expenditure"
      ? -parseFloat(personalFinance.amount)
      : parseFloat(personalFinance.amount),
    personalFinance.type === "Expenditure"
      ? "#f1cbcf" // Red for Expenditure
      : "#b8f3c7" // Green for Income
  ]);

  // Define chart options
  const options = {
    title: "My Finances",
    chartArea: { width: "80%", height: "70%"},
    hAxis: { title: "Amount ($)", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    series: {
      0: { color: "" }, // Set a default color for the bars
    },
  };

  return (
    <>
     
      {/* Render the bar chart */}
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="ColumnChart"
        data={[["Finances Description", "", { role: "style" }], ...chartData]}
        options={options}
      />
    </>
  );
};

export default Graphics;
