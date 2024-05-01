import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";
import "../assets/scss/home.scss";
import mainImg from "../assets/images/OurCore/c-s1.png";
import mainImg1 from "../assets/images/OurCore/c-s2.webp";
import mainImg2 from "../assets/images/OurCore/c-s3.webp";
import Consulting from "../assets/images/OurCore/Consulting.png";
import Design from "../assets/images/OurCore/Design.png";
import management from "../assets/images/OurCore/management.png";
import Equipment from "../assets/images/OurCore/Equipment.png";
import Commissioning from "../assets/images/OurCore/Commissioning.png";
import logo from "../assets/images/logo.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

const mainImages = [mainImg, mainImg1, mainImg2];

export default function OurCore() {
  return (
    <div>
      <Helmet>
        <title>Out services | Helmchron</title>
      </Helmet>

      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          {mainImages.map((image, index) =>
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-100"
                src={image}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          )}
        </CCarousel>
        <div className="box-img">
          {mainImages.map((image, index) =>
            <div key={index}>
              <img src={image} alt="Main" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main padding30">
        <h1 className="title">our services & competencies</h1>

        <p>
          Our unwavering commitment to understanding and fulfilling the unique
          requirements of each of our clients drives our mission and vision. We
          measure our success by the satisfaction of our partners, and we are
          dedicated to continuously sharpening and upgrading our competencies
          and improving and refining our services to ensure their continued
          success. <br /> At the heart of our operational philosophy lies a
          profound understanding that our achievements are intricately connected
          with the outcomes of our partners and their impact on the users and
          the environment. By placing the benefit of end users at the forefront
          of everything we do, we foster loyal partnerships and meaningful
          impact for all stakeholders. <br /> Our proactive approach and ongoing
          commitment to expertise and service development reflect our dedication
          to delivering results for our clients and partners.
        </p>

        <div className="icon-core">
          <div>Pre-planning & Consulting </div>
          <div>Engineering & Design</div>
          <div>Project Management</div>
          <div>Equipment & Services</div>
          <div>Commissioning</div>
        </div>
      </div>

      <div
        className="services"
        style={{ background: "#fff2ee", marginTop: 100 }}
      >
        <div style={{ gap: 100 }} className="services-row container-main">
          <div className="vertical-text">
            <h4>SERVICES</h4>
          </div>

          <div className="img-text">
            <img src={logo} alt="Slika" /> <span>HELMCHRON</span>
          </div>
          <div>
            <img src={Consulting} alt="Consulting" />
          </div>
          <div>
            <h3>pre-planning & consulting</h3>
            <ul>
              <li>Assessment of investment</li>
              <li>Capacity planning</li>
              <li>Assessment of current infrastructure</li>
              <li>Concept planning and feasibility studies</li>
              <li>
                Sustainability considerations and environment impact assessment
              </li>
              <li>Process selection and optimization</li>
              <li>
                Technology integration - incorporate advanced technology and
                automation
              </li>
              <li>Risk analysis</li>
              <li>Cost-benefit analysis / engineering-economic analysis</li>
              <li>Cost estimation</li>
              <li>Process simulation and sizing of equipment, HAZOP</li>
              <li>Workforce needs assessment</li>
              <li>
                Life-cycle management - equipment and facilities lifecycle plan,
                maintenance schedules, upgrades and replacements.
              </li>
            </ul>

            <a className="book-btn" href="/">
              Our references
            </a>
          </div>
        </div>
      </div>

      <div className="services">
        <h3 style={{ width: "1240px" }} className="container-main">
          engineering & design
        </h3>
        <div className="services-row row-duble container-main">
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
              SERVICES
            </h4>

            <div style={{ top: -270, left: 50 }} className="img-text">
              <img src={logo} alt="Slika" />{" "}
              <span className="blue">HELMCHRON</span>
            </div>
          </div>
          <div className="text">
            <div>
              <span>Basic Engineering:</span>

              <ul>
                <li>Feasibility studies and data analysis</li>
                <li>Process description and design</li>
                <li>Development of process flow diagrams (PFDs)</li>
                <li>Heat and material balances</li>
                <li>
                  Creation of preliminary piping and instrumentation diagrams
                  (P&IDs)
                </li>
                <li> Layout planning</li>
                <li>Equipment specification and selection</li>
                <li>Thorough risk assessment</li>
                <li>Process simulation</li>
                <li>
                  Project execution plan, with cost estimation and project
                  schedule
                </li>
              </ul>
            </div>
            <div>
              <span>Detailed Engineering:</span>

              <ul>
                <li>Development of detailed design</li>
                <li>
                  Process engineering design of equipment and piping, including
                  strength calculations
                </li>
                <li>
                  Technical specification of materials, measurement systems, and
                  plant components
                </li>
                <li>2D/3D planning of piping systems</li>
                <li>
                  Integration of various systems and subsystems within the
                  overall project
                </li>
                <li>Installation planning</li>
                <li>Documentation</li>
              </ul>

              <span>As-Built</span>

              <ul>
                <li>Tracking of changes and implementation</li>
                <li>Documentation</li>
              </ul>

              <a
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
                href="/"
              >
                Our references
              </a>
            </div>
          </div>
          <div className="img-design">
            <img src={Design} alt="" />
          </div>
        </div>
      </div>

      <div className="services" style={{ background: "#f3fadc" }}>
        <div style={{ gap: 500 }} className="services-row container-main">
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px #4e8351" }}>SERVICES</h4>
          </div>

          <div className="img-text">
            <img src={logo} alt="Slika" />{" "}
            <span className="green">HELMCHRON</span>
          </div>
          <div>
            <img src={management} alt="management" />
          </div>
          <div>
            <h3>project management</h3>

            <ul>
              <li>Resources planning and control</li>
              <li>Schedule planning and control</li>
              <li>Creation of working packages</li>
              <li>Coordination of deliveries and services</li>
              <li>Cost monitoring and management</li>
              <li>Documentation qualification</li>
            </ul>

            <a className="book-btn" style={{ background: "#4e8351" }} href="/">
              Our references
            </a>
          </div>
        </div>
      </div>

      <div className="services">
        <div style={{ gap: 350 }} className="services-row container-main">
          <div className="vertical-text">
            <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
              SERVICES
            </h4>
            <div style={{ left: 50, top: -150 }} className="img-text">
              <img src={logo} alt="Slika" />{" "}
              <span className="blue">HELMCHRON</span>
            </div>
          </div>
          <div>
            <h3>equipment & services</h3>

            <ul>
              <li>Design, documentation, and selection</li>
              <li>Procurement</li>
              <li>FAT/SAT support and management</li>
              <li>Installation and integration</li>
              <li>Maintenance and repairs</li>
              <li>Revamp of existing equipment</li>
              <li>Testing and optimization</li>
              <li>
                Lifecycle management - from procurement to decommissioning
              </li>
            </ul>
            <a
              className="book-btn"
              href="/"
              style={{ background: "var(--dark-blue-color)" }}
            >
              Our references
            </a>
          </div>
          <div>
            <img src={Equipment} alt="Equipment" />
          </div>
        </div>
      </div>

      <div className="services" style={{ background: "#fff2ee" }}>
        <div style={{ gap: 350 }} className="services-row container-main">
          <div className="vertical-text">
            <h4>SERVICES</h4>
          </div>

          <div className="img-text">
            <img src={logo} alt="Slika" /> <span>HELMCHRON</span>
          </div>
          <div>
            <img src={Commissioning} alt="" />
          </div>
          <div>
            <h3>commissioning</h3>
            <ul>
              <li>Development of commissioning plan</li>
              <li> Systems and equipment inspections</li>
              <li>Functional testing on systems and equipment</li>
              <li>Integration testing</li>
              <li>Performance testing</li>
              <li>
                Client acceptance and handover, including personnel training
              </li>
              <li>Post-commissioning review to assess the overall process</li>
            </ul>

            <a className="book-btn" href="/">
              Our references
            </a>
          </div>
        </div>
      </div>

      <center style={{ marginTop: 50 }}>
        <p>
          If you wish to learn more about our services and references, book a
          meeting with our team.
        </p>
        <a
          style={{ background: "var(--dark-blue-color)" }}
          className="book-btn"
          href="/contact"
        >
          Book a meeting
        </a>
      </center>

      <div className="unique" style={{ marginTop: 100 }}>
        <h2 style={{ marginBottom: 0 }} className="title">
          unique service concept
        </h2>

        <h3>
          HELMCHR<span>ONe</span>
        </h3>

        <center>
          <iframe
            height="500"
            width="800"
            src="https://www.youtube.com/embed/tWflefiRmYw"
            title="HelmchronONE - New Service Concept"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </center>
      </div>
    </div>
  );
}
