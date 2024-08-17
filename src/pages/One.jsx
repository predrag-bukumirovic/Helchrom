import React, { useState, useEffect } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "../assets/scss/one.css";

import slideImg1 from "../assets/images/Helmchrone/1.png";
import slideImg2 from "../assets/images/Helmchrone/2.png";
import slideImg3 from "../assets/images/Helmchrone/3.png";
import slideImg4 from "../assets/images/Helmchrone/4.png";
import slideImg5 from "../assets/images/Helmchrone/5.png";

import mainImg from "../assets/images/Helmchrone/banner1.png";
import mainImg1 from "../assets/images/Helmchrone/banner2.png";
import mainImg2 from "../assets/images/Helmchrone/banner3.png";

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
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div>
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

      <div className="container-main">
        <div className="slider-container">
          <div className="slider">
            <b>Benefits of Helmchron ONE</b>
            <div className="slider-images">
              {images.map((image, index) =>
                <div
                  key={index}
                  className={`slider-image ${index === currentIndex
                    ? "active"
                    : ""}`}
                  style={{ backgroundImage: `url(${image.srcImg})` }}
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
              <center>
                <span>
                  Click on the next image to read another Helmchron ONE benefit
                </span>
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
          <center>
            {currentIndex + 1}/{images.length}
          </center>
        </div>
      </div>
    </div>
  );
};

export default One;
