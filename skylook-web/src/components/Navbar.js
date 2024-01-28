import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarsite() {
    return (
        <>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo_png"
              src="/site/Logo.png"
              width="100px"
              height="60px"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
      </>
  
    )
}


export default Navbarsite;
