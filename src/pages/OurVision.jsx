import React, { useState } from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/mission-vision.scss";
import "../assets/scss/home.scss";
import mainImg from "../assets/images/Vision/vision1.png";
import mainImg1 from "../assets/images/Vision/vision2.webp";
import mainImg2 from "../assets/images/Vision/vision3.webp";
import icon1 from "../assets/images/Vision/1.png";
import icon2 from "../assets/images/Vision/2.png";
import icon3 from "../assets/images/Vision/3.png";
import icon4 from "../assets/images/Vision/4.png";
import icon5 from "../assets/images/Vision/5.png";
import bigLogo from "../assets/images/Home/bigLogo.png";
import imgTesti from "../assets/images/Vision/imgtesti.jpg";
import Kawasaki from "../assets/images/Vision/Kawasaki.png";

import partnerships from "../assets/images/Vision/partnerships.png";
import portfolio from "../assets/images/Vision/portfolio.png";
import team from "../assets/images/Vision/team.png";
import Innovation from "../assets/images/Vision/Innovation.png";
import sustainability from "../assets/images/Vision/sustainability.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useTranslation } from "react-i18next";

export default function OurVision() {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal1 = () => {
    setShowModal(partnerships);
  };
  const openModal2 = () => {
    setShowModal(portfolio);
  };
  const openModal3 = () => {
    setShowModal(team);
  };
  const openModal4 = () => {
    setShowModal(Innovation);
  };
  const openModal5 = () => {
    setShowModal(sustainability);
  };

  return (
    <div>
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
      <div className="box-img container-main">
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
      <div className=" container-main">
        <h1 className="title">
          {t("title_vm")}
        </h1>
        <center>
          <p>
            {t("vm_text1")}
          </p>

          <p>
            {t("vm_text2")}
          </p>
          <p>
            {t("vm_text3")}
          </p>
        </center>
        <div className={showModal ? "modal-img " : "show"} onClick={closeModal}>
          <img src={showModal} alt="Modal Images" />
        </div>
        <div>
          <h2 className="title">OUR STRATEGIC FOCUS AREAS</h2>

          <div className="strategic padding30">
            <div onClick={openModal1}>
              <img src={icon1} alt="icon1" />
            </div>
            <div onClick={openModal2}>
              <img src={icon2} alt="icon2" />
            </div>
            <div onClick={openModal3}>
              <img src={icon3} alt="icon3" />
            </div>
            <div onClick={openModal4}>
              <img src={icon4} alt="icon4" />
            </div>
            <div onClick={openModal5}>
              <img src={icon5} alt="icon5" />
            </div>
          </div>

          <center>
            <p>
              Click on the icon to read more about each of our strategic focus
              areas.
            </p>
          </center>
        </div>
      </div>

      <div className="facts-box">
        <div className="facts  container-main">
          <div>
            <h2>OUR VISION</h2>
            <p>
              We deliver high-quality process and chemical engineering solutions
              that are meant to enhance the quality of life and keep our
              environment healthy for the coming generations.
            </p>

            <h2>OUR MISSION</h2>

            <p>
              We are a reliable partner of choice for leading global chemicals
              and pharmaceutical manufacturers in achieving more effective,
              innovative, and sustainable ways of producing safe, qualitative,
              and novel products for everyone.{" "}
            </p>
          </div>

          <div>
            <img src={bigLogo} alt="Big Logo" />
          </div>
        </div>
      </div>

      <div className="kawasaki container-main padding30">
        <div>
          <img src={imgTesti} alt="imgTesti" />

          <img src={Kawasaki} alt="Kawasaki" />
        </div>

        <p style={{ margin: 0 }}>
          Download our{" "}
          <a href="../HelmchronBrochure.pdf" download>
            new corporate brochure
          </a>
        </p>
      </div>
    </div>
  );
}
