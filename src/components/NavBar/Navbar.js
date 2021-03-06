import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import brandIcon from '../../images/logo.svg';
import cartIcon from '../../images/icon-cart.svg';
import avatarIcon from '../../images/image-avatar.png';
import './Navbar.css';

const Navbar = ({qty, setQty, cartItems, setCartItems}) => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isCartModal, setIsCartModal] = useState(false);

    const cartQty = cartItems.length;  

    const toggleIsNav = () => {
        setIsNavExpanded(!isNavExpanded)
    }

    const toggleCartModal = () => {
        setIsCartModal(!isCartModal)
    }

    return(
        <div className='navbar-container'>
            <div className='toggle-button'>
                <button onClick={toggleIsNav}>☰</button>
            </div>
            <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
                <ul>
                    <li><a href='#'>Collections</a></li>
                    <li><a href='#'>Men</a></li>
                    <li><a href='#'>Women</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>                    
                </ul>
            </div>
            <div className='navbar-brand'>
                <img src={brandIcon} alt='brand-logo'></img>
            </div>
            <div className='nav-menu-fs'>
                <div className='nav-menu-fs-sub'>
                    <a href='#'>Collections</a>
                    <a href='#'>Men</a>
                    <a href='#'>Women</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                </div>                
            </div>
            <div className='navbar-cart'>
                <img 
                    id='navbar-cart-logo'
                    src={cartIcon} 
                    alt='cart'
                    onClick={toggleCartModal} 
                ></img>
                {
                    cartQty < 1 ? 
                    '' : 
                    <div className='cart-qty-popup'>
                            <p>{cartQty}</p>
                    </div>
                }
                <div className='cart-modal'>
                    {isCartModal ? 
                        <Cart 
                            qty={qty} 
                            setQty={setQty} 
                            cartItems={cartItems} 
                            setCartItems={setCartItems}
                            cartQty={cartQty}
                        />
                        :''
                    }     
                </div>

            </div>
            <div className='navbar-profile'>
                <img src={avatarIcon} alt='avatar'></img>
            </div>
        </div>
    )

};

export default Navbar;