import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

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
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand > หน้าหลัก </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="\home">Home</Nav.Link>
            <Nav.Link href="\payment">Payment</Nav.Link> 
          </Nav>

          <Form className="d-flex">
            <input 
              type='text'
              placeholder='license'
              className="me-2"
              onChange={e => setLicense(e.target.value)}
            />
            <Button variant="outline-success" onClick={fetchPayment}>
              Search 
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='first-page'>
      <div class='mt-5'>
        <div className="jumbotron">  
        {Object.keys(payments).map((payment) => (
          <div key={payment.payment_id}>
            <div>{payment}: {payments[payment]} </div> 
          </div>
        ))}
        <Button href='\payment'> go to payment </Button>
        </div>        
      </div>
    </div>
    </>
  )
}

export default CarPage;