import React, { useState } from "react";
import "../assets/scss/sliderHelOne.scss";
import helmOneImg from "../assets/images/Home/helmOne.png";
import navigatorArrow from "../assets/images/Navigator/nav.png";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "HELEMCHR<span class='blue'>ONe<span/>",
      content:
        "A service concept that provides dedicated focus to a project by assigning ONE team to ONE client and ONE project only. This approach addresses common issues of prolonged delivery times and budget overruns by ensuring that every aspect of the project is handled with complete attention and accountability. <br/><br/> How does Helmchron ONE drive efficiency and client satisfaction?",
      link: "/initiatives/helmchrone"
    },
    {
      title: `HELMCHRON <br/> <span class='blue'>N<img src="${navigatorArrow}"/>VIGATOR<span/>`,
      content:
        "Designed to provide comprehensive consulting and support throughout the entire plant design lifecycle,Navigator delivers tailored recommendations, streamline processes, and optimize resources.  <br/><br/><br/> <br/> Ensure your plant design stays on track with Helmchron Navigator.",
      link: "/initiatives/navigator"
    },
    {
      title: "HELMCHRON <br/> <span class='blue academy-title'>Academy<span/>",
      content:
        "Helmchron Academy is dedicated to the continuous development of our team through knowledge and experience gained from complex, advanced projects. By emphasizing practical expertise, we ensure leveraging skills, nurturing talent, foster a culture of ongoing learning. <br/><br/><br/> Explore how we advance expertise.",
      link: "/initiatives/academy"
    },
    {
      title: "<span class='blue'>InnoLAB<span/>",
      content:
        "Helmchron InnoLAB is our research initiative focused on advancing and innovating in plant design, and process and chemical engineering. By pushing the boundaries, we aim to create a more innovative and sustainable future for generations to come. <br/><br/><br/> <br/><br/> Explore our pursuit of innovation.",
      link: "initiatives/innolab"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div style={{ marginTop: 100 }} className="container-main">
      <div className="mobile-text-our-init padding30">
        <h2 className="title">Our initiatives</h2>
        <p>
          Our initiatives are focused on refining our services and introducing
          innovations to consistently improve project efficiency and client
          satisfaction.
        </p>
      </div>
      <div className="slider-helmone container-main">
        <div className="slider-left">
          <img src={helmOneImg} alt="Background" />
        </div>
        <div className="slider-right">
          <div className="slider-wrapper">
            <div className="desktop-text-our-init" style={{ paddingLeft: 150 }}>
              <h2 style={{ textAlign: "start" }} className="title">
                Our initiatives
              </h2>
              <p style={{ width: "600px" }}>
                Our initiatives are focused on refining our services and
                introducing innovations to consistently improve project
                efficiency and client satisfaction
              </p>
            </div>

            <div className="slider-content">
              {items.map((item, index) =>
                <div
                  key={index}
                  style={{
                    transform: `translateX(-${currentIndex * 105}%)`,
                    transition: "transform 0.5s ease"
                  }}
                  className={`slider-item ${index === currentIndex
                    ? "active"
                    : ""}`}
                >
                  <h5
                    style={{
                      fontWeight: "900",
                      color: "var(--brend-color)",
                      marginBottom: "15px"
                    }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />

                  <p dangerouslySetInnerHTML={{ __html: item.content }} />

                  <a href={item.link}>Read More</a>
                </div>
              )}
            </div>
            <div className="slider-controls">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
