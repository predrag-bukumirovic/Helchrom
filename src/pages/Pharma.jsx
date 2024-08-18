import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Pharma/img1.png";
import mainImg2 from "../assets/images/Pharma/img2.png";
import mainImg3 from "../assets/images/Pharma/img3.png";

import Pharma1 from "../assets/images/Pharma/rowimg1.png";
import Pharma2 from "../assets/images/Pharma/rowimg2.png";
import { useTranslation } from "react-i18next";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Pharma() {
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
          {t("pharma.title")}
        </h1>
        <center>
          <p>
            {t("pharma.sub_text")}
          </p>
        </center>

        <center>
          <span>
            <b>
              {t("pharma.text1.title")}
            </b>
          </span>

          <p style={{ marginTop: 15 }}>
            {t("pharma.text1.text")}
          </p>
        </center>

        <div>
          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <img data-aos="fade-right" src={Pharma1} alt="" />
            <div data-aos="fade-left">
              <span>
                <b>
                  {t("pharma.text2.title")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("pharma.text2.text")}
              </p>
            </div>
          </div>

          <center data-aos="fade-up">
            <span>
              <b>
                {t("pharma.text3.title")}
              </b>
            </span>

            <p style={{ marginTop: 15 }}>
              {t("pharma.text3.text")}
            </p>
          </center>

          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <div data-aos="fade-right">
              <span>
                <b>
                  {t("pharma.text4.title")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("pharma.text4.text")}
              </p>

              <span>
                <b>
                  {t("pharma.text4.title1")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("pharma.text4.text1")}
              </p>
            </div>
            <img data-aos="fade-left" src={Pharma2} alt="" />
          </div>

          <center>
            <p style={{ margin: "10px 0" }}>
              {t("pharma.check")}
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
    </div>
  );
}
