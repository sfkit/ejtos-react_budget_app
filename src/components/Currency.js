import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
import './Currency.css'

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const setCurrency = (newcurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newcurrency,
        });
    };
    return (
        <div className="alert alert-secondary dropdownContainer"> Currency {
                <select className="dropdown" name="currency" id="currency" onChange={(event) => setCurrency(event.target.value)}>
                    <option className="dropdown-options" value="$">$ Dollar</option>
                    <option className="dropdown-options" value="£">£ Pound</option>
                    <option className="dropdown-options" value="€">€ Euro</option>
                    <option className="dropdown-options" value="₹">₹ Ruppee</option>
                </select>	
        }	
        </div>
    );
};
export default Currency;