import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios'
import { Button, Card, Container, Form, ListGroup, Nav, Navbar, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function CarPage() {
  const [payments, setPayments] = useState([])
  const [transactions, setTransactions] = useState([])
  //const [license, setLicense] = useState("")
  const {license} = useParams()

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

  useEffect(() => {
    fetchPayment();
    fetchTransaction();
  }, [])

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
            <Nav.Link href={`/home/${transactions.car_license}`}>Home</Nav.Link>
            <Nav.Link href={`/payment/${transactions.transaction_id}`}>Payment</Nav.Link>
            <Nav.Link href={`/transaction/${transactions.car_license}`}> History </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Button variant="danger" href="\">
              Log out
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='first-page'>
      <div class='mt-3 text-center'>
        <Form className="d-flex mt-3 mb-3 ">
          <Button 
            variant="success" 
            onClick={() => {
              fetchPayment();
              fetchTransaction();}}
          >
            Update
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
              <Card.Title> {[payments.license, payments.Text]} </Card.Title>
              <Card.Subtitle> {payments.province} </Card.Subtitle>
            </Card.Header>
       
            <ListGroup variant="flush">
              <ListGroup.Item> ชื่อลาน: {payments.parking} </ListGroup.Item>
              <ListGroup.Item> เวลาเข้า: {payments.time_in} </ListGroup.Item>
              <ListGroup.Item> เวลาออกที่ไม่เสียค่าบริการ: {payments.time_out_free} </ListGroup.Item>
              <ListGroup.Item> เวลาที่จอด: {payments.time_total} </ListGroup.Item>
              <ListGroup.Item> จำนวนเงิน: {payments.cost_total} </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link>
              <Link to={`/payment/${transactions.transaction_id}`}>
                <Button class="btn btn-primary float-end"> go to Payment </Button> 
              </Link>
            </Card.Link>

            <Card.Link>
              <Link to={`/transaction/${payments.license}`}>History </Link>
            </Card.Link>

            </Card.Body>
        </Card>
        ))}
        
        </div>        
      </div>
    </>
  )
}

export default CarPage;