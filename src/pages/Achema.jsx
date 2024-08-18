import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import mainImg from "../assets/images/Achema/baner1.webp";
import mainImg1 from "../assets/images/Achema/baner2.webp";
import mainImg2 from "../assets/images/Achema/baner3.webp";
import gustavo from "../assets/images/Achema/gustavo.webp";
import school from "../assets/images/Achema/school.webp";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/slider.scss";
import "../assets/scss/achema.scss";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Achema() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Achema | Helmchron</title>
      </Helmet>

      <div>
        {/* Slider start */}
        <div className="slider">
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
          <div className="box-img">
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
        </div>
        {/* Slider end */}

        <div>
          <div className="container-main achema padding30">
            <h1 className="title">Achema 2022</h1>
            <center className="text-title">
              {/* <p className="sub">22 - 26 August 2022 I Frankfurt, Germany</p> */}
              <p
                style={{ marginTop: 50 }}
                dangerouslySetInnerHTML={{
                  __html: t("news.posts.post3.content.sub_text")
                }}
              />
            </center>

            <div className="day1">
              <div
                dangerouslySetInnerHTML={{
                  __html: t("news.posts.post3.content.text1")
                }}
              />
              <div>
                <img src={gustavo} alt="gustavo" />
              </div>
            </div>

            <div
              className="day2"
              dangerouslySetInnerHTML={{
                __html: t("news.posts.post3.content.text2")
              }}
            />

            <div className="day3">
              <div>
                <img src={school} alt="school" />
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: t("news.posts.post3.content.text3")
                }}
              />
            </div>

            <div
              className="day4"
              dangerouslySetInnerHTML={{
                __html: t("news.posts.post3.content.text4")
              }}
            />

            <p>
              {t("news.posts.post3.content.eager")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
