import React from 'react';
import galleryPreview1 from '../../images/image-product-1-thumbnail.jpg';
import galleryPreview2 from '../../images/image-product-2-thumbnail.jpg';
import galleryPreview3 from '../../images/image-product-3-thumbnail.jpg';
import galleryPreview4 from '../../images/image-product-4-thumbnail.jpg';
import './ProductPhoto.css';

const ProductPhoto = () => {

    const expandImg = (img) => {
        let getExpImg = document.getElementById("expandedImg");
        getExpImg.src = img.src;
        console.log(img.src)
      }

    return(
        <div className='productPhoto-container'>
            <div className='productPhoto-selected-img'>
                <img id='expandedImg' src={expandImg} alt='product-photo-main'></img>
            </div>
            <div class="photo-reel">
                <div class="column">
                    <img src={galleryPreview1} alt="first" onclick={expandImg}></img>
                </div>
                <div class="column">
                    <img src={galleryPreview2} alt="second" onclick={expandImg}></img>
                </div>
                <div class="column">
                    <img src={galleryPreview3} alt="third" onclick={expandImg}></img>
                </div>
                <div class="column">
                    <img src={galleryPreview4} alt="fourth" onclick={expandImg}></img>
                </div>
            </div>

        </div>
    )

}

export default ProductPhoto;