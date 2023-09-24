import './App.css';
import './styles/Page.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState([])

  const fetchTransaction = () => {
    fetch('http://localhost:3001/transactions')
    .then((response) => response.json())
    .then((data) => setTransactions(data))
  }

  useEffect(() => {
    fetchTransaction()
  }, []);

  
return (
    <div>
    <h1> Show data</h1>
      {transactions.map((transaction) => {
        return (
          <div className='first-page' key={transaction.transaction_id}>
            <div className='mt-5'>
            <h2>{transaction.car_license}</h2>
            <h2>{transaction.car_province}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )
};


export default App;