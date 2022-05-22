import React, { useContext } from 'react';
import './index.css';
import { Transaction } from '../Transaction/Transaction';

import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <div className='div-list' style={{ overflow: (transactions.length > 0) ? 'auto' : 'hidden' }}>
                <ul id='list' className='list'>
                    {transactions.length > 0 ? transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />)) : <li class="no-records">No available records!!</li>}
                </ul>
            </div>
        </>
    )
}
