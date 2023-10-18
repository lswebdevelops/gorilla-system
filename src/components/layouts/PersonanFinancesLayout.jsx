import { NavLink, Outlet } from "react-router-dom";

const PersonalFinancesLayout = () => {
  return (
    <>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"personalfinances/newdata"}>New Data</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"personalfinances/incomevsexpenditure"}>Income vs Expenditure</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"personalfinances/tablepersonalfinances"}>Tables</NavLink>      
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"personalfinances/graphics"}>Graphics</NavLink>      
      </nav>
      <Outlet />
    </>
  );
};

export default PersonalFinancesLayout;
