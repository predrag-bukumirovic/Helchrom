import React, { useState, useEffect, useRef } from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/home.scss";
import "../assets/scss/services.scss";
import "../assets/scss/references.scss";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import mainImg from "../assets/images/References/Slika1.jpg";
import mainImg1 from "../assets/images/References/Slika2.jpg";
import mainImg2 from "../assets/images/References/Slika3.png";

// images references
import Vetter from "../assets/images/References/VetterPharma.png";
import Novartis from "../assets/images/References/Novartis.png";
import RocheDiagnostics from "../assets/images/References/RocheDiagnostics.png";
import Bachem from "../assets/images/References/Bachem.png";
import DSM from "../assets/images/References/DSM.png";
import Destilla from "../assets/images/References/Destilla.png";
import primopus from "../assets/images/References/primopus.png";
import Jungbunzlauer from "../assets/images/References/Jungbunzlauer.png";
import Exyte from "../assets/images/References/Exyte.png";
import BASF from "../assets/images/References/BASF.png";
import Bayer from "../assets/images/References/Bayer.png";
import Vinex from "../assets/images/References/Vinex.png";
import Tesla from "../assets/images/References/Tesla.png";
import Jaenschwalde from "../assets/images/References/Jaenschwalde.png";
import Udarnaya from "../assets/images/References/Udarnaya.png";
import MVV from "../assets/images/References/MVV.png";
import OMV from "../assets/images/References/OMV.png";
import Projectsperyear from "../assets/images/References/Projectsperyear.png";
import Servicesdistribution from "../assets/images/References/Servicesdistribution.png";

// card
import card1 from "../assets/images/References/cards/1.png";
import card2 from "../assets/images/References/cards/2.png";
import card3 from "../assets/images/References/cards/3.png";
import card4 from "../assets/images/References/cards/4.png";
import card5 from "../assets/images/References/cards/5.png";
import card6 from "../assets/images/References/cards/6.png";
import card7 from "../assets/images/References/cards/7.png";
import card8 from "../assets/images/References/cards/8.png";
import card9 from "../assets/images/References/cards/9.png";
import card10 from "../assets/images/References/cards/10.png";
import card11 from "../assets/images/References/cards/11.png";
import card12 from "../assets/images/References/cards/12.png";
import card13 from "../assets/images/References/cards/13.png";
import card14 from "../assets/images/References/cards/14.png";
import card15 from "../assets/images/References/cards/15.png";
import card16 from "../assets/images/References/cards/16.png";
import card17 from "../assets/images/References/cards/17.png";
import { useTranslation } from "react-i18next";
import Insights from "../components/Insights";

const mainImages = [mainImg, mainImg1, mainImg2];

