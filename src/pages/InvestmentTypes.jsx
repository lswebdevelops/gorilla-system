import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InvestmentTypes = () => {
  const params = useParams();
  const [investmentType, setInvestmentType] = useState(null);

  useEffect(() => {
  fetch("src/pages/investments.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const investment = data.investments.find(
        (item) => item.id === parseInt(params.id)
      );
      setInvestmentType(investment);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      // Handle the error gracefully, e.g., display a message to the user
    });
}, [params.id]);

  
  return (
    <div>
      <h1>Investment Types</h1>
      {investmentType && (
        <div>
          <h2>{investmentType.type}</h2>
          <div className="investment-types-div-img">
            <img
              src={`${investmentType.image_link}`}
              alt={investmentType.type}
            />
            <p>{investmentType.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentTypes;
