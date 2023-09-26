import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios';

function PaymentPage() {
    const [payments, setPayments] = useState([])
    const [transactions, setTransactions] = useState([])
    /*const [car_license, setLicense] = useState("")
    const [car_province, setProvince] = useState("")
    const [payment_type, setType] = useState("")*/
    const [state, setState] = useState({
        car_license: "",
        car_province: "",
        payment_type: ""
    });

    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    /*
    useEffect(() => {
        const fetchTransaction = () => {
            const result = axios.get(`http://localhost:3001/transactions/${license}`)
            
            setTransactions({
                posts: result.data
            })
        }
        fetchTransaction()  
    }, [license]);
    */
    /*
    const fetchPayment = () => {
        axios.get(`http://localhost:3001/payments/pay/${state.car_license}`)
        .then((res) => {
          console.log(res.data)
          setTransactions(res.data)
        })
        .catch((err) => { console.log(err) });
    }*/

    function handleSubmit(event) {
        event.preventDefault()
        const userPayment = {
            car_license: state.car_license,
            car_province: state.car_province,
            payment_type: state.payment_type
        }
        axios.put(`http://localhost:3001/payments`, userPayment)
        .then((res) => {
            (res.json())
            console.log(res.data)
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className='first-page'>
            <div className='mt-5'>
                <h1>Payment Page</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='car_license'>
                        License: <input value={state.car_license} type='text' name="car_license" onChange={handleChange}/>
                    </label>
                    <label htmlFor='car_province'>
                        Province: <input value={state.car_province} type='text' name="car_province" onChange={handleChange}/>
                    </label>
                    <label htmlFor='payment_type'>
                        Type: <input value={state.payment_type} type='text' name="payment_type" onChange={handleChange}/>
                    </label>
                    
                    <button type='submit'> pay </button>
                </form>

            </div>
        </div>
    )
}
export default PaymentPage;