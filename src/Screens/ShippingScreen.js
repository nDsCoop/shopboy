import React, { useEffect, useState } from 'react';
//import data from '../data';
//import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';


function ShippingScreen(props) {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping({ city, address, country, postalCode }));
        if(address && city && country, postalCode) {
            props.history.push('payment');
        } else {
            console.error("Not check with this info"); 
        }
    }
    return <div>
        <CheckoutSteps step1 step2 ></CheckoutSteps>
      
            <div className="form">
            <form onSubmit= {submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Shiping</h2>
                    </li>
                    <li>
                        <label htmlFor="address">
                            Address
                        </label>
                        <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="city">
                            City
                        </label>
                        <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="postalcode">
                            Postal Code
                        </label>
                        <input type="text" name="postalcode" id="postalcode" onChange={(e) => setPostalCode(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="country">
                            Country
                        </label>
                        <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}></input>
                    </li>
                    
                
                    <li>
                        <button type="submit" className="button signin">Continue</button>
                    </li>
                
                </ul>
            </form>
        </div>
    </div>
    
}
export default ShippingScreen; 