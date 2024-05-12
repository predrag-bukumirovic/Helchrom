import React, { useRef } from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";
import "../assets/scss/home.scss";
import mainImg from "../assets/images/OurCore/c-s1.jpg";
import mainImg1 from "../assets/images/OurCore/c-s2.webp";
import mainImg2 from "../assets/images/OurCore/c-s3.webp";
import Consulting from "../assets/images/OurCore/Consulting.png";
import Design from "../assets/images/OurCore/Design.png";
import management from "../assets/images/OurCore/management.png";
import Equipment from "../assets/images/OurCore/Equipment.png";
import Commissioning from "../assets/images/OurCore/Commissioning.png";
import logo from "../assets/images/logo.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const mainImages = [mainImg, mainImg1, mainImg2];

export default function OurCore() {
  const sectionRefs = [
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
      <Helmet>
        <title>Out services | Helmchron</title>
      </Helmet>

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
        <h1 className="title">
          {t("our_core.title")}
        </h1>

        <p dangerouslySetInnerHTML={{ __html: t("our_core.sub_text") }} />

        <div className="icon-core">
          <div onClick={() => handleClick(0)}>
            {t("our_core.icon_core.icon1")}
          </div>
          <div onClick={() => handleClick(1)}>
            {t("our_core.icon_core.icon2")}
          </div>
          <div onClick={() => handleClick(2)}>
            {t("our_core.icon_core.icon3")}
          </div>
          <div onClick={() => handleClick(3)}>
            {t("our_core.icon_core.icon4")}
          </div>
          <div onClick={() => handleClick(4)}>
            {t("our_core.icon_core.icon5")}
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs[0]}
        className="services"
        style={{ background: "var(--light-orange-color)", marginTop: 100 }}
      >
        <div style={{ gap: 100 }} className="services-row container-main">
          <div className="img-text" style={{ left: -50 }}>
            <img src={logo} alt="Slika" /> <span>HELMCHRON</span>
          </div>
          <div className="vertical-text">
            <h4>
              {t("services_vertical")}
            </h4>
          </div>

          <div className="img-row">
            <img src={Consulting} alt="Consulting" />
          </div>
          <div>
            <h3>
              {t("our_core.icon_core.icon1")}
            </h3>
            <ul
              dangerouslySetInnerHTML={{ __html: t("our_core.planning_text") }}
            />

            <a className="book-btn" href="/">
              {t("btn_references")}
            </a>
          </div>
        </div>
      </div>

      <div ref={sectionRefs[1]} className="services">
        <h3 style={{ width: "1440px" }} className="container-main">
          {t("our_core.icon_core.icon2")}
        </h3>
        <div className="services-row row-duble container-main">
          <div className="img-text" style={{ top: -120, left: -50 }}>
            <img src={logo} alt="Slika" />{" "}
            <span className="blue">HELMCHRON</span>
          </div>
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
              {t("services_vertical")}
            </h4>
          </div>
          <div className="text">
            <div
              dangerouslySetInnerHTML={{ __html: t("our_core.design_text1") }}
            />
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: t("our_core.design_text2") }}
              />
              <a
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
                href="/"
              >
                {t("btn_references")}
              </a>
            </div>
          </div>
          <div className="img-design img-row">
            <img src={Design} alt="" />
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs[2]}
        className="services"
        style={{ background: "var(--light-green-color)" }}
      >
        <div style={{ gap: 500 }} className="services-row container-main">
          <div className="img-text" style={{ left: -50 }}>
            <img src={logo} alt="Slika" />{" "}
            <span className="green">HELMCHRON</span>
          </div>
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
              {t("services_vertical")}
            </h4>
          </div>

          <div className="img-row">
            <img src={management} alt="management" />
          </div>
          <div>
            <h3>
              {t("our_core.icon_core.icon3")}
            </h3>

            <ul
              dangerouslySetInnerHTML={{ __html: t("our_core.project_text") }}
            />

            <a
              className="book-btn"
              style={{ background: "var(--green-color)" }}
              href="/"
            >
              {t("btn_references")}
            </a>
          </div>
        </div>
      </div>

      <div ref={sectionRefs[3]} className="services">
        <div style={{ gap: 350 }} className="services-row container-main">
          <div className="img-text" style={{ left: -50 }}>
            <img src={logo} alt="Slika" />{" "}
            <span className="blue">HELMCHRON</span>
          </div>
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
              {t("services_vertical")}
            </h4>
          </div>
          <div>
            <h3>
              {t("our_core.icon_core.icon4")}
            </h3>

            <ul
              dangerouslySetInnerHTML={{ __html: t("our_core.equipment_text") }}
            />
            <a
              className="book-btn"
              href="/"
              style={{ background: "var(--dark-blue-color)" }}
            >
              {t("btn_references")}
            </a>
          </div>
          <div className="img-row">
            <img src={Equipment} alt="Equipment" />
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs[4]}
        className="services"
        style={{ background: "var(--light-orange-color)" }}
      >
        <div style={{ gap: 350 }} className="services-row container-main">
          <div className="img-text" style={{ left: -50 }}>
            <img src={logo} alt="Slika" /> <span>HELMCHRON</span>
          </div>
          <div className="vertical-text">
            <h4>
              {t("services_vertical")}
            </h4>
          </div>

          <div className="img-row">
            <img src={Commissioning} alt="" />
          </div>
          <div>
            <h3>
              {t("our_core.icon_core.icon5")}
            </h3>
            <ul
              dangerouslySetInnerHTML={{
                __html: t("our_core.commissioning_text")
              }}
            />

            <a className="book-btn" href="/">
              {t("btn_references")}
            </a>
          </div>
        </div>
      </div>

      <center style={{ marginTop: 50 }}>
        <p>
          {t("our_core.text_book")}
        </p>
        <a
          style={{ background: "var(--dark-blue-color)" }}
          className="book-btn"
          href="/contact"
        >
          {t("book_btn")}
        </a>
      </center>

      <div className="unique" style={{ marginTop: 100 }}>
        <h2 style={{ marginBottom: 0 }} className="title">
          {t("our_core.unique")}
        </h2>

        <h3>
          HELMCHR<span>ONe</span>
        </h3>

        <center>
          <iframe
            className="video-yt"
            loading="lazy"
            src="https://www.youtube.com/embed/tWflefiRmYw"
            title="HelmchronONE - New Service Concept"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </center>
      </div>
    </div>
  );
}
