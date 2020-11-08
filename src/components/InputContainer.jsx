import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

import { InputForm } from './InputForm'
import './input-container.css'

export const InputContainer = () => {
    const { expenseState }= useContext(GlobalContext);
    const [expense, setExpense] = expenseState;

    return(
        <>
        <div className="inputContainer">
            <div className="income-expense-switch">
                <div className={`income ${expense && "selected"}`} onClick={()=> setExpense(true)}>
                    <h1>Income</h1>
                </div>
                <div className={`expense ${!expense && "selected"}`} onClick={()=> setExpense(false)}>
                    <h1>Expense</h1>
                </div>
            </div>
            <InputForm />

        </div>
        </>
    )
}
