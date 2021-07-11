import React, {Component} from 'react';
import {Container,Col,Row,Card,InputGroup,FormControl,Button,Form,FormGroup} from "react-bootstrap";
import Styles from "../assets/css/style.css"
class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={8}>

                            <Card>
                                <br/>
                                <Container>
                                    <div className="Row">
                                        <div className="col">
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="Search Email"
                                                    aria-label="Search Email"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <InputGroup.Append>
                                                    <Button variant="info">Search</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className="Row">
                                        <div className="col">
                                            <span color={"red"} >Email is Not Found</span>

                                        </div>
                                    </div>

                                </Container>
                                <br/>
                        </Card>
                            <br/>
                            <Card>
                                <br/>
                                <Container>
                                    <div className="Row">
                                        <div className="col">

                                                <Form>
                                                    <Form.Group>
                                                        <Form.File id="exampleFormControlFile1"  />
                                                    </Form.Group>
                                                    <Button className="text-align-left" variant="info">Upload</Button>
                                                </Form>


                                        </div>
                                    </div>
                                    <div className="Row">
                                        <div className="col">
                                            <span color={"red"} >Email is Not Found</span>

                                        </div>
                                    </div>

                                </Container>
                                <br/>
                        </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Index;
