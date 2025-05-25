import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";

import TextReader from "../components/TextRender";

import "../assets/scss/news.scss";

import mainImg from "../assets/images/Blog/ClosedSystems/Baner1.png";
import mainImg1 from "../assets/images/Blog/ClosedSystems/Baner2.png";
import mainImg2 from "../assets/images/Blog/ClosedSystems/Baner3.png";

import Img1 from "../assets/images/Blog/ClosedSystems/Slika1.png";
import Img2 from "../assets/images/Blog/ClosedSystems/Slika2.png";

import "../assets/scss/news-post.scss";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function ClosedS() {
  const { t } = useTranslation();
  const blogSound = [
    t("blog.blog5.content.title"),
    t("blog.blog5.content.text1"),
    t("blog.blog5.content.sub_title"),
    t("blog.blog5.content.text2"),
    t("blog.blog5.content.list"),
    t("blog.blog5.content.sub_title2"),
    t("blog.blog5.content.text3"),
  ];

  return (
    <div>
      <Helmet>
        <title>
          The Role of Closed Systems in Biopharmaceutical Manufacturing
        </title>
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

      <div className="container-main">
        <h1 className="title">{t("blog.blog5.content.title")}</h1>
        <TextReader texts={blogSound} />
        <p
          dangerouslySetInnerHTML={{ __html: t("blog.blog5.content.text1") }}
        />

        <div className="row-blog">
          <div>
            <span style={{ fontWeight: "bold", fontSize: 18 }}>
              {t("blog.blog5.content.sub_title")}
            </span>
            <p
              dangerouslySetInnerHTML={{
                __html: t("blog.blog5.content.text2"),
              }}
            />
            <ul>
              <li
                dangerouslySetInnerHTML={{
                  __html: t("blog.blog5.content.list"),
                }}
              />
            </ul>
          </div>
          <img src={Img1} alt="Blog 5" />
        </div>

        <div className="row-blog">
          <div>
            <span
              style={{ fontWeight: "bold", fontSize: 18 }}
              dangerouslySetInnerHTML={{
                __html: t("blog.blog5.content.sub_title2"),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: t("blog.blog5.content.text3"),
              }}
            />
          </div>
          <img className="img-blog5" src={Img2} alt="Blog 5" />
        </div>

        <p style={{ marginTop: 50 }}>Resources:</p>
        <ol>
          <li>
            <a href="https://www.biopharminternational.com/view/innovations-and-trends-in-aseptic-manufacturing-processes">
              https://www.biopharminternational.com/view/innovations-and-trends-in-aseptic-manufacturing-processes
            </a>
          </li>
          <li>
            <a href="https://www.news-medical.net/life-sciences/Advances-in-Aseptic-Processing-The-Future-of-Sterile-Pharmaceutical-Manufacturing.aspx">
              https://www.news-medical.net/life-sciences/Advances-in-Aseptic-Processing-The-Future-of-Sterile-Pharmaceutical-Manufacturing.aspx
            </a>
          </li>
          <li>
            <a href="https://www.pharmalex.com/thought-leadership/blogs/advanced-aseptic-filling-technology-and-annex-i-compliance/">
              https://www.pharmalex.com/thought-leadership/blogs/advanced-aseptic-filling-technology-and-annex-i-compliance/
            </a>
          </li>
          <li>
            <a href="https://www.sofpromed.com/european-cdmos-for-small-batch-manufacturing-and-sterile-fill-finish-of-injectable-drugs-for-clinical-trials">
              https://www.sofpromed.com/european-cdmos-for-small-batch-manufacturing-and-sterile-fill-finish-of-injectable-drugs-for-clinical-trials
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
