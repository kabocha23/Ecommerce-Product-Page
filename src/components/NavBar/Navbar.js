import React, { useState, useRef, useEffect } from 'react';
import brandIcon from '../../images/logo.svg';
import cartIcon from '../../images/icon-cart.svg';
import './Navbar.css';

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleIsNav = () => {
        setIsNavExpanded(!isNavExpanded)
        console.log(isNavExpanded)
    }

    return(
        <div className='navbar-container'>
            <div className="toggle-button">
                <button 
                    onClick={toggleIsNav}
                >☰</button>
            </div>
            <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>                    
                </ul>

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

};

export default Navbar;