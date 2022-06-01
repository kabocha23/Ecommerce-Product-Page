import React from 'react';
import './Cart.css';

const Cart = () => {
  
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