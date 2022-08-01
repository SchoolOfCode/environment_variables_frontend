import { Carousel } from 'antd';
import React from 'react';
import Style from './ImageGallery.module.css'

const ImageGallery = () => (
<div className={Style.imageContainer}>
  <Carousel className={Style.image} autoplay>
        <div >
            <img  src="https://i2-prod.manchestereveningnews.co.uk/incoming/article591425.ece/ALTERNATES/s810/C_71_article_1314725_image_list_image_list_item_0_image.jpg"/>
        </div>
        <div >
            <img  src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
        </div>
        <div >
            <img  src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
        </div>
        <div >
            <img  src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
        </div>
  </Carousel>
  </div>
);

export default ImageGallery;