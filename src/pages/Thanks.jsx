import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import mainImg from "../assets/images/Contact/contact1.png";
import mainImg1 from "../assets/images/Contact/contact2.png";
import mainImg2 from "../assets/images/Contact/contact3.png";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/slider.scss";

export default function Thanks() {
  return (
    <div>
      {/* Slider start */}
      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg1} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg2} alt="slide 3" />
          </CCarouselItem>
        </CCarousel>

        <div className="box-img">
          <div>
            <img src={mainImg} alt="Main" />
          </div>
          <div>
            <img src={mainImg1} alt="Main" />
          </div>
          <div>
            <img src={mainImg2} alt="Main" />
          </div>
        </div>
      </div>
      {/* Slider end */}

      <div className="container-main thanks">
        <h1>Thank you for getting in touch.</h1>
        <p>Our team will reply to your inquiry as soon as possible.</p>
        <p>Helmchron team</p>
      </div>
    </div>
  );
}
