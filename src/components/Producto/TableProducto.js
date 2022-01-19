import React, { useState } from 'react';
import { Card, Dimmer, Loader, Table, Button, Icon } from 'semantic-ui-react';

function TableProducto({ productos, getProducto, deleteProducto, loading }) {
  const [tableHeader, setTableHeader] = useState(['Nombre', 'Precio', 'Stock', 'Acciones']);
  return (
    <Card fluid>
      <Card.Content>
        <Dimmer
          active={loading}
          inverted>
        <Loader>Cargando...</Loader>
        </Dimmer>
        <Table
          celled
          textAlign='center'>
          <Table.Header>
            <Table.Row>
              {
                tableHeader.map(item => (
                  <Table.HeaderCell key={ item }>{ item }</Table.HeaderCell>
                ))
              }
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              productos.map(item => (
                <Table.Row key={item.id}>
                  <Table.Cell>{ item.nombre }</Table.Cell>
                  <Table.Cell>{ item.precio }</Table.Cell>
                  <Table.Cell>{ item.stock }</Table.Cell>
                  <Table.Cell>
                    <Button
                      positive 
                      icon
                      onClick={() => getProducto(item.id)}>
                      <Icon name='eye'/>
                    </Button>
                    <Button
                      negative 
                      icon
                      onClick={() => deleteProducto(item.id)}>
                      <Icon name='delete'/>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </Card.Content>
    </Card>
  )
}

export { TableProducto }