import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => (
  <Container className="text-center mt-5" style={{ backgroundColor: '#d4edda' }}>
    <Row>
      <Col>
        <h1 className="text-center bg-primary text-white p-2 rounded">404</h1>
        <p  className="text-center text-white p-2 rounded">Página no encontrada.</p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
