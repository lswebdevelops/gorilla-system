import Debt from "./Debt";
import { Chart } from "react-google-charts"; // Import the Chart component from react-google-charts


const DebtGraphics = ({ debtData }) => {
    // Check if there is data to display
    if (debtData.length === 0) {
        return (
            <>
              <h1>Debt Graphics</h1>
              <p>No debt data available for chart.</p>
              <h2>Graphics of debt will be printed here.</h2>
            </>
          );
    }
  
    // Extract the owed amounts and descriptions from debtData for charting
    const chartData = debtData.map((debt) => [
      debt.description, // Use the description as the label
      parseFloat(debt.owed), // Convert owed amount to a number
    ]);
  
    // Define chart options
    const options = {
      title: "Debt Graphics",
      chartArea: { width: "80%", height: "70%" },
      hAxis: { title: "Debt ($)", titleTextStyle: { color: "#333" } }, // Change the x-axis label
      vAxis: { minValue: 0 },
    };
  
    return (
      <>
        <h1>Graphics</h1>
     
        {/* Render the bar chart */}
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="BarChart"
          data={[["Debt Description", "Owed Amount"], ...chartData]} // Update the label for x-axis
          options={options}
        />
      </>
    );
  };
  
  export default DebtGraphics;

  