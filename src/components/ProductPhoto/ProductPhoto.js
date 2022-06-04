import React, { useState } from 'react';
import galleryExpanded1 from '../../images/image-product-1.jpg';
import galleryExpanded2 from '../../images/image-product-2.jpg';
import galleryExpanded3 from '../../images/image-product-3.jpg';
import galleryExpanded4 from '../../images/image-product-4.jpg';
import './ProductPhoto.css';

const ProductPhoto = () => {

    const [imgSrc, setImgSrc] = useState(galleryExpanded1)

    const expandImg = (img) => {
        setImgSrc(img.target.src);
    }

    return(
        <div className='productPhoto-container'>
            <div className='productPhoto-selected-img'>
                <img id='expandedImg' src={imgSrc} alt='product-main'></img>
            </div>
            <div className="photo-reel">
                <div className="column">
                    <img 
                        src={galleryExpanded1}  
                        alt="first" 
                        onClick={expandImg}>
                    </img>
                </div>
                <div className="column">
                    <img 
                        src={galleryExpanded2}  
                        alt="second" 
                        onClick={expandImg}>
                    </img>
                </div>
                <div className="column">
                    <img 
                        src={galleryExpanded3}  
                        alt="third" 
                        onClick={expandImg}>
                    </img>
                </div>
                <div className="column">
                    <img 
                        src={galleryExpanded4}  
                        alt="fourth" 
                        onClick={expandImg}>
                    </img>
                </div>
            </div>

        </div>
    )

}

export default ProductPhoto;