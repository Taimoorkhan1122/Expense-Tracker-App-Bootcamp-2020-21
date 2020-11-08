import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

import { TransactionList } from './TransactionList'
import { IncomExpense } from './IncomExpense'
import './transactions.css'

export const Transactions = () => {
    const { transactions }= useContext(GlobalContext);

     let amounts = transactions.map((item) => item.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(
        <div className="transactions">
            <div className="balance">
                <h1>Balance</h1>
                <h4 id="balance">${total}</h4>
            </div>
            <TransactionList/>
            <IncomExpense />
        </div>
    )
}