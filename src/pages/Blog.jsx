import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/news.scss";
import mainImg from "../assets/images/Blog/Baner1.png";
import mainImg1 from "../assets/images/Blog/Baner2.png";
import mainImg2 from "../assets/images/Blog/Baner3.png";

import Diversity from "../assets/images/Blog/Diversity.png";
import Odbojka from "../assets/images/Blog/Odbojka.png";
import Sustainability from "../assets/images/Blog/Sustainability.png";

import { useTranslation } from "react-i18next";
import TextReader from "../components/TextRender";

export default function Blog() {
  const { t } = useTranslation();

  const headerText = [t("blog.title"), t("blog.text")];
  const blog3Text = [
    t("blog.blog3.title"),
    t("blog.blog3.text"),
    t("read_more")
  ];
  const blog2Text = [
    t("blog.blog2.title"),
    t("blog.blog2.text"),
    t("read_more")
  ];
  const blog1Text = [
    t("blog.blog1.title"),
    t("blog.blog1.text"),
    t("read_more")
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
        <h1 className="title">
          {t("blog.title")}
          <TextReader texts={headerText} />
        </h1>

        <center>
          <p>
            {t("blog.text")}
          </p>
        </center>

        <div className="news-box padding30">
          <TextReader texts={blog3Text} />
          <div>
            <div>
              <h2>
                {t("blog.blog3.title")}
              </h2>
              <p>
                {t("blog.blog3.text")}
              </p>
              <a href="/blog/sustainability">
                {t("read_more")}
              </a>
            </div>
            <div>
              <img
                src={Sustainability}
                alt="A WORKPLACE WHERE WE FEEL INCLUDED"
              />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog2Text} />
          <div>
            <div>
              <h2>
                {t("blog.blog2.title")}
              </h2>
              <p>
                {t("blog.blog2.text")}
              </p>
              <a href="/blog/diversity">
                {t("read_more")}
              </a>
            </div>
            <div>
              <img src={Diversity} alt="A WORKPLACE WHERE WE FEEL INCLUDED" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog1Text} />
          <div>
            <div>
              <h2>
                {t("blog.blog1.title")}
              </h2>
              <p>
                {t("blog.blog1.text")}
              </p>
              <a href="/blog/volleyball">
                {t("read_more")}
              </a>
            </div>
            <div>
              <img
                src={Odbojka}
                alt="SUPPORTING JUNIOR FEMALE VOLLEYBALL TEAM"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
