import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios';

function PaymentPage() {
    const [payments, setPayments] = useState([])
    //const [transactions, setTransactions] = useState([])
    const [license, setLicense] = useState("")
    const [province, setProvince] = useState("")
    const [type, setType] = useState("")
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

    const fetchPayment = () => {
        axios.get(`http://localhost:3001/payments/pay/${license}`)
        .then((res) => {
          console.log(res.data)
          setPayments(res.data)
        })
        .catch((err) => {
          console.log(err);
       });
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.put(`http://localhost:3001/payments`)
    }

    return (
        <div className='first-page'>
            <div className='mt-5'>
                <h1>Payment Page</h1>
                <form onSubmit={handleSubmit}>
                    License: <input value={license} type='text' onChange={e => setLicense(e.target.value)}/>
                    Province: <input value={province} type='text' onChange={e => setProvince(e.target.value)}/>
                    Type: <input value={type} type='text' onChange={e => setType(e.target.value)}/>
                    
                    <button className="btn btn-primary"> Submit </button>
                </form>
                <div onChange={fetchPayment}>
                    <ul>
                        {Object.key(payments).map((payment) => (
                            <li key={payment.payment_id}>
                                <div>{payment}: {payments[payment]} </div>
                            </li>
                        ))}
                    </ul>
                </div>
                    
                
            </div>
        </div>
    )
}

export default PaymentPage;