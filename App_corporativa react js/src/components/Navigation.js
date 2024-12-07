import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Control de Acceso</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/employees">Empleados</Nav.Link>
          <Nav.Link as={Link} to="/stats">Estadísticas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
