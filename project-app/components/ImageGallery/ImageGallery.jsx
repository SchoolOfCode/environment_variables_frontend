import { Carousel } from "antd";
import React from "react";
import Style from "./ImageGallery.module.css";

const ImageGallery = () => (
  <div className={Style.imageContainer}>
    <Carousel className={Style.Carousel} autoplay>
      <div>
        <img
          className={Style.imageCSS}
          src="https://i.imgur.com/PZ1asZs.png"
        />
      </div>
      <div>
        <img
          className={Style.imageCSS}
          src="https://i.imgur.com/n40QdrD.png"
        />
      </div>

      <div>
        <img
          className={Style.imageCSS}
          src="https://i.imgur.com/DZQN7GR.png"
        />
      </div>
      <div>
        <img
          className={Style.imageCSS}
          src="https://i.imgur.com/yC2aMtf.png"
        />
      </div>
      <div>
        <img
          className={Style.imageCSS}
          src="https://www.rochdale.gov.uk/images/litter_pick.jpg"
        />
      </div>
    </Carousel>
  </div>
);

export default ImageGallery;
