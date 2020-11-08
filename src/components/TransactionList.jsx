import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { TransactionListLi } from './TransactionListLi'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return(
        <div className="transaction-list">
            {/* <!-- income list here --> */}
            <div class="history">
                <ul class="list" id="list">
                    {transactions.map(transaction => 
                    <TransactionListLi
                     key={transaction.id} 
                     transaction={transaction}
                     />
                    )}
                </ul>    
            </div>
        </div>   
    )
}