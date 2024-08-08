import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";

import mainImg from "../assets/images/innoLAB/baner1.png";
import mainImg1 from "../assets/images/innoLAB/baner2.png";
import mainImg2 from "../assets/images/innoLAB/baner3.png";

import imgLab1 from "../assets/images/innoLAB/innolab1.png";
import imgLab2 from "../assets/images/innoLAB/InnoLAB2.png";

import "../assets/scss/innoLab.scss";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

export default function innoLab() {
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

      <div className="container-main">
        <center>
          <h1 className="title" style={{ textTransform: "capitalize" }}>
            Helmchron InnoLAB
          </h1>
          <p>
            At Helmchron, we believe in pushing the boundaries of knowledge and
            technology to create a higher quality of life for the coming
            generations. Helmchron InnoLAB is our research initiative dedicated
            to advancing and innovating plant design and process and chemical
            engineering. We aim to lead the way in pioneering research and
            development, ensuring sustainable and progressive engineering
            solutions.
          </p>
        </center>

        <div className="moving-text">
          <img src={imgLab1} alt="InnoLAN img 1" />
          <div className="marquee">
            <p>
              <span>The Spirit of Innovation</span> Helmchron InnoLAB
            </p>
            <p>
              <span>The Spirit of Innovation</span> Helmchron InnoLAB
            </p>
          </div>
        </div>

        <div className="row">
          <div>
            <span>
              <b>How did it all begin?</b>
            </span>

            <p>
              Since its inception in 2018, Helmchron InnoLAB has produced
              groundbreaking insights that were recognized by the scientific
              community and published in renowned scientific journals. Our team,
              who serve as authors and co-authors, have so far published five
              papers that have garnered recognition for their contributions.
              These publications reflect our dedication to pushing the envelope
              and driving innovation that can positively impact science and the
              community.
            </p>

            <span>
              <b>What`s next?</b>
            </span>

            <p>
              As our journey progresses, Helmchron InnoLAB remains focused on
              creating more innovations and disruptions in our industry. Our
              work not only aims to expand the frontiers of scientific knowledge
              but also to develop practical solutions that address real-world
              challenges. Our culture cultivates curiosity and collaboration to
              inspire new ideas and breakthroughs that can lead to sustainable
              and transformative advancements.
            </p>
            <p>
              By exploring the future of process and chemical engineering, we
              can build a more innovative and brighter world for the coming
              generations.
            </p>
          </div>

          <img src={imgLab2} alt="Inolab 2" />
        </div>

        <center>
          <p style={{ marginBottom: 0 }}>
            Learn how we implement innovative knowledge in our projects and
            discover Helmchron Navigator.
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
  );
}
