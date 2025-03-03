import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTrans = {
            text,
            id: Math.floor(Math.random() * 100000000),
            amount: +amount
        }
        addTransaction(newTrans);

        setAmount(0)
        setText('')
    }
    return (
        <div> <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} placeholder="Enter text..." onChange={(e) => { setText(e.target.value) }} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
