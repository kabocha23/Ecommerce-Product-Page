import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductInfo from './components/ProductInfo/ProductInfo';
import './App.css';

const App = () => {
  let [qty, setQty] = useState(0);
  let [cartItems, setCartItems] = useState([]);

  const onAdd = (item, qty) => {
    let tempCart = [...cartItems];

    for(let i = 0; i < qty; i++) {
        tempCart.push(item)
    };

    setCartItems(cartItems = tempCart);
    setQty(qty = 0);
    console.log(cartItems, qty);
  };

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