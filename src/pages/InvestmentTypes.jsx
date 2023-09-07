import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InvestmentTypes = () => {
  const params = useParams();
  const [investmentType, setInvestmentType] = useState(null);

  useEffect(() => {
    fetch(`/src/assets/data/investments.json`)
      .then((res) => res.json())
      .then((data) => {
        const investment = data.investments.find(
          (item) => item.id === parseInt(params.id)
        );
        setInvestmentType(investment);
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
              src={`/src/${investmentType.image_link}`}
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
