import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Consolidated from "./pages/networth_pages/Consolidated";
import Diversification from "./pages/networth_pages/Diversification";
import Holding from "./pages/networth_pages/Holding";
import Debt from "./pages/debt/Debt";
import InvestmentTypesStocks from "./pages/investment_types_pages/InvestmentTypesStocks";
import InvestmentTypesBonds from "./pages/investment_types_pages/InvestmentTypesBonds";
import InvestmentTypesREITs from "./pages/investment_types_pages/InvestmentTypesREITs";
import InvestmentTypesEmergencyFund from "./pages/investment_types_pages/InvestmentTypesEmergencyFund";
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
import IncomevsExpenditure from "./pages/financial_pages/personal_finances_pages/PersonalFinancesDetails";
import PersonalFinancesLayout from "./components/layouts/PersonanFinancesLayout";
import DebtLayout from "./components/layouts/DebtLayout";
import DebtAddNew from "./pages/debt/DebtAddNew";
import DebtGraphics from "./pages/debt/DebtGraphics";
import DebtTable from "./pages/debt/DebtTable";
import TablePersonalFinances from "./pages/financial_pages/personal_finances_pages/TablePersonalFinances";
import InvestmentsLayout from "./components/layouts/InvestmentsLayout";
import Portfolio from "./pages/financial_pages/Portfolio";
import Purchases from "./pages/financial_pages/Purchases";
import Gorillasgram from "./pages/gorillasgram_pages/Gorillasgram";
import GorillasgramLayout from "./components/layouts/Gorrilasgram_layout";
import CreateMemes from "./pages/gorillasgram_pages/CreateMemes";
import CompoundInterest from "./pages/financial_pages/CompoundInterest";

const App = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const addToPortfolio = (item) => {
    setPortfolioItems([...portfolioItems, item]);
  };

  // Function to calculate the total portfolio value
  const calculateTotalPortfolio = () => {
    let total = 0;

    // iterate over portfolio and sum up  subtotal values
    portfolioItems.forEach((item) => {
      total += parseFloat(item.subTotal);
    });

    return total.toFixed(2);
  };

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
  // compound interest

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
          <Route path="/1" element={<InvestmentTypesStocks />} />
          <Route path="/3" element={<InvestmentTypesBonds />} />
          <Route path="/2" element={<InvestmentTypesREITs />} />
          <Route path="/4" element={<InvestmentTypesEmergencyFund />} />
          <Route path="networth" element={<NetworthLayout />}>
            <Route path="networth" element={<Consolidated />} />
            <Route
              path="networth/diversification/"
              element={<Diversification />}
            />
            <Route path="networth/holding" element={<Holding />} />
          </Route>
          <Route path="assets" element={<AssetsLayout />}>
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
            <Route path="finances"  element={<DebtLayout />}>
              <Route              
                path="debt/"               
                element={
                  <Debt
                    debtData={debtData}
                    editDebt={editDebt}
                    deleteDebt={deleteDebt}
                  />
                }
              />
              <Route
                path="debt/addnewdebt"
                element={<DebtAddNew addDebt={addDebt} />}
              />
              <Route
                path="debt/graphics"
                element={<DebtGraphics debtData={debtData} />}
              />
              <Route
                path="debt/debttable"
                element={<DebtTable debtData={debtData} />}
              />
            </Route>
            <Route path="finances/investments" element={<InvestmentsLayout />}>
              <Route
                path="investments/purchases"
                element={<Purchases addToPortfolio={addToPortfolio} />}
              />
              <Route
                path="investments/portfolio"
                element={
                  <Portfolio
                    portfolioItems={portfolioItems}
                    totalPortfolio={calculateTotalPortfolio()}
                  />
                }
              />
              <Route
                path="investments/compoundinterest"
                element={<CompoundInterest />}
              />
            </Route>
            <Route  path="finances/personalfinances" element={<PersonalFinancesLayout />}>
              <Route
                path="personalfinances/incomevsexpenditure"
                element={
                  <IncomevsExpenditure
                    personalFinanceData={personalFinanceData}
                    editPersonalFinance={editPersonalFinance}
                    deletePersonalFinance={deletePersonalFinance}
                  />
                }
              />
              <Route
                path="personalfinances/newdata"
                element={<NewData addPersonalFinance={addPersonalFinance} />}
              />
              <Route
                path="personalfinances/graphics"
                element={<Graphics personalFinanceData={personalFinanceData} />}
              />
              <Route
                path="personalfinances/tablepersonalfinances"
                element={
                  <TablePersonalFinances
                    personalFinanceData={personalFinanceData}
                  />
                }
              />
            </Route>
          </Route>
          <Route element={<GorillasgramLayout />}>
            <Route path="gorillasgram" element={<Gorillasgram />} />
            <Route path="gorillasgram/creatememes" element={<CreateMemes />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
