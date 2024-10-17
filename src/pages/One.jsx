import React, { useState, useEffect } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "../assets/scss/one.css";
import "../assets/scss/home.scss";

import slideImg1 from "../assets/images/Helmchrone/1.png";
import slideImg2 from "../assets/images/Helmchrone/2.png";
import slideImg3 from "../assets/images/Helmchrone/3.png";
import slideImg4 from "../assets/images/Helmchrone/4.png";
import slideImg5 from "../assets/images/Helmchrone/5.png";

import mainImg from "../assets/images/Helmchrone/banner1.png";
import mainImg1 from "../assets/images/Helmchrone/banner2.png";
import mainImg2 from "../assets/images/Helmchrone/banner3.png";

import inzenjer from "../assets/images/Helmchrone/inzenjer.png";

import icon1 from "../assets/images/Helmchrone/icon1.png";
import icon2 from "../assets/images/Helmchrone/icon2.png";
import icon3 from "../assets/images/Helmchrone/icon3.png";
import { useTranslation } from "react-i18next";

const images = [
  {
    srcImg: slideImg1,
    title: "Agility and Responsiveness",
    text:
      "Our dedicated teams are highly adaptable, allowing them to respond quickly to changes and evolving client needs. This agility is particularly valuable during on-site visits and in situations where quick decisions are crucial."
  },
  {
    srcImg: slideImg2,
    title: "Cost Efficiency",
    text:
      "By streamlining processes and reducing delays, Helmchron ONE helps clients to maximize the value of their investment. The focused approach minimizes errors and rework, contributing to significant cost savings."
  },
  {
    srcImg: slideImg3,
    title: "Personalized Service",
    text:
      "The team is deeply familiar with the client’s outcomes and requirements, enabling them to provide personalized, high-quality service that exceeds expectations."
  },
  {
    srcImg: slideImg4,
    title: "Enhanced Project Accountability",
    text:
      "Helmchron ONE fosters a strong sense of accountability within the dedicated team, ensuring timely decision-making and a commitment to delivering outstanding results with pride."
  },
  {
    srcImg: slideImg5,
    title: "Clear Communication",
    text:
      "With a single team handling the project, communication is streamlined. This clarity reduces misunderstandings, enhances collaboration, and ensures that all stakeholders are aligned throughout the project lifecycle."
  }
];

