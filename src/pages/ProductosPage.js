import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductoItem } from '../components/ProductoItem';

const ProductosPage = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);
      
      const response = await axios.get('http://localhost:3000/api/products');
      setProductos(response.data);
      setLoading(false);
    };
    cargarProductos();
  }, []);

  return (
    <section class="holder">
      <h2 style={
        {
          fontWeight: 'bold', 
          fontSize: '3rem', 
          color: '#333', 
          marginBottom: '4rem', 
          textAlign: 'center'
        }
      }>Productos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        productos.map((producto) => (
          <ProductoItem key={producto.id} {...producto} />
        ))
      )}
    </section>
  )
}

export default ProductosPage;