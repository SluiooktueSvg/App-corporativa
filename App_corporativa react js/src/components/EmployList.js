import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const EmployeeList = ({ onEdit, onDelete }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedData);
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Área</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{employee.name}</td>
            <td>{employee.area}</td>
            <td>
              <Button variant="warning" onClick={() => onEdit(employee)}>Editar</Button>
              <Button variant="danger" onClick={() => onDelete(employee.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeList;
