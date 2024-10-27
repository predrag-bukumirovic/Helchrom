import React, { useEffect, useRef } from "react";
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
import Detailed from "../assets/images/OurCore/detailed.png";
import Commissioning from "../assets/images/OurCore/Commissioning.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import TextReader from "../components/TextRender";
import OurCompetences from "../components/OurCompetences";
import { useLocation } from "react-router-dom";
import SoftwareTools from "../components/SoftwereTools";

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

  const ourCoreText = [t("our_core.title"), t("our_core.sub_text")];
  const ConsultingText = [
    t("our_core.icon_core.icon1"),
    t("our_core.planning_text")
  ];
  const DesignText = [t("our_core.design_text1"), t("our_core.design_text2")];
  const ProjectText = [
    t("our_core.icon_core.icon3"),
    t("our_core.project_text")
  ];

  const EquipmentText = [
    t("our_core.icon_core.icon4"),
    t("our_core.equipment_text")
  ];

  const CommissioningText = [
    t("our_core.icon_core.icon5"),
    t("our_core.commissioning_text")
  ];

  const location = useLocation();

  useEffect(
    () => {
      const hash = location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [location]
  );

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
              <img loading="lazy" src={image} alt="Main" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main padding30">
        <h1 className="title" data-aos="fade-up" style={{ padding: "0 40px" }}>
          {t("our_core.title")}
          <TextReader texts={ourCoreText} />
        </h1>

        <center>
          <p
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: t("our_core.sub_text") }}
          />
        </center>

        <center>
          <h3 style={{ marginTop: 50 }} className="title">
            Our Services
          </h3>
        </center>
        <div className="icon-core" style={{ marginTop: 0 }}>
          <div data-aos="zoom-in" onClick={() => handleClick(0)}>
            {t("our_core.icon_core.icon1")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(1)}>
            {t("our_core.icon_core.icon2")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(2)}>
            {t("our_core.icon_core.icon3")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(3)}>
            {t("our_core.icon_core.icon4")}
          </div>
          <div data-aos="zoom-in" onClick={() => handleClick(4)}>
            {t("our_core.icon_core.icon5")}
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs[0]}
        className="services"
        id="section1"
        style={{ background: "var(--light-orange-color)", marginTop: 100 }}
      >
        <div className="services-row container-main">
          <TextReader texts={ConsultingText} />
          <div className="vertical-text">
            <h4>
              {t("services_vertical")}
            </h4>
          </div>

          <div className="img-row" data-aos="fade-right">
            <img loading="lazy" src={Consulting} alt="Consulting" />
          </div>
          <div data-aos="fade-left">
            <h3>
              {t("our_core.icon_core.icon1")}
            </h3>
            <ul
              dangerouslySetInnerHTML={{ __html: t("our_core.planning_text") }}
            />

            <a className="book-btn" href="/our-references">
              {t("btn_references")}
            </a>
          </div>
        </div>
      </div>

      <div ref={sectionRefs[1]} className="services" id="section2">
        <div className="services-row container-main">
          <TextReader texts={DesignText} />
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
              {t("services_vertical")}
            </h4>
          </div>
          <div className="text" data-aos="fade-right">
            <div
              dangerouslySetInnerHTML={{ __html: t("our_core.design_text1") }}
            />
          </div>
          <div data-aos="fade-left" className="img-design img-row">
            <img loading="lazy" src={Design} alt="" />
          </div>
        </div>

        <div style={{ paddingTop: 0 }} className="container-main services-row">
          <div data-aos="fade-right" className="img-design detaild img-row">
            <img loading="lazy" src={Detailed} alt="" />
          </div>

          <div className="text" data-aos="fade-left">
            <div
              dangerouslySetInnerHTML={{ __html: t("our_core.design_text2") }}
            />
            <a
              className="book-btn"
              style={{ background: "var(--dark-blue-color)" }}
              href="/our-references"
            >
              {t("btn_references")}
            </a>
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs[2]}
        id="section3"
        className="services"
        style={{ background: "var(--light-green-color)" }}
      >
        <div className="services-row container-main">
          <TextReader texts={ProjectText} />
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
              {t("services_vertical")}
            </h4>
          </div>

          <div data-aos="fade-right">
            <h3>
              {t("our_core.icon_core.icon3")}
            </h3>

            <ul
              dangerouslySetInnerHTML={{ __html: t("our_core.project_text") }}
            />

            <a
              className="book-btn"
              style={{ background: "var(--green-color)" }}
              href="/our-references"
            >
              {t("btn_references")}
            </a>
          </div>

          <div data-aos="fade-left" className="img-row">
            <img loading="lazy" src={management} alt="management" />
          </div>
        </div>
      </div>

      <div ref={sectionRefs[3]} className="services" id="section4">
        <div className="services-row container-main">
          <TextReader texts={EquipmentText} />
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
              {t("services_vertical")}
            </h4>
          </div>
          <div data-aos="fade-right" className="img-row">
            <img loading="lazy" src={Equipment} alt="Equipment" />
          </div>
          <div data-aos="fade-left">
            <h3>
              {t("our_core.icon_core.icon4")}
            </h3>

            <ul
              dangerouslySetInnerHTML={{ __html: t("our_core.equipment_text") }}
            />
            <a
              className="book-btn"
              href="/our-references"
              style={{ background: "var(--dark-blue-color)" }}
            >
              {t("btn_references")}
            </a>
          </div>
        </div>
      </div>

      <div
        ref={sectionRefs[4]}
        id="section5"
        className="services"
        style={{ background: "var(--light-orange-color)" }}
      >
        <div className="services-row container-main">
          <TextReader texts={CommissioningText} />
          <div className="vertical-text">
            <h4>
              {t("services_vertical")}
            </h4>
          </div>

          <div data-aos="fade-right">
            <h3>
              {t("our_core.icon_core.icon5")}
            </h3>
            <ul
              dangerouslySetInnerHTML={{
                __html: t("our_core.commissioning_text")
              }}
            />

            <a className="book-btn" href="/our-references">
              {t("btn_references")}
            </a>
          </div>

          <div data-aos="fade-left" className="img-row">
            <img loading="lazy" src={Commissioning} alt="Commissioning" />
          </div>
        </div>
      </div>

      <center style={{ marginTop: 50, padding: "0 20px" }}>
        <p style={{ marginBottom: 30 }}>
          {t("our_core.text_book")}
        </p>
        <a
          style={{ background: "var(--dark-blue-color)" }}
          className="book-btn"
          href="/contact"
        >
          {t("read_more")}
        </a>
      </center>

      <OurCompetences />

      <SoftwareTools />

      <div className="unique" style={{ marginTop: 50 }}>
        <center>
          <h2 style={{ marginBottom: 30 }} className="title">
            {t("our_core.unique")}

            <span
              style={{
                fontWeight: "bold",
                textTransform: "none"
              }}
            >
              <br /> HELMCHR<span>ONe</span>
            </span>
          </h2>
        </center>

        <center>
          <iframe
            className="video-yt"
            loading="lazy"
            src="https://www.youtube.com/embed/T3n-z2NdV4M"
            title="Helmchron ONE – an innovative plant design engineering project management service."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </center>
      </div>
    </div>
  );
}
