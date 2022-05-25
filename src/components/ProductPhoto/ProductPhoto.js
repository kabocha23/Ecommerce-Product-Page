import React, { Component } from 'react';
import './ProductPhoto.css';

class ProductPhoto extends Component{

    render(){
        return(
            <div className='productPhoto-container'>
                <img src={require('../../images/image-product-1.jpg')} alt='product-1'></img>
            </div>
        )
    }
}

export default ProductPhoto;