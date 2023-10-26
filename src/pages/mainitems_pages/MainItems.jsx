import { Link, useSearchParams } from "react-router-dom";
import stockData from "../../assets/data/StockBondsREITs";
import "../../styles/MainItems.css";

const MainItems = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  //   console.log(typeFilter);

  const displayedElements = typeFilter
    ? stockData.filter(
        (investment) => investment.type.toLocaleLowerCase() === typeFilter
      )
    : stockData;

  const investmentElements = displayedElements.map((investment, index) => (
    <>
      <tr key={index}>
      <td>
  <Link 
    className="link-main-items" 
    to={`./${investment.id}`}
    //  passing the state with the link
    state={{
      search: `?${searchParams.toString()}`,
      //for the type on the back button text:
      type: typeFilter,
    }}
     >
      {investment.ticker}
  </Link>
</td>


        <td>{investment.name}</td>
        {/* <td>{investment.sector}</td> */}
        <td>{investment.type}</td>
        <td className="td-description">{investment.description}</td>
     
      </tr>
    </>
  ));

  return (
    <div className="divTable-main-items-container">
      <h1 className="h1-main-items">
        Here you will find the ten most important (in my opnion) stock, bond,
        REATs, etc
      </h1>

      <button
        className={`${typeFilter ===  'stock' ? 'stock' :  `buttons-main-items`}`}
        onClick={() => setSearchParams({ type: "stock" })}
      >
        Stocks
      </button>
      <button
                className={`${typeFilter ===  'bond' ? 'bond' :  `buttons-main-items`}`}

        onClick={() => setSearchParams({ type: "bond" })}
      >
        Bonds
      </button>
      <button
               className={`${typeFilter ===  'reit' ? 'reit' :  `buttons-main-items`}`}

        onClick={() => setSearchParams({ type: "reit" })}
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
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=bond"}>Bonds</NavLink>
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=reit"}>REITs</NavLink>
      <NavLink className="link-is-active link-main-items"  to={"/assets/mainitems?type=stock"}>Stocks</NavLink> */}
      <table className="table-main-items">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Name</th>
            {/* <th>Sector</th> */}
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
