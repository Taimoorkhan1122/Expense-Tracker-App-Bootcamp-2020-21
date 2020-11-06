import { IncomeExpense } from './IncomeExpense'
import { Transactions } from './Transactions'
import './container.css'

export const Container = () => {
    return(
        <div className="container">
            <Transactions />
            <IncomeExpense />
        </div>
    )
}