const Modal = ({ isOpen, toggleModal, imageSrc }) => {
  const [modalState, setModalState] = useState(isOpen);

  useEffect(
    () => {
      setModalState(isOpen);

      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
    [isOpen]
  );

  const handleClose = () => {
    toggleModal();
  };

  return (
    <div
      className={`modal ${modalState ? "open" : "closed"}`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img onClick={handleClose} src={imageSrc} alt="Slika" />
      </div>
    </div>
  );
};

export default function References() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleButtonClick = imageSrc => {
    setCurrentImage(imageSrc);
    toggleModal();
  };

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleClick = index => {
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className="slider">
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
      </div>

      <div className="container-main padding30">
        <h2 className="title" data-aos="fade-up">
          {t("references.title")}
        </h2>

        <p
          data-aos="fade-up"
          style={{ textAlign: "center" }}
          dangerouslySetInnerHTML={{ __html: t("references.sub_text") }}
        />
      </div>

      <div className="container-main padding30">
        <div className="icon-core references">
          <div data-aos="zoom-in" onClick={() => handleClick(0)}>
            {t("navbar.pharma")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(1)}>
            {t("navbar.food")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(2)}>
            {t("navbar.chemicals")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(3)}>
            {t("navbar.electronics")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(4)}>
            {t("navbar.energy")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(5)}>
            {t("navbar.oil")}
          </div>
        </div>
      </div>

      <div className="references-container">
        {/* row 1 */}
        <div
          ref={sectionRefs[0]}
          style={{ background: "var(--light-blue-color)" }}
          className="reference"
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 data-aos="fade-right" className="title">
                {t("references.pharma.vettre.title")} <br />{" "}
                <span className="text-stroke">2022</span>
              </h3>
              <p data-aos="fade-right">
                {t("references.pharma.vettre.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card1)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
              <Modal
                isOpen={modalOpen}
                toggleModal={toggleModal}
                imageSrc={currentImage}
              />
            </div>
            <div className="ref-img" data-aos="fade-left">
              <img src={Vetter} alt="Vetter" />
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text" data-aos="fade-left">
              <h3 className="title">
                {t("references.pharma.novartis.title")} <br />
                <span className="text-stroke">2019</span>
              </h3>
              <p>
                {t("references.pharma.novartis.text")}
              </p>
              <span
                onClick={() => handleButtonClick(card2)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-right">
              <img src={Novartis} alt="Novartis" />
            </div>
          </div>
        </div>

        {/* row 3 */}
        <div
          style={{ background: "var(--light-blue-color)" }}
          className="reference"
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text" data-aos="fade-right">
              <h3 className="title">
                {t("references.pharma.roche.title")} <br />
                <span className="text-stroke">2020</span>
              </h3>
              <p>
                {t("references.pharma.roche.text")}
              </p>
              <span
                onClick={() => handleButtonClick(card3)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>

            <div className="ref-img" data-aos="fade-left">
              <img src={RocheDiagnostics} alt="RocheDiagnostics" />
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text" data-aos="fade-left">
              <h3 className="title">
                {t("references.pharma.bachem.title")} <br />
                <span className="text-stroke">2023</span>
              </h3>
              <p>
                {t("references.pharma.bachem.text")}
              </p>
              <span
                onClick={() => handleButtonClick(card4)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-right">
              <img src={Bachem} alt="Bachem" />
            </div>
          </div>
        </div>

        {/* row 5 */}
        <div
          ref={sectionRefs[1]}
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text" data-aos="fade-right">
              <h3 className="title">
                {t("references.food.dsm.title")} <br />
                <span className="text-stroke green">2021</span>
              </h3>

              <p>
                {t("references.food.dsm.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card5)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-left">
              <img src={DSM} alt="DSM" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text" data-aos="fade-left">
              <h3 className="title">
                {t("references.food.destilla.title")}
                <br /> <span className="text-stroke green">2023</span>
              </h3>
              <p>
                {t("references.food.destilla.text")}
              </p>
              <span
                onClick={() => handleButtonClick(card6)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-right">
              <img src={Destilla} alt="Destilla" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text" data-aos="fade-right">
              <h3 className="title">
                {t("references.food.primopus.title")} <br />
                <span className="text-stroke green">2023</span>
              </h3>
              <p>
                {t("references.food.primopus.text")}
              </p>
              <span
                onClick={() => handleButtonClick(card7)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>

            <div className="ref-img" data-aos="fade-left">
              <img src={primopus} alt="primopus" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text" data-aos="fade-left">
              <h3 className="title">
                {t("references.food.jungbunzlauer.title")} <br />
                <span className="text-stroke green">2022</span>
              </h3>
              <p>
                {t("references.food.jungbunzlauer.text")}
              </p>
              <span
                onClick={() => handleButtonClick(card8)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-right">
              <img src={Jungbunzlauer} alt="Jungbunzlauer" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text" data-aos="fade-right">
              <h3 className="title">
                {t("references.food.exyte.title")} <br />
                <span className="text-stroke green">2021</span>
              </h3>

              <p>
                {t("references.food.exyte.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card9)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-left">
              <img src={Exyte} alt="Exyte" />
            </div>
          </div>
        </div>

        <div className="reference" ref={sectionRefs[2]}>
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text" data-aos="fade-left">
              <h3 className="title">
                {t("references.chemicals.basf.title")} <br />
                <span className="text-stroke orange">2022</span>
              </h3>

              <p>
                {t("references.chemicals.basf.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card10)}
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-right">
              <img src={BASF} alt="Basf" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text" data-aos="fade-right">
              <h3 className="title">
                {t("references.chemicals.bayer.title")} <br />
                <span className="text-stroke orange">2023</span>
              </h3>

              <p>
                {t("references.chemicals.bayer.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card11)}
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-left">
              <img src={Bayer} alt="Bayer" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text" data-aos="fade-left">
              <h3 className="title">
                {t("references.chemicals.vinex.title")} <br />
                <span className="text-stroke orange">2018</span>
              </h3>

              <p>
                {t("references.chemicals.vinex.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card12)}
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-right">
              <img src={Vinex} alt="Vinex" />
            </div>
          </div>
        </div>

        <div
          ref={sectionRefs[3]}
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                ELECTRONICS
              </h4>
            </div>
            <div className="text" data-aos="fade-right">
              <h3 className="title">
                {t("references.electronics.title")} <br />
                <span className="text-stroke blue">2023</span>
              </h3>

              <p>
                {t("references.electronics.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card13)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-left">
              <img src={Tesla} alt="Tesla" />
            </div>
          </div>
        </div>

        <div className="reference" ref={sectionRefs[4]}>
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENERGY
              </h4>
            </div>
            <div className="text" data-aos="fade-left">
              <h3 className="title">
                {t("references.energy.jaenschwalde.title")}
                <br />
                <span className="text-stroke green">2022</span>
              </h3>

              <p>
                {t("references.energy.jaenschwalde.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card14)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-right">
              <img src={Jaenschwalde} alt="Jaenschwalde" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENERGY
              </h4>
            </div>
            <div className="text" data-aos="fade-right">
              <h3 className="title">
                {t("references.energy.udarnaya.title")} <br />
                <span className="text-stroke green">2017</span>
              </h3>

              <p>
                {t("references.energy.udarnaya.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card15)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-left">
              <img src={Udarnaya} alt="Udarnaya" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENERGY
              </h4>
            </div>
            <div className="text" data-aos="fade-left">
              <h3 className="title">
                {t("references.energy.mvv.title")} <br />
                <span className="text-stroke green">2020</span>
              </h3>

              <p>
                {t("references.energy.mvv.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card16)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-right">
              <img src={MVV} alt="MVV" />
            </div>
          </div>
        </div>

        <div
          ref={sectionRefs[5]}
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                OIL & GAS
              </h4>
            </div>
            <div className="text" data-aos="fade-right">
              <h3 className="title">
                {t("references.omv.title")} <br />
                <span className="text-stroke orange">2016</span>
              </h3>

              <p>
                {t("references.omv.text")}
              </p>

              <span
                onClick={() => handleButtonClick(card17)}
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                {t("read_more")}
              </span>
            </div>
            <div className="ref-img" data-aos="fade-left">
              <img src={OMV} alt="OMV" />
            </div>
          </div>
        </div>
      </div>

      <div className="insights container-main padding30">
        <h2 className="title" data-aos="fade-up">
          {t("references.insights")}
        </h2>
        <center>
          <p data-aos="fade-up">
            {t("references.share")}
          </p>
        </center>

        <Insights />

        <div className="statistics container-main">
          <div data-aos="fade-right">
            <span style={{ margin: "0 0 30px 12px" }}>
              {t("references.year")}
            </span>
            <img
              className="per-year"
              src={Projectsperyear}
              alt="Projectsperyear"
            />
          </div>
          <div className="months" data-aos="zoom-in">
            <span>
              {t("references.duration")}
            </span>
            <div>
              <p>
                <b>11</b> <br />
                {t("references.months")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left">
            <span style={{ margin: "0 0 30px 20px" }}>
              {t("references.distribution")}
            </span>
            <img
              className="distribution"
              src={Servicesdistribution}
              alt="Servicesdistribution"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="container-main"
          style={{ marginTop: 100 }}
        >
          <center>
            <p style={{ fontSize: 11 }}>
              {t("references.note")}
            </p>
          </center>
        </div>
      </div>
    </div>
  );
}
