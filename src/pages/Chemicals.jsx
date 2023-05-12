import React from "react";
import "../assets/scss/slider.scss";
import mainImg from "../assets/images/Chemicals/chemicals1.webp";
import mainImg1 from "../assets/images/Chemicals/chemicals2.webp";
import mainImg2 from "../assets/images/Chemicals/chemicals3.webp";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import icon1 from "../assets/images/Chemicals/1.png";
import icon2 from "../assets/images/Chemicals/2.png";
import icon3 from "../assets/images/Chemicals/3.png";
import { useTranslation } from "react-i18next";

export default function Chemicals() {
  const { t } = useTranslation();

  return (
    <div className="container-main">
      {/* Slider start */}
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
      {/* Slider end */}

      <div className="box-text">
        <h1 className="title">
          {t("chemicals.title")}
        </h1>

        <p style={{ fontSize: 18, textAlign: "center" }}>
          <i>
            {t("chemicals.text1")}{" "}
          </i>
        </p>

        <div className="text-icon">
          <img src={icon1} alt="ICON 1" />
          <p>
            {t("chemicals.text2")}{" "}
          </p>
        </div>

        <div className="text-icon">
          <img src={icon2} alt="ICON 2" />
          <p>
            {t("chemicals.text3")}{" "}
          </p>
        </div>

        <div className="text-icon">
          <img src={icon3} alt="ICON 3" />

          <div>
            <p>
              {t("chemicals.text4")}{" "}
            </p>

            <p>
              {t("chemicals.text5")}{" "}
            </p>
          </div>
        </div>

        <p>
          {t("chemicals.text6")}{" "}
          <a href="mailto:milos.ivosevic@helmchron.com">
            milos.ivosevic@helmchron.com
          </a>
        </p>

        <span>
          <h2 className="subtitle">References:</h2>

          <p dangerouslySetInnerHTML={{ __html: `${t("chemicals.text7")}` }} />
        </span>
      </div>
    </div>
  );
}