const One = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(
    () => {
      if (window.innerWidth <= 768) {
        adjustSliderPosition(currentIndex);
      }
    },
    [currentIndex]
  );

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const handleDotClick = index => {
    setCurrentIndex(index);
  };

  const handleImageClick = index => {
    setCurrentIndex(index);
  };

  const handleTouchStart = e => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = e => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      handlePrev();
    }
  };

  const adjustSliderPosition = index => {
    const sliderImages = document.querySelector(".slider-images");
    const sliderImageElements = Array.from(
      document.querySelectorAll(".slider-image")
    );
    const activeImageElement = sliderImageElements[index];
    const activeImageWidth = activeImageElement.clientWidth;
    const containerWidth = sliderImages.clientWidth;
    const imageOffset = activeImageElement.offsetLeft;

    const centerOffset = containerWidth / 2 - activeImageWidth / 2;
    const translateX = -(imageOffset - centerOffset);

    sliderImages.style.transform = `translateX(${translateX}px)`;
  };

  return (
    <div className="one">
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
            <img src={mainImg} alt="Main1" />
          </div>
          <div>
            <img src={mainImg1} alt="Main2" />
          </div>
          <div>
            <img src={mainImg2} alt="Main3" />
          </div>
        </div>
      </div>
      {/* Slider end */}

      <div className="container-main padding30">
        <h2 className="title">
          Focus on Success with{" "}
          <span
            style={{
              fontSize: "inherit",
              textTransform: "none"
            }}
          >
            HELMCHR<span
              style={{ fontSize: "inherit", color: "var(--brend-color)" }}
            >
              ONe
            </span>
          </span>
        </h2>

        <center data-aos="fade-up">
          <p>
            Helmchron ONE is our service concept in which we dedicate ONE team
            to ONE project and ONE client only. Collaborating with our clients,
            we've identified a critical challenge in project management - the
            absence of focus that leads to prolonged timelines, compromised
            outcomes, and budget overruns. With Helmchrone ONE, each client is
            assigned a dedicated team, ensuring focused expertise and prompt
            responsiveness to feedback and requirements.
          </p>
        </center>

        <div className="our-home container-main">
          <center>
            <span data-aos="fade-up">Helmchron ONE Approach</span>
          </center>

          <div
            className="services-icon"
            style={{ width: "80%", margin: "50px auto" }}
          >
            <div data-aos="zoom-in">
              <img src={icon1} alt="Icon 1" />

              <h3>ONE TEAM</h3>
              <p>
                Each project is assigned a dedicated team who is fully
                accountable for every aspect of the project. Focusing
                exclusively on a single project allows the team to stay
                consistently aware of all the details, from milestones to
                outcomes.
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon2} alt="Icon 2" />
              <h3>ONE CLIENT</h3>
              <p>
                We believe that the key to a successful partnership is undivided
                focus. With Helmchron ONE, a team is dedicated exclusively to
                one client, fostering stronger partnerships and a deeper
                understanding of the client’s unique needs and goals.
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon3} alt="Icon 3" />

              <h3>ONE PROJECT</h3>
              <p>
                By concentrating expertise and creativity, we ensure unmatched
                quality, efficiency, and effectiveness. This focused approach
                leads to faster decision-making, seamless execution, and
                successful project outcomes.
              </p>
            </div>
          </div>

          <center data-aos="fade-up">
            <p style={{ marginBottom: 30 }}>
              To learn more about Helmchron ONE and our services, schedule a
              meeting with our team.
            </p>

            <a
              style={{ background: "var(--dark-blue-color)" }}
              className="book-btn"
              href="/contact"
            >
              {t("read_more")}
            </a>
          </center>
        </div>
      </div>

      <div>
        <div className="slider-container">
          <div className="slider-one">
            <span>Benefits of Helmchron ONE</span>
            <div
              className="slider-images"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {images.map((image, index) =>
                <div
                  key={index}
                  className={`slider-image ${index === currentIndex
                    ? "active"
                    : ""}`}
                  style={{
                    backgroundImage: `url(${image.srcImg})`
                  }}
                  onClick={() => handleImageClick(index)}
                />
              )}
            </div>
            <div className="slider-text-container">
              <div className="slider-text">
                <b>
                  <span>
                    {images[currentIndex].title}
                  </span>
                </b>
                <p>
                  {images[currentIndex].text}
                </p>
              </div>
              <center style={{ color: "#000" }}>
                Click on the next image to read another Helmchron ONE benefit
              </center>
            </div>
          </div>
          <div className="slider-controls">
            <button
              className="slider-button slider-button-prev"
              onClick={handlePrev}
            >
              &#10094;
            </button>
            <div className="slider-dots">
              {images.map((_, index) =>
                <div
                  key={index}
                  className={`slider-dot ${index === currentIndex
                    ? "active"
                    : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              )}
            </div>
            <button
              className="slider-button slider-button-next"
              onClick={handleNext}
            >
              &#10095;
            </button>
          </div>
          <center style={{ color: "#000" }}>
            {currentIndex + 1}/{images.length}
          </center>
        </div>
      </div>

      <div className="container-main padding30 why-one">
        <div data-aos="fade-right" style={{ marginTop: 50 }}>
          <span>Why Helmchron ONE?</span>

          <p style={{ marginTop: 30 }}>
            In developing Helmchron ONE, we listened to our clients and observed
            the challenges that arise when attention is divided across multiple
            projects. We recognized that this lack of focus often leads to
            delays, exceeded budgets, and strained resources. Helmchron ONE
            ensures every project is completed efficiently, effectively, and
            perfectly aligned with our client`s strategic objectives.
          </p>
          <p style={{ marginBottom: 40 }}>
            Learn more about our initiatives. Discover how Helmchron Navigator
            can elevate your plant design.
          </p>

          <a
            style={{ background: "var(--dark-blue-color)" }}
            className="book-btn"
            href="/"
          >
            {t("read_more")}
          </a>
        </div>
        <img data-aos="fade-left" src={inzenjer} alt="inzenjer" />
      </div>
    </div>
  );
};

export default One;
