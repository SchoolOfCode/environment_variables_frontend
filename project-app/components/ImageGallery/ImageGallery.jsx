import { Carousel } from 'antd';
import React from 'react';
import Style from './ImageGallery.module.css'

const ImageGallery = () => (
<div className={Style.imageContainer}>
  <Carousel className={Style.Carousel} autoplay>
        <div >
        <img className={Style.imageCSS} src="https://www.keepscotlandbeautiful.org/media/1565400/dsc09849.jpg?anchor=center&mode=crop&width=1280&format=jpg&quality=80&slimmage=true&rnd=132387724350000000"/>
        </div>
        <div >
            <img className={Style.imageCSS} src="https://www.cpresomerset.org.uk/wp-content/uploads/sites/21/2020/01/litterpicking.jpg"/>
        </div>
        <div >
            <img className={Style.imageCSS} src="https://one.welhat.gov.uk/image/18951/WGC-guides-litter-picking/related.jpg?m=637581541221430000"/>
        </div>
        <div >
            <img className={Style.imageCSS} src="https://www.rochdale.gov.uk/images/litter_pick.jpg"/>
        </div>
  </Carousel>
  </div>
);

export default ImageGallery;