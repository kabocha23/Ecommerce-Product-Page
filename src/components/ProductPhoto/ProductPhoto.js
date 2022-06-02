import React from 'react';
import './ProductPhoto.css';

const ProductPhoto = () => {


    return(
        <div className='productPhoto-container'>
            <img src={require('../../images/image-product-1.jpg')} alt='product-1'></img>
        </div>
    )

}

export default ProductPhoto;