import { Button, Col, Container, Row, Form } from "react-bootstrap";


function LoginPage() {
    return(
        <Container>
            <Row>
                <Col>
                    <h1 style={{textAlign:"center"}}>แอพจอดรถ</h1>
                </Col>
                <hr />
                <Col>
                    <div class="col d-flex justify-content-center">
                    </div> 
                </Col>
            </Row>
            <hr />

            <Row>
                <Col>
                <Form>
                
                <div class="form-outline mb-4">
                    
                    <label class="form-label" for="form2Example1">โปรดกรอก: เลขทะเบียนรถยนต์</label>
                    <input type="text" id="form2Example1" class="form-control" />
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <Button href='\home' role="button" >Sign in</Button>
                </div>
                
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;