import React, { useState } from 'react';
import { Form, Button, Card } from 'semantic-ui-react';
import { Select } from 'formik-semantic-ui-react';
import { Formik } from 'formik';
import { validateProducto } from '../../validators/validators';

function FormProducto({ producto, submitProducto, loading }) {
  const [categorias, setCategorias] = useState([
    { key: 'Frutas', text: 'Frutas', value: 'Frutas' },
    { key: 'Verduras', text: 'Verduras', value: 'Verduras' },
    { key: 'Cereales', text: 'Cereales', value: 'Cereales' },
    { key: 'Panes', text: 'Panes', value: 'Panes' },
    { key: 'Pastas', text: 'Pastas', value: 'Pastas' },
    { key: 'Carnes', text: 'Carnes', value: 'Carnes' },
    { key: 'Lacteos', text: 'Lacteos', value: 'Lacteos' }]);
  return (
    <Formik
      enableReinitialize
      initialValues={producto}
      validationSchema={validateProducto}
      onSubmit={values => submitProducto(values)}>
      {({ values, handleSubmit, handleChange, errors, touched }) => {
        return (
          <Card 
            fluid>
            <Card.Content>
              <Card.Header>Producto</Card.Header>
            </Card.Content>
            <Card.Content>
              <Form 
                onSubmit={handleSubmit}
                autoComplete='off'
                loading={loading}>
                  <Form.Group>
                    <Form.Input
                      fluid
                      width={8}
                      label='Nombre'
                      placeholder='Nombre del producto' 
                      name='nombre'
                      onChange={handleChange}
                      value={values.nombre}
                      error={touched.nombre && errors.nombre ? errors.nombre : null}>
                    </Form.Input>
                    <Form.Input
                      type='number'
                      fluid
                      width={8}
                      label='Referencia'
                      placeholder='Referencia del producto' 
                      name='referencia'
                      onChange={handleChange}
                      value={values.referencia}
                      error={touched.referencia && errors.referencia ? errors.referencia : null}>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      type='number'
                      fluid
                      width={8}
                      label='Precio'
                      placeholder='Precio del producto' 
                      name='precio'
                      onChange={handleChange}
                      value={values.precio}
                      error={touched.precio && errors.precio ? errors.precio : null}>
                    </Form.Input>
                    <Form.Input
                      type='number'
                      fluid
                      width={8}
                      label='Peso'
                      placeholder='Peso del producto' 
                      name='peso'
                      onChange={handleChange}
                      value={values.peso}
                      error={touched.peso && errors.peso ? errors.peso : null}>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group>
                    <Select
                      fluid
                      width={8}
                      label='Categoria'
                      placeholder='Categoria del producto'
                      name='categoria'
                      options={categorias}
                      error={touched.categoria && errors.categoria ? errors.categoria : null}>
                    </Select>
                    <Form.Input
                      type='number'
                      fluid
                      width={8}
                      label='Stock'
                      placeholder='Stock del producto' 
                      name='stock'
                      onChange={handleChange}
                      value={values.stock}
                      error={touched.stock && errors.stock ? errors.stock : null}>
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

export { FormProducto };