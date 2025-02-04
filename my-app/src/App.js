import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ nombre: '', cantidad: '', precio: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, product]);
    setProduct({ nombre: '', cantidad: '', precio: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Productos</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={product.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Cantidad:</label>
            <input
              type="number"
              name="cantidad"
              value={product.cantidad}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Precio:</label>
            <input
              type="number"
              name="precio"
              value={product.precio}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Agregar Producto</button>
        </form>
        <ul>
          {products.map((prod, index) => (
            <li key={index}>
              {prod.nombre} - {prod.cantidad} unidades - ${prod.precio}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
