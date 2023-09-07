import { Link } from "react-router-dom";

const Header = () => {
    return(
        
        <header>
        <Link to={"/"}>Gorilla System</Link> {/* >> home */}
        <nav>
          <Link to={"/networth"}>Networth</Link>
          <Link to={"/assets"}>Assets</Link>
          <Link to={"/finances"}>Finances</Link>
        </nav>
      </header>

    )
}

export default Header;
