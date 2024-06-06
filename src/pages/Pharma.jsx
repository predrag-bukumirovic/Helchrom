import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Pharma/img1.png";
import mainImg2 from "../assets/images/Pharma/img2.png";
import mainImg3 from "../assets/images/Pharma/img3.png";

import Pharma1 from "../assets/images/Pharma/rowimg1.png";
import Pharma2 from "../assets/images/Pharma/rowimg2.png";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Pharma() {
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
        <h1 className="title">LIFE SCIENCES AND PHARMACEUTICALS</h1>
        <center>
          <p>
            We specialize in delivering cutting-edge plant design engineering
            solutions that power the advancements in the pharmaceuticals
            manufacturing.
          </p>
        </center>

        <center>
          <span>
            <b>Balance of Science and Engineering</b>
          </span>

          <p style={{ marginTop: 15 }}>
            Pharmaceuticals and life sciences are dynamic sectors that require a
            delicate balance between scientific knowledge and engineering
            expertise. We understand the role that engineering plays in the
            development and production of life-saving medicines and in
            delivering medical advancements. Our team merges scientific and
            engineering principles to develop solutions that optimize processes,
            enhance safety, maximize productivity and minimize environmental
            impact.
          </p>
        </center>

        <div>
          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <img src={Pharma1} alt="" />
            <div>
              <span>
                <b>Aseptic Manufacturing in Pharma</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Aseptic conditions are critical in pharmaceutical manufacturing
                as they ensure the safety and sterility of products. Our
                commitment to aseptic manufacturing begins with strictly
                controlled clean rooms. Through the integration of advanced
                filtration systems and comprehensive environmental monitoring,
                compliance regarding airborne particle levels and environmental
                conditions is ensured. With the use of validated sterilization
                methods such as steam sterilization, gamma irradiation, and
                chemical sterilants, the highest levels of sterility is
                accomplished, meeting regulatory requirements and industry
                standards.
              </p>
            </div>
          </div>

          <center>
            <span>
              <b>Water and Air Quality</b>
            </span>

            <p style={{ marginTop: 15 }}>
              Water quality and air quality are closely monitored and controlled
              to prevent contamination and maintain aseptic conditions
              throughout the manufacturing process. Water purification systems
              and high-efficiency particulate air (HEPA) filtration systems
              ensure that water and air used in production meet the strictest
              quality standards, safeguarding against contamination.
            </p>
          </center>

          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <div>
              <span>
                <b>Optimization for Enhanced Efficiency</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Our process engineering solutions are tailored to optimize
                manufacturing processes and ensure operational effectiveness. By
                leveraging technology and deep industry know-how, we support our
                partners to achieve short and long-term outcomes, including
                reduced impact on the environment.
              </p>

              <span>
                <b>Collaborative Partnerships for Success</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Collaboration is at the heart of our approach. We work closely
                with our partners, forging relationships based on trust and
                results achieved. By understanding the specific challenges and
                goals of our partners, we co-create solutions that will improve
                the quality of life for patients everywhere.
              </p>
            </div>
            <img src={Pharma2} alt="" />
          </div>

          <center>
            <p style={{ marginBottom: 0 }}>
              Check out our reference in pharma and life sciences
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
