import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import mainImg from "../assets/images/Blog/Insulin/1.png";
import mainImg1 from "../assets/images/Blog/Insulin/2.png";
import mainImg2 from "../assets/images/Blog/Insulin/3.png";
import "../assets/scss/news-post.scss";

import telo1 from "../assets/images/Blog/Insulin/telo1.png";
import telo2 from "../assets/images/Blog/Insulin/telo2.png";

import TextRender from "../components/TextRender";

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function Volleyball() {
  const { t } = useTranslation();
  const blogSound = [
    t("blog.blog6.content.title"),
    t("blog.blog6.content.text1"),
    t("blog.blog6.content.sub_title2"),
    t("blog.blog6.content.text2"),
    t("blog.blog6.content.sub_title3"),
    t("blog.blog6.content.text3"),
    t("blog.blog6.content.sub_title4"),
    t("blog.blog6.content.text4"),
  ];

  return (
    <div>
      <Helmet>
        <title>Insulin: A Manufacturing Evolution</title>
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

      <div className="container-main padding30">
        <center>
          <h1 className="title">{t("blog.blog6.content.title")}</h1>
          <TextRender texts={blogSound} />
        </center>
        <div className="post">
          <p
            dangerouslySetInnerHTML={{ __html: t("blog.blog6.content.text1") }}
          />
        </div>

        <div className="insulin-img">
          <img src={telo1} alt="Telo 1" />
          <img src={telo2} alt="Telo 2" />
        </div>
        <div>
          <span style={{ fontWeight: "bold", fontSize: 18 }}>
            {t("blog.blog6.content.sub_title2")}
          </span>
          <p
            dangerouslySetInnerHTML={{ __html: t("blog.blog6.content.text2") }}
          />
        </div>
        <div>
          <span style={{ fontWeight: "bold", fontSize: 18 }}>
            {t("blog.blog6.content.sub_title3")}
          </span>
          <p
            dangerouslySetInnerHTML={{ __html: t("blog.blog6.content.text3") }}
          />
        </div>
        <div>
          <span style={{ fontWeight: "bold", fontSize: 18 }}>
            {t("blog.blog6.content.sub_title4")}
          </span>
          <p
            dangerouslySetInnerHTML={{ __html: t("blog.blog6.content.text4") }}
          />
        </div>
        <p style={{ marginTop: 50 }}>Resources:</p>

        <ul style={{ padding: "0 10px" }}>
          <li>
            Insulin100: The Discovery and Development:{" "}
            <a
              href="https://definingmomentscanada.ca/insulin100/timeline/"
              target="_blank"
            >
              https://definingmomentscanada.ca/insulin100/timeline/
            </a>{" "}
            (Last access: 16-Jan-25)
          </li>

          <li>
            The History of a Wonderful Thing We Call Insulin:{" "}
            <a
              href="https://diabetes.org/blog/history-wonderful-thing-we-call-insulin"
              target="_blank"
            >
              https://diabetes.org/blog/history-wonderful-thing-we-call-insulin
            </a>{" "}
            (Last access: 18-Jan-25)
          </li>

          <li>
            Insulin Development and Commercialization:{" "}
            <a
              href="https://www.acs.org/education/whatischemistry/landmarks/insulin.html"
              target="_blank"
            >
              https://www.acs.org/education/whatischemistry/landmarks/insulin.html
            </a>{" "}
            (Last access: 18-Jan-25)
          </li>

          <li>
            Insulin: evolution of insulin formulations and their application in
            clinical practice over 100 years:{" "}
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9296014/"
              target="_blank"
            >
              https://pmc.ncbi.nlm.nih.gov/articles/PMC9296014/
            </a>{" "}
            (Last access: 16-Jan-25)
          </li>
        </ul>
      </div>
    </div>
  );
}
