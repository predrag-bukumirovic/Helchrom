import React, { useState } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "../assets/scss/division.scss";
import "../assets/scss/home.scss";
import "../assets/scss/references.scss";

import mainImg from "../assets/images/Division/baner1.png";
import mainImg1 from "../assets/images/Division/baner2.png";
import mainImg2 from "../assets/images/Division/baner3.png";

import academy from "../assets/images/Division/Academy.png";
import innoLab from "../assets/images/Division/InnoLab.png";
import navigator from "../assets/images/Division/navigator.png";
import one from "../assets/images/Division/One.png";

import slider1 from "../assets/images/Division/1.webp";
import slider2 from "../assets/images/Division/2.webp";
import slider3 from "../assets/images/Division/3.webp";
import slider4 from "../assets/images/Division/4.webp";
import slider5 from "../assets/images/Division/5.webp";
import slider6 from "../assets/images/Division/6.webp";
import InsightsWhite from "../components/InsightsWhite";
import SliderServices from "../components/SliderServices";
import { useTranslation } from "react-i18next";

export default function Division() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const images = [
    {
      src: slider1,
      title: "Pharmaceuticals and Life Sciences",
      text:
        "We specialize in delivering advanced plant design engineering solutions for the pharmaceutical, life sciences, and medical devices sectors. With a focus on aseptic manufacturing, we combine engineering excellence with scientific and regulatory expertise and best-in-class practices to support the production of life-saving therapies and diagnostics. Our expertise in designing controlled environments with integrated critical condition monitoring and reliable equipment ensures the highest standards of sterility and safety, enhancing patient care globally.",
      link: "/pharma"
    },
    {
      src: slider2,
      title: "Food and Bio Products",
      text:
        "We deliver plant design engineering solutions tailored to the unique requirements of food and bio product manufacturers, including dietary supplements and nutraceuticals. We prioritize operational excellence, while adhering to stringent safety and quality standards, ensuring facilities meet GMP or HACCP control guidelines. Sustainability is integrated into our work and solutions, minimizing energy consumption and enhancing resource efficiency.",
      link: "/food"
    },
    {
      src: slider3,
      title: "Chemicals",
      text:
        "Our comprehensive plant design engineering solutions are tailored to meet the specific requirements of chemical manufacturing, supporting both consumer products and industrial chemicals. We ensure the delivery of efficient and compliant solutions that meet the stringent demands of operational efficiency, safety, and environmental responsibility. By focusing on structure and flexibility, we ensure the successful execution of greenfield and brownfield manufacturing facility projects and the delivery of planned outcomes timely.",
      link: "/chemicals"
    },
    {
      src: slider4,
      title: "Electronics",
      text:
        "We specialize in delivering tailored plant design engineering solutions for the electronics industry, addressing the critical needs for reliability, flexibility, and sustainability. Our expertise spans the design and construction of advanced facilities, including semiconductors, batteries, charging infrastructure, and, synthetic materials. We focus on creating environments with diverse power feeds, backup systems, and redundant HVAC, ensuring operational continuity and scalability. With cross-industry experience in cleanroom environments, we deliver solutions for reliable manufacturing facilities. ",
      link: "/electronics"
    },
    {
      src: slider5,
      title: "Energy",
      text:
        "including electric, gas, and water utilities. We specialize in plant design engineering solutions that integrate various energy sources, with a focus on renewable and low-carbon technologies. Our solutions facilitate the transition to sustainable energy by addressing challenges related to climate change and aging infrastructure. We are committed to advancing renewable fuels to improve decarbonization and energy security. Through the modernization of existing refinery infrastructure and the construction of new facilities, we are driving the adoption of renewable fuels and chemicals, such as biodiesel.",
      link: "/energy"
    },
    {
      src: slider6,
      title: "Oil and Gas",
      text:
        "We are dedicated to addressing the complex needs of the oil and gas industry with our specialized plant design engineering solutions. Our comprehensive support throughout the asset lifecycle includes consulting, full plant design engineering, and procurement services for refineries and pipelines. Our team helps clients optimize both new and existing oil and gas assets, ensuring that facilities operate safely, reliably, and cost-efficiently. With our proven expertise and adaptable project execution, we meet the diverse needs of our clients, regardless of project size.",
      link: "/oil&gas"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
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
            <img loading="lazy" src={mainImg} alt="Main" />
          </div>
          <div>
            <img loading="lazy" src={mainImg1} alt="Main" />
          </div>
          <div>
            <img loading="lazy" src={mainImg2} alt="Main" />
          </div>
        </div>
      </div>
      {/* Slider end */}
      <div className="container-main">
        <center>
          <h1 className="title">OUR Divisions</h1>
          <p>
            We provide specialized plant design engineering solutions to
            manufacturers in various industries, including pharmaceuticals, life
            sciences, medical devices, chemicals, food, bio products,
            electronics, energy, and oil and gas. Our teams are focused on
            delivering high-quality and efficient engineering services to
            support the development and operations of advanced manufacturing
            facilities.
          </p>
        </center>
      </div>
      <div className="slider-container slider-division container-main">
        <div
          className="slider-images"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) =>
            <img
              loading="lazy"
              key={index}
              src={image.src}
              alt={`Slika ${index + 1}`}
              className={`slider-image ${currentIndex === index
                ? "active"
                : ""}`}
            />
          )}
        </div>
        <div className="slider-text">
          {/* OUR Divisions slider */}
          {images.map((image, index) =>
            <div
              key={index}
              className={`text-divisions ${currentIndex === index
                ? "active"
                : ""}`}
            >
              <h2
                style={{ textAlign: "start", fontSize: 25, marginBottom: 10 }}
                className="title"
              >
                {image.title}
              </h2>
              <p style={{ marginBottom: 30 }}>
                {image.text}
              </p>
              <a className="book-btn" href={image.link}>
                {t("read_more")}
              </a>
            </div>
          )}
        </div>
      </div>
      {/* Kontrole strelica i tačaka */}
      <div style={{ marginTop: 20 }} className="slider-controls">
        <button className="arrow-slider" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="slider-dots">
          {images.map((_, index) =>
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          )}
        </div>
        <button className="arrow-slider" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <center style={{ color: "#000" }}>
        {currentIndex + 1}/{images.length}
      </center>
      <div style={{ background: "var(--light-blue-color)", margin: "20px 0" }}>
        <div style={{ padding: "50px 0" }} className="insights container-main">
          <h2 className="title">PROJECTS SHARE PER DIVISON</h2>
          <InsightsWhite />
        </div>
      </div>
      <div className="unique">
        <SliderServices />
      </div>
      <div
        style={{
          background: "var(--light-blue-color)",
          padding: "30px 0",
          margin: "50px 0"
        }}
      >
        <div className="container-main">
          <center>
            <h2 className="title">Our references</h2>
            <p>
              We are proud to be partnering with manufacturers worldwide,
              delivering plant design engineering and project management
              solutions tailored to the unique requirements and challenges of
              each sector. Explore our diverse portfolio of references in
              greenfield and brownfield projects across all of our business
              divisions.
            </p>
          </center>

          <div className="ref-circle">
            {[
              "pharma",
              "food",
              "chemicals",
              "electronics",
              "energy",
              "oil&gas"
            ].map((ref, index) =>
              <a key={index} href="/our-references">
                <div>
                  <div className="ref-img">
                    <span>
                      {ref.replace("-", " & ")}
                    </span>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <center>
        <p style={{ marginTop: 50, padding: "0 20px" }}>
          To gain a complete insight into our work, book a meeting with our
          team.
        </p>
        <br />
        <a
          style={{ background: "var(--brend-color)" }}
          className="book-btn"
          href="/initiatives/innolab"
        >
          {t("book_btn")}
        </a>
      </center>
      <div className="container-main" style={{ marginTop: 70 }}>
        <center>
          <h2 className="title">OUR INITIATIVES</h2>
          <p>
            Our initiatives are designed to continuously enhance the quality of
            our services and partner satisfaction through ongoing learning,
            focused efforts, and innovations that redefine the plant design
            engineering landscape and its outcomes.
          </p>
          <p style={{ marginBottom: 40 }}>
            Click on the logo to learn more about each initiative.
          </p>

          <div className="initiative-logo">
            <a href="/initiatives/helmchrone">
              <img loading="lazy" src={one} alt="One Logo" />

              <p>
                Our innovative service model assigns ONE dedicated team to ONE
                client and ONE project at a time, ensuring focused execution,
                on-time delivery, and budget control.
              </p>
            </a>

            <a href="/initiatives/navigator">
              <img loading="lazy" src={navigator} alt="Navigator Logo" />

              <p>
                We offer comprehensive consulting and support across the entire
                plant design lifecycle, delivering tailored solutions,
                streamlining processes, and optimizing resources.
              </p>
            </a>

            <a href="/initiatives/innolab">
              <img loading="lazy" src={innoLab} alt="InnoLab Logo" />
              <p>
                Our research initiative aims to advance innovation in plant
                design engineering, pushing boundaries to build a more
                sustainable future for the coming generations.
              </p>
            </a>

            <a href="/initiatives/academy">
              <img loading="lazy" src={academy} alt="Academy Logo" />

              <p>
                We continuously develop our team by leveraging expertise from
                complex, advanced projects, with a focus on practical skills and
                mentorship.
              </p>
            </a>
          </div>
        </center>
      </div>
    </div>
  );
}
