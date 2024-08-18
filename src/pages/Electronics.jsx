import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Electronics/img1.png";
import mainImg2 from "../assets/images/Electronics/img2.png";
import mainImg3 from "../assets/images/Electronics/img3.png";

import imgRow from "../assets/images/Electronics/imgRow.png";
import graph from "../assets/images/Electronics/Electronicsgraph.png";
import cagr from "../assets/images/Electronics/CAGRikona.png";
import market from "../assets/images/Electronics/Market.png";
import { useTranslation } from "react-i18next";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Electronics() {
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
        <h1 className="title">
          {t("electronics.title")}
        </h1>
        <center data-aos="fade-up">
          <p>
            {t("electronics.sub_text")}
          </p>
        </center>

        <div className="row" style={{ background: "var(--light-blue-color)" }}>
          <div className="text" data-aos="fade-right">
            <div>
              <span>
                {t("electronics.text1.title")}
              </span>
              <p>
                {t("electronics.text1.text")}
              </p>
            </div>
            <div>
              <span>
                {t("electronics.text1.title1")}
              </span>
              <p>
                {t("electronics.text1.text1")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="img">
            <img src={imgRow} alt="Slika" />
          </div>
        </div>

        <span data-aos="fade-up" style={{ paddingTop: 20 }}>
          <b>
            {t("electronics.future")}
          </b>
          <br />
          {t("electronics.graph")}
        </span>
        <div className="future">
          <div data-aos="fade-right" style={{ flex: 2 }}>
            <img src={graph} alt="Graph" />
          </div>
          <div data-aos="fade-up" className="icon-graph">
            <img style={{ marginBottom: 10 }} src={market} alt="Market" />
            <img src={cagr} alt="Cagr" />
          </div>
          <div data-aos="fade-left" className="text">
            <p>
              {t("electronics.text")}
            </p>
          </div>
        </div>

        <div>
          <p style={{ marginTop: 50, fontSize: 16 }}>
            <b>{t("electronics.source")} </b>{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.fortunebusinessinsights.com/infographics/electronic-manufacturing-services-ems-market-105519"
            >
              electronic-manufacturing-services-ems-market
            </a>
          </p>
        </div>

        <center>
          <p style={{ marginBottom: 0 }}>
            {t("electronics.check")}
          </p>
          <br />
          <a
            style={{ background: "var(--dark-blue-color)" }}
            className="book-btn"
            href="/our-references"
          >
            {t("read_more")}
          </a>
        </center>
      </div>
    </div>
  );
}
