import React from 'react';
import { Form, Button, Card } from 'semantic-ui-react';
import { Select } from 'formik-semantic-ui-react';
import { Formik } from 'formik';

function FormVenta() {
  return (
    <Formik
      enableReinitialize>
      {({ values, handleSubmit, handleChange, errors, touched }) => {
        return (
          <Card 
            fluid>
            <Card.Content>
              <Card.Header>Nueva Venta</Card.Header>
            </Card.Content>
            <Card.Content>
              <Form 
                onSubmit={handleSubmit}
                autoComplete='off'>
                <Form.Group>
                  <Select
                    fluid
                    width={8}
                    label='Producto'
                    placeholder='Seleccione un Producto'
                    name='categoria'>
                  </Select>
                  <Form.Input
                    fluid
                    width={8}
                    label='Cantidad'
                    placeholder='Cantidad del producto' 
                    name='cantidad'
                    onChange={handleChange}>
                  </Form.Input>
                </Form.Group>
                  <Button primary type='submit'>Registrar</Button>
              </Form>
            </Card.Content>
          </Card>
        )
      }}
    </Formik>
  )
}

export { FormVenta };