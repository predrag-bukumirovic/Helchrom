import React, { useEffect, useState, useRef } from "react";

import Carousel from "react-multi-carousel";

import WhoIcons from "../components/WhoIcons";
import Storyline from "../components/Storyline";
import TextReader from "../components/TextRender";
import nav from "../assets/images/Navigator/nav.png";

import Facts2010 from "../assets/images/Home/Founded.png";
import Facts6 from "../assets/images/Home/Operations.png";
import Facts7 from "../assets/images/Home/7days.png";
import Facts180 from "../assets/images/Home/180min.png";
import Factshappy from "../assets/images/Home/Happy.png";
import Facts5 from "../assets/images/Home/Inno.png";
import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";
import icon5 from "../assets/images/Home/5.png";
import quotation from "../assets/images/quotationLine.png";
import slideImg1 from "../assets/images/Helmchrone/HCONE1.png";
import slideImg2 from "../assets/images/Helmchrone/HCONE2.png";

import { FaCircleChevronRight } from "react-icons/fa6";

import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";
import "../assets/scss/one.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "react-multi-carousel/lib/styles.css";

import { useTranslation } from "react-i18next";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export default function Home() {
  const [numbers, setNumbers] = useState([1990, 0, 0, 0, 0, 0]);
  const finalNumbers = [2010, 6, 7, 180, 50, 5];
  const animationStarted = useRef(false);
  const factsRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (factsRef.current) observer.observe(factsRef.current);
  });

  const handleIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animationStarted.current) {
        finalNumbers.forEach((finalNumber, index) => {
          animateNumber(index, finalNumber);
        });
        animationStarted.current = true;
      }
    });
  };

  const animateNumber = (index, finalNumber) => {
    const duration = 2000;
    const stepTime = duration / (finalNumber - (index === 0 ? 1990 : 0));
    let currentNumber = index === 0 ? 1990 : 0;
    const interval = setInterval(() => {
      currentNumber++;
      setNumbers(prevNumbers => {
        const newNumbers = [...prevNumbers];
        newNumbers[index] = currentNumber;
        return newNumbers;
      });
      if (currentNumber === finalNumber) clearInterval(interval);
    }, stepTime);
  };

  // Texts for spekers
  const welcomeText = [t("home.welcome"), t("home.wel_text")];
  const ourServicesText = [
    t("services.title"),
    t("services.sub_text"),
    t("services.icon.title1"),
    t("services.icon.text1"),
    t("services.icon.title2"),
    t("services.icon.text2"),
    t("services.icon.title3"),
    t("services.icon.text3"),
    t("services.icon.title4"),
    t("services.icon.text4"),
    t("services.icon.title5"),
    t("services.icon.text5"),
    t("book_btn")
  ];

  const areasText = [t("areas.title"), t("areas.sub_text")];
  const factsText = [t("facts.title"), t("facts.sub_text")];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    {
      srcImg: slideImg2,
      title: `Unique Service Concept <h3 className="title">
              HELMCHR<span style={{ textTransform: "capitalize" }}>ONe</span>
              </h3>`,
      text: t("unique.text")
    },
    {
      srcImg: slideImg1,
      title: `Optimized Project Execution <h3 className="title">
            HELMCHRON  <span>N<img src=${nav} alt="A Navigator" />VIGATOR</span></h3>`,
      text: `
        <p>Navigator is our pioneering initiative designed to provide comprehensive consulting and support
          throughout the entire plant design lifecycle to streamline processes and optimize resources.</p>

          <p><b>Complete Lifecycle Support</b></p>
          <p>
          Whether you're embarking on a greenfield or brownfield project, Helmchron Navigator ensures that every
          phase of your project is clear, on budget, and on schedule. This initiative offers a structured yet flexible
          approach that adapts to the unique demands of each industry, including highly regulated sectors like
          pharmaceuticals and biopharma.<br/><br/>
          Helmchron Navigator combines proactive planning with expert guidance to anticipate challenges early
          on, ensuring a strategic plan is in place from the start. Our team conducts thorough analyses and
          delivers tailored recommendations, allowing for informed decision-making at every stage of your project.
          </p>
          <p><b>Agile Execution and Comprehensive Support</b></p>

          <p>Our team efficiently adapts to evolving project requirements, providing end-to-end support to
          continuously improve and refine the project as it progresses.
          Ensure your plant design stays on course with Helmchron Navigator.</p>
          <br/>
          <a class="book-btn" href="/initiatives/navigator">Read more</a>`
    }
  ];

  const handleNext = () => {
    setCurrentIndex(
      prevImage => (prevImage === images.length - 1 ? 0 : prevImage + 1)
    );
    scrollToTop();
  };

  const handlePrev = () => {
    setCurrentIndex(
      prevImage => (prevImage === 0 ? images.length - 1 : prevImage - 1)
    );
    scrollToTop();
  };

  const scrollToTop = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDotClick = index => {
    setCurrentIndex(index);
  };

  const handleImageClick = index => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop"]}
      >
        <div className="banner-home banner1">
          <div className="bg" />
          <div className="text-banner">
            <h2>Helmchron</h2>
            <div className="line" />
            <p>
              {t("home.banners.banner1.text")}
            </p>
            <a className="book-btn" href="/">
              {t("read_more")}
            </a>
          </div>

          <div className="links-banner">
            <a href="/our-services">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              {t("navbar.our_services")}
            </a>
            <a href="/our-references">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              {t("navbar.our_reference")}
            </a>
            <a href="/our-references">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Departments
            </a>
          </div>
        </div>
        <div className="banner-home banner2">
          <div className="bg" />
          <div className="text-banner">
            <h2>
              {t("navbar.our_services")}
            </h2>
            <div className="line" />
            <p>
              {t("home.banners.banner2.text")}
            </p>
            <a className="book-btn" href="/our-services">
              {t("read_more")}
            </a>
          </div>

          <div className="links-banner">
            <a href="/who-are-we">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              {t("navbar.who_are_we")}
            </a>
            <a href="/our-references">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              {t("navbar.our_reference")}
            </a>
            <a href="/our-references">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Departments
            </a>
          </div>
        </div>
        <div className="banner-home banner3">
          <div className="bg" />
          <div className="text-banner">
            <h2>
              {t("navbar.our_reference")}
            </h2>
            <div className="line" />
            <p>
              {t("home.banners.banner3.text")}
            </p>
            <a className="book-btn" href="/our-references">
              {t("read_more")}
            </a>
          </div>

          <div className="links-banner">
            <a href="/who-are-we">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              {t("navbar.who_are_we")}
            </a>
            <a href="/our-services">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              {t("navbar.our_services")}
            </a>
            <a href="/our-references">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Departments
            </a>
          </div>
        </div>
        <div className="banner-home banner4">
          <div className="bg" />
          <div className="text-banner">
            <h2>Departments</h2>
            <div className="line" />
            <p>
              {t("home.banners.banner4.text")}
            </p>
            <a className="book-btn" href="/">
              {t("read_more")}
            </a>
          </div>

          <div className="links-banner">
            <a href="/who-are-we">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              {t("navbar.who_are_we")}
            </a>
            <a href="/our-services">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              {t("navbar.our_services")}
            </a>
            <a href="/our-references">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              References
            </a>
          </div>
        </div>
      </Carousel>

      {/* Welcome */}
      <div className="welcome container-main padding30">
        <h1
          dangerouslySetInnerHTML={{ __html: t("home.welcome") }}
          style={{ padding: "0 20px" }}
        />
        <TextReader texts={welcomeText} />
        <center>
          <p dangerouslySetInnerHTML={{ __html: t("home.wel_text") }} />
        </center>

        <a href="/about-us/our-vision-and-mission">
          {t("read_more")}
        </a>
      </div>

      {/* Our Services */}
      <div className="our-home container-main padding30">
        <h2 className="title">
          {t("services.title")}
          <TextReader texts={ourServicesText} />
        </h2>
        <p data-aos="fade-up" style={{ textAlign: "center" }}>
          {t("services.sub_text")}
        </p>

        <div className="services-icon">
          {[
            {
              icon: icon1,
              title: t("services.icon.title1"),
              text: t("services.icon.text1"),
              link: "/our-services"
            },
            {
              icon: icon2,
              title: t("services.icon.title2"),
              text: t("services.icon.text2"),
              link: "/our-services"
            },
            {
              icon: icon3,
              title: t("services.icon.title3"),
              text: t("services.icon.text3"),
              link: "/our-services"
            },
            {
              icon: icon4,
              title: t("services.icon.title4"),
              text: t("services.icon.text4"),
              link: "/our-services"
            },
            {
              icon: icon5,
              title: t("services.icon.title5"),
              text: t("services.icon.text5"),
              link: "/our-services"
            }
          ].map((item, index) =>
            <a href={item.link} style={{ textDecoration: "none" }}>
              <div key={index} data-aos="zoom-in">
                <img src={item.icon} alt="" />
                <h3>
                  {item.title}
                </h3>
                <p>
                  {item.text}
                </p>
              </div>
            </a>
          )}
        </div>
      </div>

      <center className="container-main">
        <p style={{ marginBottom: 30 }}>
          {t("home.after")}
        </p>
        <a ref={sliderRef} className="book-btn" href="/our-services">
          {t("read_more")}
        </a>
      </center>

      {/* Unique Service Concept */}
      <div className="unique">
        <div className="container-main padding30">
          <div className="unique-row">
            <div className="text">
              <div className="slider-text-container">
                <div className="slider-text" style={{ textAlign: "start" }}>
                  <h2
                    className="title"
                    dangerouslySetInnerHTML={{
                      __html: images[currentIndex].title
                    }}
                  />

                  <p
                    dangerouslySetInnerHTML={{
                      __html: images[currentIndex].text
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="slider-images" style={{ width: 400 }}>
              {images.map((image, index) => {
                const isActive = index === currentIndex;
                const positionStyle = isActive ? { order: -1 } : {};
                return (
                  <div
                    key={index}
                    className={`slider-image home ${index === currentIndex
                      ? "active"
                      : ""}`}
                    style={{
                      ...positionStyle,
                      backgroundImage: `url(${image.srcImg})`
                    }}
                    onClick={() => handleImageClick(index)}
                  />
                );
              })}
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

      {/* Our Business Areas */}
      <div className="areas padding30 container-main">
        <div className="areas-text">
          <h2 className="title" style={{ padding: "0 40px" }}>
            {t("areas.title")}
          </h2>

          <p style={{ textAlign: "center" }}>
            {t("areas.sub_text")}
            <TextReader texts={areasText} />
          </p>
        </div>
        <WhoIcons />
      </div>

      {/* Facts About Us */}
      <div className="facts-box">
        <div className="facts container-main padding30">
          <h2 className="title">
            {t("facts.title")}
          </h2>
          <center>
            <p
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: t("facts.sub_text") }}
            />
            <TextReader texts={factsText} />
          </center>

          <div ref={factsRef} className="facts-icon">
            {[
              Facts2010,
              Facts6,
              Facts7,
              Facts180,
              Factshappy,
              Facts5
            ].map((img, index) =>
              <div key={index} className="icon-item" data-aos="zoom-in">
                <img src={img} alt="Facts img" />
                <div className="text">
                  <span className="word">
                    {index === 0
                      ? t("facts.icon_title1")
                      : index === 1
                        ? t("facts.icon_title2")
                        : index === 2
                          ? t("facts.icon_title3")
                          : index === 3
                            ? t("facts.icon_title4")
                            : index === 4
                              ? t("facts.icon_title5")
                              : t("facts.icon_title6")}
                  </span>
                  <span className="number">{`${finalNumbers[index] === 50 ||
                  finalNumbers[index] === 5
                    ? ">"
                    : ""}${numbers[index]}`}</span>
                </div>
              </div>
            )}
          </div>

          <center>
            <a href="/about-us/who-are-we">
              {t("read_more")}
            </a>
          </center>
        </div>
      </div>

      <Storyline />

      {/* Video */}
      <div className="video" data-aos="fade-up">
        <p>
          {t("video_common")}
        </p>
        <center>
          <iframe
            className="video-yt"
            loading="lazy"
            src="https://www.youtube.com/embed/KjxWR92Yb4o"
            title="Helmchron - Chemistry Connects Us"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </center>
      </div>

      <center>
        <p
          style={{ margin: 0, fontWeight: "bold", fontSize: 23 }}
          dangerouslySetInnerHTML={{ __html: t("download_brochure") }}
        />
      </center>

      {/* Testimonials */}
      <div className="testimonials container-main">
        <div className="slider-testi padding30">
          <h2 className="title" data-aos="fade-up">
            {t("feedback.title")}
          </h2>
          <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop"
            ]}
          >
            <div className="testi-item" data-aos="fade-up">
              <img src={quotation} alt="quotation" />

              <div>
                {/* <TextReader texts={feedbackText1} /> */}
                <p
                  style={{ marginTop: 30 }}
                  dangerouslySetInnerHTML={{ __html: t("feedback.text1") }}
                />

                <div style={{ float: "right" }}>
                  <span>Engineering Dobersek GmbH</span>
                </div>
              </div>
            </div>
            <div className="testi-item">
              <img src={quotation} alt="quotation" />

              <div>
                {/* <TextReader texts={feedbackText2} /> */}

                <p dangerouslySetInnerHTML={{ __html: t("feedback.text2") }} />

                <div style={{ float: "right" }}>
                  <span>Numikon Ltd.</span>
                </div>
              </div>
            </div>
            <div className="testi-item">
              <img src={quotation} alt="quotation" />
              <div>
                <p dangerouslySetInnerHTML={{ __html: t("feedback.text3") }} />

                {/* <TextReader texts={feedbackText3} /> */}

                <div style={{ float: "right" }}>
                  <span>PowerPatent Inc.</span>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
