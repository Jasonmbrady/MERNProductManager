import React, { useState } from 'react';
import { Router } from "@reach/router";
import './App.css';
import AddProduct from './components/AddProduct';
import OneProduct from './components/OneProduct';
import AllProducts from './components/AllProducts';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([{
    title: "",
    price: 0,
  }]);
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        console.log(res);
        setProducts(products.filter((product) => product._id !== id))
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="App">
      <AddProduct />
      {/* EditProduct in router with AddProduct */}
      <Router>
        <AllProducts
          path="/"
          products={products}
          setProducts={setProducts}
          deleteHandler={deleteHandler}
        />
        <OneProduct
          path="/products/:id"
          deleteHandler={deleteHandler}
        />
      </Router>
    </div>
  );
}

export default App;
