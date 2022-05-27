import React, { useState, useCallback } from 'react';
import brandIcon from '../../images/logo.svg';
import cartIcon from '../../images/icon-cart.svg';
import './Navbar.css';

const Navbar = () => {

    const [ sideCollapsed, setSideCollapsed ] = useState(false);

    const toggleSideCollapsed = useCallback(() => {
      console.log('toggle')
      setSideCollapsed(collapsed => !collapsed)
    }, [ setSideCollapsed ])

    return(
        <div className='navbar-container'>
            <div id="sidebar" className='sidebar-menu' onClick={toggleSideCollapsed} collapsed={sideCollapsed}>
                <a>Collections</a>
                <a>Men</a>
                <a>Women</a>
                <a>About</a>
                <a>Contact</a>
            </div>
            <div id="open-button">
                <button className="openbtn">☰</button>
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