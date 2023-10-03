import { Button, Col, Container, Row} from "react-bootstrap";
import '../styles/Page.css'
import { Link } from "react-router-dom";
import { useState } from "react";



function LoginPage() {
    const [license, setLicense] = useState([])

    return(
        <Container >
            <Row className="login-page">
                <Col>
                    <h1 style={{textAlign:"center"}}>แอพจอดรถ</h1>
                </Col>
                <hr />
            </Row>

            <Row className="login-page">
                <Col>              
                    <div class="form-outline mb-4"> 
                        <label class="form-label" for="license">เลขทะเบียนรถยนต์</label>
                        <input 
                            type="text" 
                            id="license" 
                            class="form-control" 
                            placeholder="เช่น กก1111"
                            onChange={e => setLicense(e.target.value)}
                        />
                    </div>

                    <div class="text-center">
                        <Link to={`/home/${license}`}>
                            <Button role="button" >Sign in</Button>
                        </Link>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;