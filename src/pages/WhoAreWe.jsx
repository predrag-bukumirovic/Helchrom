import React, { useState, useCallback } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

import mainImg from "../assets/images/Who/who3.webp";
import mainImg1 from "../assets/images/Who/who1.webp";
import mainImg2 from "../assets/images/Who/who2.webp";
import icon1 from "../assets/images/Who/Chemicals.png";
import icon2 from "../assets/images/Who/Pharmaceuticals.png";
import icon3 from "../assets/images/Who/Vehicles.png";
import icon4 from "../assets/images/Who/Environment.png";
import basicImg from "../assets/images/Who/basicImg.webp";
import OurImg from "../assets/images/Who/our-history.png";
import OUR_CREDO from "../assets/images/Who/OUR_CREDO.png";
import "../assets/scss/slider.scss";
import "../assets/scss/who.scss";

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
    marginTop: 50,
  },
};

const WhoAreWe = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Optimizovane funkcije za otvaranje i zatvaranje modala
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
      <div className="container-main">
        <CCarousel className="slider-main" controls transition="crossfade">
          {[mainImg2, mainImg1, mainImg].map((img, index) => (
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
          {[mainImg2, mainImg1, mainImg].map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Main ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="container-main padding30">
        <h1 className="title">{t("title_who")}</h1>
        <center>
          {[t("who_text1"), t("who_text2")].map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </center>
        <div className="who-icon">
          {[
            { img: icon1, text: t("ul1"), link: "/chemicals" },
            { img: icon2, text: t("ul2"), link: "/pharma" },
            { img: icon3, text: t("ul3"), link: "/vehicles" },
            { img: icon4, text: t("ul4"), link: "/environment" },
          ].map((item, index) => (
            <div key={index}>
              <a href={item.link}>
                <img src={item.img} alt={`icon${index + 1}`} />
                <p>
                  <b>{item.text}</b>
                </p>
              </a>
            </div>
          ))}
        </div>
        <center>
          <p dangerouslySetInnerHTML={{ __html: t("who_text3") }} />
        </center>
      </div>
      <div className="history">
        <div>
          <div className="container-main padding30">
            <h2 className="title">OUR HISTORY</h2>
            <div className="our-history">
              <div className="text">
                <p>
                  Our journey of innovation and commitment to a sustainable
                  future started in 2010 in Belgrade, Serbia. We have embarked
                  on a mission to revolutionize the quality of life for the
                  coming generations with our process and chemical engineering
                  solutions.
                </p>
                <p>
                  From the early beginnings, we steadily expanded our reach,
                  initially serving local projects. In 2013, we set our sights
                  on the EU market, amplifying our impact on a global scale by
                  partnering with industry leaders in the pharmaceuticals and
                  chemicals sectors. In 2020, the pandemic only fueled our
                  determination to contribute to global health and well-being.
                </p>
                <p>
                  Helmchron path is one of continuous growth and evolution,
                  where every project is a testament to our unwavering
                  commitment to excellence and sustainability. As we look
                  ahead, our aspiration remains steadfast—to make an even
                  greater impact globally, ultimately benefiting everyone
                  everywhere.
                </p>
              </div>
              <div className="img">
                <img src={OurImg} alt="Our history" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="credo container-main padding30">
        <h2 className="title">Our credo</h2>
        <p>
          Our expertise and our impact are led by our vision and purpose to
          upgrade the quality of life, maintain strong, long-lasting
          partnerships, and empower our team with living by our values. Our
          accountability lies in providing process and chemical engineering
          solutions that enable manufacturing of efficient and safe products
          globally, guided by the belief in equal access to pharmaceuticals,
          chemicals, fuels, energy, and food. We prioritize our partners` needs
          and outcomes, our core values, environmental sustainability and
          stability of our business operations, envisioning a high quality of
          life for everyone.
        </p>
        <a href="javascript:void(0);" onClick={openModal}>
          Read more
        </a>
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
              color: "#fff",
            }}
            onClick={closeModal}
          >
            Close Modal
          </button>
          <img style={{ width: "100%" }} src={OUR_CREDO} alt="Our Credo" />
        </Modal>
      </div>
      <div className="container-main">
        <div className="basic padding30">
          <img src={basicImg} alt="Basic" />
          <div className="padding30">
            <h2>
              <b>BASIC COMPANY INFORMATION</b>
            </h2>
            <ul>
              <li>Registered activity: Engineering Services</li>
              <li>Year of establishment: 2010.</li>
              <li>Seat location: Belgrade, Serbia</li>
              <li>TIN: 112690991</li>
              <li>Registration number: 66287432</li>
            </ul>
            <ul>
              <li>Contact person: Milos Ivosevic, PhD, Process Engineer</li>
              <li>
                Phone number:{" "}
                <a href="tel:+381642938533">+381 64 293 85 33</a>
              </li>
              <li>
                Email address:{" "}
                <a href="mailto:milos.ivosevic@helmchron.com">
                  milos.ivosevic@helmchron.com
                </a>
              </li>
              <li>
                Linkedin profile:{" "}
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
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
