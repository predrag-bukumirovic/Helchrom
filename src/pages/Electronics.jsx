import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";

import mainIm1 from "../assets/images/Electronics/img1.png";
import mainImg2 from "../assets/images/Electronics/img2.png";
import mainImg3 from "../assets/images/Electronics/img3.png";

import imgRow from "../assets/images/Electronics/imgRow.png";
import graph from "../assets/images/Electronics/Electronicsgraph.png";
import cagr from "../assets/images/Electronics/CAGRikona.png";
import market from "../assets/images/Electronics/Market.png";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Electronics() {
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
        <h1 className="title">Electronics</h1>
        <center>
          <p>
            In manufacturing of electronics, functionality, reliability, and
            safety are equally important, demanding a high level of
            collaboration among multidisciplinary teams.
          </p>
        </center>

        <div className="row" style={{ background: "var(--light-blue-color)" }}>
          <div className="text">
            <div>
              <span>The Manufacturing Process</span>
              <p>
                The fabrication of individual electronic components such as
                microchips, resistors, and capacitors is conducted using
                advanced semiconductor manufacturing techniques in cleanroom
                environments to prevent contamination. Components are assembled
                onto printed circuit boards using automated assembly equipment.
                Cleanroom conditions are maintained throughout the assembly
                process to minimize the risk of particle contamination, which
                can affect the functionality and lifespan of electronic devices.
              </p>
            </div>
            <div>
              <span>Aseptic Conditions</span>
              <p>
                Aseptic conditions minimize the risk of contamination, ensuring
                that electronic components and devices function reliably and
                consistently over their lifespan. Additionally, it means
                complying with regulations and standards guarantee the quality
                and reliability of the product.
              </p>
            </div>
          </div>
          <div className="img">
            <img src={imgRow} alt="Slika" />
          </div>
        </div>

        <span style={{ paddingTop: 20 }}>
          <b>Future of Electronics Manufacturing</b>
          <br />
          Ovde treba da ide neki tekst sa dizajna nisam moga da vidim
        </span>
        <div className="future">
          <div style={{ flex: 2 }}>
            <img src={graph} alt="Graph" />
          </div>
          <div className="icon-graph">
            <img style={{ marginBottom: 10 }} src={market} alt="Market" />
            <img src={cagr} alt="Cagr" />
          </div>
          <div className="text">
            <p>
              The main driver of growth will be adoption of sustainable
              practices and e-waste reduction. As a global concern, e-waste
              should be properly recycled or managed to reduce environmental and
              health impact. Furthermore, electronic devices contain valuable
              resources such as precious metals and rare earth elements, whose
              loss contributes to resource depletion. By implementing efficient
              extraction and purification techniques, recovery of precious
              metals, rare earth elements, and other resources from discarded
              electronic devices will be enabled, reducing the need for new
              materials in manufacturing. Electronic components with modular
              architectures will facilitate easy disassembly, repair, and
              upgradeability. Interchangeable parts and standardized interfaces
              will extend the lifespan of electronic devices and reduce e-waste
              generation. Breakthroughs in material science will lead to
              innovative materials with enhanced properties.
            </p>
          </div>
        </div>

        <div>
          <p style={{ marginTop: 50, fontSize: 16 }}>
            <b>Source: </b>{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.fortunebusinessinsights.com/infographics/electronic-manufacturing-services-ems-market-105519"
            >
              electronic-manufacturing-services-ems-market
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
