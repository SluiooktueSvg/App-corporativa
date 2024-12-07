import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { loadFromLocalStorage } from '../utils/localStorageUtils';

const EmployeeStats = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    earlyCheckIns: 0,
    percentageEarly: 0,
  });

  useEffect(() => {
    const employees = loadFromLocalStorage('employees');
    const filtered = employees.filter((emp) => {
      const checkInTime = new Date(emp.checkIn);
      const hours = checkInTime.getHours();
      const minutes = checkInTime.getMinutes();
      return hours === 7 && minutes <= 30;
    });

    const percentageEarly =
      employees.length > 0 ? (filtered.length / employees.length) * 100 : 0;

    setStats({
      totalEmployees: employees.length,
      earlyCheckIns: filtered.length,
      percentageEarly: percentageEarly.toFixed(2),
    });
  }, []);

  return (
    <Card style={{ backgroundColor: '#d4edda' }}>
      <Card.Body>
        <Card.Title>Estadísticas de Ingreso</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Total de Empleados</th>
              <th>Ingresos Tempranos (7:00-7:30 AM)</th>
              <th>Porcentaje de Ingresos Tempranos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stats.totalEmployees}</td>
              <td>{stats.earlyCheckIns}</td>
              <td>{stats.percentageEarly}%</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default EmployeeStats;
