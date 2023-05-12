import React from "react";
import mainImg from "../assets/images/News/1.webp";
import mainImg1 from "../assets/images/News/2.webp";
import mainImg2 from "../assets/images/News/3.webp";
import Dusseldorf from "../assets/images/News/Dusseldorf.webp";
import Frankfurt from "../assets/images/News/Frankfurt.webp";

import "../assets/scss/slider.scss";
import "../assets/scss/news.scss";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export default function News() {
  return (
    <div className="container-main">
      {/* Slider start */}
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
          <img src={mainImg} alt="Main" />
        </div>
        <div>
          <img src={mainImg1} alt="Main" />
        </div>
        <div>
          <img src={mainImg2} alt="Main" />
        </div>
      </div>
      {/* Slider end */}

      <div className="box-text">
        <h1 className="title">FAIRS AND CONFERENCES</h1>

        <center>
          <p>
            We love participating in and attending professional fairs and
            conferences to expand our knowledge, meet our partners and network,
            and be up-to-date with the latest trends and innovations.
          </p>
          <p>
            Read our impressions and highlights from conferences, events, and
            fairs we attend.
          </p>
        </center>

        <div className="news-box">
          <div>
            <h2>K2022</h2>
            <span>19 - 26 October 2022 I Dusseldorf, Germany</span>
            <p>
              K2022 covered the main challenges and hot topics from the global
              plastic and rubber industry - circular economy, sustainable
              materials for the future, and the scope of digitalization in
              achieving these outcomes.{" "}
            </p>
            <a href="/news">Read more</a>
          </div>
          <div>
            <img src={Dusseldorf} alt="News" />
          </div>
        </div>

        <div className="line" />

        <div className="news-box">
          <div>
            <h2>ACHEMA 2022</h2>
            <span>22 - 26 August 2022 I Frankfurt, Germany</span>
            <p>
              ACHEMA 2022 was focused on the latest trends and innovations in
              process and chemical engineering, including sustainability,
              digitalization, and industry 4.0. It provided an opportunity to
              discuss some of the most pressing challenges of today and assess
              potential solutions for the future.
            </p>
            <a href="/news/achema">Read more</a>
          </div>
          <div>
            <img src={Frankfurt} alt="News" />
          </div>
        </div>
      </div>
    </div>
  );
}
