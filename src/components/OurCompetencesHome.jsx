import React, { useEffect, useState } from "react";
import "../assets/scss/competences.css";

import pipingImg from "../assets/images/Competences/orginalImg/Piping.png";
import equipmentImg from "../assets/images/Competences/orginalImg/Equipment.png";
import cleanImg from "../assets/images/Competences/orginalImg/Clean.png";
import roomsImg from "../assets/images/Competences/orginalImg/room.png";
import HVACImg from "../assets/images/Competences/orginalImg/HVAC.png";
import UtilitiesImg from "../assets/images/Competences/orginalImg/Utilities.png";
import MSRImg from "../assets/images/Competences/orginalImg/MSR.png";
import { useTranslation } from "react-i18next";

const images = [
  {
    srcImg: pipingImg,
    title: "Piping",
    text:
      "We provide advanced piping solutions, including aseptic, hygienic, and utility systems, tailored to the specific needs of pharmaceutical, food, chemical, energy, oil and gas, and electronics industries. Through detailed audits, walk-downs, and installation support, we ensure the highest standards of quality in every project."
  },
  {
    srcImg: equipmentImg,
    title: "Equipment",
    text:
      "By streamlining processes and reducing delays, Helmchron ONE helps clients to maximize the value of their investment. The focused approach minimizes errors and rework, contributing to significant cost savings."
  },
  {
    srcImg: cleanImg,
    title: "Clean media storage and distribution system design",
    text:
      "Our clean media storage and distribution system design services encompass a wide range of solutions, including Purified Water (PW), Water for Injection (WFI), Clean Steam (CS), and Clean Condensate (CC). All our services are tailored to meet rigorous standards and ensure reliable and efficient media management throughout production processes."
  },
  {
    srcImg: roomsImg,
    title: "Clean rooms",
    text:
      "We deliver comprehensive solutions such as H2O2 disinfection system design, pressure cascade design, and optimized personnel and material flow layouts. Our tailored clean room design solutions meet the specific needs of pharmaceutical, biotechnology, microbiology, genetic engineering, electronics, and food industries, ensuring operational efficiency and compliance."
  },
  {
    srcImg: HVACImg,
    title: "HVAC",
    text:
      "We encompass the design and implementation of ventilation and air conditioning systems, process air systems, heat recovery systems, and advanced heating and cooling technologies. We tailor the systems to meet the unique requirements of the pharmaceutical, biotechnology, electronics, and food industries, ensuring optimal environmental conditions and compliance with industry standards."
  },
  {
    srcImg: UtilitiesImg,
    title: "Utilities",
    text:
      "Encompassing refrigeration, heat, saturated steam, process cooling water, and heat recovery, our utility solutions are tailored to meet the needs and requirements of the project, including regulatory standards and best practices."
  },
  {
    srcImg: MSRImg,
    title: "MSR",
    text:
      "With a focus on MSR (Measurement, Control, and Regulation) solutions, we provide concept development, planning, and tendering, along with control system design using standard CAE systems. Our services include PLC/DDC systems programming, manufacturer-independent building management systems, commissioning of hardware and software, energy management, remote monitoring, training, and maintenance."
  }
];

const Competences = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const { t } = useTranslation();

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
    <section>
      <h2 className="title">Our competences</h2>

      <div className="slider-container">
        <div className="slider-one">
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
                  backgroundImage: `url(${image.srcImg})`,
                  borderRadius: 30
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
        <center style={{ marginTop: 30 }}>
          <a className="book-btn" href="/our-services">
            {t("read_more")}
          </a>
        </center>
      </div>
    </section>
  );
};

export default Competences;
