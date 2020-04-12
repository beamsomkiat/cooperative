import React, { Component } from 'react'
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Layout
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
//import page
import Home from './component/page/Home/Home';
import AddMember from './component/page/Member/AddMember';
import EditMember from './component/page/Member/EditMember';
import AddOfficer from './component/page/Officer/AddOfficer';
import EditOfficer from './component/page/Officer/EditOfficer';
import CalculateSalary from './component/page/Officer/CalculateSalary';
import BuyShare from './component/page/Share/BuyShare';
import SellShare from './component/page/Share/SellShare';
import TransferShare from './component/page/Share/TransferShare';
import SemeCowCash from './component/page/General-product/SemeCow/SemeCowCash';
import SemeCowCredit from './component/page/General-product/SemeCow/SemeCowCredit';
import MedicineCowCash from './component/page/General-product/MedicineCow/MedicineCowCash';
import MedicineCowCredit from './component/page/General-product/MedicineCow/MedicineCowCredit';
import FoodCowCash from './component/page/General-product/FoodCow/FoodCowCash';
import FoodCowCredit from './component/page/General-product/FoodCow/FoodCowCredit';
import BuyCowCash from './component/page/General-product/BuyCow/BuyCowCash';
import BuyCowCredit from './component/page/General-product/BuyCow/BuyCowCredit';
import SellCowFatten from './component/page/General-product/SellCow/SellCowFatten';
import SellCowSlice from './component/page/General-product/SellCow/SellCowSlice';
import Dividend from './component/page/Dividend-Avg_Return_Money/Dividend';
import AvgReturnMoney from './component/page/Dividend-Avg_Return_Money/AvgReturnMoney';
import Debt from './component/page/Debt-Accrual/Debt';
import Accrual from './component/page/Debt-Accrual/Accrual';
import BlackList from './component/page/Debt-Accrual/BlackList';
import Receipt from './component/page/Finance/Receipt';
import Report from './component/page/Report/Report';
import Alert from './component/page/Alert/Alert';
import Approve from './component/page/Approve/Approve';
import AccessHistory from './component/page/Access-History/AccessHistory';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path = "/add-member" component ={AddMember} />
          <Route path = "/edit-member" component ={EditMember}/>
          <Route path = "/add-officer" component = {AddOfficer}/>
          <Route path = "/edit-officer" component = {EditOfficer}/>
          <Route path = "/calculate-salary" component = {CalculateSalary}/>
          <Route path = "/buy-share" component = {BuyShare}/>
          <Route path = "/sell-share" component = {SellShare}/>
          <Route path = "/transfer-share" component = {TransferShare}/>
          <Route path = "/semencow-cash" component = {SemeCowCash}/>
          <Route path = "/semencow-credit" component = {SemeCowCredit}/>
          <Route path = "/medicinecow-cash" component = {MedicineCowCash}/>
          <Route path = "/medicinecow-credit" component = {MedicineCowCredit}/>
          <Route path = "/foodcow-cash" component = {FoodCowCash}/>
          <Route path = "/foodcow-credit" component = {FoodCowCredit}/>
          <Route path = "/buycow-cash" component = {BuyCowCash}/>
          <Route path = "/buycow-credit" component = {BuyCowCredit}/>
          <Route path = "/sellcow-fatten" component = {SellCowFatten}/>
          <Route path = "/sellcow-slice" component = {SellCowSlice}/>
          <Route path = "/dividend" component = {Dividend}/>
          <Route path = "/avg-return-money" component = {AvgReturnMoney}/>
          <Route path = "/debt" component = {Debt}/>
          <Route path = "/accrual" component = {Accrual}/>
          <Route path = "/blacklist" component = {BlackList}/>
          <Route path = "/receipt" component = {Receipt}/>
          <Route path = "/report" component = {Report} />
          <Route path = "/alert" component = {Alert} />
          <Route path = "/approve"component = {Approve} />
          <Route path = "/access-history" component = {AccessHistory} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}
