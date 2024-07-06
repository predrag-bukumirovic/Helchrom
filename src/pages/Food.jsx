import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Food/img1.png";
import mainImg2 from "../assets/images/Food/img2.jpg";
import mainImg3 from "../assets/images/Food/img3.png";

import Food1 from "../assets/images/Food/Food1.png";
import Food2 from "../assets/images/Food/Food2.png";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Food() {
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
        <h1 className="title">Food and Bioproducts</h1>
        <center>
          <p>
            In the domain of food and bio products, quality and safety are
            non-negotiable. With our plant design engineering solutions, we
            believe we can contribute to safer and more sustainable
            manufacturing of the highest quality products for everyone
            everywhere.
          </p>
        </center>

        <div>
          <center style={{ marginTop: 40 }}>
            <span>
              <b>Food and Bio Product Manufacturing </b>
            </span>
            <p>
              Process and chemical engineering enable manufacturers to meet
              evolving consumer expectations and needs, uphold safety standards,
              and create products that enrich and nourish our everyday lives.
            </p>
          </center>

          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <div>
              <span>
                <b>Stringent Standards</b>
              </span>
              <p style={{ marginTop: 15 }}>
                To ensure the safety of foods and bio products, manufacturing
                under sterile conditions is necessary. While the sterility level
                is not as in pharmaceutical manufacturing, environment
                conditions are rigorous throughout the manufacturing process.{" "}
                <br />
                <br />
                Aspects that need to be sterile include all machinery, utensils,
                and equipment, surfaces and workspaces, and packaging materials.
                Specialized equipment such as sterilizers, autoclaves, and
                aseptic fillers are used to ensure that all components of the
                manufacturing process remain sterile. These systems utilize
                heat, steam, or chemical agents to sterilize equipment and
                packaging materials before they come into contact with the
                product.
              </p>
            </div>

            <img src={Food1} alt="" />
          </div>

          <center>
            <span>
              <b>Environmental Controls</b>
            </span>
            <p>
              Air and water used should meet stringent quality standards to
              prevent contamination of the products. Environmental controls,
              including temperature, humidity, and air quality, are carefully
              regulated to create optimal conditions for aseptic manufacturing.
              High-efficiency particulate air (HEPA) filters and air
              purification systems are installed to remove airborne contaminants
              and maintain an optimal atmosphere within the production area.
            </p>
          </center>

          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <img src={Food2} alt="" />
            <div>
              <span>
                <b>Design of Facilities</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Facilities are designed with a focus on controlling the
                environment and minimizing the risk of contamination. This
                includes the layout of the production area, air handling
                systems, and the integration of barriers to prevent the entry of
                contaminants. Clean-in-place (CIP) and sterilization-in-place
                (SIP) systems are implemented to clean and sanitize equipment
                and pipelines automatically, reducing the risk of microbial
                growth and cross-contamination.
              </p>

              <span>
                <b>Sustainability</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Our engineering solutions are designed to optimize production
                processes, ensuring alignment with global sustainability
                objectives. Within process and chemical engineering scope,
                sustainability strategies focus on minimizing energy consumption
                during production, resulting in resource optimization and the
                adoption of greener manufacturing practices.
              </p>
            </div>
          </div>

          <center>
            <p style={{ marginBottom: 0 }}>
              Check out our references in food and bio products
            </p>
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
