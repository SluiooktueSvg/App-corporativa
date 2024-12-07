import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EmployeeForm = ({ onSave, currentEmployee }) => {
  const [formData, setFormData] = useState(
    currentEmployee || { id: Date.now(), name: '', area: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ id: Date.now(), name: '', area: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Área</Form.Label>
        <Form.Control
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default EmployeeForm;
