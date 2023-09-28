import './App.css';
import './styles/Page.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import CarPage from './pages/CarPage';
import PaymentPage from './pages/PaymentPage';
import LoginPage from './pages/LoginPage';
import Transaction from './pages/Transaction';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/'  element={<LoginPage />} />
            <Route exact path='/home' Component={CarPage} />
            <Route path='/transaction/:license' element={<Transaction />} />
            <Route exact path='/payment/:id' Component={PaymentPage}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
};


export default App;