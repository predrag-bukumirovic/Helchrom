import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";
import mainImg from "../assets/images/OurCore/c-s1.webp";
import mainImg1 from "../assets/images/OurCore/c-s2.webp";
import mainImg2 from "../assets/images/OurCore/c-s3.webp";
import core1 from "../assets/images/OurCore/1.1.png";
import coreflip1 from "../assets/images/OurCore/1.2.webp";
import core2 from "../assets/images/OurCore/2.1.png";
import coreflip2 from "../assets/images/OurCore/2.2.webp";
import core3 from "../assets/images/OurCore/3.1.png";
import coreflip3 from "../assets/images/OurCore/3.2.webp";
import core4 from "../assets/images/OurCore/4.1.png";
import coreflip4 from "../assets/images/OurCore/4.2.webp";
import quote from "../assets/images/OurCore/quote.png";
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

export default function OurCore() {
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

        <div className="video-envi padding30">
          <h3 className="title">HOW CAN WE SUPPORT YOU?</h3>

          <iframe
            className="video-yt"
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
