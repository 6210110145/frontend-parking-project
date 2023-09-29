import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios'
import { Button, Card, Container, Form, ListGroup, Nav, NavLink, Navbar, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CarPage() {
  const [payments, setPayments] = useState([])
  const [transactions, setTransactions] = useState([])
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

  const fetchTransaction = () => {
    axios.get(`http://localhost:3001/transactions/${license}`)
      .then((res) => {
        setTransactions(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
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
            <Nav.Link href='\transaction'> History </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='first-page'>
      <div class='mt-3 text-center'>
        <Form className="d-flex mt-3 mb-3 ">
            <input 
              type='text'
              placeholder='license'
              className="me-2"
              onChange={e => setLicense(e.target.value)}
            />
            <Button 
              variant="success" 
              onClick={() => {
                  fetchPayment();
                  fetchTransaction();}}
            >
              Search 
            </Button>
          </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>License</th>
              <th>Province</th>
              <th>Parking</th>
              <th>TimeIn</th>
              <th>TimeFree</th>
              <th>TimeTotal</th>
              <th>CostTotal</th>
              <th>Type</th>
            </tr>
          </thead>
        
          <tbody>
            <tr>
              {Object.keys(payments).map((payment) => (
              <td> {payments[payment]} </td> ))} 
            </tr> 
          </tbody>
      
        </Table>
        
        {Object.values(payments).slice(0,1).map(() => (
          <Card className='text-center mt-5' border="primary">
            <Card.Header>
              <Card.Title> {payments.license} </Card.Title>
              <Card.Subtitle> {payments.province} </Card.Subtitle>
            </Card.Header>
       
            <ListGroup variant="flush">
              <ListGroup.Item> {payments.parking} </ListGroup.Item>
              <ListGroup.Item> {payments.time_in} </ListGroup.Item>
              <ListGroup.Item> {payments.time_out_free} </ListGroup.Item>
              <ListGroup.Item> {payments.time_total} </ListGroup.Item>
              <ListGroup.Item> {payments.cost_total} </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link>
              <Link>
                <Button class="btn btn-primary float-end"> go to Payment </Button> 
              </Link>
            </Card.Link>

            <Card.Link>
            <Link> History </Link>
            </Card.Link>

            </Card.Body>
        </Card>
        ))}
        

        {Object.values(transactions).slice(0,1).map(() => {
          return(
          <>
            <h5>{transactions.car_license}</h5>
            <h5>{transactions.transaction_id}</h5>
            <Link to={`/payment/${transactions.transaction_id}`}>
              <Button class="btn btn-primary float-end"> go to Payment </Button> 
            </Link>
            <div class='mt-3'>
              <Link to={`/transaction/${transactions.car_license}`}> History </Link>
            </div> 
          </>
          )
          
        })}
        
        </div>        
      </div>
    </>
  )
}

export default CarPage;