import React, { useState } from 'react';
import { Form, Button, Card } from 'semantic-ui-react';
import { Select } from 'formik-semantic-ui-react';
import { Formik } from 'formik';

function FormProducto() {
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
      enableReinitialize>
      {({ values, handleSubmit, handleChange, errors, touched }) => {
        return (
          <Card 
            fluid>
            <Card.Content>
              <Card.Header>Nuevo Producto</Card.Header>
            </Card.Content>
            <Card.Content>
              <Form 
                onSubmit={handleSubmit}
                autoComplete='off'>
                  <Form.Group>
                    <Form.Input
                      fluid
                      width={8}
                      label='Nombre'
                      placeholder='Nombre del producto' 
                      name='nombre'
                      onChange={handleChange}>
                    </Form.Input>
                    <Form.Input
                      fluid
                      width={8}
                      label='Referencia'
                      placeholder='Referencia del producto' 
                      name='referencia'
                      onChange={handleChange}>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group>
                    <Form.Input
                      fluid
                      width={8}
                      label='Precio'
                      placeholder='Precio del producto' 
                      name='precio'
                      onChange={handleChange}>
                    </Form.Input>
                    <Form.Input
                      fluid
                      width={8}
                      label='Peso'
                      placeholder='Peso del producto' 
                      name='peso'
                      onChange={handleChange}>
                    </Form.Input>
                  </Form.Group>
                  <Form.Group>
                    <Select
                      fluid
                      width={8}
                      label='Categoria'
                      placeholder='Categoria del producto'
                      name='categoria'
                      options={categorias}>
                    </Select>
                    <Form.Input
                      fluid
                      width={8}
                      label='Stock'
                      placeholder='Stock del producto' 
                      name='stock'
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

export { FormProducto };