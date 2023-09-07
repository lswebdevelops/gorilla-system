import { Link, Outlet } from "react-router-dom";

const NetworthLayout = () => {
  return (
    <>     
      <nav>
        <Link to={"networth/consolidated"}>Consolidated</Link>
        <Link to={"networth/diversification"}>Diversification</Link>
        <Link to={"networth/holding"}>Holding</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default NetworthLayout;
