import React, { useState, useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import { FormProducto } from './components/Producto/FormProducto';
import { TableProducto } from './components/Producto/TableProducto';
import { FormVenta } from './components/Venta/FormVenta';
import { apiGet, apiPost, apiDelete, apiPut } from './data/api';
import 'react-toastify/dist/ReactToastify.css';
import './css/index.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [productosBySelect, setProductosBySelect] = useState([]);
  const [loadingVenta, setLoadingVenta] = useState(false);
  const [loadingProducto, setLoadingProducto] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const [typeSubmit, setTypeSubmit] = useState('POST');
  const [venta, setVenta] = useState({producto_id: '', cantidad_producto: ''});
  const [producto, setProducto] = useState({id: '', nombre: '', referencia: '', precio: '', peso: '', categoria: '', stock: ''});
  
  useEffect(() => {
    getProductos();
  }, []);
  
  const getProductos = () => {
    apiGet('http://127.0.0.1:8000/api/productos/index').then(res => {
      const mapProductosBySelect = res.productos.map(item => {
        return { key: item.id, text: item.nombre, value: item.id };
      });
      setProductos(res.productos);
      setProductosBySelect(mapProductosBySelect);
    }).catch(err => {
      toast.error('Algo extraño ocurrio aquí');
    });
  };

  const getProducto = (idProducto) => {
    setLoadingTable(true);
    apiGet(`http://127.0.0.1:8000/api/productos/${idProducto}`).then(res => {
      setTimeout(() => {
        setLoadingTable(false);
        setTypeSubmit('PUT');
        if (res.producto !== null) {
          setProducto({
            id: res.producto.id, 
            nombre: res.producto.nombre, 
            referencia: res.producto.referencia, 
            precio: res.producto.precio, 
            peso: res.producto.peso, 
            categoria: res.producto.categoria, 
            stock: res.producto.stock});
        } else {
          toast.error('Producto no encontrado en la Base de Datos');
        }
      }, 2000);
    }).catch(err => {
      toast.error('Algo extraño ocurrio aquí');
    });
  };

  const submitProducto = (values) => {
    setLoadingProducto(true);
    if (typeSubmit === 'POST') {
      setProducto(values);
      apiPost('http://127.0.0.1:8000/api/productos/store', values).then(res => {
        setTimeout(() => {
          setLoadingProducto(false);
          setProducto({id: '', nombre: '', referencia: '', precio: '', peso: '', categoria: '', stock: ''});
          toast.success(`El producto ${res.producto.nombre} ha sido registrado correctamente`);
          getProductos();
        }, 2000);
      }).catch(err => {
        toast.error('Algo extraño ocurrio aquí');
      });
    } else if (typeSubmit === 'PUT') {
      apiPut(`http://127.0.0.1:8000/api/productos/${producto.id}`, values).then(res => {
        setTimeout(() => {
          setLoadingProducto(false);
          setTypeSubmit('POST');
          setProducto({id: '', nombre: '', referencia: '', precio: '', peso: '', categoria: '', stock: ''});
          toast.success(`El producto ${res.producto.nombre} ha sido actualizado correctamente`);
          getProductos();
        }, 2000);
      }).catch(err => {
        toast.error('Algo extraño ocurrio aquí');
      });
    }
  };

  const deleteProducto = (idProducto) => {
    setLoadingTable(true);
    apiDelete(`http://127.0.0.1:8000/api/productos/${idProducto}`).then(res => {
      setTimeout(() => {
        setLoadingTable(false);
        toast.success(`El producto ${res.producto.nombre} ha sido eliminado correctamente`);
      }, 2000);
        getProductos();
    }).catch(err => {
      toast.error('Algo extraño ocurrio aquí');
    });
  };

  const submitVenta = (values) => {
    setVenta(values);
    setLoadingVenta(true);
    apiPost('http://127.0.0.1:8000/api/ventas/store', values).then(res => {
      setTimeout(() => {
        setLoadingVenta(false);
        setVenta({ producto_id: '', cantidad_producto: ''});
        if (res.status) toast.success(res.message);
        else toast.error(res.message);
      }, 2000);
      getProductos();
    }).catch(err => {
      toast.error('Algo extraño ocurrio aquí');
    });
  };

  return (
    <React.Fragment>
      <Container
        fluid
        className='row-main margin-container'>
        <ToastContainer toastClassName='font-main'></ToastContainer>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <FormProducto
                producto={producto}
                submitProducto={submitProducto}
                loading={loadingProducto}>
              </FormProducto>
            </Grid.Column>
            <Grid.Column width={8}>
              <FormVenta
                productos={productosBySelect}
                venta={venta}
                submitVenta={submitVenta}
                loading={loadingVenta}>
              </FormVenta>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <TableProducto
                productos={productos}
                getProducto={getProducto}
                deleteProducto={deleteProducto}
                loading={loadingTable}>
              </TableProducto>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
