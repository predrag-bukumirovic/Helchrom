import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";

import mainImg from "../assets/images/OurServices/services1.webp";
import mainImg1 from "../assets/images/OurServices/services2.webp";
import mainImg2 from "../assets/images/OurServices/services3.webp";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

import PlantC from "../assets/images/OurServices/PlantC.jpeg";
import WaterT from "../assets/images/OurServices/WaterT.png";
import ProjectM from "../assets/images/OurServices/ProjectM.jpeg";
import EconomicA from "../assets/images/OurServices/EconomicA.jpeg";
import SofrwareE from "../assets/images/OurServices/SofrwareE.jpeg";
import InnovationL from "../assets/images/OurServices/InnovationL.jpeg";

const mainImages = [mainImg, mainImg1, mainImg2];

export default function OurServices() {
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

      <div className="container-main">
        <h1 className="title">OUR SERVICES & COMPETENCIES</h1>
        <center>
          <p>
            At Helmchron, we pride ourselves on delivering exceptional process
            and chemical engineering solutions that are driven by our partners'
            needs and satisfaction. Our unwavering commitment to understanding
            and fulfilling the unique requirements of each of our clients<br />{" "}
            drives our mission and vision.<br />
            At the core of our operational philosophy is a deep understanding
            that our success is extensively linked to the success of our
            partners<br /> and outcomes for the individuals and environment. We
            believe that by placing end users at the forefront of everything we
            do,<br /> we can create loyal partnerships and meaningful impact for
            everyone.
          </p>

          <p>
            For detailed information on our services, projects, and references,
            please contact{" "}
            <a href="mailto:milos.ivosevic@helmchron.com">
              milos.ivosevic@helmchron.com.
            </a>
          </p>
        </center>

        <section className="core-wrapper padding30">
          <div className="core-row">
            <div className="core-text">
              <h2>Plant construction</h2>
              <div className="line" />

              <ul>
                <li>Plant, equipment, and process design</li>
                <li>Plant engineering</li>
                <li>Process simulation and upgrade</li>
                <li>Production process sustainability</li>
              </ul>
            </div>
            <div>
              <img src={PlantC} alt="Plant construction" />
            </div>
          </div>
          <div className="core-row">
            <div>
              <img src={WaterT} alt="Water treatment" />
            </div>
            <div className="core-text">
              <h2>Water treatment</h2>
              <div className="line" />

              <ul>
                <li>
                  Development of innovative technical concepts, products, and
                  services
                </li>
                <li>Technology and process upgrade</li>
                <li>Plant`s modernization engineering</li>
              </ul>
            </div>
          </div>
          <div className="core-row">
            <div className="core-text">
              <h2>Project management</h2>
              <div className="line" />

              <ul>
                <li>Scope and milestones management</li>
                <li>Time and cost management</li>
                <li>Quality management</li>
                <li>Human Resources planning</li>
                <li>Risk assessment</li>
              </ul>
            </div>
            <div>
              <img src={ProjectM} alt="Project management" />
            </div>
          </div>
          <div className="core-row">
            <div>
              <img src={EconomicA} alt="Engineering – economic analysis" />
            </div>
            <div className="core-text">
              <h2>Engineering – economic analysis</h2>
              <div className="line" />

              <ul>
                <li>Cost evaluation</li>
                <li>Budgeting</li>
                <li>Plant optimization</li>
              </ul>
            </div>
          </div>
          <div className="core-row">
            <div className="core-text">
              <h2>Software for engineering purposes</h2>
              <div className="line" />

              <ul>
                <li>
                  Design and development of custom-made software solutions
                </li>
                <li>Testing</li>
                <li>Maintenance</li>
              </ul>
            </div>
            <div>
              <img src={SofrwareE} alt="Software for engineering purposes" />
            </div>
          </div>
          <div className="core-row">
            <div>
              <img src={InnovationL} alt="Innovation Lab" />
            </div>
            <div className="core-text">
              <h2>Innovation Lab</h2>
              <div className="line" />

              <ul>
                <li>
                  Development of innovative technical concepts, products and
                  services
                </li>
                <li>Technology and process upgrade</li>
                <li>Plant`s modernization engineering</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
