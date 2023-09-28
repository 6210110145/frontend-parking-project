import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Form, Nav, Navbar } from 'react-bootstrap';

function PaymentPage() {
    /*const [payments, setPayments] = useState([])
    const [transactions, setTransactions] = useState([])
    */
   
    const [state, setState] = useState({
        car_license: "",
        car_province: "",
        payment_type: ""
    });

    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    /*
    const fetchPayment = () => {
        axios.get(`http://localhost:3001/payments/pay/${state.car_license}`)
        .then((res) => {
          console.log(res.data)
          setTransactions(res.data)
        })
        .catch((err) => { console.log(err) });
    }*/

    function handleSubmit(event) {
        event.preventDefault()
        const userPayment = {
            car_license: state.car_license,
            car_province: state.car_province,
            payment_type: state.payment_type
        }
        axios.put(`http://localhost:3001/payments`, userPayment)
        .then((res) => {
            (res.json())
            console.log(res.data)
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand > ชำระเงิน </Navbar.Brand>
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
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">
                    Search 
                </Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='first-page'>
            <div className='mt-5'>
                
                
                <Card className='text-center'>
                    <Card.Header>
                        <Card.Title > เลขป้ายทะเบียนป้าย </Card.Title>
                        <Card.Subtitle className="mb-2"> จังหวัด </Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text> เวลาจอด </Card.Text>
                        <Card.Text> จำนวนเงิน </Card.Text>
                    </Card.Body>
                </Card>

                <div className='jumbotron mt-3'>
                <Form onSubmit={handleSubmit} className='mt-3'>
                    <h3> ช่องทางการจ่าย </h3>
                    <Form.Group>
                        <Form.Label htmlFor='car_license'>
                            License: <input value={state.car_license} type='text' name="car_license" onChange={handleChange}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>                    
                        <Form.Label htmlFor='car_province'>
                            Province: <input value={state.car_province} type='text' name="car_province" onChange={handleChange}/>
                        </Form.Label>
                    </Form.Group>
                        <Form.Group>
                        <Form.Label htmlFor='payment_type'>
                            Type: <input value={state.payment_type} type='text' name="payment_type" onChange={handleChange}/>
                        </Form.Label>
                    </Form.Group>

                    <div class='text-center'>
                        <Button className='mt-3' type='submit'> pay </Button>{' '}
                    </div>
                    
                </Form>
                </div>
                </div>
            </div>
        </div>
    
    )
}
export default PaymentPage;