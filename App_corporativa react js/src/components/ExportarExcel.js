import React from 'react';
import * as XLSX from 'xlsx';
import { Button } from 'react-bootstrap';

const ExportExcel = ({ data }) => {
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Empleados');
    XLSX.writeFile(workbook, 'empleados.xlsx');
  };

  return <Button onClick={handleExport}>Exportar a Excel</Button>;
};

export default ExportExcel;
