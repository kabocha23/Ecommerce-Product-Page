import React, { Component } from 'react';
import './ProductInfo.css';

class ProductInfo extends Component {

    render() {
        return (
            <div className='productInfo-container'>
                <p id='productInfo-company'>Sneaker Company</p>
                <p id='productInfo-title'>Fall Limited Edition Sneakers</p>
                <p id='productInfo-description'>These low-profile sneakers are your perfecy casual wear companion. Featuring a durable rubber outer sole, they'll withstandeverything the weather can offer</p>
                <div className='productInfo-price'>
                    <p>$125.00</p>
                    <p>50%</p>
                    <p>$250.00</p>
                </div>
            </div>
        )
    }
}

export default ProductInfo;