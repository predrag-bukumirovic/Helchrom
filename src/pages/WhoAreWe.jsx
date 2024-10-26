import React, { useState, useCallback } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

import mainImg1 from "../assets/images/Who/baner1.png";
import mainImg2 from "../assets/images/Who/baner2.png";
import mainImg3 from "../assets/images/Who/baner3.png";
import basicImg from "../assets/images/Who/basicImg.png";
import history1 from "../assets/images/Who/history1.png";
import history2 from "../assets/images/Who/history2.png";

import purposeValues from "../assets/images/Who/purposeValues.png";

import OUR_CREDO from "../assets/images/Who/OUR_CREDO.png";
import quotation from "../assets/images/quotation.png";
import OurcredoImg from "../assets/images/Who/OurcredoImg.png";
import "../assets/scss/slider.scss";
import "../assets/scss/who.scss";
import "../assets/scss/division.scss";
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
              <div className="text">
                <div
                  data-aos="fade-right"
                  dangerouslySetInnerHTML={{
                    __html: t("who_are_we.history_text")
                  }}
                />
                <a
                  style={{ float: "right" }}
                  className="book-btn"
                  href="/our-services"
                >
                  {t("read_more")}
                </a>
              </div>

              <div style={{ clear: "both" }} class="image-content">
                <img data-aos="fade-left" src={history1} alt="Our history 1" />
                <img data-aos="fade-left" src={history2} alt="Our history 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "30px 0", margin: "50px 0" }}>
        <div className="container-main">
          <center>
            <h2 className="title">OUR COMPETENCES</h2>
            <p>
              Our diverse competencies enable us to deliver comprehensive,
              high-quality engineering solutions tailored to meet the most
              complex project needs. From piping to cleanroom design and HVAC
              systems, we are committed to continuously developing our expertise
              to ensure the successful realization of our partners` outcomes.
            </p>
          </center>

          <div className="who-circle">
            <a href="/our-services">
              <div>
                <div className="who-img">
                  <span>Piping</span>
                </div>
              </div>
            </a>
            <a href="/our-services">
              <div>
                <div className="who-img">
                  <span>EQUIPMENT</span>
                </div>
              </div>
            </a>
            <a href="/our-services">
              <div>
                <div className="who-img">
                  <span>Clean Media</span>
                </div>
              </div>
            </a>
            <a href="/our-services">
              <div>
                <div className="who-img">
                  <span>Clean Rooms</span>
                </div>
              </div>
            </a>
            <a href="/our-services">
              <div>
                <div className="who-img">
                  <span>HVAC</span>
                </div>
              </div>
            </a>
            <a href="/our-services">
              <div>
                <div className="who-img">
                  <span>Utilities</span>
                </div>
              </div>
            </a>
            <a href="/our-services">
              <div>
                <div className="who-img">
                  <span>MSR</span>
                </div>
              </div>
            </a>
          </div>

          <center className="container-main">
            <p>Explore our competences.</p>
            <a className="book-btn" href="/our-services">
              {t("read_more")}
            </a>
          </center>
        </div>
      </div>

      <section className="purpose-values container-main">
        <div data-aos="fade-right" style={{ padding: 20 }}>
          <h2 style={{ textAlign: "start" }} className="title">
            OUR PURPOSE
          </h2>
          <p>
            We provide advanced plant design engineering solutions with the
            vision to enhance the quality of life for the coming generations
            worldwide. With our expertise, we aim to drive progress in the
            manufacturing of products that are essential for global and
            individual health, ensure the availability of healthy food, and
            sustainability in the manufacturing of electronics, energy, and oil
            and gas.
          </p>
          <p style={{ marginBottom: 50 }}>
            Learn more about our vision and mission.
          </p>
          <a className="book-btn" href="/">
            {t("read_more")}
          </a>
        </div>
        <div data-aos="zoom-in">
          <img src={purposeValues} alt="purposeValues" />
        </div>
        <div data-aos="fade-left" style={{ padding: 20 }}>
          <h2 style={{ textAlign: "start" }} className="title">
            OUR VALUES
          </h2>
          <p>
            We embed our values into every aspect of our operations and
            interactions - be it with our team, partners, community, or the
            environment. By fostering a supportive and respectful environment,
            we ensure that our team is empowered to deliver exceptional service
            and solutions. Our core values are integral to our vision and
            partnerships, driving our commitment to delivering impactful
            outcomes for our partners and making a meaningful contribution on a
            global scale.
          </p>
          <p style={{ marginBottom: 50 }}>Discover our way of work.</p>
          <a className="book-btn" href="/">
            {t("read_more")}
          </a>
        </div>
      </section>

      <section className="credo container-main padding30">
        <h2 className="title">
          {t("who_are_we.credo_title")}
        </h2>

        <p
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: t("who_are_we.credo_text") }}
        />
        <TextReader texts={credoText} />
      </section>

      <div>
        <div className="container-main credo-testimonial">
          <img data-aos="fade-right" src={OurcredoImg} alt="OurcredoImg" />

          <div>
            <p data-aos="fade-left">
              <img src={quotation} alt="quotation" />

              <span
                dangerouslySetInnerHTML={{ __html: t("who_are_we.quotation") }}
              />
            </p>
            <TextReader texts={quotationText} />
            <span
              data-aos="fade-left"
              style={{ cursor: "pointer" }}
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
          <div>
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
              {/* <li>TIN: 112690991</li> */}
              {/* <li>
                {t("info.reg_num")}
              </li> */}
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
                <a href="mailto:office@helmchron.com">office@helmchron.com</a>
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
