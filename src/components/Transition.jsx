import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import  { Transactions} from './Transactions'
import NewTrainsition from './NewTrainsition';

const Transition = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(Transactions)
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {
                    Transactions.map(NewTrainsition => (<h2 key={index}/>))}
            </ul>
        </div>
    )
}

export default Transition