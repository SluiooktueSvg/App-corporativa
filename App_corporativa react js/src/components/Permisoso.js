import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorageUtils';

const Permissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ employee: '', reason: '', justification: '' });

  useEffect(() => {
    setPermissions(loadFromLocalStorage('permisoso'));
  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPermissions = [...permissions, { ...formData, id: Date.now() }];
    setPermissions(updatedPermissions);
    saveToLocalStorage('permisoso', updatedPermissions);
    setFormData({ employee: '', reason: '', justification: '' });
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Registrar Permiso/Incapacidad
      </Button>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Motivo</th>
            <th>Justificación</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((perm) => (
            <tr key={perm.id}>
              <td>{perm.employee}</td>
              <td>{perm.reason}</td>
              <td>{perm.justification}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar un Permiso y/o Incapacidad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Empleado</Form.Label>
              <Form.Control
                type="text"
                name="employee"
                value={formData.employee}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Motivo</Form.Label>
              <Form.Control
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Justificación</Form.Label>
              <Form.Control
                as="textarea"
                name="justification"
                value={formData.justification}
                onChange={handleChange}
                rows={3}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Guardar!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Permissions;
