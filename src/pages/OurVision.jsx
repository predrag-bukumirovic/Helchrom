import React, { useState } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import "../assets/scss/slider.scss";
import "../assets/scss/mission-vision.scss";
import "../assets/scss/home.scss";

import mainImg from "../assets/images/Vision/vision1.jpg";
import mainImg1 from "../assets/images/Vision/vision2.jpg";
import mainImg2 from "../assets/images/Vision/vision3.jpg";
import imgTesti from "../assets/images/Vision/imgtesti.jpg";
import Kawasaki from "../assets/images/Vision/Kawasaki.png";
import MVDesno from "../assets/images/Vision/m-v-desno.png";
import MVLevo from "../assets/images/Vision/m-v-levo.png";
import partnerships from "../assets/images/Vision/partnerships.png";
import portfolio from "../assets/images/Vision/portfolio.png";
import team from "../assets/images/Vision/team.png";
import Innovation from "../assets/images/Vision/Innovation.png";
import sustainability from "../assets/images/Vision/sustainability.png";
import icon1 from "../assets/images/Vision/1.png";
import icon2 from "../assets/images/Vision/2.png";
import icon3 from "../assets/images/Vision/3.png";
import icon4 from "../assets/images/Vision/4.png";
import icon5 from "../assets/images/Vision/5.png";

export default function OurVision() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState("");

  const closeModal = () => setShowModal(false);
  const openModal = image => setShowModal(image);

  const strategicFocusAreas = [
    { icon: icon1, image: partnerships },
    { icon: icon2, image: portfolio },
    { icon: icon3, image: team },
    { icon: icon4, image: Innovation },
    { icon: icon5, image: sustainability }
  ];

  return (
    <div>
      <Helmet>
        <title>Out vision and mission | Helmchron</title>
      </Helmet>

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
          {[mainImg, mainImg1, mainImg2].map((image, index) =>
            <div key={index}>
              <img src={image} alt="Main" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main">
        <h1 className="title">
          {t("vision.title")}
        </h1>
        <center>
          <p dangerouslySetInnerHTML={{ __html: t("vision.sub_text") }} />
        </center>
        <div className={showModal ? "modal-img" : "show"} onClick={closeModal}>
          <img src={showModal} alt="Modal Images" />
        </div>
        <div style={{ marginTop: 100 }} className="padding30">
          <h2 className="title">
            {t("vision.our_strategic.title")}
          </h2>
          <div className="strategic">
            {strategicFocusAreas.map((item, index) =>
              <div key={index} onClick={() => openModal(item.image)}>
                <img src={item.icon} alt={`icon${index + 1}`} />
              </div>
            )}
          </div>
          <center>
            <p>
              {t("vision.our_strategic.text")}
            </p>
          </center>
        </div>
      </div>
      {/* Our mision */}
      <div>
        <div className="mission-vision">
          <h2 style={{ marginTop: 100 }} className="title">
            {t("vision.our_mission_vision.title")}
          </h2>

          <div
            className="row-m-v"
            style={{ background: "var(--lite-orange-color)" }}
          >
            <div className="container-main padding30">
              <div className="col">
                <div className="col-img">
                  <img src={MVLevo} alt="Slika" />
                </div>
                <div className="col-text">
                  <h3>
                    {t("vision.our_mission_vision.mission.title")}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("vision.our_mission_vision.mission.text")
                    }}
                  />
                  <a className="book-btn" href="/">
                    {t("read_more")}
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="col-img">
                  <img src={MVDesno} alt="Slika" />
                </div>
                <div className="col-text">
                  <h3>OUR VISION</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("vision.our_mission_vision.vision_.text")
                    }}
                  />
                  <a
                    className="book-btn"
                    href="/competences&services/our-core-competencies"
                  >
                    {t("read_more")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kawasaki container-main padding30">
        <div>
          <img src={imgTesti} alt="imgTesti" />
          <img src={Kawasaki} alt="Kawasaki" />
        </div>
        <p
          style={{ margin: 0 }}
          dangerouslySetInnerHTML={{ __html: t("download_brochure") }}
        />
      </div>
    </div>
  );
}
