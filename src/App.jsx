import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Networth from "./pages/networth_pages/Networth";
import Consolidated from "./pages/networth_pages/Consolidated";
import Diversification from "./pages/networth_pages/Diversification";
import Holding from "./pages/networth_pages/Holding";
import Assets from "./pages/assets_pages/Assets";
import Finances from "./pages/financial_pages/Finances";
import Debt from "./pages/financial_pages/Debt";
import Investments from "./pages/financial_pages/Investments";
import InvestmentTypes from "./pages/InvestmentTypes";
import Layout from "./components/Layout";
import AssetsLayout from "./components/AssetsLayout";
import Bonds from "./pages/assets_pages/Bonds";
import AssetNotes from "./pages/assets_pages/AssetNotes";
import EmergencyFund from "./pages/assets_pages/EmergencyFund";
import FixedIncome from "./pages/assets_pages/FixedIncome";
import RealEstate from "./pages/assets_pages/RealEstate";
import REITs from "./pages/assets_pages/REITs";
import Stocks from "./pages/assets_pages/Stocks";
import ValueReserve from "./pages/assets_pages/ValueReserve";
import WhereToInvest from "./pages/assets_pages/WhereToInvest";
import NetworthLayout from "./components/NetworthLayout";
import FinancesLayout from "./components/FinancesLayout";
import PersonalFinances from "./pages/financial_pages/personal_finances_pages/PersonalFinances";
import Graphics from "./pages/financial_pages/personal_finances_pages/Graphics";
import PersonalFinancesConsolidated from "./pages/financial_pages/personal_finances_pages/PersonalFinancesConsolidated";
import Details from "./pages/financial_pages/personal_finances_pages/Details";
import PersonalFinancesLayout from "./components/PersonanFinancesLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<InvestmentTypes />} />
          <Route element={<NetworthLayout />}>
            <Route path="/networth" element={<Networth />} />
            <Route path="/networth/consolidated" element={<Consolidated />} />
            <Route
              path="/networth/diversification"
              element={<Diversification />}
            />
            <Route path="/networth/holding" element={<Holding />} />
          </Route>
          <Route path="assets" element={<AssetsLayout />}>
            <Route index element={<Assets />} />
            <Route path="bonds" element={<Bonds />} />
            <Route path="assetnotes" element={<AssetNotes />} />
            <Route path="emergencyfund" element={<EmergencyFund />} />
            <Route path="fixedincome" element={<FixedIncome />} />
            <Route path="realestate" element={<RealEstate />} />
            <Route path="reits" element={<REITs />} />
            <Route path="stocks" element={<Stocks />} />
            <Route path="valuereserve" element={<ValueReserve />} />
            <Route path="wheretoinvest" element={<WhereToInvest />} />
          </Route>
          <Route element={<FinancesLayout />}>
            <Route path="finances" element={<Finances />} />
            <Route path="finances/debt" element={<Debt />} />
            <Route path="finances/investments" element={<Investments />} />
            <Route element={<PersonalFinancesLayout />}>
              <Route path="finances/personalfinances" element={<PersonalFinances />} />
              <Route path="finances/personalfinances/details" element={<Details />} />
              <Route path="finances/personalfinances/personalfinancesconsolidated" element={<PersonalFinancesConsolidated />} />
              <Route path="finances/personalfinances/graphics" element={<Graphics />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
