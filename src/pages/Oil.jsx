import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Oil/img1.png";
import mainImg2 from "../assets/images/Oil/img2.png";
import mainImg3 from "../assets/images/Oil/img3.png";

import Oil1 from "../assets/images/Oil/rowImg1.png";
import Oil2 from "../assets/images/Oil/rowImg2.png";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Oil() {
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
        <h1 className="title">Oil and gas</h1>
        <center>
          <p>
            Helmchron plant design engineering solutions contribute to the
            overall efficiency, safety, sustainability, and profitability of the
            oil and gas industry. <br /> We firmly believe that the integration
            of process and chemical engineering solutions holds the key to
            unlocking operational efficiency, maximizing resource utilization,
            and minimizing environmental impact.
          </p>
        </center>

        <div>
          <div className="row">
            <div>
              <span>
                <b>Optimized Operations</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Our team combines industry expertise and advanced technologies
                to optimize every aspect of oil and gas operations. We analyze,
                design, and implement processes that streamline production,
                reduce costs, and enhance overall operational efficiency.
              </p>

              <span>
                <b>Sustainable Solutions</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Sustainability is part of everything we do. Our process and
                chemical engineering solutions are environmentally responsible
                and ensure that manufacturing processes align with global
                environmental goals.
              </p>
            </div>

            <img src={Oil1} alt="" />
          </div>

          <div className="row">
            <img src={Oil2} alt="" />
            <div>
              <span>
                <b>Safety First</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Safety is non-negotiable in the oil and gas industry. We
                implement advanced safety measures and technologies that
                mitigate risks and enhance workplace safety.
              </p>

              <span>
                <b>Partnership and Collaboration</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Our partners` satisfaction is one of the outcomes we aim for.
                Collaborating closely and transparently and utilizing
                cutting-edge technologies, we develop solutions according to
                unique requirements. Through in-depth analysis, we identify
                risks, areas for improvement, and opportunities for automation,
                with the goal of enhancing operational efficiency and
                profitability.
              </p>
            </div>
          </div>

          <center>
            <p style={{ marginBottom: 0 }}>
              Check out our reference in oil and gas
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
