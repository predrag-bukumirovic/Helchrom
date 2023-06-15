import React, { useEffect } from "react";
import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";
import Chemicals from "../assets/images/Home/Chemicals.png";
import Chemicals1 from "../assets/images/Home/ChemicalsWhite.png";
import Environment from "../assets/images/Home/Environment.png";
import Environment1 from "../assets/images/Home/EnvironmentWhite.png";
import Pharma from "../assets/images/Home/Pharma.png";
import Pharma1 from "../assets/images/Home/PharmaWhite.png";
import Video from "../assets/videos/Ver4WhoweareHCvideo.mp4";
import Poster from "../assets/images/poster.jpg";
import mainImg from "../assets/images/Home/main-img.jpg";
import mainImg1 from "../assets/images/Home/main-img1.jpg";
import mainImg2 from "../assets/images/Home/main-img2.png";
import HC2010 from "../assets/images/Home/HC-orange2010.png";
import HC2013 from "../assets/images/Home/HC-orange2013.png";
import HC2015 from "../assets/images/Home/HC-orange2015.png";
import HC2016 from "../assets/images/Home/HC-orange2016.png";
import HC2020 from "../assets/images/Home/HC-orange2020.png";
import HC2023 from "../assets/images/Home/HC-orange2023.png";

import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";
import icon5 from "../assets/images/Home/5.png";

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

import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
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

      <div className="welcome container-main padding30">
        <h1>
          <p data-aos="fade-up" data-aos-duration="500">
            W
          </p>
          <p data-aos="fade-down" data-aos-duration="800">
            E
          </p>
          <p data-aos="fade-up" data-aos-duration="1100">
            L
          </p>
          <p data-aos="fade-down" data-aos-duration="1400">
            C
          </p>
          <p data-aos="fade-up" data-aos-duration="1700">
            O
          </p>
          <p data-aos="fade-down" data-aos-duration="2000">
            M
          </p>
          <p data-aos="fade-up" data-aos-duration="2300">
            E
          </p>{" "}
          to Helmchron official website.
        </h1>
        <p>
          Helmchron is a family-owned company that provides process and chemical
          engineering solutions to worldwide leaders in the chemical and
          pharmaceutical industry since 2010. <br /> Our mission has remained
          the same since the beginning - to improve the quality of life for
          everyone everywhere whilst keeping our environment healthy for the
          coming generations. <br /> Today, our scope is broader and our team
          more diverse providing unique perspectives, agility, and efficacy. Our
          process and chemical engineering solutions are now delivered to
          partners across different industries with focus on global impact,
          sustainable outcomes, and partners` satisfaction.
        </p>

        <a href="/about-us/our-vision-and-mission">Read More</a>
      </div>

      <div className="our-home container-main padding30">
        <h2 className="title">OUR SERVICES</h2>
        <p>
          We provide best-in-class process and chemical engineering solutions to
          clients worldwide.
        </p>

        <div>
          <div>
            <img src={icon1} alt="icon1" />
            <p>
              <b>Plant construction</b>
            </p>
            <p>
              We deliver plant, equipment, and process design solutions,
              including plant engineering, process simulation, and upgrade.
            </p>
          </div>
          <div>
            <img src={icon5} alt="icon1" className="icon-water" />
            <p>
              <b>Water treatment</b>
            </p>
            <p>
              Purification, treatment for specialized industrial applications,
              and treatment of wastewater.
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
              We develop innovative technical concepts, products, and services
              anticipating our partners` needs.
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
        </div>
      </div>

      <div className="storyline container-main padding30">
        <h2 className="title">OUR STORYLINE</h2>

        <p>
          Our story began in 2010. and since then we have been providing
          services to international and local leaders.{" "}
        </p>

        <div>
          <div className="row-logos no-reverse">
            <div data-aos="fade-right" className="logos">
              <img src={HC2010} alt="Midle Logo" />
            </div>

            <p data-aos="fade-left">
              Our first projects were local, but our vision was the same - to
              improve the quality of life for everyone.
            </p>
          </div>
          <div className="row-logos reverse">
            <div data-aos="fade-left" className="logos">
              <img src={HC2013} alt="Midle Logo" />
            </div>

            <p data-aos="fade-right">
              We are participating in our first non-local projects and gaining
              perspective from working in big, complex teams.{" "}
            </p>
          </div>
          <div className="row-logos no-reverse">
            <div data-aos="fade-right" className="logos">
              <img src={HC2015} alt="Midle Logo" />
            </div>

            <p data-aos="fade-left">
              Our mission and vision are starting to come true - we are working
              on projects in the German market...
            </p>
          </div>
          <div className="row-logos reverse">
            <div data-aos="fade-left" className="logos">
              <img src={HC2016} alt="Midle Logo" />
            </div>

            <p data-aos="fade-right">
              ...and continuing our growth and development towards additional
              big projects.{" "}
            </p>
          </div>
          <div className="row-logos no-reverse">
            <div data-aos="fade-right" className="logos">
              <img src={HC2020} alt="Midle Logo" />
            </div>

            <p data-aos="fade-left">
              During the pandemic, we focused more on projects in the
              pharmaceutical sector to achieve and sustain health globally.
            </p>
          </div>
          <div className="row-logos reverse">
            <div data-aos="fade-left" className="logos">
              <img src={HC2023} alt="Midle Logo" />
            </div>

            <p data-aos="fade-right">
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
            <div className="row-icon">
              <a href="/chemicals">
                <div className="icon1">
                  <LazyLoadImage src={Chemicals} alt="Chemicals" />
                </div>

                <LazyLoadImage src={Chemicals1} alt="Chemicals" />
              </a>
            </div>

            <center>
              <a href="/chemicals">Read more</a>
            </center>
          </div>
          <div>
            <div className="row-icon">
              <a href="/pharma">
                <div className="icon1">
                  <LazyLoadImage src={Pharma} alt="Pharma" />
                </div>
                <LazyLoadImage src={Pharma1} alt="Pharma" />
              </a>
            </div>

            <center>
              <a href="/pharma">Read more</a>
            </center>
          </div>
          <div>
            <div className="row-icon">
              <a href="/environment">
                <div className="icon1">
                  <LazyLoadImage src={Environment} alt="Environment" />
                </div>
                <LazyLoadImage src={Environment1} alt="Environment" />
              </a>
            </div>

            <center>
              <a href="/environment">Read more</a>
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
