import React, { Component, useState } from 'react';
import './AddToCart.css';

const AddToCart = () => {

    let [count, setCount] = useState(0);
    let [cartItems, setCartItems] = useState([]);
    const onAdd = (count) => {
        console.log(count)
    };
    
    return (
        <div className='addToCart-container'>
            <div className='addToCart-counter'>
                <button onClick={() => setCount(count + 1)}>+</button>
                <p>{count}</p>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div className='addToCart-submit'>
                <button onClick={() => onAdd(count)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default AddToCart;