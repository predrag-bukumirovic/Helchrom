import React from "react";
import "../assets/scss/slider.scss";
import mainImg from "../assets/images/Pharma/pharma1.jpg";
import mainImg1 from "../assets/images/Pharma/pharma2.jpg";
import mainImg2 from "../assets/images/Pharma/pharma3.jpg";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import icon1 from "../assets/images/Pharma/1.png";
import icon2 from "../assets/images/Pharma/2.png";
import icon3 from "../assets/images/Pharma/3.png";
import icon4 from "../assets/images/Pharma/4.png";
import icon5 from "../assets/images/Pharma/5.png";

export default function Pharma() {
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
      <div className="padding30">
        <h1 className="title">PHARMACEUTICALS</h1>

        <center>
          <p>
            We provide best-in-class process and chemical engineering solutions
            in all segments of pharmaceutical and biotechnology manufacturing.{" "}
          </p>

          <p>
            Our reference list includes pharmaceutical innovator companies and
            various pharmaceutical forms:
          </p>
        </center>

        <div className="box-pharma">
          <div>
            <center>
              <img src={icon1} alt="ICON1" />
            </center>

            <p>
              <b>LIQUID preparations</b>
              <br /> (solutions, suspensions, emulsions)
            </p>
          </div>
          <div>
            <center>
              <img src={icon2} alt="ICON1" />
            </center>

            <p>
              <b>SEMI-SOLID preparations</b> (ointments, creams, gels etc.){" "}
            </p>
          </div>
          <div>
            <center>
              <img src={icon3} alt="ICON3" />
            </center>

            <p>
              <b>
                OPHTHALMIC <br /> preparations
              </b>
            </p>
          </div>
          <div>
            <center>
              <img src={icon4} alt="ICON4" />
            </center>
            <p>
              <b>PARENTERAL preparations</b>
            </p>
          </div>
          <div>
            <center>
              <img src={icon5} alt="ICON5" />
            </center>

            <p>
              <b>SOLID preparations</b> <br /> (powders, tablets, capsules etc.)
            </p>
          </div>
        </div>

        <p>
          The comprehensive complexity of pharmaceutical formulations`
          manufacturing comes from their direct purpose to heal and improve
          quality of life, alongside strict adherence to regulations. Our team
          has combined engineering and pharmaceutical expertise to support the
          needs of our partners.
        </p>

        <p>
          For our list of references and details on our projects, please contact
          Miloš Ivošević,{" "}
          <a href="mailto:milos.ivosevic@helmchron.com">
            milos.ivosevic@helmchron.com
          </a>
        </p>
      </div>
    </div>
  );
}
