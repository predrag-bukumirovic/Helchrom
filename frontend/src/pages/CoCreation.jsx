import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import mainImg from "../assets/images/Blog/CoCreation/1.png";
import mainImg1 from "../assets/images/Blog/CoCreation/2.png";
import mainImg2 from "../assets/images/Blog/CoCreation/3.png";
import "../assets/scss/news-post.scss";

import telo from "../assets/images/Blog/CoCreation/uztekst.png";

import TextRender from "../components/TextRender";

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function Volleyball() {
  const { t } = useTranslation();
  const blogSound = [
    t("blog.blog7.content.title"),
    t("blog.blog7.content.text1"),
    t("blog.blog7.content.sub_title"),
    t("blog.blog7.content.text2"),
    t("blog.blog7.content.sub_title3"),
    t("blog.blog7.content.text3"),
    t("blog.blog7.content.sub_title4"),
    t("blog.blog7.content.text4"),
  ];

  return (
    <div>
      <Helmet>
        <title>The Power of Co-Creation</title>
      </Helmet>
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

      <div className="container-sx padding30">
        <center>
          <h1 className="title">{t("blog.blog7.content.title")}</h1>
          <TextRender texts={blogSound} />
        </center>
        <div className="post">
          <p
            dangerouslySetInnerHTML={{ __html: t("blog.blog7.content.text1") }}
          />
        </div>

        <div>
          <span style={{ fontWeight: "bold", fontSize: 18 }}>
            {t("blog.blog7.content.sub_title")}
          </span>
          <p
            dangerouslySetInnerHTML={{ __html: t("blog.blog7.content.text2") }}
          />
        </div>

        <div className="blog-row">
          <div>
            <div>
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                {t("blog.blog7.content.sub_title1")}
              </span>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("blog.blog7.content.text3"),
                }}
              />
            </div>
            <div>
              <span style={{ fontWeight: "bold", fontSize: 18 }}>
                {t("blog.blog7.content.sub_title2")}
              </span>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("blog.blog7.content.text4"),
                }}
              />
            </div>
          </div>
          <img src={telo} alt="Blog Telo" />
        </div>

        <p style={{ marginTop: 50 }}>Source:</p>

        <ol style={{ padding: "0 10px" }}>
          <li>
            Gegužytė G, Bagdonienė L. Value Co-Creation in Engineering Service
            Innovation: Resources and Capabilities Perspectives, Central
            European Management Journal, Vol. 29, No. 4/2021, p. 91–123, 2021
          </li>
        </ol>
      </div>
    </div>
  );
}
