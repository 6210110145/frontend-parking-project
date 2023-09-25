import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios'

function CarPage() {
    const [payments, setPayments] = useState([])
    const [license, setLicense] = useState("")

    const fetchPayment = () => {
      axios.get(`http://localhost:3001/payments/${license}`)
      .then((res) => {
        console.log(res.data)
        setPayments(res.data)
      })
      .catch((err) => {
        console.log(err);
     });
    }
    
    /*useEffect(() => {
      fetchPayment()
    }, [])*/
  
  return (
      <div className='first-page'>
          <div className='mt-5'>
            <input 
              type='text'
              placeholder='license'
              onChange={e => setLicense(e.target.value)}
            />
            <button type='button' onClick={fetchPayment}>
              Search 
            </button>
            
            {Object.keys(payments).map((payment) => (
            <div key={payment.payment_id}>
              <div>{payment}: {payments[payment]} </div>
            </div>
            ))}   
            <a href='\payment' role="button" className="btn btn-primary btn-lg"> go to payment </a>         
          </div>
      </div>
    )
}

export default CarPage;