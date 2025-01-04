import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(tranasction => tranasction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  )
}
