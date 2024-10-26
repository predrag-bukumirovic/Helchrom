import React, { useEffect, useState } from "react";
import "../assets/scss/competences.css";

import pipingImg from "../assets/images/Competences/orginalImg/Piping.jpg";
import equipmentImg from "../assets/images/Competences/orginalImg/Equipment.jpg";
import cleanImg from "../assets/images/Competences/orginalImg/Cleanmedia.jpg";
import roomsImg from "../assets/images/Competences/orginalImg/Cleanroom.jpg";
import HVACImg from "../assets/images/Competences/orginalImg/HVAC.jpg";
import UtilitiesImg from "../assets/images/Competences/orginalImg/Utilities.jpg";
import MSRImg from "../assets/images/Competences/orginalImg/MSR.jpg";
import { useTranslation } from "react-i18next";

const images = [
  {
    srcImg: pipingImg,
    title: "Piping",
    text:
      "We offer a comprehensive range of piping engineering, including aseptic and hygienic pipeline solutions, tailored to meet the specific requirements of various industries within our areas of expertise. From detailed audits and walk-downs to installation support, we provide complete project lifecycle support to ensure seamless execution and client satisfaction."
  },
  {
    srcImg: equipmentImg,
    title: "Equipment",
    text:
      "At Helmchron, we understand that proper equipment design is essential for maintaining plant efficiency, ensuring product quality, and safeguarding both personnel and the environment. With a focus on the highest industry standards, regulations, and specific production requirements, we design a wide range of process equipment, including unit operations and heat transfer systems, to meet the needs of our clients."
  },
  {
    srcImg: cleanImg,
    title: "Clean media ",
    plusTitle: "storage and distribution system design",
    text:
      "Our clean media storage and distribution system design services encompass a wide range of solutions, including fluids for pharmaceutical and electronics industry. All our services are tailored to meet rigorous standards and ensure reliable and efficient clean media management throughout production processes."
  },
  {
    srcImg: roomsImg,
    title: "Clean rooms",
    text:
      "We deliver full range of solutions, including water-peroxide disinfection system design, pressure cascade design, and optimized personnel and material flow layouts. Our tailored clean room design solutions meet the specific needs of pharmaceutical, biotechnology, microbiology, genetic engineering, electronics, and food industries, ensuring operational efficiency and compliance."
  },
  {
    srcImg: HVACImg,
    title: "HVAC",
    text:
      "Our competences include the design and implementation of ventilation and air conditioning systems, along with heat recovery and advanced heating and cooling technologies. Each system is tailored to meet client requirements and the stringent standards of the pharmaceutical, biotechnology, and electronics industries, ensuring optimal environmental conditions and full regulatory compliance."
  },
  {
    srcImg: UtilitiesImg,
    title: "Utilities",
    text:
      "Our solutions cover refrigeration and heating media, saturated steam and condensate systems, and process cooling water, while factoring in heat recovery and optimization. Each solution is customized to meet the unique needs and requirements of every project, ensuring compliance with regulatory  standards and adherence to industry best practices."
  },
  {
    srcImg: MSRImg,
    title: "MSR",
    text:
      "We provide MSR concept development, planning, and procurement, alongside control system design using standard CAE systems. Our offerings include PLC/DDC system programming, manufacturer- independent building management systems, hardware and software commissioning, energy management, remote monitoring, as well as training and maintenance services."
  }
];

const Competences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
              >
                <span
                  className={`img-title ${index === currentIndex
                    ? "active"
                    : ""}`}
                >
                  {image.title}
                </span>
              </div>
            )}
          </div>
          <div className="slider-text-container">
            <div className="slider-text">
              <b>
                <span>
                  {images[currentIndex].title} {images[currentIndex].plusTitle}
                </span>
              </b>
              <p style={{ fontSize: 16 }}>
                {images[currentIndex].text}
              </p>
            </div>
            <center style={{ color: "#000" }}>
              Click on the next image to explore another of our competences.
            </center>
          </div>
        </div>
        <div className="slider-controls">
          <button className="arrow-slider" onClick={handlePrev}>
            &#10094;
          </button>
          <div className="slider-dots">
            {images.map((_, index) =>
              <div
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            )}
          </div>
          <button className="arrow-slider" onClick={handleNext}>
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
