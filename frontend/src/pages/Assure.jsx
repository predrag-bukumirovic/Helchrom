import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";

import mainImg from "../assets/images/Assure/slika1.png";
import mainImg1 from "../assets/images/Assure/slika2.png";
import mainImg2 from "../assets/images/Assure/slika3.png";

import Integrity from "../assets/images/Assure/icon1.png";
import Assured from "../assets/images/Assure/icon2.png";
import Expert from "../assets/images/Assure/icon3.png";
import Consulting from "../assets/images/Assure/icon4.png";

import SivaSlika from "../assets/images/Assure/siva.png";
import imgAssure from "../assets/images/Assure/assure.png";

import logo1 from "../assets/images/Assure/1.png";
import logo2 from "../assets/images/Assure/2.png";
import logo3 from "../assets/images/Assure/3.png";

import "../assets/scss/home.scss";
import "../assets/scss/assure.scss";

import { useTranslation } from "react-i18next";

export default function Assure() {
  const { t } = useTranslation();

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

      <div>
        <center className="container-main">
          <h1 className="title" style={{ textTransform: "capitalize" }}>
            Helmchron <span style={{ fontWeight: 200 }}>Assure</span>
          </h1>
          <p data-aos="fade-up">
            We provide a structured guarantee for all the work we deliver and
            its quality. Beyond the formal assurance, we remain a committed
            partner to our clients, even after the project has been commissioned
            and the plant is operational. Our support extends into the
            post-commissioning phase to address any questions a client may have
            regarding any aspect of the work we have delivered.
          </p>
        </center>
        <center style={{ marginTop: 30 }} className="container-main">
          <span style={{ fontWeight: "bold" }}>
            The Value of a Partnership-Driven Approach
          </span>

          <p style={{ marginTop: 20 }}>
            With Helmchron Assure, every project benefits from:
          </p>
        </center>
        <div className="assure-benefits">
          <div className="benefit-box">
            <img src={Integrity} alt="Integrity of Our Work" />
            <h3>Integrity of Our Work</h3>
            <p>
              Formal guarantee covering the integrity of our work and the
              delivered documentation
            </p>
          </div>
          <div className="benefit-box">
            <img src={Assured} alt="Assured Deliverables" />
            <h3>Assured Deliverables</h3>
            <p>
              Post-commissioning support, available within the defined project
              framework or through tailored service agreements
            </p>
          </div>
          <div className="benefit-box">
            <img src={Expert} alt="Expert Guidance" />
            <h3>
              Expert <br /> Guidance
            </h3>
            <p>
              Access to the original project engineer team for support and
              guidance
            </p>
          </div>
          <div className="benefit-box">
            <img src={Consulting} alt="On-Demand Consulting" />
            <h3>On-Demand Consulting</h3>
            <p>Optional consulting sessions to support evolving client needs</p>
          </div>
        </div>

        <center className="container-main">
          <p>
            Helmchron Assure provides clients with a dependable engineering team
            that operates as an extension of their own, well-acquainted with the
            project and ready to offer continued support after commissioning. In
            a time when engineering solutions must be both resilient and
            adaptable, Helmchron Assure ensures that critical expertise remains
            within reach whenever it’s needed.
          </p>

          <p>Explore our references</p>

          <a className="book-btn" href="/our-references">
            {t("read_more")}
          </a>
        </center>

        <div style={{ position: "relative" }}>
          <img className="siva" src={SivaSlika} alt="" />
          <div className="assure-post-section container-main">
            <div className="text-side">
              <h3>Rethinking Post-Commissioning Responsibility</h3>
              <p>
                In plant design and engineering, project involvement has
                traditionally concluded at the point of commissioning. Once the
                operational handover is complete, the original project teams
                often step away, leaving clients to manage any subsequent
                complexities internally.
              </p>
              <p>
                At Helmchron, we believe this conventional approach no longer
                meets the demands of modern, high-performance operations, nor
                does it reflect the principles of strategic partnership and
                unified teamwork. As a response, we have developed Helmchron
                Assure.
              </p>

              <h4>What Challenges Does Helmchron Assure Address?</h4>
              <ul>
                <li>
                  Need for adjustments or optimization based on actual operating
                  conditions
                </li>
                <li>
                  Questions about documentation, equipment behavior, or control
                  strategies
                </li>
                <li>
                  Integration of new equipment or systems not initially foreseen
                  in the project
                </li>
                <li>
                  Uncertainty around how specific design choices impact
                  long-term performance
                </li>
                <li>
                  Regulatory or safety clarifications during audits or internal
                  reviews
                </li>
              </ul>
              <p>Contact our team to discuss your specific needs in detail.</p>
              <a href="/contact" className="book-btn">
                Get in touch
              </a>
            </div>

            <div className="image-side">
              <img src={imgAssure} alt="Confidence Beyond Commissioning" />
            </div>
          </div>
        </div>

        <center style={{ marginTop: 30 }} className="container-main">
          <span style={{ fontWeight: "bold" }}>Other Service Concepts</span>

          <p style={{ marginTop: 20 }}>
            Helmchron Assure aligns seamlessly with our other initiatives, all
            designed to streamline plant design engineering and deliver client
            outcomes within the planned budget and timeframe.
          </p>
        </center>

        <div className="logo-assure container-main">
          <a href="/initiatives/helmchrone">
            <img src={logo1} alt="Helmchrone" />
          </a>
          <a href="/initiatives/navigator">
            <img src={logo2} alt="Navigator" />
          </a>
          <a href="/initiatives/innolab">
            <img src={logo3} alt="InnoLab" />
          </a>
        </div>

        <center className="container-main">
          <p style={{ marginBottom: 10, marginTop: 30 }}>
            For additional details on each service concept, please click on the
            corresponding logo.
          </p>
        </center>
      </div>
    </div>
  );
}
