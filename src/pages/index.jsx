import React, { Component } from "react";
import {
    Container,
    Col,
    Row,
    Card,
    InputGroup,
    FormControl,
    Button,
    Form,
} from "react-bootstrap";
import "../assets/css/style.css";
import SingleMailChecker from "../component/single_mail_checker";
import ListMailChecker from "../component/list_mail_checker";
class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col></Col>
                        <br />

                        <Col xs={8}>
                            <SingleMailChecker />

                            <br />

                            <ListMailChecker />
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                <br />
            </React.Fragment>
        );
    }
}

export default Index;
