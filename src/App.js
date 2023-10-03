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
            <Route exact path='/home/:license' Component={CarPage} /> 
            <Route exact path='/payment/:license' Component={PaymentPage}/>
            <Route exact path='/payment' Component={PaymentPage}/>
            <Route exact path='/transaction/:license' Component={Transaction} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
};


export default App;