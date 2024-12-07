import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmployeeStats from '../components/EmployStats';

const Stats = () => (
  <Container style={{ backgroundColor: '#d4edda' }}>
    <Row className="my-4">
      <Col>
      <h1 className="text-center bg-primary text-white p-2 rounded">Estadísticas</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <EmployeeStats />
      </Col>
    </Row>
  </Container>
);

export default Stats;
