import { NavLink, Outlet } from "react-router-dom";

const PersonalFinancesLayout = () => {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/finances/personalfinances/details"}>Income vs Expenditure</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/finances/personalfinances/newdata"}>New Data</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/finances/personalfinances/graphics"}>Graphics</NavLink>      
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/finances/personalfinances/tablepersonalfinances"}>Tables</NavLink>      
      </nav>
      <Outlet />
    </>
  );
};

export default PersonalFinancesLayout;
