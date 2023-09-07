import { Link, Outlet } from "react-router-dom";

Link;
const FinancesLayout = () => {
  return (
    <>
      <nav>
        <Link to={"finances/debt"}>Debt</Link>
        <Link to={"finances/investments"}>Investments</Link>
        <Link to={"finances/personalfinances"}>Personal Finances</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default FinancesLayout;
