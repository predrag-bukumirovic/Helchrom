import React, { useState, useCallback } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

import mainImg1 from "../assets/images/Who/baner1.png";
import mainImg2 from "../assets/images/Who/baner2.png";
import mainImg3 from "../assets/images/Who/baner3.png";
import basicImg from "../assets/images/Who/basicImg.png";
import OurImg from "../assets/images/Who/our-history.png";
import OUR_CREDO from "../assets/images/Who/OUR_CREDO.png";
import quotation from "../assets/images/quotation.png";
import OurcredoImg from "../assets/images/Who/OurcredoImg.png";
import "../assets/scss/slider.scss";
import "../assets/scss/who.scss";
import WhoIcons from "../components/WhoIcons";
import TextReader from "../components/TextRender";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    zIndex: 999999,
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "auto",
    padding: "20px",
    marginTop: 100
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

  const whoHeader = [t("who_are_we.title"), t("who_are_we.text_sub")];
  const historyText = [t("who_are_we.history"), t("who_are_we.history_text")];
  const credoText = [t("who_are_we.credo_title"), t("who_are_we.credo_text")];
  const quotationText = [t("who_are_we.quotation")];

  return (
    <div>
      <Helmet>
        <title>Who are we? | Helmchron</title>
      </Helmet>
      <div>
        <div className="slider">
          <CCarousel className="slider-main" controls transition="crossfade">
            {[mainImg1, mainImg2, mainImg3].map((img, index) =>
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
            {[mainImg1, mainImg2, mainImg3].map((img, index) =>
              <div key={index}>
                <img src={img} alt={`Main ${index + 1}`} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container-main padding30">
        <h1 className="title" data-aos="fade-up">
          {t("who_are_we.title")}
        </h1>
        <center>
          <p
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: t("who_are_we.text_sub") }}
          />
          <TextReader texts={whoHeader} />
        </center>

        <WhoIcons />
      </div>

      <div className="history">
        <div>
          <div className="container-main padding30">
            <h2 className="title">
              {t("who_are_we.history")}
            </h2>
            <TextReader texts={historyText} />
            <div className="our-history">
              <div
                data-aos="fade-right"
                className="text"
                dangerouslySetInnerHTML={{
                  __html: t("who_are_we.history_text")
                }}
              />

              <img data-aos="fade-left" src={OurImg} alt="Our history" />
            </div>
          </div>
        </div>
      </div>

      <div className="credo container-main padding30">
        <h2 className="title">
          {t("who_are_we.credo_title")}
        </h2>

        <p
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: t("who_are_we.credo_text") }}
        />
        <TextReader texts={credoText} />
      </div>

      <div>
        <div className="container-main credo-testimonial">
          <div data-aos="fade-right">
            <img src={OurcredoImg} alt="OurcredoImg" />
          </div>
          <div>
            <p data-aos="fade-left">
              <img src={quotation} alt="" />

              <span
                dangerouslySetInnerHTML={{ __html: t("who_are_we.quotation") }}
              />
            </p>
            <TextReader texts={quotationText} />
            <span
              data-aos="fade-left"
              style={{ float: "right", cursor: "pointer" }}
              className="book-btn"
              onClick={openModal}
            >
              {t("read_more")}
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
                  padding: "10px 20px",
                  background: "var(--brend-color)",
                  marginBottom: 10,
                  color: "#fff"
                }}
                onClick={closeModal}
              >
                X
              </button>
              <img style={{ width: "100%" }} src={OUR_CREDO} alt="Our Credo" />
            </Modal>
          </div>
        </div>
      </div>

      <div className="container-main">
        <div className="basic padding30">
          <div className="padding30">
            <h2 className="title" style={{ padding: 0 }} data-aos="fade-right">
              {t("info.title")}
            </h2>
            <ul data-aos="fade-right">
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
            <ul data-aos="fade-right">
              <li>
                {t("info.contact")}
              </li>
              <li>
                {t("info.phone")}{" "}
                <a href="tel:+381642938533">+381 64 293 85 33</a>
              </li>
              <li>
                {t("info.email")}{" "}
                <a href="mailto:milos.ivosevic@helmchron.com">
                  milos.ivosevic@helmchron.com
                </a>
              </li>
              <li>
                {t("info.linkedin")}{" "}
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
          <img data-aos="fade-left" src={basicImg} alt="Basic" />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
