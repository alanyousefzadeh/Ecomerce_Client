import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>Landing Page</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
