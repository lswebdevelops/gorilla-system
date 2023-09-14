import { NavLink, Outlet } from "react-router-dom";

const PersonalFinancesLayout = () => {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/finances/personalfinances/details"}>Details</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/finances/personalfinances/personalfinancesconsolidated"}>Consolidated</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/finances/personalfinances/graphics"}>Graphics</NavLink>      
      </nav>
      <Outlet />
    </>
  );
};

export default PersonalFinancesLayout;
