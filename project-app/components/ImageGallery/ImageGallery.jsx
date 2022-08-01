import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const ImageGallery = () => (
  <Carousel autoplay>
    <div>
      <img style={contentStyle} src="https://i2-prod.manchestereveningnews.co.uk/incoming/article591425.ece/ALTERNATES/s810/C_71_article_1314725_image_list_image_list_item_0_image.jpg"/>
    </div>
    <div>
      <img style={contentStyle} src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
    </div>
    <div>
    <img style={contentStyle} src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
    </div>
    <div>
    <img style={contentStyle} src="https://www.belvederecl.com/wp-content/uploads/2019/05/Community-cleanup-picture.jpg"/>
    </div>
  </Carousel>
);

export default ImageGallery;