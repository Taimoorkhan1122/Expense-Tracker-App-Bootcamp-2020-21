import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { IncomExpense } from './IncomExpense';

export const InputForm = () => {

    const [text, setText] = useState('');    
    const [amount, setAmount] = useState(0);   


    const { addTransactions, expenseState } = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text: text,
            // amount: +amount
            amount: expenseState[0]? +amount: +amount*-1,
        };
        addTransactions(newTransaction);
        setText("");
        setAmount(0);
    }
    return(
        <form className="transaction-form" onSubmit={onSubmit}>
            <div className="input-fields">
                <div className="description">
                    <label htmlFor="description">Add transaction details</label>
                    <input 
                        type="text" 
                        value={text}
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter descriptions"
                    />
                </div>
                <div className="amount">
                    <label htmlFor="amount">Transaction amount</label>
                    <div className="amount-curreny">
                        <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)} 
                            placeholder="$ 1000"
                            id="currency"
                        />
                        <select name="currency">
                            <option value="USD">USD</option>
                            <option value="PKR">PKR</option>
                            <option value="PKR">EURO</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="addtransaction" >Add Transaction</button>
        </form>
    )
}