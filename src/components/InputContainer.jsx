import { InputForm } from './InputForm'
import './input-container.css'

export const InputContainer = () => {
    return(
        <>
        <div className="inputContainer">
            <div className="income-expense-switch">
                <div className="income">
                    <h1>Income</h1>
                </div>
                <div className="expense">
                    <h1>Expense</h1>
                </div>
            </div>
            <InputForm />

        </div>
        </>
    )
}
