import React, { Component, useState } from 'react';
import './AddToCart.css';

const AddToCart = () => {

    let [count, setCount] = useState(0);
    let [cartItems, setCartItems] = useState([]);
    const onAdd = (item, qty) => {
        if(!cartItems) {
            for(let i = 0; i < qty; i++) {
                setCartItems(() => cartItems.push(item))
            }
        } else {
            let tempCart = [...cartItems]
            for(let i = 0; i < qty; i++) {
                tempCart.push(item)
            }
            setCartItems(cartItems = tempCart)
        }
        setCount(count = 0);
        console.log(cartItems, count);
    };
    
    return (
        <div className='addToCart-container'>
            <div className='addToCart-counter'>
                <button onClick={() => setCount(count + 1)}>+</button>
                <p>{count}</p>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div className='addToCart-submit'>
                <button onClick={() => onAdd("Fall Limited Edition Sneakers", count)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default AddToCart;