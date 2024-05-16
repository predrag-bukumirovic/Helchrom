import React from "react";
import { Helmet } from "react-helmet";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

import mainImg from "../assets/images/News/1.webp";
import mainImg1 from "../assets/images/News/2.webp";
import mainImg2 from "../assets/images/News/3.webp";
import Dusseldorf from "../assets/images/News/Dusseldorf.webp";
import Frankfurt from "../assets/images/News/Frankfurt.webp";
import Talk from "../assets/images/News/Talk.png";

import "../assets/scss/slider.scss";
import "../assets/scss/news.scss";

export default function News() {
  return (
    <div>
      <Helmet>
        <title>News | Helmchron</title>
      </Helmet>

      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          {[mainImg, mainImg1, mainImg2].map((img, index) =>
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
          {[mainImg, mainImg1, mainImg2].map((img, index) =>
            <div key={index}>
              <img src={img} alt="Main" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main">
        <h1 className="title">NEWS AND PROFESSIONAL EVENTS</h1>
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

        <div className="news-box padding30">
          <div>
            <div>
              <h2>HELMCHRON TeamTalk</h2>
              <span>April, 2024 I Belgrade, Serbia</span>
              <p>
                TeamTalk is our short video format concept designed for
                discussing industry trends, insights, and future perspectives,
                our expertise and lessons learned, the impact of our values on
                our and our partners` outcomes, inspirational career path
                stories and milestones, and more.
              </p>
              <a href="/news/team-talk">Read more</a>
            </div>
            <div>
              <img src={Talk} alt="News" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <div>
            <div>
              <h2>K2022</h2>
              <span>19 - 26 October 2022 I Dusseldorf, Germany</span>
              <p>
                K2022 covered the main challenges and hot topics from the global
                plastic and rubber industry - circular economy, sustainable
                materials for the future, and the scope of digitalization in
                achieving these outcomes.
              </p>
              <a href="/news/k2022">Read more</a>
            </div>
            <div>
              <img src={Dusseldorf} alt="News" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <div>
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
    </div>
  );
}
