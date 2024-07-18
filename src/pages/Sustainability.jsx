import React from "react";

import mainImg from "../assets/images/Blog//Prvaslika.jpg";
import mainImg1 from "../assets/images/Blog/Drugaslika.jpg";
import mainImg2 from "../assets/images/Blog/Slika3.jpg";
import "../assets/scss/news-post.scss";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import TextRender from "../components/TextRender";

import { useTranslation } from "react-i18next";

export default function Sustainability() {
  const { t } = useTranslation();
  const blogSound = [
    t("blog.blog3.content.title"),
    t("blog.blog3.content.sub_text"),
    t("blog.blog3.content.text1"),
    t("blog.blog3.content.references")
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
        <center>
          <h1
            style={{ textTransform: "inherit" }}
            className="title"
            dangerouslySetInnerHTML={{ __html: t("blog.blog3.content.title") }}
          />
          <TextRender texts={blogSound} />
          <p>
            {t("blog.blog3.content.sub_text")}
          </p>
        </center>

        <div className="post">
          <div
            style={{ width: "100%" }}
            dangerouslySetInnerHTML={{ __html: t("blog.blog3.content.text1") }}
          />
        </div>

        <div className="video-envi">
          <h3 className="title">PLASTICS - THEN AND NOW</h3>

          <iframe
            className="video-yt"
            loading="lazy"
            src="https://www.youtube.com/embed/0leFkWYyv4c"
            title="Plastics - then and now I Helmchron I Chemistry Connects Us"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div
          style={{ marginTop: 50 }}
          dangerouslySetInnerHTML={{
            __html: t("blog.blog3.content.references")
          }}
        />
      </div>
    </div>
  );
}
