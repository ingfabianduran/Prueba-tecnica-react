import * as yup from 'yup';

function defaultMessage() {
  const messages = {
    required: 'El campo es requerido',
    string: 'El campo debe ser tipo texto',
    number: 'El campo debe ser numerico'
  };
  return messages;
}

function validateProducto() {
  const objectValidator = yup.object({
    nombre: yup.string(defaultMessage().string).required(defaultMessage().required),
    referencia: yup.number(defaultMessage().number).required(defaultMessage().required),
    precio: yup.number(defaultMessage().number).required(defaultMessage().required),
    peso: yup.number(defaultMessage().number).required(defaultMessage().required),
    categoria: yup.string(defaultMessage().string).required(defaultMessage().required),
    stock: yup.number(defaultMessage().number).required(defaultMessage().required),
  });
  return objectValidator;
}

function validateVenta() {
  const objectValidator = yup.object({
    producto_id: yup.string(defaultMessage().string).required(defaultMessage().required),
    cantidad_producto: yup.number(defaultMessage().number).required(defaultMessage().required),
  });
  return objectValidator;
}

export { validateProducto, validateVenta };