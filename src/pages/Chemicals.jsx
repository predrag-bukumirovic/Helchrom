import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

import mainIm1 from "../assets/images/Chemicals/img1.png";
import mainImg2 from "../assets/images/Chemicals/img2.png";
import mainImg3 from "../assets/images/Chemicals/img3.png";

import ChemicalsImg from "../assets/images/Chemicals/Chemicals.png";

const mainImages = [mainIm1, mainImg2, mainImg3];

export default function Chemicals() {
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
        <h1 className="title">Chemicals</h1>
        <center>
          <p>
            Our team delivers plant design engineering solutions for the
            manufacturing of chemicals that are used in everyday lives across
            the globe - from disinfectants to plastics.
          </p>
        </center>

        <div>
          <center style={{ marginTop: 40 }}>
            <span>
              <b>Chemistry in our Lives</b>
            </span>
            <p>
              In a way, the chemical industry is the backbone of our modern day
              habits. Not only in the sense of products we use daily, but also
              infrastructure that supports our communities, like roads, bridges,
              etc. For example, the discovery of polyethylene, a versatile
              plastic, in the 1930s led to the development of numerous everyday
              products such as plastic bags, containers, and packaging
              materials. Polyethylene's low cost, durability, and versatility
              have made it one of the most widely used plastic materials in the
              world. However, these benefits and lack of consciousness about
              environmental impact, has led to overconsumption.
            </p>
          </center>
          <div
            className="row"
            style={{ background: "var(--light-blue-color)" }}
          >
            <img src={ChemicalsImg} alt="" />
            <div>
              <span>
                <b>Overcoming Challenges of Chemicals Manufacturing</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Environmental concerns and rising regulatory requirements
                present significant challenges in chemical innovation and
                manufacturing. For this reason, global manufacturers are
                engaging with small and medium businesses, due to their focused
                know-how and agile value creation, to deliver innovation.
              </p>

              <span>
                <b>Carbon Capture and Utilization</b>
              </span>
              <p style={{ marginTop: 15 }}>
                Carbon dioxide emissions from industrial processes can be
                converted into valuable products such as chemicals, fuels, and
                materials. By coupling hydrogen with captured carbon dioxide,
                chemical manufacturers can reduce their carbon footprint and
                contribute to efforts to mitigate climate change. Overall,
                hydrogen offers significant opportunities for the chemical
                industry to enhance sustainability by enabling cleaner
                production processes, reducing carbon emissions, and promoting
                the transition to renewable energy sources.
              </p>
            </div>
          </div>
          <center>
            <span>
              <b>Our Customized Solutions</b>
            </span>
            <p>
              Our solutions are always in line with unique needs of each of our
              partners, industry best practices and regulatory standards. We
              craft our solutions in order to optimize manufacturing processes,
              ensure cost-effectiveness and long-term sustainability. Our
              dedication to excellence and passion for our partners` outcomes
              are the main driving forces of the results we deliver.
            </p>
          </center>

          <center>
            <span>
              <b>Long Lasting Partnerships</b>
            </span>
            <p>
              We are proactive in our approach, but led by our partners`
              feedback and requirements. Through collaboration, we gain insight
              into our partners' vision, facilitate progress, and foster
              enduring partnerships built on trust and mutual success.
            </p>
          </center>

          <center>
            <p style={{ marginBottom: 0 }}>
              Check out our references in Chemicals
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
