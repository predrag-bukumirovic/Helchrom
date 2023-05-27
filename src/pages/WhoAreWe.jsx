import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import mainImg from "../assets/images/Who/who3.webp";
import mainImg1 from "../assets/images/Who/who1.webp";
import mainImg2 from "../assets/images/Who/who2.webp";
import icon1 from "../assets/images/Who/Chemicals.png";
import icon2 from "../assets/images/Who/Pharmaceuticals.png";
import icon3 from "../assets/images/Who/Vehicles.png";
import icon4 from "../assets/images/Who/Environment.png";
import basicImg from "../assets/images/Who/basicImg.webp";
import dubleLogo from "../assets/images/Who/dubleWhite.png";
import "../assets/scss/slider.scss";
import "../assets/scss/who.scss";

export default function WhoAreWe() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Who are we? | Helmchron</title>
      </Helmet>
      <div className="container-main">
        <CCarousel className="slider-main" controls transition="crossfade">
          {[mainImg2, mainImg1, mainImg].map((img, index) =>
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-100"
                src={img}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          )}
        </CCarousel>
        <div className="box-img">
          {[mainImg2, mainImg1, mainImg].map((img, index) =>
            <div key={index}>
              <img src={img} alt="Main" />
            </div>
          )}
        </div>
      </div>
      <div className="container-main padding30">
        <h1 className="title">
          {t("title_who")}
        </h1>
        <center>
          {[t("who_text1"), t("who_text2")].map((text, index) =>
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          )}
        </center>
        <div className="who-icon">
          {[
            { img: icon1, text: t("ul1"), link: "/chemicals" },
            { img: icon2, text: t("ul2"), link: "/pharma" },
            { img: icon3, text: t("ul3"), link: "/vehicles" },
            { img: icon4, text: t("ul4"), link: "/environment" }
          ].map((item, index) =>
            <div key={index}>
              <a href={item.link}>
                <img src={item.img} alt={`icon${index + 1}`} />
                <p>
                  <b>
                    {item.text}
                  </b>
                </p>
              </a>
            </div>
          )}
        </div>
        <center className="">
          <p dangerouslySetInnerHTML={{ __html: t("who_text3") }} />
        </center>
      </div>
      <div className="history">
        <div>
          <div className="container-main padding30">
            <h2 className="title">OUR HISTORY</h2>
            <p dangerouslySetInnerHTML={{ __html: t("who_text4") }} />
          </div>
          <div className="logos-text">
            {[2010, 2013, 2015, 2016, 2020, 2023].map((year, index) =>
              <div key={index} className="logos">
                <img src={dubleLogo} alt="Logo" />
                <div>
                  {year}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container-main">
        <div className="basic padding30">
          <img src={basicImg} alt="Basic" />
          <div className="padding30">
            <h2>
              <b>BASIC COMPANY INFORMATION</b>
            </h2>
            <ul>
              <li>Registered activity: Engineering Services</li>
              <li>Year of establishment: 2010.</li>
              <li>Seat location: Belgrade, Serbia</li>
              <li>TIN: 112690991</li>
              <li>Registration number: 66287432</li>
            </ul>
            <ul>
              <li>Contact person: Milos Ivosevic, PhD, Process Engineer</li>
              <li>
                Phone number: <a href="tel:+381642938533">+381 64 293 85 33</a>
              </li>
              <li>
                Email address:{" "}
                <a href="mailto:milos.ivosevic@helmchron.com">
                  milos.ivosevic@helmchron.com
                </a>
              </li>
              <li>
                Linkedin profile:{" "}
                <a
                  href="https://www.linkedin.com/in/milos-ivosevic-300263166/"
                  target="_blank"
                  rel="noreferrer"
                >
                  milos-ivosevic
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
