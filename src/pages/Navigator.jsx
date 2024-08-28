import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";

import mainImg from "../assets/images/Navigator/baner1.png";
import mainImg1 from "../assets/images/Navigator/banner2.png";
import mainImg2 from "../assets/images/Navigator/banner3.png";

import Overview from "../assets/images/Navigator/Overview.png";
import Framework from "../assets/images/Navigator/Framework.png";
import end from "../assets/images/Navigator/end.png";
import nav from "../assets/images/Navigator/nav.png";

import icon1 from "../assets/images/Navigator/1.png";
import icon2 from "../assets/images/Navigator/2.png";
import icon3 from "../assets/images/Navigator/3.png";
import icon4 from "../assets/images/Navigator/4.png";
import icon5 from "../assets/images/Navigator/5.png";

import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

export default function Navigator() {
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
            <img src={mainImg} alt="Main" />
          </div>
          <div>
            <img src={mainImg1} alt="Main" />
          </div>
          <div>
            <img src={mainImg2} alt="Main" />
          </div>
        </div>
      </div>
      {/* Slider end */}

      <div>
        <center className="container-main">
          <h1 className="title" style={{ textTransform: "capitalize" }}>
            Helmchron N<img src={nav} alt="A Navigator" />VIGATOR
          </h1>
          <p data-aos="fade-up">
            Helmchron Navigator is our initiative designed to provide consulting
            and support throughout the entire plant design lifecycle. Whether
            you're commencing a greenfield or brownfield project, Helmchron
            Navigator delivers guidance to each phase and ensures project
            remains on budget and schedule.
          </p>
        </center>

        <div
          style={{ background: "var(--light-blue-color)", margin: "50px 0" }}
        >
          <div className="row container-main">
            <div data-aos="fade-right">
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Helmchron Navigator Overview
              </span>

              <p style={{ padding: "20px 0" }}>
                Helmchron Navigator represents a comprehensive service offering
                that combines proactive planning, expert guidance, and agile
                execution to assist clients in making effective decisions at
                every stage of their plant project. <br /> Helmchron Navigator
                is designed to meet the needs and expectations of various
                industries, including highly regulated GxP sectors such as
                pharmaceuticals and biopharma. Helmchron Navigator can be
                deployed across all our projects and business departments, from
                food to chemicals. <br /> Explore our services and competencies.
              </p>

              <a
                href="/our-services"
                className="book-btn"
                style={{ background: "var(--dark-blue-color)" }}
              >
                Read more
              </a>
            </div>

            <img data-aos="fade-left" src={Overview} alt="" />
          </div>
        </div>

        <center data-aos="fade-up">
          <h2 style={{ fontWeight: "bold", marginTop: 40 }}>
            Benefits of Helmchron Navigator
          </h2>
        </center>

        <div className="our-home container-main">
          <div className="services-icon container-main">
            <div data-aos="zoom-in">
              <img src={icon1} alt="" />

              <h3>Proactive Planning</h3>
              <p>
                We identify potential challenges early in the process to
                mitigate risks and support the client in developing a clear,
                strategic plan to achieve the outcomes.
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon2} alt="" />
              <h3>Expert Guidance</h3>

              <p>
                We conduct in-depth analysis and deliver proposals and
                recommendations tailored to the project`s specific needs.
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon3} alt="" />
              <h3>Agile Execution</h3>
              <p>
                Our team adapts effectively to changes and evolving project
                requirements to ensure smooth, timely execution of project
                plans.
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon4} alt="" />
              <h3>Cost and Schedule Management</h3>
              <p>
                Resources are strategically allocated to ensure they directly
                contribute to achieving the planned outcomes. Control over the
                budget and schedule is one of the main benefits.
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon5} alt="" />
              <h3>Comprehensive Support</h3>
              <p>
                Our end-to-end involvement and guidance through every phase of
                the plant design, enables agile decision-making and continuous
                improvements.
              </p>
            </div>
          </div>
        </div>

        <center data-aos="fade-up" className="container-main">
          <p style={{ marginBottom: 0 }}>
            To learn more about how Helmchron Navigator supports plant projects,
            schedule a meeting with our team.
          </p>
          <br />
          <a
            style={{ background: "var(--dark-blue-color)" }}
            className="book-btn"
            href="/contact"
          >
            Booking a meeting
          </a>
        </center>

        <div style={{ background: "var(--light-blue-color)" }}>
          <div style={{ margin: "50px auto" }} className="row container-main">
            <div data-aos="fade-right">
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                A Structured and Flexible Framework
              </span>
              <br />
              <p style={{ marginTop: 20 }}>
                Helmchron Navigator follows a structured yet adaptable approach
                to plant design, including:
              </p>

              <ul className="framework">
                <li>
                  Initial consultation to understand project goals,
                  requirements, and constraints
                </li>
                <li>
                  Detailed planning to develop a comprehensive project plan with
                  clear milestones and deliverables
                </li>
                <li>Engineering and design</li>
                <li>On-site support and supervision</li>
                <li>All equipment-related activities</li>
                <li>
                  Commissioning and assistance with the final stages of the
                  project, ensuring a streamlined transition to operations
                </li>
              </ul>
            </div>

            <img data-aos="fade-left" src={Framework} alt="" />
          </div>
        </div>

        <div className="guarantee padding30 container-main">
          <img data-aos="fade-right" src={end} alt="" />
          <div data-aos="fade-left">
            <span style={{ fontWeight: "bold", fontSize: 20 }}>
              Comprehensive quality guarantee
            </span>

            <p style={{ margin: "20px 0" }}>
              Upon transitioning to operational status, we guarantee the quality
              of all our projects and remain accountable for our deliverables
              for one year post-commissioning. This commitment ensures that we
              continue to support our clients with any additional questions or
              concerns that may arise during operations.
            </p>

            <p style={{ margin: "30px 0" }}>
              Learn more about our initiatives. Discover Helmchron ONE, our
              leading service concept.
            </p>

            <a
              style={{ background: "var(--dark-blue-color)" }}
              href="/our-services"
              className="book-btn"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
