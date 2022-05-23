import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ProductPhoto from '../ProductPhoto/ProductPhoto';
import ProductInfo from '../ProductInfo/ProductInfo';
import AddToCart from '../AddToCart/AddToCart';
import './ProductMain.css';

class ProductMain extends Component{

    render(){
        return(
            <div className='page-container'>
                <Navbar />
                <ProductPhoto />
                <ProductInfo />
                <AddToCart />
            </div>
        )
    }
}

export default ProductMain;