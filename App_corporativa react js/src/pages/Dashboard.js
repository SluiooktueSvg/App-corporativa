import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import EmployeeStats from '../components/EmployStats';

const Dashboard = () => (
  <Container  style={{ backgroundColor: '#d4edda' }}>
    <Row className="my-4">
      <Col>
        <h1 className="text-center bg-primary text-white p-2 rounded">Panel de Control</h1>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Resumen</Card.Title>
            <Card.Text>
              Bienvenido, este es el sistema de gestion de porterias.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <EmployStats />
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
