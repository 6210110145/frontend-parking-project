import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

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
    useEffect(() => {
        const fetchTransaction = () => {
            const result = axios.get(`http://localhost:3001/transactions/${license}`)
            
            setTransactions({
                posts: result.data
            })
        }
        fetchTransaction()  
    }, [license]);
    */
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
                    <Nav.Link href="\">Home</Nav.Link>
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
                <h1>Payment Page</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='car_license'>
                        License: <input value={state.car_license} type='text' name="car_license" onChange={handleChange}/>
                    </label>
                    <label htmlFor='car_province'>
                        Province: <input value={state.car_province} type='text' name="car_province" onChange={handleChange}/>
                    </label>
                    <label htmlFor='payment_type'>
                        Type: <input value={state.payment_type} type='text' name="payment_type" onChange={handleChange}/>
                    </label>
                    
                    <button type='submit'> pay </button>
                </form>

            </div>
        </div>
        </div>
    )
}
export default PaymentPage;