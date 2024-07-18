import React, { useEffect, useState } from "react";
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
import Oursocial from "../assets/images/Values/Oursocial.gif";
import TextRender from "../components/TextRender";
import { useTranslation } from "react-i18next";

export default function OurValues() {
  const { t } = useTranslation();

  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const showText = () => {
      setShowFirstText(true);
      setTimeout(() => {
        setShowFirstText(false);
      }, 5000);

      setTimeout(() => {
        setShowSecondText(true);
        setTimeout(() => {
          setShowSecondText(false);
        }, 5000);
      }, 5000);
    };

    showText();
    const interval = setInterval(showText, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const ourValuesTexts = [t("navbar.our_values"), t("our_values.sub_text")];
  const IntegrityTexts = [
    t("our_way.title"),
    t("our_way.integrity.title"),
    t("our_way.integrity.text"),
    t("our_way.commitment.title"),
    t("our_way.commitment.text"),
    t("our_way.agility.title"),
    t("our_way.agility.text"),
    t("our_way.diversity.title"),
    t("our_way.diversity.text"),
    t("our_way.courage.title"),
    t("our_way.courage.text")
  ];
  const socialRespo = [t("social_respo.title"), t("social_respo.text")];

  return (
    <div>
      <Helmet>
        <title>Out Values | Helmchron</title>
      </Helmet>
      {/* Slider start */}
      {showFirstText}
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

      <div>
        <h1 className="title" data-aos="fade-up">
          {t("navbar.our_values")}
          <TextRender texts={ourValuesTexts} />
        </h1>

        <center className="container-main">
          <p
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: t("our_values.sub_text") }}
          />
        </center>

        <div style={{ marginTop: 100 }}>
          <h2 className="title" data-aos="fade-up">
            {t("our_way.title")}
            <TextRender texts={IntegrityTexts} />
          </h2>

          <div style={{ background: "var(--light-blue-color)" }}>
            <div className="row-img-text row1 container-main">
              <div className="row-img" data-aos="fade-right">
                <img src={Integrity} alt="" />
                <div className="rotatingText">
                  <div className="rotatingText-adjective">
                    {t("our_way.integrity.title")}
                  </div>
                  <div
                    className={`rotatingText-adjective ${showSecondText
                      ? "show"
                      : ""}`}
                  >
                    {t("connects")}
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="row-text"
                dangerouslySetInnerHTML={{
                  __html: t("our_way.integrity.text")
                }}
              />
            </div>
          </div>

          <div className="row-img-text container-main row2">
            <div className="row-img" data-aos="fade-left">
              <img src={Committment} alt="" />
              <div className="rotatingText">
                <div className="rotatingText-adjective">
                  {t("our_way.commitment.title")}
                </div>
                <div
                  className={`rotatingText-adjective ${showSecondText
                    ? "show"
                    : ""}`}
                >
                  {t("connects")}
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="row-text"
              dangerouslySetInnerHTML={{ __html: t("our_way.commitment.text") }}
            />
          </div>
          <div style={{ background: "var(--light-blue-color)" }}>
            <div className="row-img-text row3 container-main">
              <div className="row-img" data-aos="fade-right">
                <img src={Agility} alt="" />
                <div className="rotatingText">
                  <div className="rotatingText-adjective">
                    {t("our_way.agility.title")}
                  </div>
                  <div
                    className={`rotatingText-adjective ${showSecondText
                      ? "show"
                      : ""}`}
                  >
                    {t("connects")}
                  </div>
                </div>
              </div>
              <div className="row-text" data-aos="fade-left">
                <p>
                  {t("our_way.agility.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="row-img-text container-main row4">
            <div className="row-img" data-aos="fade-left">
              <img src={Diversity} alt="" />
              <div>
                <div className="rotatingText-adjective">
                  {t("our_way.diversity.title")}
                </div>
                <div
                  className={`rotatingText-adjective ${showSecondText
                    ? "show"
                    : ""}`}
                >
                  {t("connects")}
                </div>
              </div>
            </div>
            <div className="row-text" data-aos="fade-right">
              <p>
                {t("our_way.diversity.text")}
              </p>
            </div>
          </div>

          <div style={{ background: "var(--light-blue-color)" }}>
            <div className="row-img-text row5 container-main">
              <div className="row-img" data-aos="fade-right">
                <img src={Courage} alt="" />
                <div className="rotatingText">
                  <div className="rotatingText-adjective">
                    {t("our_way.courage.title")}
                  </div>
                  <div
                    className={`rotatingText-adjective ${showSecondText
                      ? "show"
                      : ""}`}
                  >
                    {t("connects")}
                  </div>
                </div>
              </div>
              <div className="row-text" data-aos="fade-left">
                <p>
                  {t("our_way.courage.text")}
                </p>
              </div>
            </div>
          </div>

          <div
            className="container-main padding30"
            style={{ marginBottom: 100 }}
          >
            <h3 className="title" data-aos="fade-up">
              {t("social_respo.title")}
              <TextRender texts={socialRespo} />
            </h3>

            <p
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: t("social_respo.text") }}
            />
          </div>

          <div className="container-main padding30">
            <img
              data-aos="zoom-in"
              className="our-social"
              src={Oursocial}
              alt="in motion"
            />
          </div>

          <center>
            <h2 className="title" data-aos="fade-up">
              {t("video_common_values")}
            </h2>
            <iframe
              data-aos="fade-up"
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
