import React, { useState, useRef } from "react";
import "../assets/scss/sliderHelOne.scss";
import helmOneImg from "../assets/images/Home/helmOne.png";
import navigatorArrow from "../assets/images/Navigator/nav.png";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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
        "Designed to provide comprehensive consulting and support throughout the entire plant design lifecycle, Navigator delivers tailored recommendations, streamlines processes, and optimizes resources.  <br/><br/><br/> <br/> Ensure your plant design stays on track with Helmchron Navigator.",
      link: "/initiatives/navigator"
    },
    {
      title: "HELEMCHRON <span class='blue'>InnoLAB<span/>",
      content:
        "Helmchron InnoLAB is our research initiative focused on advancing and innovating in plant design, and process and chemical engineering. By pushing the boundaries, we aim to create a more innovative and sustainable future for generations to come. <br/><br/><br/> <br/><br/> Explore our pursuit of innovation.",
      link: "initiatives/innolab"
    },
    {
      title: "HELMCHRON <br/> <span class='blue academy-title'>Academy<span/>",
      content:
        "Helmchron Academy is dedicated to the continuous development of our team through knowledge and experience gained from complex, advanced projects. By emphasizing practical expertise, we ensure leveraging skills, nurturing talent, fostering a culture of ongoing learning. <br/><br/><br/> Explore how we advance expertise.",
      link: "/initiatives/academy"
    }
  ];

  // Dupliranje niza stavki radi beskonačnog efekta
  const repeatCount = 10; // Povećaj ili smanji ovaj broj prema potrebama
  const allItems = Array.from({ length: repeatCount }, () => items).flat();

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Ako smo na poslednjem slajdu u dupliranom nizu, pređi na prvi
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      // Ako dođemo do kraja originalnog niza, setuj index na 0
      return newIndex >= allItems.length ? 0 : newIndex;
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Čekamo da završi trenutna animacija
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Ako se vraćamo na prvi slajd u dupliranom nizu, pređi na poslednji
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 1;
      // Ako smo na prvom slajdu, setuj index na poslednji
      return newIndex < 0 ? allItems.length - 1 : newIndex;
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Čekamo da završi trenutna animacija
  };

  const handleTouchStart = e => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = e => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
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
          <img loading="lazy" src={helmOneImg} alt="Background" />
        </div>
        <div className="slider-right">
          <div className="slider-wrapper" ref={sliderRef}>
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

            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="slider-content slider-content-helone"
            >
              {allItems.map((item, index) =>
                <div
                  key={index}
                  style={{
                    transform: `translateX(-${currentIndex * 280}px)`,
                    transition: "transform 0.5s ease",
                    cursor: "pointer"
                  }}
                  className={`slider-item ${index === currentIndex
                    ? "active"
                    : ""}`}
                  onClick={() => setCurrentIndex(index)}
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
            <div className="slider-controls slider-control-helOne">
              <button className="arrow-slider" onClick={prevSlide}>
                &#10094;
              </button>
              <div className="slider-dots">
                {items.map((_, index) =>
                  <span
                    key={index}
                    className={`dot ${index === currentIndex % items.length
                      ? "active"
                      : ""}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                )}
              </div>
              <button className="arrow-slider" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
