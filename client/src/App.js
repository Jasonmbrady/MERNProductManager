import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import AddProduct from './components/AddProduct';
import OneProduct from './components/OneProduct';
import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className="App">
      <AddProduct />
      <Router>
        <AllProducts path="/api/products" />
        <OneProduct path="/api/products/:id" />
      </Router>
    </div>
  );
}

export default App;
