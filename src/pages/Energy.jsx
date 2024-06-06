import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Energy/img1.png";
import mainImg2 from "../assets/images/Energy/img2.png";
import mainImg3 from "../assets/images/Energy/img3.png";

import EnergyImg1 from "../assets/images/Energy/Energy1.png";
import EnergyImg2 from "../assets/images/Energy/Energy2.png";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Energy() {
  return (
    <div>
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
        <h1 className="title">Energy</h1>
        <center>
          <p>
            With our plant design engineering solutions, we strive to redefine
            the energy landscape, embracing sustainable practices and innovative
            solutions to create a brighter, cleaner, and energy-abundant future
            for the coming generations.
          </p>
        </center>

        <div className="row" style={{ background: "var(--light-blue-color)" }}>
          <div>
            <span>
              <b>Thermal Power Plants as a Starting Point</b>
            </span>
            <p style={{ marginTop: 15 }}>
              Thermal power plants fueled by coal have been reliable sources of
              global electricity generation for decades. Our proficiency in
              energy manufacturing originated from our experience with thermal
              power plants, serving as the foundation for the development of our
              expertise in transitioning towards cleaner and renewable energy
              sources. As awareness of the environmental impacts of fossil fuel
              combustion has grown, the need for sustainable solutions and
              focused know-how has become increasingly urgent.
            </p>
          </div>
          <img src={EnergyImg1} alt="" />
        </div>

        <div>
          <center style={{ marginTop: 40 }}>
            <span>
              <b>Transition to Solar Energy</b>
            </span>
            <p>
              Investing in solar infrastructure, including photovoltaic (PV)
              panels, concentrated solar power (CSP) systems, energy storage,
              and grid integration technologies, is essential for scaling up
              solar energy generation and ensuring reliability and resilience of
              the power grid.
            </p>
          </center>

          <center>
            <span>
              <b>Controlled Conditions</b>
            </span>
            <p>
              Many steps in the manufacturing process require a cleanroom
              environment to prevent contamination of the silicon wafers and
              solar cells. Cleanrooms are equipped with air filtration systems
              and strict cleanliness protocols to minimize the presence of dust,
              particles, and other contaminants. Variations in temperature and
              humidity can affect the performance and longevity of the panels.
              Monitoring and controlling systems must be in place to maintain
              consistent conditions at all times.
            </p>
          </center>

          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <img src={EnergyImg2} alt="" />
            <div>
              <span>
                <b>Innovation and Adaptability</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Our engineers design processes that are agile and adaptable to
                market dynamics, ensuring that energy manufacturing stays
                competitive and responsive to evolving consumer demands and
                contemporary needs.
              </p>

              <span>
                <b>Cost Efficiency and Optimization</b>
              </span>
              <p style={{ marginTop: 15 }}>
                By identifying cost-efficient strategies and thorough life cycle
                analysis, we optimize operations and minimize resource wastage,
                leading to an overall effective energy manufacturing process.
              </p>
            </div>
          </div>

          <center>
            <p style={{ marginBottom: 0 }}>Check out our reference in energy</p>
            <br />
            <a
              style={{ background: "var(--dark-blue-color)" }}
              className="book-btn"
              href="/our-references"
            >
              Read more
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}
