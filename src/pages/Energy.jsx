import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Energy/img1.png";
import mainImg2 from "../assets/images/Energy/img2.png";
import mainImg3 from "../assets/images/Energy/img3.png";

import EnergyImg1 from "../assets/images/Energy/Energy1.png";
import EnergyImg2 from "../assets/images/Energy/Energy2.png";
import { useTranslation } from "react-i18next";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Energy() {
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
              <img loading="lazy" src={image} alt="Main" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main padding30">
        <h1 className="title">
          {t("energy.title")}
        </h1>
        <center data-aos="fade-up">
          <p>
            {t("energy.sub_text")}
          </p>
        </center>

        <div className="row" style={{ background: "var(--light-blue-color)" }}>
          <div data-aos="fade-right">
            <span>
              <b>
                {t("energy.text1.title")}
              </b>
            </span>
            <p style={{ marginTop: 15 }}>
              {t("energy.text1.text")}
            </p>

            <span>
              <b>
                {t("energy.text1.title1")}
              </b>
            </span>
            <p style={{ marginTop: 15 }}>
              {t("energy.text1.text1")}
            </p>
          </div>
          <img
            loading="lazy"
            data-aos="fade-left"
            src={EnergyImg1}
            alt="EnergyImg1"
          />
        </div>

        <div>
          <div
            className="row"
            style={{ background: "var(--light-blue-color)", marginTop: 50 }}
          >
            <img
              loading="lazy"
              data-aos="fade-right"
              src={EnergyImg2}
              alt="EnergyImg2"
            />
            <div data-aos="fade-left">
              <span>
                <b>
                  {t("energy.text2.title")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("energy.text2.text")}
              </p>

              <span>
                <b>
                  {t("energy.text2.title2")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("energy.text2.text2")}
              </p>

              <span>
                <b>
                  {t("energy.text2.title3")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("energy.text2.text3")}
              </p>
            </div>
          </div>

          <center>
            <p style={{ margin: "10px 0" }}>
              {t("energy.check")}
            </p>
            <br />
            <a
              style={{ background: "var(--dark-blue-color)" }}
              className="book-btn"
              href="/our-references"
              aria-label="Read more about sustainable fashion"
            >
              {t("read_more")}
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}
