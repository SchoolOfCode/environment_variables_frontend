import { Carousel } from "antd";
import React from "react";
import Style from "./ImageGallery.module.css";

const ImageGallery = () => (
  <div className={Style.imageContainer}>
    <Carousel className={Style.Carousel} autoplay>
      <div>
        <img
          className={Style.imageCSS}
          src="https://www.bansteadscouts.co.uk/wp-content/uploads/1st-Tatts-litter-picking.jpg"
        />
      </div>
      <div>
        <img
          className={Style.imageCSS}
          src="https://yourharrogate.co.uk/wp-content/uploads/2021/04/Open-Country-litter-picking-Apr-21.jpg"
        />
      </div>

      <div>
        <img
          className={Style.imageCSS}
          src="https://www.bansteadscouts.co.uk/wp-content/uploads/1st-Tatts-litter-picking4.jpg"
        />
      </div>
      <div>
        <img
          className={Style.imageCSS}
          src="https://petersfieldsociety.org.uk/wp-content/uploads/2022/05/litter-group-Petersfield-Society-March-2022-1080x675.jpg"
        />
      </div>
      <div>
        <img
          className={Style.imageCSS}
          src="https://www.nats.aero/wp-content/uploads/2015/06/NATS-Early-Careers-Scheme-engineers-pick-up-litter-in-Whiteley.jpg"
        />
      </div>
    </Carousel>
  </div>
);

export default ImageGallery;
