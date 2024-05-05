import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

import "../assets/scss/slider.scss";
import "../assets/scss/mission-vision.scss";

import mainImg from "../assets/images/Values/baner1.png";
import mainImg1 from "../assets/images/Values/baner2.png";
import mainImg2 from "../assets/images/Values/baner3.png";
import Integrity from "../assets/images/Values/Integrity.png";
import Committment from "../assets/images/Values/Committment.png";
import Agility from "../assets/images/Values/Agility.png";
import Diversity from "../assets/images/Values/Diversity.png";
import Courage from "../assets/images/Values/Courage.png";
import Oursocial from "../assets/images/Values/Oursocial.png";
import { useTranslation } from "react-i18next";

export default function OurValues() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Out Values | Helmchron</title>
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
            <img src={mainImg} alt="Main" />
          </div>
          <div>
            <img src={mainImg1} alt="Main" />
          </div>
          <div>
            <img src={mainImg2} alt="Main" />
          </div>
        </div>
      </div>
      {/* Slider end */}

      <div className="container-main padding30">
        <h1 className="title">
          {t("navbar.our_values")}
        </h1>

        <center>
          <p dangerouslySetInnerHTML={{ __html: t("our_values.sub_text") }} />
        </center>

        <div style={{ marginTop: 100 }}>
          <h2 className="title">
            {t("our_way.title")}
          </h2>
          <div className="row-img-text row1">
            <div className="row-img">
              <img src={Integrity} alt="" />
              <div className="rotatingText">
                <div className="rotatingText-adjective">
                  {t("our_way.integrity.title")}
                </div>
                <div className="rotatingText-adjective">
                  {t("connects")}
                </div>
              </div>
            </div>
            <div
              className="row-text"
              dangerouslySetInnerHTML={{ __html: t("our_way.integrity.text") }}
            />
          </div>
          <div className="row-img-text row2">
            <div className="row-img">
              <img src={Committment} alt="" />
              <div>
                <div>
                  {t("our_way.commitment.title")}
                </div>
                <div>
                  {t("connects")}
                </div>
              </div>
            </div>
            <div
              className="row-text"
              dangerouslySetInnerHTML={{ __html: t("our_way.commitment.text") }}
            />
          </div>
          <div className="row-img-text row3">
            <div className="row-img">
              <img src={Agility} alt="" />
              <div className="rotatingText">
                <div className="rotatingText-adjective">
                  {t("our_way.agility.title")}
                </div>
                <div className="rotatingText-adjective">
                  {t("connects")}
                </div>
              </div>
            </div>
            <div className="row-text">
              <p>
                {t("our_way.agility.text")}
              </p>
            </div>
          </div>
          <div className="row-img-text row4">
            <div className="row-img">
              <img src={Diversity} alt="" />
              <div>
                <div>
                  {t("our_way.diversity.title")}
                </div>
                <div>
                  {t("connects")}
                </div>
              </div>
            </div>
            <div className="row-text">
              <p>
                {t("our_way.diversity.text")}
              </p>
            </div>
          </div>
          <div className="row-img-text row5">
            <div className="row-img">
              <img src={Courage} alt="" />
              <div className="rotatingText">
                <div className="rotatingText-adjective">
                  {t("our_way.courage.title")}
                </div>
                <div className="rotatingText-adjective">
                  {t("connects")}
                </div>
              </div>
            </div>
            <div className="row-text">
              <p>
                {t("our_way.courage.text")}
              </p>
            </div>
          </div>

          <div style={{ marginBottom: 100 }}>
            <h3 className="title">
              {t("social_respo.title")}
            </h3>

            <p dangerouslySetInnerHTML={{ __html: t("social_respo.text") }} />
          </div>

          <img className="our-social" src={Oursocial} alt="" />

          <center>
            <h2 className="title">
              {t("video_common_values")}
            </h2>
            <iframe
              className="video-yt"
              loading="lazy"
              src="https://www.youtube.com/embed/ggIoQMjqkVM"
              title="Helmchron - Our core values"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </center>
        </div>
      </div>
    </div>
  );
}
