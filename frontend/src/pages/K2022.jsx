import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Helmet } from "react-helmet";

import mainImg1 from "../assets/images/K2022/baner1.webp";
import mainImg2 from "../assets/images/K2022/baner2.webp";
import mainImg3 from "../assets/images/K2022/baner3.webp";
import img1 from "../assets/images/K2022/1.webp";
import img2 from "../assets/images/K2022/2.webp";
import img3 from "../assets/images/K2022/3.webp";

import "../assets/scss/slider.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/news-post.scss";
import { useTranslation } from "react-i18next";

export default function K2022() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>K2022 | Helmchron</title>
      </Helmet>
      <div>
        <div className="slider">
          <CCarousel className="slider-main" controls transition="crossfade">
            <CCarouselItem>
              <CImage className="d-block w-100" src={mainImg1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={mainImg2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={mainImg3} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>
          <div className="box-img">
            {[mainImg1, mainImg2, mainImg3].map((img, index) => (
              <div key={index}>
                <img loading="lazy" src={img} alt="Main" />
              </div>
            ))}
          </div>
        </div>
        <div className="container-sx padding30">
          <div className="news-post">
            <h1 className="title">{t("news.posts.post2.content.title")}</h1>
            <center>
              {/* <p className="sub">19 - 26 October 2022 I Düsseldorf, Germany</p> */}
              <p style={{ margin: "50px 0" }}>
                {t("news.posts.post2.content.sub_text1")}
              </p>
            </center>
            <p style={{ textAlign: "center" }}>
              {t("news.posts.post2.content.sub_text2")}
            </p>
            <div className="post">
              <div className="post-text">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("news.posts.post2.content.text1"),
                  }}
                />
              </div>
              <div className="post-img">
                <img loading="lazy" src={img1} alt="K2022 1" />
              </div>
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("news.posts.post2.content.text2"),
                }}
              />
            </div>
            <div className="post">
              <div className="post-img">
                <img loading="lazy" src={img2} alt="Digitalization" />
              </div>
              <div className="post-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("news.posts.post2.content.text3"),
                  }}
                />
              </div>
            </div>
            <div className="post">
              <div className="post-text">
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("news.posts.post2.content.text4"),
                  }}
                />
              </div>
              <div className="post-img">
                <img loading="lazy" src={img3} alt="Advanced Process Control" />
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: t("news.posts.post2.content.text5"),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
