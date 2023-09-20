import { NavLink, Outlet } from "react-router-dom";

const DebtLayout = () => {
  return (
    <>
      <nav>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/debt/"}>Debt Details</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/debt/addnewdebt"}>Add new debt</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"finances/debt/graphics"}>Graphics</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default DebtLayout;
