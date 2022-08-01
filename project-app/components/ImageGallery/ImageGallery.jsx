import { Carousel } from 'antd';
import React from 'react';
import Style from './ImageGallery.module.css'

const ImageGallery = () => (
<div className={Style.imageContainer}>
  <Carousel className={Style.Carousel} autoplay>
        <div >
        <img className={Style.imageCSS} src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
        </div>
        <div >
            <img className={Style.imageCSS} src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
        </div>
        <div >
            <img className={Style.imageCSS} src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
        </div>
        <div >
            <img className={Style.imageCSS} src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
        </div>
  </Carousel>
  </div>
);

export default ImageGallery;