import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Networth from "./pages/Networth";
import "./index.css";
import Assets from "./pages/Assets";
import Finances from "./pages/Finances";
import InvestmentTypes from "./pages/InvestmentTypes";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<InvestmentTypes />} />
          <Route path="/networth" element={<Networth />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/finances" element={<Finances />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
