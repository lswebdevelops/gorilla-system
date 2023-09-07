import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <h1>Layout </h1>
      <Outlet />
    </>
  );
};
export default Layout;
