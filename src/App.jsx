import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Networth from "./pages/networth_pages/Networth";
import Consolidated from "./pages/networth_pages/Consolidated";
import Diversification from "./pages/networth_pages/Diversification";
import Holding from "./pages/networth_pages/Holding";
import Assets from "./pages/assets_pages/Assets";
import Finances from "./pages/financial_pages/personal_finances_pages/Finances";
import Debt from "./pages/debt/Debt";
import Investments from "./pages/financial_pages/Investments";
import InvestmentTypes from "./pages/InvestmentTypes";
import Layout from "./components/layouts/Layout";
import AssetsLayout from "./components/layouts/AssetsLayout";
import Bonds from "./pages/assets_pages/Bonds";
import AssetNotes from "./pages/assets_pages/AssetNotes";
import EmergencyFund from "./pages/assets_pages/EmergencyFund";
import FixedIncome from "./pages/assets_pages/FixedIncome";
import RealEstate from "./pages/assets_pages/RealEstate";
import REITs from "./pages/assets_pages/REITs";
import Stocks from "./pages/assets_pages/Stocks";
import ValueReserve from "./pages/assets_pages/ValueReserve";
import WhereToInvest from "./pages/assets_pages/WhereToInvest";
import NetworthLayout from "./components/layouts/NetworthLayout";
import FinancesLayout from "./components/layouts/FinancesLayout";
import Graphics from "./pages/financial_pages/personal_finances_pages/Graphics";
import NewData from "./pages/financial_pages/personal_finances_pages/NewData";
import Details from "./pages/financial_pages/personal_finances_pages/PersonalFinancesDetails";
import PersonalFinancesLayout from "./components/layouts/PersonanFinancesLayout";
import DebtLayout from "./components/layouts/DebtLayout";
import DebtAddNew from "./pages/debt/DebtAddNew";
import DebtGraphics from "./pages/debt/DebtGraphics";

const App = () => {
  // Initialize debt data as an empty array
  const [debtData, setDebtData] = useState([]);

  // Function to add a new debt to the debt data
  const addDebt = (newDebt) => {
    setDebtData([...debtData, newDebt]);
  };
  // Function to edit a debt item in the debt data
  const editDebt = (editedDebt, index) => {
    // Create a copy of the debt data array
    const updatedDebtData = [...debtData];
    // Update the debt item at the specified index
    updatedDebtData[index] = editedDebt;
    // Update the state with the modified data
    setDebtData(updatedDebtData);
  };
  // Function to delete a debt item from the debt data
  const deleteDebt = (index) => {
    // Create a copy of the debt data array
    const updatedDebtData = [...debtData];
    // Remove the debt item at the specified index
    updatedDebtData.splice(index, 1);
    // Update the state with the modified data
    setDebtData(updatedDebtData);
  };

  // personal finances

  // Initialize finances data as an empty array
  const [personalFinanceData, setPersonalFinanceData] = useState([]);

  // Function to add a new finances to the finances data
  const addPersonalFinance = (newPersonalFinance) => {
    setPersonalFinanceData([...personalFinanceData, newPersonalFinance]);
  };
// Function to edit a personal finance item in the personal finance data
const editPersonalFinance = (editedFinance, index) => {
  // Create a copy of the personal finance data array
  const updatedFinanceData = [...personalFinanceData];
  // Update the personal finance item at the specified index
  updatedFinanceData[index] = editedFinance;
  // Update the state with the modified data
  setPersonalFinanceData(updatedFinanceData);
};

// Function to delete a personal finance item from the personal finance data
const deletePersonalFinance = (index) => {
  // Create a copy of the personal finance data array
  const updatedFinanceData = [...personalFinanceData];
  // Remove the personal finance item at the specified index
  updatedFinanceData.splice(index, 1);
  // Update the state with the modified data
  setPersonalFinanceData(updatedFinanceData);
};

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
            <Route element={<DebtLayout />}>
              <Route
                path="finances/debt/"
                element={
                  <Debt
                    debtData={debtData}
                    editDebt={editDebt}
                    deleteDebt={deleteDebt}
                  />
                }
              />
              <Route
                path="finances/debt/addnewdebt"
                element={<DebtAddNew addDebt={addDebt} />}
              />
              <Route
                path="finances/debt/graphics"
                element={<DebtGraphics debtData={debtData} />}
              />
            </Route>
            <Route path="finances/investments" element={<Investments />} />
            <Route element={<PersonalFinancesLayout />}>
              <Route
                path="finances/personalfinances/details"
                element={
                  <Details 
                  personalFinanceData={personalFinanceData}
                  editPersonalFinance={editPersonalFinance}
                  deletePersonalFinance={deletePersonalFinance}
                  />
                }
              />
              <Route
                path="finances/personalfinances/newdata"
                element={<NewData addPersonalFinance={addPersonalFinance} />}
              />
              <Route
                path="finances/personalfinances/graphics"
                element={<Graphics />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
