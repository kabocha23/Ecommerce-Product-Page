import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{

    render(){
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
                    Cart icon
                </div>
                <div className='navbar-profile'>
                    profile photo
                </div>
            </div>
        )
    }
}

export default Navbar;