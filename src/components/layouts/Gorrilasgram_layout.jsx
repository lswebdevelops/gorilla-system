import { NavLink, Outlet } from "react-router-dom";

const GorillasgramLayout = () => {
  return (
    <>
      <nav>
            <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"gorillasgram/"}>Gorrilasgram</NavLink>
            <NavLink  className={({ isActive }) => (isActive ? "link-active" : null)}to={"gorillasgram/creatememes"}>Create Meme</NavLink>
        
        </nav>   
      <Outlet />
    </>
  );
};

export default GorillasgramLayout;
