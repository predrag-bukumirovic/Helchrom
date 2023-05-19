import React from "react";
import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";
import Chemicals from "../assets/images/Home/Chemicals.png";
import Environment from "../assets/images/Home/Environment.png";
import Pharma from "../assets/images/Home/Pharma.png";
import Video from "../assets/videos/Ver4WhoweareHCvideo.mp4";
import Poster from "../assets/images/poster.jpg";
import mainImg from "../assets/images/Home/main-img.jpg";
import mainImg1 from "../assets/images/Home/main-img1.jpg";
import mainImg2 from "../assets/images/Home/main-img2.jpg";
import dubleLogo from "../assets/images/dubleLogo.png";

import bigLogo from "../assets/images/Home/bigLogo.png";
import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";

import quotation from "../assets/images/quotation.png";

import { RiShareForwardLine } from "react-icons/ri";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {
  return (
    <div className="home">
      <CCarousel className="slider-main" controls transition="crossfade">
        <CCarouselItem>
          <a href="/about-us/who-are-we">
            <CImage className="d-block w-100" src={mainImg} alt="slide 1" />
            <CCarouselCaption className="img">
              <div>
                <p>Who are we?</p>
              </div>
              <div>
                <RiShareForwardLine className="text-icon" />
              </div>
            </CCarouselCaption>
          </a>
        </CCarouselItem>
        <CCarouselItem>
          <a href="/competences&services/our-services">
            <CImage className="d-block w-100" src={mainImg1} alt="slide 2" />
            <CCarouselCaption className="img">
              <div>
                <p>Services: process engineering solutions</p>
              </div>
              <div>
                <RiShareForwardLine className="text-icon" />
              </div>
            </CCarouselCaption>
          </a>
        </CCarouselItem>
        <CCarouselItem>
          <a href="/about-us/our-values">
            <CImage className="d-block w-100" src={mainImg2} alt="slide 3" />
            <CCarouselCaption className="img">
              <div>
                <p>How do we work?</p>
              </div>
              <div>
                <RiShareForwardLine className="text-icon" />
              </div>
            </CCarouselCaption>
          </a>
        </CCarouselItem>
      </CCarousel>

      <div className="box-img container-main">
        <div>
          <a href="/about-us/who-are-we">
            <img src={mainImg} alt="Main" />
            <div className="img-text">
              <div>
                <p>Who are we?</p>
              </div>
              <div>
                <RiShareForwardLine className="text-icon" />
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="/competences&services/our-services">
            <img src={mainImg1} alt="Main" />
            <div className="img-text">
              <div>
                <p>Services: process engineering solutions</p>
              </div>
              <div>
                <RiShareForwardLine className="text-icon" />
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="/about-us/our-values">
            <img src={mainImg2} alt="Main" />
            <div className="img-text">
              <div>
                <p>How do we work?</p>
              </div>
              <div>
                <RiShareForwardLine className="text-icon" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="our-home container-main padding30">
        <h1 className="title">OUR SERVICES</h1>
        <p>
          We provide best-in-class process and chemical engineering solutions to
          clients worldwide.
        </p>

        <div>
          <div>
            <img src={icon1} alt="icon1" />
            <p>
              <b>Design of unit operations</b>
            </p>
            <p>
              We design units for fluid flow operations, mechanical operations,
              mass transfer, and heat transfer.{" "}
            </p>
          </div>
          <div>
            <img src={icon2} alt="icon2" />
            <p>
              <b>Engineering-economic analysis</b>
            </p>
            <p>
              Economic analysis, comparison, and advising on engineering
              solutions alternatives.
            </p>
          </div>
          <div>
            <img src={icon4} alt="icon4" />
            <p>
              <b>Software for engineering purposes</b>
            </p>
            <p>
              We provide customized software solutions for engineering
              applications.{" "}
            </p>
          </div>
          <div>
            <img src={icon3} alt="icon3" />
            <p>
              <b>Innovation Lab / R&D</b>
            </p>
            <p>
              We observe our partners` needs as opportunities to create new
              solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="facts-box">
        <div className="facts container-main padding30">
          <div>
            <h2>FACTS ABOUT US</h2>
            <p>
              We are a team of highly skilled, focused, and self-motivated
              enthusiasts passionate about outcomes, competencies, and
              partnerships. <br /> We are located in Belgrade, Serbia, however,
              we are driven by international projects and collaborations. <br />{" "}
              We put priority on quality solutions in process engineering while
              maintaining the highest level of integrity, agility, and
              accountaility.
            </p>
            <a href="/about-us/who-are-we">Read more</a>
          </div>

          <div>
            <img src={bigLogo} alt="Big Logo" />
          </div>
        </div>
      </div>

      <div className="storyline container-main padding30">
        <h2 className="title">OUR STORYLINE</h2>

        <p>
          Our story began in 2010. and since then we have been providing
          services to international and local leaders.{" "}
        </p>

        <div>
          <div>
            <div className="logos">
              <img src={dubleLogo} alt="Midle Logo" />
            </div>

            <span>2010</span>
            <p>
              Our first projects were local, but our vision was the same - to
              improve the quality of life for everyone.
            </p>
          </div>
          <div>
            <div className="logos">
              <img src={dubleLogo} alt="Midle Logo" />
            </div>
            <span>2013</span>
            <p>
              We are participating in our first non-local projects and gaining
              perspective from working in big, complex teams.{" "}
            </p>
          </div>
          <div>
            <div className="logos">
              <img src={dubleLogo} alt="Midle Logo" />
            </div>
            <span>2015</span>
            <p>
              Our mission and vision are starting to come true - we are working
              on projects in the German market...
            </p>
          </div>
          <div>
            <div className="logos">
              <img src={dubleLogo} alt="Midle Logo" />
            </div>
            <span>2016</span>
            <p>
              ...and continuing our growth and development towards additional
              big projects.{" "}
            </p>
          </div>
          <div>
            <div className="logos">
              <img src={dubleLogo} alt="Midle Logo" />
            </div>
            <span>2020</span>
            <p>
              During the pandemic, we focused more on projects in the
              pharmaceutical sector to achieve and sustain health globally.
            </p>
          </div>
          <div>
            <div className="logos">
              <img src={dubleLogo} alt="Midle Logo" />
            </div>
            <span>2023</span>
            <p>
              We continue to learn, develop and innovate in order to bring more
              value to the coming generations.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="video">
        <p>We have at least one thing in common...</p>
        <center>
          <video preload="none" poster={Poster} controls>
            <source src={Video} type="video/mp4" />
          </video>
        </center>
      </div>

      <div className="areas padding30 container-main">
        <div className="areas-text">
          <h2 className="title">OUR BUSINESS AREAS</h2>

          <center>
            <p>
              Helmchron is non-exclusively working in the following business
              segments:
            </p>
          </center>
        </div>
        <div className="areas-icon">
          <div>
            <a href="/chemicals">
              <LazyLoadImage src={Chemicals} alt="Chemicals" />
            </a>
            <center>
              <p>Read more</p>
            </center>
          </div>
          <div>
            <a href="/pharma">
              <LazyLoadImage src={Pharma} alt="Pharma" />
            </a>
            <center>
              <p>Read more</p>
            </center>
          </div>
          <div>
            <a href="/environment">
              <LazyLoadImage src={Environment} alt="Environment" />
            </a>
            <center>
              <p>Read more</p>
            </center>
          </div>
        </div>
      </div>

      <div className="testimonials container-main">
        <div className="slider-testi padding30">
          <h2 className="title">WE VALUE OUR PARTNERS' FEEDBACK</h2>
          <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop"
            ]}
          >
            <div className="testi-item">
              <img src={quotation} alt="quotation" />

              <div>
                <p>
                  Helmchron team demonstrated extensive expertise and all-time
                  availability that enabled solving the most challenging tasks
                  efficiently and successfully. {" "}
                </p>
                <p>
                  They managed well with an increased workload and adjusted
                  timeline. Their comprehensive experience, reliability, and
                  systematic approach resulted in great quality of delivered
                  work and our overall collaboration.{" "}
                </p>
              </div>
            </div>
            <div className="testi-item">
              <img src={quotation} alt="quotation" />

              <div>
                <p>
                  Due to their deep engineering expertise and experience,
                  Helmchron team was able to understand the project`s tasks
                  quickly and deliver results on time and within budget.{" "}
                </p>
                <p>
                  The team showed high motivation and an enthusiastic approach
                  to all the challenges and has overcome these with outstanding
                  initiative. They work precisely and with care for outcomes and
                  the rest of the team. These qualities enabled successful
                  delivery and our satisfaction.{" "}
                </p>
              </div>
            </div>
            <div className="testi-item">
              <img src={quotation} alt="quotation" />
              <div>
                <p>
                  Due to the wide scope of their expertise and interest, the
                  project`s outcomes were accomplished independently, precisely,
                  and concisely with great dedication and enthusiasm. We have
                  come to know Helmchron team as open-minded, pleasant to work
                  with, and strongly motivated.{" "}
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
