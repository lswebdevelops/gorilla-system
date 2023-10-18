import { NavLink, Outlet } from "react-router-dom";

const DebtLayout = () => {
  return (
    <>
      <nav>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"debt/"}>Debt Details</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"debt/addnewdebt"}>New Debt</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"debt/debttable"}>Debt Table</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"debt/graphics"}>Debt Graphic</NavLink>
      </nav>   
      <Outlet />
    </>
  );
};

export default DebtLayout;
