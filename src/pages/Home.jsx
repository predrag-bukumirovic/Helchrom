import React, { useEffect, useState, useRef } from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage
} from "@coreui/react";
import Carousel from "react-multi-carousel";
import WhoIcons from "../components/WhoIcons";
import mainImg from "../assets/images/Home/main-img1.webp";
import mainImg1 from "../assets/images/Home/main-img2.webp";
import mainImg2 from "../assets/images/Home/main-img3.webp";
import Facts2010 from "../assets/images/Home/Founded.png";
import Facts6 from "../assets/images/Home/Operations.png";
import Facts7 from "../assets/images/Home/7days.png";
import Facts180 from "../assets/images/Home/180min.png";
import Factshappy from "../assets/images/Home/Happy.png";
import Facts5 from "../assets/images/Home/Inno.png";
import HCOne from "../assets/images/HCOne.png";
import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";
import icon5 from "../assets/images/Home/5.png";
import quotation from "../assets/images/quotation.png";

import { AiOutlineSound } from "react-icons/ai";
import { IoPauseOutline } from "react-icons/io5";

import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import "react-multi-carousel/lib/styles.css";
import Storyline from "../components/Storyline";
import { useTranslation } from "react-i18next";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export default function Home() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0, 0]);
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
    const duration = 5000; // 5 seconds
    const stepTime = duration / finalNumber;
    let currentNumber = 0;
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

  const [text] = useState(
    "Helmchron is a family-owned company dedicated to providing comprehensive and full-service engineering solutions for the manufacturing facilities of pharmaceuticals, chemicals, food and bio products, electronics, energy, and oil and gas. We take pride in contributing to the manufacturing of globally available, safe, and high-quality products since 2010. Our mission has remained the same since our beginnings - we improve the quality of life for everyone everywhere whilst keeping our environment healthy for the coming generations. Today, our scope is broader and our team more diverse providing unique perspectives, agility, and efficacy. Our engineering solutions are now delivered to leaders and innovators across different industries with a focus on global impact, sustainable outcomes, and long-lasting partnerships."
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // Dodajemo useState za početnu poziciju čitanja
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();

  useEffect(
    () => {
      const cleanup = () => {
        synth.cancel();
        setIsSpeaking(false);
      };

      return cleanup;
    },
    [synth]
  );

  useEffect(
    () => {
      if (!synth) return;

      const onEndHandler = () => {
        setIsSpeaking(false);
      };

      synth.addEventListener("end", onEndHandler);

      return () => {
        synth.removeEventListener("end", onEndHandler);
      };
    },
    [synth]
  );

  const handleSpeak = () => {
    if (!isSpeaking && text) {
      utterance.text = text.substring(startIndex);
      synth.speak(utterance);
      setIsSpeaking(true);
    } else {
      synth.cancel();
      setIsSpeaking(false);
      setStartIndex(startIndex + utterance.text.length);
    }
  };

  return (
    <div>
      {/* Slider */}
      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          {[mainImg, mainImg1, mainImg2].map((img, index) =>
            <CCarouselItem key={index}>
              <a href={`/about-us/who-are-we`}>
                <CImage
                  className="d-block w-100"
                  src={img}
                  alt={`slide ${index + 1}`}
                />
                <CCarouselCaption className="img">
                  <div>
                    <p>
                      {index === 0
                        ? t("navbar.who_are_we")
                        : index === 1
                          ? t("navbar.services")
                          : t("navbar.how_do_we_work")}
                    </p>
                  </div>
                </CCarouselCaption>
              </a>
            </CCarouselItem>
          )}
        </CCarousel>

        <div className="box-img">
          {[mainImg, mainImg1, mainImg2].map((img, index) =>
            <div key={index}>
              <a href={`/about-us/who-are-we`}>
                <img src={img} alt="Main" />
                <div className="img-text">
                  <div>
                    <p>
                      {index === 0
                        ? t("navbar.who_are_we")
                        : index === 1
                          ? t("navbar.services")
                          : t("navbar.how_do_we_work")}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Welcome */}
      <div className="welcome container-main padding30">
        <h1 dangerouslySetInnerHTML={{ __html: t("home.welcome") }} />
        <p>
          <span className="sound-icon" onClick={handleSpeak}>
            {isSpeaking ? <IoPauseOutline /> : <AiOutlineSound />}
          </span>
          <span dangerouslySetInnerHTML={{ __html: t("home.wel_text") }} />
        </p>

        <a href="/about-us/our-vision-and-mission">
          {t("read_more")}
        </a>
      </div>

      {/* Our Services */}
      <div className="our-home container-main padding30">
        <h2 className="title">
          {t("services.title")}
        </h2>
        <p style={{ textAlign: "center" }}>
          {t("services.sub_text")}
        </p>

        <div className="services-icon">
          {[
            {
              icon: icon1,
              title: t("services.icon.title1"),
              text: t("services.icon.text1")
            },
            {
              icon: icon2,
              title: t("services.icon.title2"),
              text: t("services.icon.text2")
            },
            {
              icon: icon3,
              title: t("services.icon.title3"),
              text: t("services.icon.text3")
            },
            {
              icon: icon4,
              title: t("services.icon.title4"),
              text: t("services.icon.text4")
            },
            {
              icon: icon5,
              title: t("services.icon.title5"),
              text: t("services.icon.text5")
            }
          ].map((item, index) =>
            <div key={index}>
              <img src={item.icon} alt="" />
              <h3>
                {item.title}
              </h3>
              <p>
                {item.text}
              </p>
            </div>
          )}
        </div>

        <center>
          <a className="book-btn" href="/contact">
            {t("book_btn")}
          </a>
        </center>
      </div>

      {/* Unique Service Concept */}
      <div className="unique">
        <div className="container-main padding30">
          <h2>
            {t("unique.title")}
          </h2>
          <h3>
            HELMCHR<span>ONe</span>
          </h3>

          <div className="unique-row">
            <div className="text">
              <p dangerouslySetInnerHTML={{ __html: t("unique.text") }} />

              <a className="book-btn" href="/contact">
                {t("book_btn")}
              </a>
            </div>
            <div className="img">
              <img src={HCOne} alt="HC One" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Business Areas */}
      <div className="areas padding30 container-main">
        <div className="areas-text">
          <h2 className="title">OUR BUSINESS AREAS</h2>

          <p style={{ textAlign: "center" }}>
            {t("areas.sub_text")}
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
          <div className="facts-row">
            <p dangerouslySetInnerHTML={{ __html: t("facts.sub_text") }} />
          </div>

          <div ref={factsRef} className="facts-icon">
            {[
              Facts2010,
              Facts6,
              Facts7,
              Facts180,
              Factshappy,
              Facts5
            ].map((img, index) =>
              <div key={index} className="icon-item">
                <img src={img} alt="" />
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
                  <span className="number">{`>${numbers[index]}`}</span>
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
      <div className="video">
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

      {/* Testimonials */}
      <div className="testimonials container-main">
        <div className="slider-testi padding30">
          <h2 className="title">
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
            <div className="testi-item">
              <img src={quotation} alt="quotation" />

              <div>
                <p dangerouslySetInnerHTML={{ __html: t("feedback.text1") }} />
              </div>
            </div>
            <div className="testi-item">
              <img src={quotation} alt="quotation" />

              <div>
                <p dangerouslySetInnerHTML={{ __html: t("feedback.text2") }} />
              </div>
            </div>
            <div className="testi-item">
              <img src={quotation} alt="quotation" />
              <div>
                <p>
                  {t("feedback.text3")}
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
