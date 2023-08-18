import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/services.scss";
import mainImg from "../assets/images/OurCore/c-s1.webp";
import mainImg1 from "../assets/images/OurCore/c-s2.webp";
import mainImg2 from "../assets/images/OurCore/c-s3.webp";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

import BasicImg from "../assets/images/OurCore/BasicE.jpeg";
import DetailedImg from "../assets/images/OurCore/DetailedE.jpeg";
import PipingImg from "../assets/images/OurCore/PipingE.jpeg";
import ProcessE from "../assets/images/OurCore/ProcessE.jpeg";
import OptimizationE from "../assets/images/OurCore/OptimizationE.jpeg";
import ProcessD from "../assets/images/OurCore/ProcessD.jpeg";


const mainImages = [mainImg, mainImg1, mainImg2];


export default function OurCore() {
  return (
    <div className="container-main">
      <Helmet>
        <title>Out services | Helmchron</title>
      </Helmet>
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

      <div className="padding30">
    
        <h1 className="title">OUR CORE COMPETENCIES</h1>
        <center>
          <p>
            We measure our success by the satisfaction of our partners, and we are dedicated to continuously sharpening and upgrading our competencies and improving and refining our services to ensure   their continued success.<br/>
            We believe our competencies and our values are the main driving forces of our mission and vision. Our competencies enable us to understand the unique needs and challenges of each project and tailor our solutions in order to achieve the outcomes<br/> and maintain strong, lasting partnerships.<br/>  
            Our proactive approach and continuous competencies` development demonstrate the highest level of commitment<br/> to our partners` success.
          </p>
          <p>For detailed information on our services, projects, and references, please contact <a href="mailto:milos.ivosevic@helmchron.com">milos.ivosevic@helmchron.com.</a></p>
        </center>

        <section className="core-wrapper padding30">
          <div className="core-row">
            <div className="core-text">
              <h2>Basic engineering</h2>
              <div className="line"></div>

              <ul>
                <li>Feasibility studies and data analysis</li>
                <li>Process description and design</li>
                <li>P&IDs (process and instrumentation diagram) and process flow diagrams</li>
                <li>Prototypes development and testing</li>
                <li>Risks assessment and safety analysis</li>
                <li>Equipment specification</li>
                <li>Process simulation</li>
              </ul>
            </div>
            <div>
              <img src={BasicImg} alt="Besic engineering" />
            </div>
          </div>
          <div className="core-row">
            <div>
              <img src={DetailedImg} alt="Detailed engineering" />
            </div>
            <div className="core-text">
              <h2>Detailed engineering</h2>
              <div className="line"></div>

              <ul>
                <li>Detailed design development</li>
                <li>Technical calculations and simulations</li>
                <li>Integration of various systems and subsystems within the overall project</li>
                <li>Comprehensive testing</li>
              </ul>
            </div>
          </div>
          <div className="core-row">
            <div className="core-text">
              <h2>Piping engineering</h2>
              <div className="line"></div>

              <ul>
                <li>Piping design</li>
                <li>Pipe stress analysis</li>
                <li>Hydraulic design</li>
              </ul>
            </div>
            <div>
              <img src={PipingImg} alt="Piping engineering" />
            </div>
          </div>
          <div className="core-row">
            <div>
              <img src={ProcessE} alt="Process equipment" />
            </div>
            <div className="core-text">
              <h2>Process equipment</h2>
              <div className="line"></div>

              <ul>
                <li>Equipment design</li>
                <li>Preparation of documentation and follow up activities</li>
              </ul>
            </div>
          </div>
          <div className="core-row">
            <div className="core-text">
              <h2>Process design and optimization</h2>
              <div className="line"></div>

              <ul>
                <li>Design, optimization and innovation of processes to improve efficacy, productivity, and quality while reassessing costs and waste</li>
              </ul>
            </div>
            <div>
              <img src={OptimizationE} alt="Process design and optimization" />
            </div>
          </div>
          <div className="core-row">
            <div>
              <img src={ProcessD} alt="Process documentation" />
            </div>
            <div className="core-text">
              <h2>Process documentation</h2>
              <div className="line"></div>

              <ul>
                <li>Proficiency in creating and managing process documentation including P&IDs, process flow diagrams, SOPs and other technical documentation.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
