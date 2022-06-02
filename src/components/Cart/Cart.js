import React from 'react';
import deleteIcon from '../../images/icon-delete.svg';
import './Cart.css';

const Cart = ({qty, setQty, cartItems, setCartItems, cartQty}) => {

    const onRemoveFromCart = (item) => {
        setCartItems(cartItems = []);
    }
      
    const cartFiltered = cartItems.filter((val, ind, self) => {
        return self.indexOf(val) === ind;
    })
  
    return(
        <div className="cart-modal-container">
            <div className="cart-title">
                <p>Cart</p>
            </div>
            <div className="cart-items">
                {
                    cartQty < 1 ?
                    <p>Your cart is empty</p> :
                    <div className='cart-has-items'>
                        <div className='chi-items'>
                            {[cartFiltered].map((item, index) => {
                                return <p key={index}>{item} x {cartQty}</p>
                            })}
                            <img src={deleteIcon} onClick={onRemoveFromCart} alt='delete'></img>
                        </div>
                        <div className='chi-checkout'>
                            <button>Checkout</button>
                        </div>
                    </div>
                }
                
            </div>
        </div>

    )

}

  export default Cart;