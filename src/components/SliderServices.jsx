import React, { startTransition, useState } from "react";
import "../assets/scss/sliderHelOne.scss";
import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";
import icon5 from "../assets/images/Home/5.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SliderServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      icon: icon1,
      title: "services.icon.title1",
      text: "services.icon.text1",
      section: "section1"
    },
    {
      id: 2,
      icon: icon2,
      title: "services.icon.title2",
      text: "services.icon.text2",
      section: "section2"
    },
    {
      id: 3,
      icon: icon3,
      title: "services.icon.title3",
      text: "services.icon.text3",
      section: "section3"
    },
    {
      id: 4,
      icon: icon4,
      title: "services.icon.title4",
      text: "services.icon.text4",
      section: "section4"
    },
    {
      id: 5,
      icon: icon5,
      title: "services.icon.title5",
      text: "services.icon.text5",
      section: "section5"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  const handleIconClick = sectionX => {
    startTransition(() => {
      navigate(`/our-services#${sectionX}`);
    });
  };

  return (
    <div style={{ marginTop: 100 }} className="container-main">
      <div className="slider-helmone slider-services container-main">
        <div className="slider-left">
          <h2 className="title" style={{ textAlign: "start" }}>
            Our Services
          </h2>
          <p style={{ marginBottom: 30 }}>
            At Helmchron, we specialize in plant design engineering and project
            management for greenfield and brownfield projects. We collaborate
            with manufacturers worldwide to bring their plant visions to life,
            prioritizing efficiency and the highest standards of quality.
          </p>
          <a className="book-btn" href="/our-services">
            Read More
          </a>
        </div>
        <div className="slider-right" style={{ right: 0 }}>
          <div>
            <div className="slider-content" style={{ width: 900 }}>
              {items.map((item, index) =>
                <div
                  key={index}
                  onClick={() => handleIconClick(item.section)}
                  style={{
                    transform: `translateX(-${currentIndex * 105}%)`,
                    transition: "transform 0.5s ease"
                  }}
                  className={`${index === currentIndex ? "active" : ""}`}
                >
                  <div
                    className="services-icon-slider"
                    key={index}
                    data-aos="zoom-in"
                  >
                    <img src={item.icon} alt="" />
                    <h3 style={{ color: "#000" }}>
                      {t(item.title)}
                    </h3>
                    <p>
                      {t(item.text)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="slider-controls"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button onClick={prevSlide}>&#10094;</button>
        <div className="slider-dots">
          {items.map((_, index) =>
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          )}
        </div>
        <button onClick={nextSlide}> &#10095;</button>
      </div>
      <center style={{ color: "#000" }}>
        {currentIndex + 1}/{items.length}
      </center>
    </div>
  );
};

export default SliderServices;
