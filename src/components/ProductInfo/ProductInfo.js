import React, { Component } from 'react';
import ProductPhoto from '../ProductPhoto/ProductPhoto';
import AddToCart from '../AddToCart/AddToCart';
import './ProductInfo.css';

class ProductInfo extends Component {

    render() {
        return (
            <div className='productInfo-container'>
                <div className='productInfo-contents'>
                    <div className='productInfo-photo'>
                        <ProductPhoto />
                    </div>
                    <div className='productInfo-details'>
                        <p id='productInfo-company'>SNEAKER COMPANY</p>
                        <p id='productInfo-title'>Fall Limited Edition Sneakers</p>
                        <p id='productInfo-description'>These low-profile sneakers are your perfecy casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                        <div className='productInfo-price-container'>
                            <div className='productInfo-curr-price'>
                                <p>$125.00</p>
                            </div>
                            <div className='productInfo-discount'>
                                <p>50%</p>
                            </div>
                            <div className='productInfo-prev-price'>
                                <p>$250.00</p>
                            </div>
                        </div>
                        <div className='productInfo-add-to-cart'>
                            <AddToCart />
                        </div>
                    </div>             
                </div>
            </div>
        )
    }
}

export default ProductInfo;