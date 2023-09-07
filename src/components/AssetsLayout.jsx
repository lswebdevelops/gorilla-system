import { Link, Outlet } from "react-router-dom";

const assetsLayout = () => {
  return (
    <>
      <nav>
        <Link to={"/assets"}>Assets</Link>
        <Link to={"/assets/bonds"}>Bonds</Link>
        <Link to={"/assets/assetnotes"}>Notes</Link>
        <Link to={"/assets/emergencyfund"}>Emergency</Link>
        <Link to={"/assets/fixedincome"}>Fixed Income</Link>
        <Link to={"/assets/realestate"}>Real Estate</Link>
        <Link to={"/assets/reits"}>REITs</Link>
        <Link to={"/assets/stocks"}>Stocks</Link>
        <Link to={"/assets/valuereserve"}>Reserve of Value</Link>
        <Link to={"/assets/wheretoinvest"}>Where to Invest</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default assetsLayout;
