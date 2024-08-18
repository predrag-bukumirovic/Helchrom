import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Food/img1.png";
import mainImg2 from "../assets/images/Food/img2.jpg";
import mainImg3 from "../assets/images/Food/img3.png";

import Food1 from "../assets/images/Food/Food1.png";
import Food2 from "../assets/images/Food/Food2.png";
import { useTranslation } from "react-i18next";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Food() {
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
          {t("food.title")}
        </h1>
        <center>
          <p>
            {t("food.sub_text")}
          </p>
        </center>

        <div>
          <center style={{ marginTop: 40 }}>
            <span>
              <b>
                {t("food.text1.title")}
              </b>
            </span>
            <p>
              {t("food.text1.text")}
            </p>
          </center>

          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <div data-aos="fade-right">
              <span>
                <b>
                  {t("food.text2.title")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("food.text2.text")}
                <br />
                <br />
                {t("food.text2.text1")}
              </p>
            </div>

            <img data-aos="fade-left" src={Food1} alt="" />
          </div>

          <center style={{ margin: "20px 0" }} data-aos="fade-up">
            <span>
              <b>
                {t("food.text3.title")}
              </b>
            </span>
            <p>
              {t("food.text3.text")}
            </p>
          </center>

          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <img data-aos="fade-right" src={Food2} alt="" />
            <div data-aos="fade-left">
              <span>
                <b>
                  {t("food.text4.title")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("food.text4.text")}
              </p>

              <span>
                <b>
                  {t("food.text4.title1")}
                </b>
              </span>
              <p style={{ marginTop: 15 }}>
                {t("food.text4.text1")}
              </p>
            </div>
          </div>

          <center>
            <p style={{ margin: "10px 0" }}>
              {t("food.check")}
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
