import React from "react";
import "../assets/scss/news-post.scss";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import mainImg from "../assets/images/News/slika1.jpg";
import mainImg1 from "../assets/images/News/slika2.jpg";
import mainImg2 from "../assets/images/News/slika3.jpg";
import { useTranslation } from "react-i18next";

export default function TeamTalk() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          {[mainImg, mainImg1, mainImg2].map((img, index) => (
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-100"
                src={img}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          ))}
        </CCarousel>

        <div className="box-img">
          {[mainImg, mainImg1, mainImg2].map((img, index) => (
            <div key={index}>
              <img style={{ objectFit: "fill" }} src={img} alt="Main" />
            </div>
          ))}
        </div>
      </div>

      <div className="container-sx padding30">
        <h1 className="title">{t("news.posts.post1.content.title")}</h1>

        <p
          style={{ textAlign: "center" }}
          dangerouslySetInnerHTML={{
            __html: t("news.posts.post1.content.text"),
          }}
        />

        <div className="episodes">
          <div>
            <h2>Helmchron TeamTalk - Our Values</h2>
            <iframe
              width="650"
              height="400"
              src="https://www.youtube.com/embed/hqtV0RveMQQ"
              title="Helmchron TeamTalk - Our Values"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
