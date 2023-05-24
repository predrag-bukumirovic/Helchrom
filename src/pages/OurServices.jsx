import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";
import mainImg from "../assets/images/OurServices/services1.webp";
import mainImg1 from "../assets/images/OurServices/services2.webp";
import mainImg2 from "../assets/images/OurServices/services3.webp";

import core1 from "../assets/images/OurServices/1.1.png";
import coreflip1 from "../assets/images/OurServices/1.2.png";
import core2 from "../assets/images/OurServices/2.1.png";
import coreflip2 from "../assets/images/OurServices/2.2.png";
import core3 from "../assets/images/OurServices/3.1.png";
import coreflip3 from "../assets/images/OurServices/3.2.png";
import core4 from "../assets/images/OurServices/4.1.png";
import coreflip4 from "../assets/images/OurServices/4.2.png";
import quote from "../assets/images/OurServices/quote.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

export default function OurServices() {
  return (
    <div className="container-main">
      <Helmet>
        <title>Out services | Helmchron</title>
      </Helmet>
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

      <div className="">
        <div className="quote-box">
          <img className="quote" src={quote} alt="quote" />
        </div>

        <h1 className="title">OUR SERVICES</h1>

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

        <div style={{ marginTop: 0 }} className="video-envi">
          <h3 style={{ marginTop: 0 }} className="title">
            HOW CAN WE SUPPORT YOU?
          </h3>

          <iframe
            width="600"
            height="300"
            src="https://www.youtube.com/embed/83NXIfcKSzs"
            title="Helmchron - Our Business areas and Services"
            frameborder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>

        <center>
          <p>
            For detailed information on services, projects and references,
            please contact us at{" "}
            <a href="mailto:milos.ivosevic@helmchron.com">
              milos.ivosevic@helmchron.com
            </a>
          </p>
        </center>
      </div>
    </div>
  );
}
