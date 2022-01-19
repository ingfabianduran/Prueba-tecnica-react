import React from 'react';
import { Form, Button, Card } from 'semantic-ui-react';
import { Select } from 'formik-semantic-ui-react';
import { Formik } from 'formik';
import { validateVenta } from '../../validators/validators';

function FormVenta({ productos, venta, submitVenta, loading }) {
  return (
    <Formik
      enableReinitialize
      initialValues={venta}
      validationSchema={validateVenta}
      onSubmit={values => submitVenta(values) }>
      {({ values, handleSubmit, handleChange, errors, touched }) => {
        return (
          <Card 
            fluid>
            <Card.Content>
              <Card.Header>Venta</Card.Header>
            </Card.Content>
            <Card.Content>
              <Form 
                onSubmit={handleSubmit}
                loading={loading}
                autoComplete='off'>
                <Form.Group>
                  <Select
                    fluid
                    width={8}
                    label='Producto'
                    placeholder='Seleccione un Producto'
                    name='producto_id'
                    options={productos}
                    error={touched.producto_id && errors.producto_id ? errors.producto_id : null}>
                  </Select>
                  <Form.Input
                    type='number'
                    fluid
                    width={8}
                    label='Cantidad'
                    placeholder='Cantidad del producto' 
                    name='cantidad_producto'
                    onChange={handleChange}
                    value={values.cantidad_producto}
                    error={touched.cantidad_producto && errors.cantidad_producto ? errors.cantidad_producto : null}>
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