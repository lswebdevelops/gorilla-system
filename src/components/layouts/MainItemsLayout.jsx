import { NavLink, Outlet } from "react-router-dom";

const MainItemsLayout = () => {
  return (
    <>
      <nav>
        <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"mainitems/"}>Main Items</NavLink>
        {/* <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"mainitems/details"}>Company Details </NavLink>        */}
      </nav>   
      <Outlet />
    </>
  );
};

export default MainItemsLayout;
