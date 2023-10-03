import { useState } from "react"
import React from "react"
import { Button, Container, Nav, Navbar, Table } from "react-bootstrap"
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const Transaction = () => {
    const [history, setHistory] = useState([])
    const { license } = useParams()

    const fetchHistory = () => {
        axios.get(`http://localhost:3001/transactions/license/${license}`)
        .then((res) => {
            setHistory(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchHistory();
    }, [])

    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand > ประวัติ </Navbar.Brand>
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
        
        <div className="first-page">
        <div className='mt-5'>
            {Object.values(history).slice(0,1).map((car) => ( 
                <div className='text-center mb-3'>
                    <h1> {car.car_license}</h1>
                    <h4> {car.car_province}</h4>
                </div>        
            ))}

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Parking Name</th>
                    <th>Gate In</th>
                    <th>Time in</th>
                    <th>Gate Out</th>
                    <th>Time out</th>
                    <th>Time Total(minutes)</th>
                    <th>Cost Total(Baht)</th>
                </tr>
            </thead>

            <tbody>
                {Object.values(history).map((transaction) => { 
                    return (
                    <tr>
                        <td>{transaction.date}</td>
                        <td>{transaction.parking_name}</td>
                        <td>{transaction.gate_nameIn}</td>
                        <td>{new Date(transaction.time_in).toLocaleTimeString()}</td>
                        <td>{transaction.gate_nameOut}</td>
                        <td>{new Date(transaction.time_out).toLocaleTimeString()}</td>
                        <td>{transaction.time_total}</td>
                        {Object.values(transaction.payments).map((payment) => (
                            <td> {payment.payment_total} </td>
                        ))}
                    </tr>)      
                })}
            </tbody>
        </Table>
                
        </div>
            <div className="mt-3">
            {Object.values(history).slice(0,1).map((transaction) => ( 
                <Link to={`/home/${transaction.car_license}`}>
                    <Button variant="outline-danger"> กลับ </Button> 
                </Link>         
            ))}
            
            </div>
        </div>
        </>
    )
}

export default Transaction