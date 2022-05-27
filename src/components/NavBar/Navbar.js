import React, { Component } from 'react';
import brandIcon from '../../images/logo.svg';
import cartIcon from '../../images/icon-cart.svg';
import './Navbar.css';

const Navbar = () => {

    const openNav = () => {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("sidebar-button").style.marginLeft = "250px";
    }
      
    const closeNav = () => {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("sidebar-button").style.marginLeft= "0";
    }

    return(
        <div className='navbar-container'>
            <div id="sidebar" className='sidebar-menu'>
                <a href="javascript:void(0)" className="closebtn" onclick={closeNav}>×</a>
                <a>Collections</a>
                <a>Men</a>
                <a>Women</a>
                <a>About</a>
                <a>Contact</a>
            </div>
            <div id="open-button">
                <button className="openbtn" onclick={openNav}>☰</button>
            </div>
            <div className='navbar-brand'>
                <img src={brandIcon} alt='brand-logo'></img>
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