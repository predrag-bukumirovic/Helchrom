import React, { useState, useCallback } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

import mainImg from "../assets/images/Who/who3.png";
import mainImg2 from "../assets/images/Who/who1.png";
import mainImg1 from "../assets/images/Who/who2.png";
import basicImg from "../assets/images/Who/basicImg.png";
import OurImg from "../assets/images/Who/our-history.png";
import OUR_CREDO from "../assets/images/Who/OUR_CREDO.png";
import quotation from "../assets/images/quotation.png";
import OurcredoImg from "../assets/images/Who/OurcredoImg.png";
import "../assets/scss/slider.scss";
import "../assets/scss/who.scss";
import WhoIcons from "../components/WhoIcons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    zIndex: 999999,
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    maxHeight: "80%",
    overflow: "auto",
    padding: "20px",
    marginTop: 50
  }
};

const WhoAreWe = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Who are we? | Helmchron</title>
      </Helmet>
      <div>
        <div className="slider">
          <CCarousel className="slider-main" controls transition="crossfade">
            {[mainImg2, mainImg1, mainImg].map((img, index) =>
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
            {[mainImg2, mainImg1, mainImg].map((img, index) =>
              <div key={index}>
                <img src={img} alt={`Main ${index + 1}`} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container-main padding30">
        <h1 className="title">
          {t("who_are_we.title")}
        </h1>
        <center>
          <p dangerouslySetInnerHTML={{ __html: t("who_are_we.text_sub") }} />
        </center>

        <WhoIcons />
      </div>

      <div className="history">
        <div>
          <div className="container-main padding30">
            <h2 className="title">
              {t("who_are_we.history")}
            </h2>
            <div className="our-history">
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: t("who_are_we.history_text")
                }}
              />

              <img src={OurImg} alt="Our history" />
            </div>
          </div>
        </div>
      </div>

      <div className="credo container-main padding30">
        <h2 className="title">
          {t("who_are_we.credo_title")}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: t("who_are_we.credo_text") }} />
      </div>

      <div style={{ background: "var(--lite-orange-color)" }}>
        <div className="container-main credo-testimonial">
          <div>
            <img src={OurcredoImg} alt="OurcredoImg" />
          </div>
          <div>
            <p>
              <img src={quotation} alt="" />

              <span
                dangerouslySetInnerHTML={{ __html: t("who_are_we.quotation") }}
              />
            </p>
            <span
              style={{ float: "right", cursor: "pointer" }}
              className="book-btn"
              onClick={openModal}
            >
              Read more
            </span>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Our Credo Modal"
            >
              <button
                style={{
                  border: "none",
                  padding: 10,
                  background: "var(--brend-color)",
                  marginBottom: 10,
                  color: "#fff"
                }}
                onClick={closeModal}
              >
                Close Modal
              </button>
              <img style={{ width: "100%" }} src={OUR_CREDO} alt="Our Credo" />
            </Modal>
          </div>
        </div>
      </div>

      <div className="container-main">
        <div className="basic padding30">
          <div className="padding30">
            <h2 className="title">
              <b>
                {t("info.title")}
              </b>
            </h2>
            <ul>
              <li>
                {t("info.reg")}
              </li>
              <li>
                {t("info.year")}
              </li>
              <li>
                {t("info.loc")}
              </li>
              <li>TIN: 112690991</li>
              <li>
                {t("info.reg_num")}
              </li>
            </ul>
            <ul>
              <li>
                {t("info.contact")}
              </li>
              <li>
                {t("info.phone")}{" "}
                <a href="tel:+381642938533">+381 64 293 85 33</a>
              </li>
              <li>
                {t('info.email')}{" "}
                <a href="mailto:milos.ivosevic@helmchron.com">
                  milos.ivosevic@helmchron.com
                </a>
              </li>
              <li>
                {t('info.linkedin')}{" "}
                <a
                  href="https://www.linkedin.com/in/dr-milos-ivosevic-300263166"
                  target="_blank"
                  rel="noreferrer"
                >
                  milos-ivosevic
                </a>{" "}
              </li>
            </ul>
          </div>
          <img src={basicImg} alt="Basic" />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
