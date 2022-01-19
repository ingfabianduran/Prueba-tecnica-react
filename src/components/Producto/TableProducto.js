import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';

function TableProducto() {
  const [tableHeader, setTableHeader] = useState(['Nombre', 'Precio', 'Stock', 'Acciones']);
  return (
    <Table
      celled>
      <Table.Header>
        {
          tableHeader.map(item => (
            <Table.HeaderCell key={ item }>{ item }</Table.HeaderCell>
          ))
        }
      </Table.Header>
      <Table.Body>
        
      </Table.Body>
    </Table>
  )
}

export { TableProducto }