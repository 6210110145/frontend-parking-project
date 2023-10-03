import '../App.css';
import '../styles/Page.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Form, Nav, Navbar, Modal } from 'react-bootstrap';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
   
const PaymentPage = () => {
    const [data, setData] = useState([]);
    const { license } = useParams()

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const fetchTransaction = () => {
        axios.get(`http://localhost:3001/transactions/payment/${license}`)
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchTransaction();
    }, []);
    
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
    <>
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
                    <Nav.Link href={`/home/${license}`}>Home</Nav.Link>
                    <Nav.Link href={`/payment/${license}`}>Payment</Nav.Link>
                    <Nav.Link href={`/transaction/${license}`}> History </Nav.Link> 
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
            <div className='mt-5'>             
                {Object.values(data).slice(0,1).map(() => {
                    return (
                        <Card className='text-center'>
                        <Card.Header>
                            <Card.Title > {data.car_license} </Card.Title>
                            <Card.Subtitle className="mb-2"> {data.car_province} </Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text> เวลาจอด: {data.time_total} นาที </Card.Text>
                            {Object.values(data.payments).slice(0,1).map((pay) => {
                                return(
                                    <Card.Text> จำนวนเงิน: {pay.payment_total} บาท</Card.Text>
                                )
                            })}                            
                        </Card.Body>
                        </Card>
                    )   
                })}               
                
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
                        <Button variant="primary" onClick={handleShow}>
                            pay
                        </Button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>ยืนยันช่องทางการชำระเงิน</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                แน่ใจหรือไม่?
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                ปิด
                            </Button>
                            {Object.values(data).slice(0,1).map(() => (
                                <Link href={`/home/${data.car_license}`}>
                                    <Button 
                                    variant="primary" 
                                    type='submit' 
                                    onClick={handleSubmit} 
                                    >
                                        ยืนยัน
                                    </Button>
                                </Link>                                
                            ))}
                            
                            </Modal.Footer>
                        </Modal>
                    </div>   
                </Form>
                </div>
            </div>

        </div>
    </>
    )
}

export default PaymentPage;