import React, { Component } from 'react';
import cartIcon from '../../images/icon-cart.svg';
import './Navbar.css';

const Navbar = () => {


    return(
        <div className='navbar-container'>
            <div className='navbar-title'>
                <h1>sneakers</h1>
            </div>
            <div className='navbar-menu'>
                <ul>
                    <li><a>Collections</a></li>
                    <li><a>Men</a></li>
                    <li><a>Women</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className='navbar-cart'>
                <img src={cartIcon} alt='cart'></img>
            </div>
            <div className='navbar-profile'>
            <img src={require('../../images/image-avatar.png')} alt='avatar'></img>
            </div>
        </div>
    )

}

export default Navbar;