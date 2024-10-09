import React, { useEffect, useState, useRef } from "react";

import Carousel from "react-multi-carousel";

import WhoIcons from "../components/WhoIcons";
import Storyline from "../components/Storyline";
import TextReader from "../components/TextRender";

import Facts2010 from "../assets/images/Home/Founded.png";
import Facts6 from "../assets/images/Home/Operations.png";
import Facts7 from "../assets/images/Home/7days.png";
import Facts180 from "../assets/images/Home/180min.png";
import Factshappy from "../assets/images/Home/Happy.png";
import Facts5 from "../assets/images/Home/Inno.png";

import quotation from "../assets/images/quotationLine.png";

import { FaCircleChevronRight } from "react-icons/fa6";
import { PiDownloadSimple } from "react-icons/pi";

import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";
import "../assets/scss/one.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "react-multi-carousel/lib/styles.css";

import { useTranslation } from "react-i18next";
import Slider from "../components/SliderHelOne";
import IconServices from "../components/IconServices";

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
    return () => clearInterval(interval);
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
            <a href="/divisions">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Divisions
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
            <a href="/divisions">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Divisions
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
            <a href="/divisions">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Divisions
            </a>
          </div>
        </div>
        <div className="banner-home banner4">
          <div className="bg" />
          <div className="text-banner">
            <h2>Divisions</h2>
            <div className="line" />
            <p>
              {t("home.banners.banner4.text")}
            </p>
            <a className="book-btn" href="/divisions">
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
        <div
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

        <IconServices />
      </div>

      <center className="container-main">
        <p style={{ marginBottom: 30 }}>
          {t("home.after")}
        </p>
        <a className="book-btn" href="/our-services">
          {t("read_more")}
        </a>
      </center>

      {/* Unique Service Concept */}
      <div className="unique">
        <Slider />
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
              { id: 1, src: Facts2010 },
              { id: 2, src: Facts6 },
              { id: 3, src: Facts7 },
              { id: 4, src: Facts180 },
              { id: 5, src: Factshappy },
              { id: 6, src: Facts5 }
            ].map((img, index) =>
              <div key={img.id} className="icon-item" data-aos="zoom-in">
                <img src={img.src} alt="Facts img" />
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
      <div className="container-main video" data-aos="fade-up">
        <p style={{ color: "#000", fontSize: 25 }}>
          {t("video_common")}
        </p>

        <div className="video-card">
          <div className="text-card">
            <h3 className="sub-title">Connect and convert</h3>
            <p>
              Outperform competitors, create more opportunities, and accelerate
              your buyer journey to drive more revenue for your organization.
            </p>
          </div>
          <div>
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/KjxWR92Yb4o"
              title="Helmchron - Chemistry Connects Us"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="container-main brochure">
        <div className="brochure-subtitle">
          Learn more about <span>HELMCHRON</span>
        </div>
        <div style={{ background: "var(--light-blue-color)", padding: 30 }}>
          <p>
            Gain insights into our services and customized plant design
            engineering solutions. Explore how we achieve plant project outcomes
            and deliver value through our unique service concepts.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <b>
              <p style={{ marginBottom: 0 }}>
                {t("download_brochure")}
              </p>
            </b>{" "}
            <a
              href="../HelmchronBrochure.pdf"
              target="__blank"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 30,
                height: 30,
                fontSize: 18,
                borderRadius: "50%",
                background: "var(--dark-blue-color)",
                color: "#fff"
              }}
            >
              <PiDownloadSimple />
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials  container-main">
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
            <div
              className="testi-item"
              style={{ marginBottom: 40 }}
              data-aos="fade-up"
            >
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
