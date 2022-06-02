import React, { useState } from 'react';
import './Cart.css';

const Cart = ({qty, setQty, cartItems, setCartItems}) => {

    const onRemoveFromCart = (item) => {
        if(!cartItems) return

        let tempCart = [...cartItems];
        
        for(let i = 0; i < tempCart.length; i++) {
            if(tempCart[i] == item) {
                tempCart.splice(i,1);
                setCartItems(cartItems = tempCart);
                return
            }
        }
    }
  
    return(
        <div className="cart-modal-container">
            <div className="cart-title">
                <p>Cart</p>
            </div>
            <div className="cart-items">
                <p>Your cart is empty</p>
            </div>
        </div>

    )

}

  export default Cart;