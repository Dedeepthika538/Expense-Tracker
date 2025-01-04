import React from 'react'
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

export default function ExpenseTracker() {
    return (
        <div className="expense-tracker">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
        </div>
    )
}
