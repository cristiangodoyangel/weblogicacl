import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logica.png'; // Asegúrate de tener el logo ahí

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="shadow-sm" sticky="top" style={{ backgroundColor: '#1A2A44' }} variant="dark">

      <Container>
        <Navbar.Brand href="/">
        <img src={logo} alt="logo" height="80" />


        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="logica-link">Inicio</Nav.Link>
            <Nav.Link href="/servicios" className="logica-link">Servicios</Nav.Link>
            <Nav.Link href="/nosotros" className="logica-link">Nosotros</Nav.Link>
            <Nav.Link href="/contacto" className="logica-link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
