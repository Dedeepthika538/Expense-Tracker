import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const {transactions} =useContext(GlobalContext);
  const amounts = transactions.map(tranasction => tranasction.amount);
  const income = amounts.filter(amount=>amount>0).reduce((acc,item)=>(acc+=item),0);
  const expense = amounts.filter(amount=>amount<0).reduce((acc,item)=>(acc+=item),0);
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">+${income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money minus">-${Math.abs(expense)}</p>
    </div>
  </div>
  )
}
