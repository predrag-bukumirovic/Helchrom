import React from "react";
import { Helmet } from "react-helmet";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

import mainImg from "../assets/images/News/1.webp";
import mainImg1 from "../assets/images/News/2.webp";
import mainImg2 from "../assets/images/News/3.webp";
import Dusseldorf from "../assets/images/News/Dusseldorf.webp";
import Frankfurt from "../assets/images/News/Frankfurt.webp";
import Talk from "../assets/images/News/Talk.png";
import TextRender from "../components/TextRender";

import "../assets/scss/slider.scss";
import "../assets/scss/news.scss";

import { useTranslation } from "react-i18next";

export default function News() {
  const { t } = useTranslation();
  const headerText = [t("news.title"), t("news.text")];
  const teamTalk = [
    t("news.posts.post1.title"),
    t("news.posts.post1.time"),
    t("news.posts.post1.text")
  ];
  const k2022 = [
    t("news.posts.post2.title"),
    t("news.posts.post2.time"),
    t("news.posts.post2.text")
  ];
  const achemaText = [
    t("news.posts.post3.title"),
    t("news.posts.post3.time"),
    t("news.posts.post3.text")
  ];

  return (
    <div>
      <Helmet>
        <title>News | Helmchron</title>
      </Helmet>

      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          {[mainImg, mainImg1, mainImg2].map((img, index) =>
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-100"
                src={img}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          )}
        </CCarousel>

        <div className="box-img">
          {[mainImg, mainImg1, mainImg2].map((img, index) =>
            <div key={index}>
              <img loading="lazy" src={img} alt="Main" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main">
        <h1 className="title" style={{ padding: "0 40px" }}>
          {t("news.title")} <TextRender texts={headerText} />
        </h1>
        <center>
          <p>
            {t("news.text")}
          </p>
        </center>

        <div className="news-box padding30">
          <div>
            <div>
              <TextRender texts={teamTalk} />
              <h2>
                {t("news.posts.post1.title")}
              </h2>
              <span>
                {t("news.posts.post1.time")}
              </span>
              <p>
                {t("news.posts.post1.text")}
              </p>
              <a
                href="/news/team-talk"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img loading="lazy" src={Talk} alt="News" />
            </div>
          </div>
          <div className="line-news" />
        </div>

        <div className="news-box padding30">
          <div>
            <div>
              <TextRender texts={k2022} />
              <h2>
                {t("news.posts.post2.title")}
              </h2>
              <span>
                {t("news.posts.post2.time")}
              </span>
              <p>
                {t("news.posts.post2.text")}
              </p>
              <a
                href="/news/k2022"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img loading="lazy" src={Dusseldorf} alt="News" />
            </div>
          </div>
          <div className="line-news" />
        </div>

        <div className="news-box padding30">
          <div>
            <div>
              <TextRender texts={achemaText} />
              <h2>
                {t("news.posts.post3.title")}
              </h2>
              <span>
                {t("news.posts.post3.time")}
              </span>
              <p>
                {t("news.posts.post3.text")}
              </p>
              <a
                href="/news/achema"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img loading="lazy" src={Frankfurt} alt="News" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
