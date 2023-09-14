import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        
        <header className="header">
        <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/"}>Gorilla System</NavLink> {/* >> home */}
        <nav>
          <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/assets"}>Assets</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/networth"}>Networth</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "link-active" : null)} to={"/finances"}>Finances</NavLink>
        </nav>
      </header>

    )
}

export default Header;
