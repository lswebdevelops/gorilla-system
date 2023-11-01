import { NavLink, Outlet } from "react-router-dom";

const InvestmentsLayout = () => {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)}   to={"investments/purchases"}> Purchases </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"investments/portfolio"}  > Portfolio </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"investments/compoundinterest"}  > Compound Interest </NavLink>     
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"investments/wanttoretire"}  > Want to Retire?</NavLink>     
      </nav>
      <Outlet />
    </>
  );
};

export default InvestmentsLayout;
