import React from 'react';
import cartIcon from '../../images/icon-cart.svg';
import './AddToCart.css';

const AddToCart = ({qty, setQty, cartItems, setCartItems}) => {

    const incrementQty = () => {
        setQty(qty + 1);
    }

    const decrementQty = () => {
        setQty(qty => Math.max(qty-1,0));
    }

    const onAddToCart = (item, qty) => {

        let tempCart = [...cartItems];

        for(let i = 0; i < qty; i++) {
            tempCart.push(item)
        };

        setCartItems(cartItems = tempCart);
        setQty(qty = 0);
        console.log(cartItems, qty);
    }
    
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
                <button onClick={() => onAddToCart("Fall Limited Edition Sneakers", qty)} disabled={qty === 0}>
                    <img src={cartIcon} alt='cart'></img>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}

export default AddToCart;