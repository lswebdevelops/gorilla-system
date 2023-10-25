import { Link } from "react-router-dom";
import stocksData from "../../assets/data/Data10Stocks";
import bondsData from "../../assets/data/Data10Bonds";
import reitsData from "../../assets/data/Data10REITs";
import "../../styles/MainItems.css";
const MainItems = () => {
  return (
    <div className="divTable-main-items-container">
      <h1>
        Here you will find the ten most important (in my opnion) stocks, bonds,
        REATs, etc
      </h1>
      <div className="divTable-main-items">{/* start stocks */}
        <h2>Stocks</h2>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Sector</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {stocksData.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.ticker}</td>
                <td>{stock.name}</td>
                <td>{stock.sector}</td>
                <td>
                  <Link className="link-main-items" to={`${stock.website}`}>
                    {stock.website}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
      {/* end stocks */}
      <div className="divTable-main-items">{/* start REITs */}
        <h2>REITs</h2>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Size</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {reitsData.map((reits) => (
              <tr key={reits.id}>
                <td>{reits.ticker}</td>
                <td>{reits.name}</td>
                <td>{reits.size}</td>
                <td>
                  <Link className="link-main-items" to={`${reits.website}`}>
                    {reits.website}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
      {/* end REITs */}
      <div className="divTable-main-items">{/* start bonds */}
        <h2>Bonds</h2>
        <table>
          <thead>
            <tr>
              <th>Issuer</th>
              <th>Name</th>
              <th>Maturity Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {bondsData.map((bonds) => (
              <tr key={bonds.id}>
                <td>{bonds.issuer}</td>
                <td>{bonds.name}</td>
                <td>{bonds.maturityDate}</td>
                <td>{bonds.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> {/* end bonds */}
     
    </div>
  );
};

export default MainItems;
