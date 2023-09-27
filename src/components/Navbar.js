import { Container, Nav } from "react-bootstrap"

function Navbar() {
    return(
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
                    <Nav.Link href="\">Home</Nav.Link>
                    <Nav.Link href="\payment">Payment</Nav.Link> 
                </Nav>

                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default Navbar