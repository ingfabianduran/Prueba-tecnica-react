import React, { useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { FormProducto } from './components/Producto/FormProducto';
import { TableProducto } from './components/Producto/TableProducto';
import { FormVenta } from './components/Venta/FormVenta';
import 'react-toastify/dist/ReactToastify.css';
import './css/index.css';

function App() {
  return (
    <React.Fragment>
      <Container
        fluid
        className='row-main margin-container'>
        <ToastContainer toastClassName='font-main'></ToastContainer>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <FormProducto></FormProducto>
            </Grid.Column>
            <Grid.Column width={8}>
              <FormVenta></FormVenta>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <TableProducto></TableProducto>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
