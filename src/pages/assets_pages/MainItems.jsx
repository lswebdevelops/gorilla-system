import { Link, NavLink, useSearchParams } from "react-router-dom";
import stocksData from "../../assets/data/StockBondsREITs";
import "../../styles/MainItems.css";

const MainItems = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
//   console.log(typeFilter);

  const displayedElements = typeFilter
    ? stocksData.filter(
        (investment) => investment.type.toLocaleLowerCase() === typeFilter
      )
    : stocksData;

  const investmentElements = displayedElements.map((investment, index) => (
    <>
      <tr key={index}>
        <td>{investment.ticker}</td>
        <td>{investment.name}</td>
        <td>{investment.sector}</td>
        <td>{investment.type}</td>
        <td className="td-description">{investment.description}</td>
        <td>
          <Link className="link-main-items" to={`${investment.website}`}>
            {investment.website}
          </Link>
        </td>
      </tr>
    </>
  ));

  return (
    <div className="divTable-main-items-container">
      <h1>
        Here you will find the ten most important (in my opnion) stocks, bonds,
        REATs, etc
      </h1>     
      <NavLink className="link-is-active link-main-items" to={"/assets/mainitems?="}>Clear</NavLink>
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=bonds"}>Bonds</NavLink>
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=reits"}>REITs</NavLink>
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=stocks"}>Stocks</NavLink>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Sector</th>
              <th>Website</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{investmentElements}</tbody>
        </table>
    </div>
  );
};

export default MainItems;
