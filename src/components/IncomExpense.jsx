import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

export const IncomExpense = () => {

    const { transactions }= useContext(GlobalContext);

    let amounts = transactions.map((item) => item.amount);
    
    const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    // expense always in Positive
    const expense = (amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)*-1);

    return(
        <div className="incomeExpense">
                <div class="inc-exp-container">
                    <div>
                        <h4>Income</h4>
                        <p id="money-plus" class="money plus">${income}</p>
                    </div>
                    
                    <div>
                        <h4>Expense</h4>
                        <p id="money-minus" class="money minus">{expense}</p>
                    </div>
                </div>
            </div>
    )
}