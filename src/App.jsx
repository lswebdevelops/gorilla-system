import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Networth from "./pages/Networth";
import "./index.css";
import Assets from "./pages/assets/Assets";
import Finances from "./pages/Finances";
import InvestmentTypes from "./pages/InvestmentTypes";
import Layout from "./components/Layout";
import AssetsLayout from "./components/AssetsLayout";
import Bonds from "./pages/assets/Bonds";
import AssetNotes from "./pages/assets/AssetNotes";
import EmergencyFund from "./pages/assets/EmergencyFund";
import FixedIncome from "./pages/assets/FixedIncome";
import RealEstate from "./pages/assets/RealEstate";
import REITs from "./pages/assets/REITs";
import Stocks from "./pages/assets/Stocks";
import ValueReserve from "./pages/assets/ValueReserve";
import WhereToInvest from "./pages/assets/WhereToInvest";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<InvestmentTypes />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/networth" element={<Networth />} />
          <Route path="/assets" element={<AssetsLayout />}>
            <Route path="/assets" element={<Assets />} />
            <Route path="/assets/bonds" element={<Bonds />} />
            <Route path="/assets/assetnotes" element={<AssetNotes />} />
            <Route path="/assets/emergencyfund" element={<EmergencyFund />} />
            <Route path="/assets/fixedincome" element={<FixedIncome />} />
            <Route path="/assets/realestate" element={<RealEstate />} />
            <Route path="/assets/reits" element={<REITs />} />
            <Route path="/assets/stocks" element={<Stocks />} />
            <Route path="/assets/valuereserve" element={<ValueReserve />} />
            <Route path="/assets/wheretoinvest" element={<WhereToInvest />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
