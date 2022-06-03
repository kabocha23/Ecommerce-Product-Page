import React from 'react';
import galleryPreview1 from '../../images/image-product-1-thumbnail.jpg';
import galleryPreview2 from '../../images/image-product-2-thumbnail.jpg';
import galleryPreview3 from '../../images/image-product-3-thumbnail.jpg';
import galleryPreview4 from '../../images/image-product-4-thumbnail.jpg';
import './ProductPhoto.css';

const ProductPhoto = () => {

    const expandImg = (imgs) => {
        // Get the expanded image
        let getExpImg = document.getElementById("expandedImg");
        // Use the same src in the expanded image as the image being clicked on from the grid
        getExpImg.src = imgs.src;
        // Show the container element (hidden with CSS)
        getExpImg.parentElement.style.display = "block";
      }

    return(
        <div className='productPhoto-container'>
            <div className='productPhoto-container'>
                <img src={require('../../images/image-product-1.jpg')} alt='product-1'></img>
            </div>
            <div class="photo-reel">
                <div class="column">
                    <img src={galleryPreview1} alt="first" onclick={expandImg(this)}></img>
                </div>
                <div class="column">
                    <img src={galleryPreview2} alt="second" onclick={expandImg(this)}></img>
                </div>
                <div class="column">
                    <img src={galleryPreview3} alt="third" onclick={expandImg(this)}></img>
                </div>
                <div class="column">
                    <img src={galleryPreview4} alt="fourth" onclick={expandImg(this)}></img>
                </div>
            </div>

        </div>
    )

}

export default ProductPhoto;