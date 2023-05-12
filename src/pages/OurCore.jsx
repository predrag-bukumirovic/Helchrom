import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";
import mainImg from "../assets/images/c-s1.webp";
import mainImg1 from "../assets/images/c-s2.webp";
import mainImg2 from "../assets/images/c-s3.webp";
import core1 from "../assets/images/OurCore/1.1.png";
import coreflip1 from "../assets/images/OurCore/1.2.png";
import core2 from "../assets/images/OurCore/2.1.png";
import coreflip2 from "../assets/images/OurCore/2.2.png";
import core3 from "../assets/images/OurCore/3.1.png";
import coreflip3 from "../assets/images/OurCore/3.2.png";
import core4 from "../assets/images/OurCore/4.1.png";
import coreflip4 from "../assets/images/OurCore/4.2.png";
import quote from "../assets/images/OurCore/quote.png";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export default function OurCore() {
  return (
    <div className="container-main">
      {/* Slider start */}
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
      {/* Slider end */}

      <div className="box-text">
        <img className="quote" src={quote} alt="quote" />

        <h1 className="title">Our core competencies</h1>

        <div className="core-item">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={core1} alt="core 1" />
              </div>

              <div className="flip-card-back">
                <img src={coreflip1} alt="core 1 flip" />
              </div>
            </div>
            <center>
              <p href="/">Read more</p>
            </center>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={core2} alt="core 2" />
              </div>

              <div className="flip-card-back">
                <img src={coreflip2} alt="core 2 flip" />
              </div>
            </div>

            <center>
              <p href="/">Read more</p>
            </center>
          </div>
        </div>

        <div className="core-item">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={core3} alt="core 3" />
              </div>

              <div className="flip-card-back">
                <img src={coreflip3} alt="core 3 flip" />
              </div>
            </div>
            <center>
              <p href="/">Read more</p>
            </center>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={core4} alt="core 4" />
              </div>

              <div className="flip-card-back">
                <img src={coreflip4} alt="core 4 flip" />
              </div>
            </div>

            <center>
              <p href="/">Read more</p>
            </center>
          </div>
        </div>

        <center>
          <p>
            For detailed information on our competencies, projects and
            references, please contact{" "}
            <a href="mailto:milos.ivosevic@helmchron.com">
              milos.ivosevic@helmchron.com
            </a>
          </p>
        </center>
      </div>
    </div>
  );
}
