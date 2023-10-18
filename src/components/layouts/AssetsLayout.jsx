import { NavLink, Outlet } from "react-router-dom";

const assetsLayout = () => {
  return (
    <>
      <nav className="assets-nav-bar">
        {/* <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets"}>Assets</NavLink> */}
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/realestate"}>Real Estate</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/bonds"}>Bonds</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/assetnotes"}>Notes</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/emergencyfund"}>Emergency</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/fixedincome"}>Fixed Income</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/reits"}>REITs</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/stocks"}>Stocks</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/valuereserve"}>Reserve of Value</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets/wheretoinvest"}>Where to Invest</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default assetsLayout;
