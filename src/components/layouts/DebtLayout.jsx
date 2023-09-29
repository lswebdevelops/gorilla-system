import { NavLink, Outlet } from "react-router-dom";

const DebtLayout = () => {
  return (
    <>
      <nav>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/debt/"}>Debt Details</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/debt/addnewdebt"}>New Debt</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/debt/debttable"}>Debt Table</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/debt/graphics"}>Debt Graphic</NavLink>
      </nav>   
      <Outlet />
    </>
  );
};

export default DebtLayout;
