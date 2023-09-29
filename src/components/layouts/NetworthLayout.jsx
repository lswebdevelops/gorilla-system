import { NavLink, Outlet } from "react-router-dom";

const NetworthLayout = () => {
  return (
    <>     
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"networth/"}>Consolidated</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"networth/diversification"}>Diversification</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"networth/holding"}> Holding </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NetworthLayout;
