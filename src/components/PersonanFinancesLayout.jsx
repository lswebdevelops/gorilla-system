import { Link, Outlet } from "react-router-dom";

Link;
const PersonalFinancesLayout = () => {
  return (
    <>
      <nav>
        <Link to={"/finances/personalfinances/details"}>Details</Link>
        <Link to={"/finances/personalfinances/personalfinancesconsolidated"}>Consolidated</Link>
        <Link to={"/finances/personalfinances/graphics"}>Graphics</Link>      
      </nav>
      <Outlet />
    </>
  );
};

export default PersonalFinancesLayout;
