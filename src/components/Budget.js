import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const submitEvent = (newbudget) => {
        if (newbudget> 20000)
        {
            alert("Total budget cannot exceed £20000");
        }
        else if (newbudget < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newbudget,
            });
        }
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" value={budget} step="10" onChange={(event) => submitEvent(event.target.value)}/></span>
        </div>
    );
};
export default Budget;
