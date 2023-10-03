import { NavLink, Outlet } from "react-router-dom";

const InvestmentsLayout = () => {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)}   to={"finances/investments/purchases"}> Purchases </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"finances/investments/portfolio"}  > Portfolio </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"finances/investments/compoundinterest"}  > Compound Interest </NavLink>     
      </nav>
      <Outlet />
    </>
  );
};

export default InvestmentsLayout;
