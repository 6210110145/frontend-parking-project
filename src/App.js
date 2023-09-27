import './App.css';
import './styles/Page.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import CarPage from './pages/CarPage';
import PaymentPage from './pages/PaymentPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' exact element={<LoginPage />} />
            <Route path='/home' element={<CarPage />} />
            <Route path='/payment' element={<PaymentPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
};


export default App;