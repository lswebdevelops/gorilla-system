import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./components/Home";
import Networth from "./components/Networth";
import "./index.css";
import Assets from "./components/Assets";
import Finances from "./components/Finances";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>Gorilla System</Link> {/* >> home */}
        <nav>
          <Link to={"/networth"}>Networth</Link>
          <Link to={"/assets"}>Assets</Link>
          <Link to={"/finances"}>Finances</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/networth" element={<Networth />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/finances" element={<Finances />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
