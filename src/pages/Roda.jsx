import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import mainImg from "../assets/images/Blog/Roda/1.webp";
import mainImg1 from "../assets/images/Blog/Roda/2.webp";
import mainImg2 from "../assets/images/Blog/Roda/3.webp";
import TextRender from "../components/TextRender";
import { useTranslation } from "react-i18next";

export default function Roda() {
  const { t } = useTranslation();

  const blogSound = [
    t("blog.blog4.content.title"),
    t("blog.blog4.content.text"),
    t("blog.blog4.content.text1")
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
            dangerouslySetInnerHTML={{ __html: t("blog.blog4.content.title") }}
          />
          <TextRender texts={blogSound} />
        </center>

        <p dangerouslySetInnerHTML={{ __html: t("blog.blog4.content.text") }} />
      </div>
    </div>
  );
}
