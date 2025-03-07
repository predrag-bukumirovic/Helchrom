import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Oil/img1.webp";
import mainImg2 from "../assets/images/Oil/img2.webp";
import mainImg3 from "../assets/images/Oil/img3.webp";

import Oil1 from "../assets/images/Oil/rowImg1.webp";
import Oil2 from "../assets/images/Oil/rowImg2.webp";
import { useTranslation } from "react-i18next";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Oil() {
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
          {t("oil.title")}
        </h1>
        <center data-aos="fade-up">
          <p>
            {t("oil.sub_text")}
          </p>
        </center>

        <div>
          <div className="row">
            <div data-aos="fade-right">
              <span>
                <b>
                  {t("oil.text1.title")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("oil.text1.text")}
              </p>

              <span>
                <b>
                  {t("oil.text1.title1")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("oil.text1.text1")}
              </p>
            </div>

            <img data-aos="fade-left" src={Oil1} alt="Oil1" />
          </div>

          <div className="row">
            <img data-aos="fade-right" src={Oil2} alt="Oil2" />
            <div data-aos="fade-left">
              <span>
                <b>
                  {t("oil.text2.title")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("oil.text2.text")}
              </p>

              <span>
                <b>
                  {t("oil.text2.title1")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("oil.text2.text1")}
              </p>
            </div>
          </div>

          <center>
            <p style={{ marginBottom: 0 }}>
              {t("oil.check")}
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
