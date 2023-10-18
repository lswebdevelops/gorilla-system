import { NavLink, Outlet } from "react-router-dom";

const FinancesLayout = () => {
  return (
    <>
      <nav>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/debt"}>Debt</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/investments"}>Investments</NavLink>        
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/personalfinances"}>Personal Finances</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default FinancesLayout;
