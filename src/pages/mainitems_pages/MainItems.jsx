import { Link, useSearchParams } from "react-router-dom";
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
        {/* <td>{investment.sector}</td> */}
        <td>{investment.type}</td>
        <td className="td-description">{investment.description}</td>
        <td>
          <Link className="link-main-items website-main-items" to={`${investment.website}`}>
            {investment.website}
          </Link>
        </td>
      </tr>
    </>
  ));

  return (
    <div className="divTable-main-items-container">
      <h1 className="h1-main-items">
        Here you will find the ten most important (in my opnion) stocks, bonds,
        REATs, etc
      </h1>

      <button
        className={`${typeFilter ===  'stocks' ? 'stocks' :  `buttons-main-items`}`}
        onClick={() => setSearchParams({ type: "stocks" })}
      >
        Stocks
      </button>
      <button
                className={`${typeFilter ===  'bonds' ? 'bonds' :  `buttons-main-items`}`}

        onClick={() => setSearchParams({ type: "bonds" })}
      >
        Bonds
      </button>
      <button
               className={`${typeFilter ===  'reits' ? 'reits' :  `buttons-main-items`}`}

        onClick={() => setSearchParams({ type: "reits" })}
      >
        REITs
      </button>
      {typeFilter ? (
        <button
          className="buttons-main-items"
          onClick={() => setSearchParams({})}
        >
          Clear
        </button>
      ) : null}

      {/* <NavLink className="link-is-active link-main-items" to={"/assets/mainitems?="}>Clear Filters</NavLink>
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=bonds"}>Bonds</NavLink>
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=reits"}>REITs</NavLink>
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=stocks"}>Stocks</NavLink> */}
      <table className="table-main-items">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Name</th>
            {/* <th>Sector</th> */}
            <th>Type</th>
            <th>Description</th>
            <th className="website-main-items">Website</th>
          </tr>
        </thead>
        <tbody>{investmentElements}</tbody>
      </table>
    </div>
  );
};

export default MainItems;
