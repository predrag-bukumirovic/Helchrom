import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/news.scss";
import mainImg from "../assets/images/Blog/Baner1.jpg";
import mainImg1 from "../assets/images/Blog/Baner2.jpg";
import mainImg2 from "../assets/images/Blog/Baner3.jpg";

import Diversity from "../assets/images/Blog/Diversity.jpeg";
import Odbojka from "../assets/images/Blog/Odbojka.jpeg";
import Sustainability from "../assets/images/Blog/Sustainability.png";

import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();

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
        </h1>

        <center>
          <p>
            {t("blog.text1")}
          </p>
        </center>

        <div className="news-box padding30">
          <div>
            <div>
              <h2>
                {t("blog.blog2.title")}
              </h2>
              <p>
                {t("blog.blog2.text")}
              </p>
              <a href="/blog/sustainability">Read more</a>
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
          <div>
            <div>
              <h2>
                {t("blog.blog1.title")}
              </h2>
              <p>
                {t("blog.blog1.text")}
              </p>
              <a href="/blog/diversity">Read more</a>
            </div>
            <div>
              <img src={Diversity} alt="A WORKPLACE WHERE WE FEEL INCLUDED" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <div>
            <div>
              <h2>SUPPORTING JUNIOR FEMALE VOLLEYBALL TEAM</h2>
              <p>
                We supported an amazing junior female volleyball team that
                participated in National Championship held in Belgrade, Serbia,
                in May 2023. We are so proud of their team spirit, discipline,
                and results and we are sure there are many great things ahead of
                them. Find out similarities between volleyball and engineering.
              </p>
              <a href="/blog/volleyball">Read more</a>
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
