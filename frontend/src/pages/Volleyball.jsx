import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import mainImg from "../assets/images/Blog/Odbojkabaner1.jpeg";
import mainImg1 from "../assets/images/Blog/odbojkabaner2.jpg";
import mainImg2 from "../assets/images/Blog/odbojkabaner3.jpeg";
import "../assets/scss/news-post.scss";

import OdbojkaSlikaG from "../assets/images/Blog/Odbojkagore.jpg";
import OdbojkaSlikaD from "../assets/images/Blog/Odbojkadole.png";

import TextRender from "../components/TextRender";

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function Volleyball() {
  const { t } = useTranslation();
  const blogSound = [
    t("blog.blog1.content.title"),
    t("blog.blog1.content.sub_text"),
    t("blog.blog1.content.text1"),
    t("blog.blog1.content.text2"),
    t("blog.blog1.content.text3"),
    t("blog.blog1.content.text4"),
  ];

  return (
    <div>
      {/* Slider start */}
      <Helmet>
        <title>WE SUPPORTED JUNIOR FEMALE VOLLEYBALL TEAM</title>
      </Helmet>
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
            <img src={mainImg} alt="Helmchron Career - Slide 1" />
          </div>
          <div>
            <img src={mainImg1} alt="Helmchron Career - Slide 2" />
          </div>
          <div>
            <img src={mainImg2} alt="Helmchron Career - Slide 3" />
          </div>
        </div>
      </div>
      {/* Slider end */}

      <div className="container-main padding30">
        <center>
          <h1 className="title">{t("blog.blog1.content.title")}</h1>
          <TextRender texts={blogSound} />
          <p
            style={{ fontWeight: "bold", fontSize: 18 }}
            dangerouslySetInnerHTML={{
              __html: t("blog.blog1.content.sub_text"),
            }}
          />
        </center>

        <div className="post">
          <div
            dangerouslySetInnerHTML={{ __html: t("blog.blog1.content.text1") }}
          />

          <div style={{ width: "60%" }} className="post-img">
            <img loading="lazy" src={OdbojkaSlikaG} alt="Odbojka" />
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: t("blog.blog1.content.text2") }}
        />

        <div className="post">
          <div className="post-img">
            <img loading="lazy" src={OdbojkaSlikaD} alt="Odbojka" />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: t("blog.blog1.content.text3") }}
          />
        </div>

        <div
          style={{ marginTop: 50 }}
          dangerouslySetInnerHTML={{ __html: t("blog.blog1.content.text4") }}
        />
      </div>
    </div>
  );
}
