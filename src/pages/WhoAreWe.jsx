import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/who.scss";

import mainImg from "../assets/images/Who/who1.webp";
import mainImg1 from "../assets/images/Who/who2.webp";
import mainImg2 from "../assets/images/Who/who3.webp";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useTranslation } from "react-i18next";

import icon1 from "../assets/images/Who/Chemicals.png";
import icon2 from "../assets/images/Who/Pharmaceuticals.png";
import icon3 from "../assets/images/Who/Vehicles.png";
import icon4 from "../assets/images/Who/Environment.png";
import basicImg from "../assets/images/Who/basicImg.webp";

import dubleLogo from "../assets/images/Who/dubleWhite.png";

export default function WhoAreWe() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container-main">
        {/* Slider start */}
        <CCarousel className="slider-main" controls transition="crossfade">
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg2} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg1} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg} alt="slide 3" />
          </CCarouselItem>
        </CCarousel>
        <div className="box-img">
          <div>
            <img src={mainImg2} alt="Main" />
          </div>
          <div>
            <img src={mainImg1} alt="Main" />
          </div>
          <div>
            <img src={mainImg} alt="Main" />
          </div>
        </div>
      </div>
      {/* Slider end */}

      <div className="container-main padding30">
        <h1 className="title">
          {t("title_who")}
        </h1>
        <center className="">
          <p>
            {t("who_text1")}
          </p>
          <p>
            {t("who_text2")}
          </p>
        </center>
        <div className="who-icon">
          <div>
            <img src={icon1} alt="icon1" />
            <p>
              <b>
                {t("ul1")}
              </b>
            </p>
          </div>
          <div>
            <img src={icon2} alt="icon2" />
            <p>
              <b>
                {t("ul2")}
              </b>
            </p>
          </div>
          <div>
            <img src={icon3} alt="icon3" />
            <p>
              <b>
                {t("ul3")}
              </b>
            </p>
          </div>
          <div>
            <img src={icon4} alt="icon4" />
            <p>
              <b>
                {t("ul4")}
              </b>
            </p>
          </div>
        </div>
        <center className="">
          <p>
            {t("who_text3")}
          </p>
        </center>
      </div>
      <div className="history">
        <div>
          <div className="container-main padding30">
            <h2 className="title">OUR HISTORY</h2>

            <p>
              Our company was established in 2010. with the goal to deliver
              valuable solutions that will improve the quality of life for the
              coming generations. Our mission was always focused on our partners
              and innovative products and services that bring value to end users
              and the environment.{" "}
            </p>
          </div>

          <div className="logos-text">
            <div className="logos">
              <img src={dubleLogo} alt="Logo" />
              <div>2010</div>
            </div>
            <div className="logos">
              <img src={dubleLogo} alt="Logo" />
              <div>2013</div>
            </div>
            <div className="logos">
              <img src={dubleLogo} alt="Logo" />
              <div>2015</div>
            </div>
            <div className="logos">
              <img src={dubleLogo} alt="Logo" />
              <div>2016</div>
            </div>
            <div className="logos">
              <img src={dubleLogo} alt="Logo" />
              <div>2020</div>
            </div>
            <div className="logos">
              <img src={dubleLogo} alt="Logo" />
              <div>2023</div>
            </div>
          </div>

          {/* <div className="year" /> */}
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
                  href="https://www.linkedin.com/company/helmchron/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Helmchron_global
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
