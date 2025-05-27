import React, { useState } from 'react'
import "../css/currency.css"
import axios from 'axios';


const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "YOUR API KEY";



function Currency() {

    const [amount, setAmount] = useState('');
    const [fromcurrency, setfromcurrency] = useState('TRY');
    const [tocurrency, settocurrency] = useState('USD');
    const [result, setresult] = useState('');


    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromcurrency}`)
        const currencyResult = (response.data.data[tocurrency] * amount).toFixed(2)
        setresult(currencyResult)
    }

    return (
        <div>
            <div className='CurrencyContainer'>
                <h4>CURRENCY CONVERTER</h4>
                <input
                    type='number' value={amount} onChange={(e) => setAmount(Number(e.target.value))}></input>
                <select className='FromCurrencyOption' onChange={(e) => setfromcurrency(e.target.value)}>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <select className='ToCurrencyOption' onChange={(e) => settocurrency(e.target.value)}>
                    <option>USD</option>
                    <option>TRY</option>
                    <option>EUR</option>
                </select>
                <input type='number' value={result} onChange={(e) => setresult()}></input>
                <button className='CurrencyBTN' onClick={exchange}>CONVERT</button>
            </div>
        </div>
    )
}

export default Currency
