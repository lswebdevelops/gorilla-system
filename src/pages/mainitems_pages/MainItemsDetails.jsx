import { Link, useLocation, useParams } from "react-router-dom";
import stocksData from "../../assets/data/StockBondsREITs";
import { useEffect, useState } from "react";

const MainItemsDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const selectedCompany = stocksData.find(
      (item) => item.id === parseInt(id, 10)
    );

    if (selectedCompany) {
      setCompany(selectedCompany);
    }
  }, [id]);
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // search is used to use the bakc button and return to a previous filtered url
   
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  
  return (
    <div>
      <Link 
        to={`..${search}`}
        relative="path"
        className="back-link-main-items"        
        >Back to {type} items</Link>
      {company ? (
        <div className="details-main-items-description-container">
         <div className="main-item-container-details-header">
         <h1>{company.name}</h1>
          {company.price ? (
            <p className="lastprice-mais-item">         
              <span>Price:{formatCurrency(company.price)}</span>
            </p>
          ) : null}

         </div>
       <div className="main-item-container-details">
       
          {company.ticker ? <p>Ticker: {company.ticker}</p> : null}
          
          {company.sector ? <p>Sector: {company.sector}</p> : null}
          {company.description ? (
            <p className="details-main-items-description">
              Description: {company.description}
            </p>
          ) : null}{" "}
          {company.website ? (
            <p>
              Website:{" "}
              <a
                className="details-main-items-website"
                target="blank"
                href={company.website}
              >
                {company.website}
              </a>
            </p>
          ) : null}

       </div>
          
        </div>
      ) : (
        <p>Company not found</p>
      )}
    </div>
  );
};

export default MainItemsDetails;
