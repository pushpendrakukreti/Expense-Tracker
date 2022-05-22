import React, { useState, useContext } from 'react';
import './index.css';
import { GlobalContext } from '../../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: parseFloat(amount)
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label for='text'>
                        <b>Text: </b>
                        <span>(eg. Salary, Grocery, Bill, Book, etc...)</span>
                    </label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label for='amount' className='lbl-amount'>
                        <b>Amount: </b>
                        (
                        <span>Negative: <span className='negative'>Expense</span></span>
                        &nbsp;,&nbsp;
                        <span>Positive: <span className='positive'>Income</span></span>
                        )
                    </label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    )
}
