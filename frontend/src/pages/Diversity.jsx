import React from "react";

import mainImg from "../assets/images/Blog//Diversitybaner1.jpeg";
import mainImg1 from "../assets/images/Blog/Diversitybaner2.jpeg";
import mainImg2 from "../assets/images/Blog/Diversitybaner3.jpeg";
import "../assets/scss/news-post.scss";

import OdbojkaSlikaG from "../assets/images/Blog/Srceduga.jpeg";
import OdbojkaSlikaD from "../assets/images/Blog/Diversitydole.jpeg";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import TextRender from "../components/TextRender";

import { useTranslation } from "react-i18next";

export default function Diversity() {
  const { t } = useTranslation();
  const blogSound = [
    t("blog.blog2.content.title"),
    t("blog.blog2.content.sub_text"),
    t("blog.blog2.content.text1"),
    t("blog.blog2.content.text2"),
    t("blog.blog2.content.text3"),
    t("blog.blog2.content.references"),
  ];

  return (
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
            <img
              loading="lazy"
              src={mainImg}
              alt="Helmchron Career - Slide 1"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src={mainImg1}
              alt="Helmchron Career - Slide 2"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src={mainImg2}
              alt="Helmchron Career - Slide 3"
            />
          </div>
        </div>
      </div>
      {/* Slider end */}

      <div className="container-sx padding30">
        <center>
          <h1 className="title">{t("blog.blog2.content.title")}</h1>
          <TextRender texts={blogSound} />
          <p style={{ fontWeight: "bold", fontSize: 18 }}>
            {t("blog.blog2.content.sub_text")}
          </p>
        </center>

        <div className="post">
          <div style={{ width: "100%" }}>
            <p
              dangerouslySetInnerHTML={{
                __html: t("blog.blog2.content.text1"),
              }}
            />
          </div>

          <div className="post-img">
            <img loading="lazy" src={OdbojkaSlikaG} alt="Odbojka" />
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: t("blog.blog2.content.text2") }}
        />

        <div className="post">
          <div className="post-img">
            <img loading="lazy" src={OdbojkaSlikaD} alt="Odbojka" />
          </div>
          <div
            style={{ width: "100%" }}
            dangerouslySetInnerHTML={{ __html: t("blog.blog2.content.text3") }}
          />
        </div>

        <div
          style={{ marginTop: 50 }}
          dangerouslySetInnerHTML={{
            __html: t("blog.blog2.content.references"),
          }}
        />
      </div>
    </div>
  );
}
