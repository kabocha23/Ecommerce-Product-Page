import React, { Component, useState } from 'react';
import './AddToCart.css';

const AddToCart = () => {

    let [count, setCount] = useState(0);
    let [cartItems, setCartItems] = useState([]);

    const incrementQty = () => {
        setCount(count + 1);
    }

    const decrementQty = () => {
        setCount(count => Math.max(count-1,0));
    }

    const onAdd = (item, qty) => {
        if(cartItems[item]) {
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
                <button onClick={decrementQty} disabled={count === 0}>-</button>
                <p>{count}</p>
                <button onClick={incrementQty}>+</button>
            </div>
            <div className='addToCart-submit'>
                <button onClick={() => onAdd("Fall Limited Edition Sneakers", count)} disabled={count === 0}>Add to Cart</button>
            </div>
        </div>
    )
}

export default AddToCart;