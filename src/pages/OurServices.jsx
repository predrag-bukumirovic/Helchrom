import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";

import mainImg from "../assets/images/OurServices/services1.webp";
import mainImg1 from "../assets/images/OurServices/services2.webp";
import mainImg2 from "../assets/images/OurServices/services3.webp";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

const mainImages = [mainImg, mainImg1, mainImg2];

export default function OurServices() {
  return (
    <div className="container-main">
      <Helmet>
        <title>Out services | Helmchron</title>
      </Helmet>
      <CCarousel className="slider-main" controls transition="crossfade">
        {mainImages.map((image, index) =>
          <CCarouselItem key={index}>
            <CImage
              className="d-block w-100"
              src={image}
              alt={`slide ${index + 1}`}
            />
          </CCarouselItem>
        )}
      </CCarousel>
      <div className="box-img">
        {mainImages.map((image, index) =>
          <div key={index}>
            <img src={image} alt="Main" />
          </div>
        )}
      </div>

      <div className="">
    

        <h1 className="title">OUR SERVICES</h1>
        
      </div>
    </div>
  );
}
