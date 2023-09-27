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
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">หน้าหลัก</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/"> Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/payment"> payment </a>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0">
            <input 
              type='text'
              placeholder='license'
              onChange={e => setLicense(e.target.value)}
            />
            <button type='button' onClick={fetchPayment}>
              Search 
            </button>
          </form>
        </div>
      </nav>

    <div className='first-page'>
      <div class='mt-5'>
        <div className="jumbotron">
              
            <input 
              type='text'
              placeholder='license'
              onChange={e => setLicense(e.target.value)}
            />
            <button type='button' onClick={fetchPayment}>
              Search 
            </button>
            <div>
              <a href='\payment' role="button"> go to payment </a>
            </div>

          </div>
            {Object.keys(payments).map((payment) => (
              <div key={payment.payment_id}>
                <div>{payment}: {payments[payment]} </div> 
              </div>
            ))}        
      </div>
    </div>
    </div>
  )
}

export default CarPage;