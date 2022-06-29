import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

            
        };
        setEditing(false);
        props.onAddExpense(expenseData);
    };
    
    const formHandler = () => {
        setEditing(true);
    };

    const stopEditHandler = () => {
        setEditing(false);
    };

    return (
        
       <div className='new-expense'>
            {!isEditing && <button onClick={formHandler}>Add New Expense</button>}
            { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditHandler} />}
        </div>
    );
};

export default NewExpense;