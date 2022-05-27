import React, { Component, useState } from 'react';
import cartIcon from '../../images/icon-cart.svg';
import './AddToCart.css';

const AddToCart = () => {

    let [qty, setQty] = useState(0);
    let [cartItems, setCartItems] = useState([]);

    const incrementQty = () => {
        setQty(qty + 1);
    }

    const decrementQty = () => {
        setQty(qty => Math.max(qty-1,0));
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
        setQty(qty = 0);
        console.log(cartItems, qty);
    };
    
    return (
        <div className='addToCart-container'>
            <div className='addToCart-counter'>
                <button onClick={decrementQty} disabled={qty === 0}>
                    <span className='addToCart-counter-change'>-</span>
                </button>
                <span className='addToCart-count'>{qty}</span>
                <button onClick={incrementQty}>
                    <span className='addToCart-counter-change'>+</span>
                </button>
            </div>
            <div className='addToCart-submit'>
                <button onClick={() => onAdd("Fall Limited Edition Sneakers", qty)} disabled={qty === 0}>
                    <img src={cartIcon} alt='cart'></img>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}

export default AddToCart;