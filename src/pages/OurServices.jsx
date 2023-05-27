import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";
import mainImg from "../assets/images/OurServices/services1.webp";
import mainImg1 from "../assets/images/OurServices/services2.webp";
import mainImg2 from "../assets/images/OurServices/services3.webp";

import core1 from "../assets/images/OurServices/1.1.webp";
import coreflip1 from "../assets/images/OurServices/1.2.webp";
import core2 from "../assets/images/OurServices/2.1.webp";
import coreflip2 from "../assets/images/OurServices/2.2.webp";
import core3 from "../assets/images/OurServices/3.1.webp";
import coreflip3 from "../assets/images/OurServices/3.2.webp";
import core4 from "../assets/images/OurServices/4.1.webp";
import coreflip4 from "../assets/images/OurServices/4.2.webp";
import quote from "../assets/images/OurServices/quote.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

const mainImages = [mainImg, mainImg1, mainImg2];

const coreImages = [
  { main: core1, flip: coreflip1 },
  { main: core2, flip: coreflip2 },
  { main: core3, flip: coreflip3 },
  { main: core4, flip: coreflip4 }
];

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
        <div className="quote-box">
          <img className="quote" src={quote} alt="quote" />
        </div>

        <h1 className="title">OUR SERVICES</h1>

        <div className="core-item">
          {coreImages.slice(0, 2).map((image, index) =>
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={image.main} alt={`core ${index + 1}`} />
                </div>
                <div className="flip-card-back">
                  <img src={image.flip} alt={`core ${index + 1} flip`} />
                </div>
              </div>
              <center>
                <p href="/">Read more</p>
              </center>
            </div>
          )}
        </div>

        <div className="core-item">
          {coreImages.slice(2, 4).map((image, index) =>
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={image.main} alt={`core ${index + 3}`} />
                </div>
                <div className="flip-card-back">
                  <img src={image.flip} alt={`core ${index + 3} flip`} />
                </div>
              </div>
              <center>
                <p href="/">Read more</p>
              </center>
            </div>
          )}
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
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
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
