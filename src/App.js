import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductInfo from './components/ProductInfo/ProductInfo';
import './App.css';

const App = () => {
  const [qty, setQty] = useState(0);
  const [cartItems, setCartItems] = useState([]);


  return (
    <div className="App">
      <Navbar 
        qty={qty} 
        setQty={setQty} 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
      />
      <ProductInfo         
        qty={qty} 
        setQty={setQty} 
        cartItems={cartItems} 
        setCartItems={setCartItems}  
      />              
    </div>
  );
}

export default App;