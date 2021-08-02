import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/images/logo-png.png';
import {Nav,Card} from "react-bootstrap";
function Header(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Navbar.Brand href="#home"><img alt={"bdcalling logo"} src={logo} height={50} width={150}/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link href="#deets">Registration</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                    </Card>
            </div>
            </div>
        </div>
    );
}

export default Header;
