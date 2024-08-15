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
import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";
import icon5 from "../assets/images/Home/5.png";
import quotation from "../assets/images/quotationLine.png";
import { FaCircleChevronRight } from "react-icons/fa6";

import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import "react-multi-carousel/lib/styles.css";

import { useTranslation } from "react-i18next";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

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
  const uniqueText = [t("unique.title"), t("unique.text"), t("book_btn")];
  const areasText = [t("areas.title"), t("areas.sub_text")];
  const factsText = [t("facts.title"), t("facts.sub_text")];
  // const feedbackText1 = [t("feedback.title"), t("feedback.text1")];
  // const feedbackText2 = [t("feedback.title"), t("feedback.text2")];
  // const feedbackText3 = [t("feedback.title"), t("feedback.text3")];

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
              Delivering plant design engineering and project execution
              solutions across diverse industries since 2010.
            </p>
            <a className="book-btn" href="/">
              Read more
            </a>
          </div>

          <div className="links-banner">
            <a href="/our-services">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Services
            </a>
            <a href="/our-references">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              References
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
            <h2>Services</h2>
            <div className="line" />
            <p>
              Comprehensive plant engineering solutions, from consulting and
              pre-planning to equipment management and commissioning.
            </p>
            <a className="book-btn" href="/our-services">
              Read more
            </a>
          </div>

          <div className="links-banner">
            <a href="/who-are-we">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Who are we?
            </a>
            <a href="/our-references">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              References
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
            <h2>References</h2>
            <div className="line" />
            <p>
              Our references include state-of-the-art aseptic pharma facilities,
              leading chemical manufacturers, and diverse food producers.
            </p>
            <a className="book-btn" href="/our-references">
              Read more
            </a>
          </div>

          <div className="links-banner">
            <a href="/who-are-we">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Who are we?
            </a>
            <a href="/our-services">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Services
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
              We operate across six major business departments, with pharma and
              food being the largest.
            </p>
            <a className="book-btn" href="/">
              Read more
            </a>
          </div>

          <div className="links-banner">
            <a href="/who-are-we">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Who are we?
            </a>
            <a href="/our-services">
              <FaCircleChevronRight
                style={{ color: "var(--brend-color)", fontSize: 30 }}
              />
              Services
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
          style={{ padding: "0 40px" }}
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

        <center>
          <a className="book-btn" href="/contact">
            {t("book_btn")}
          </a>
        </center>
      </div>

      <center className="container-main">
        <p>
          After the completion of operational activities, we provide guarantees
          and stand accountable for the quality of our work, offering ongoing
          support and consultation within the project scope to address our
          client's questions and concerns, ensuring the continued success of our
          joined project even after commissioning.
        </p>
        <a className="book-btn" href="/our-services">
          {t("read_more")}
        </a>
      </center>

      {/* Unique Service Concept */}
      <div className="unique">
        <div className="container-main padding30">
          <h2 className="title" style={{ padding: "0 40px", marginBottom: 0 }}>
            {t("unique.title")}
          </h2>
          <h3 className="title">
            HELMCHR<span style={{ textTransform: "capitalize" }}>ONe</span>
          </h3>

          <div className="unique-row">
            <div className="text">
              <p
                data-aos="fade-right"
                dangerouslySetInnerHTML={{ __html: t("unique.text") }}
              />

              <a className="book-btn" href="/">
                {t("book_btn")}
              </a>
              <TextReader texts={uniqueText} />
              <br />
              <br />
            </div>
            <BeforeAfterSlider />
          </div>
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

          {/* <div className="test-sound">PUSTI TEKST</div> */}
        </div>
      </div>
    </div>
  );
}
