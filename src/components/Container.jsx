import { InputContainer } from './InputContainer'
import { Transactions } from './Transactions'
import './container.css'

export const Container = () => {
    return(
        <div className="container">
            <Transactions />
            <InputContainer />
            
        </div>
    )
}