import './transactions.css'

export const Transactions = () => {
    return(
        <div className="transactions">
            <div className="balance">
                <h1>Balance</h1>
                <h4 id="balance">$0.00</h4>
            </div>
            <div className="transaction-list">
                {/* <!-- income list here --> */}
                <div class="history">
                    <ul class="list" id="list">
                        <li >
                            Camera <span>$0.00</span> <button class="delete-btn">X</button>
                        </li>
                    </ul>
                </div>
            </div>   
        </div>
    )
}