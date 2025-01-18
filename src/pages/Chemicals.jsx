import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Chemicals/img1.png";
import mainImg2 from "../assets/images/Chemicals/img2.png";
import mainImg3 from "../assets/images/Chemicals/img3.png";

import ChemicalsImg from "../assets/images/Chemicals/Chemicals.png";
import { useTranslation } from "react-i18next";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Chemicals() {
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
              <img src={image} alt="Main" loading="lazy" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main padding30">
        <h1 className="title">
          {t("chemicals.title")}
        </h1>
        <center data-aos="fade-up">
          <p>
            {t("chemicals.sub_text")}
          </p>
        </center>

        <div>
          <center data-aos="fade-up" style={{ marginTop: 40 }}>
            <span>
              <b>
                {t("chemicals.text1.title")}
              </b>
            </span>
            <p>
              {t("chemicals.text1.text")}
            </p>
          </center>
          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <img
              loading="lazy"
              data-aos="fade-right"
              src={ChemicalsImg}
              alt="ChemicalsImg"
            />
            <div data-aos="fade-left">
              <span>
                <b>
                  {t("chemicals.text2.title")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("chemicals.text2.text")}
              </p>

              <span>
                <b>
                  {t("chemicals.text2.title1")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("chemicals.text2.text1")}
              </p>
            </div>
          </div>
          <center style={{ marginTop: 20 }} data-aos="fade-up">
            <span>
              <b>
                {t("chemicals.text3.title")}
              </b>
            </span>
            <p>
              {t("chemicals.text3.text")}
            </p>
          </center>

          <center data-aos="fade-up">
            <span>
              <b>
                {t("chemicals.text3.title1")}
              </b>
            </span>
            <p>
              {t("chemicals.text3.text1")}
            </p>
          </center>

          <center>
            <p style={{ marginBottom: 0 }}>
              {t("chemicals.text3.check")}
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
