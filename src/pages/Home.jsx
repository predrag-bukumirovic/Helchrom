import React, { useEffect } from "react";
import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";
import Chemicals from "../assets/images/Home/Chemicals.png";
import Chemicals1 from "../assets/images/Home/ChemicalsWhite.png";
import Environment from "../assets/images/Home/Environment.png";
import Environment1 from "../assets/images/Home/EnvironmentWhite.png";
import Pharma from "../assets/images/Home/Pharma.png";
import Pharma1 from "../assets/images/Home/PharmaWhite.png";
import mainImg from "../assets/images/Home/main-img1.jpeg";
import mainImg1 from "../assets/images/Home/main-img2.jpeg";
import mainImg2 from "../assets/images/Home/main-img3.jpeg";
import Dusseldorf from "../assets/images/News/Dusseldorf.webp";

import Facts from "../assets/images/Home/Facts.png";
import HCOne from "../assets/images/HCOne.png";

import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";
import icon5 from "../assets/images/Home/5.png";

import quotation from "../assets/images/quotation.png";

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
            </CCarouselCaption>
          </a>
        </CCarouselItem>
        <CCarouselItem>
          <a href="/competences&services/our-services">
            <CImage className="d-block w-100" src={mainImg1} alt="slide 2" />
            <CCarouselCaption className="img">
              <div>
                <p>Our Services: Process Engineering</p>
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
            </div>
          </a>
        </div>
        <div>
          <a href="/competences&services/our-services">
            <img src={mainImg1} alt="Main" />
            <div className="img-text">
              <div>
                <p>Our Services: Process Engineering</p>
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
          <b>to Helmchron official website.</b>
        </h1>
        <p>
          Helmchron is a family-owned company dedicated to providing comprehensive and full-service engineering solutions for the manufacturing facilities of pharmaceuticals, chemicals, food and bio products, electronics, energy, and oil and gas. We take pride in contributing to the manufacturing of globally available, safe, and high-quality products since 2010.<br /> Our mission has remained the same since our beginnings - we improve the quality of life for everyone everywhere whilst keeping our environment healthy for the coming generations. <br /> Today, our scope is broader and our team more diverse providing unique perspectives, agility, and efficacy.<br /> Our engineering solutions are now delivered to leaders and innovators across different industries with a focus on global impact, sustainable outcomes, and long-lasting partnerships.
          
        </p>

        <a href="/about-us/our-vision-and-mission">Read More</a>
      </div>

      <div className="our-home container-main padding30">
        <h2 className="title">OUR SERVICES</h2>
        <p style={{textAlign: 'start'}}>
          We provide end-to-end engineering services for manufacturing facility design and operations management.
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

        <a className="book-btn" href="/contact">Book a meeting</a>
      </div>

      <div className="unique">
        <div className="container-main padding30">
          <h2>Unique service concept</h2>
          <h3>HELMCHR<span>ONe</span></h3>

          <div className="unique-row">
            <div className="text">
              <p>In a constant pursuit to upgrade our services and expertise, we noticed a significant gap in focus on one project`s outcomes that led to prolonged delivery time and budget overrun.</p>
              <p>To overcome this gap and meet the unique requirements of each of our clients, we have implemented an innovative service concept - Helmchron ONE.</p>
              <p>Helmchron ONE enables the complete focus of ONE team on ONE client and ONE project only.</p>
              <p><b>One Team:</b> Each of our projects is assigned to one of our teams. The team is fully dedicated and accountable for the outcomes, ensuring that every aspect is meticulously considered and executed.</p>
              <p>
                <b>One Client:</b> We believe in forging strong, long-lasting partnerships, and that starts with putting the client first - each team delivers to one client only. 
              </p>

              <p><b>One Project:</b> By channeling our expertise, resources, and creativity into delivering the best results for one project, we ensure unmatched quality, efficiency, and effectiveness.</p>

              <p>Ready to focus on success and experience Helmchron ONE?</p>
            </div>
            <div className="img">
              <img src={HCOne} alt="HC One" />
            </div>
          </div>
        </div>
      </div>

      <div className="facts-box">
        <div className="facts container-main padding30">
          <h2>FACTS ABOUT US</h2>
          <div className="facts-row"> 
            <div>
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
              <img src={Facts} alt="FACTS ABOUT US" />
            </div>
          </div>
        </div>
      </div>

      <div className="storyline container-main padding30">
        <h2 className="title">OUR STORYLINE</h2>

        <p style={{textAlign: 'center', fontSize: 20}}>
          Our story began in 2010. and since then we have been providing
          services to international and local leaders.{" "}
        </p>

        <section className="storyline-box">
          <div className="box box1">
            <div className="text text1-1">
              <p>We deliver plant, equipment, and process design solutions, including plant engineering, process simulation, and upgrade</p>
            </div>
            <div className="img-date img1-1">
              <img src={Dusseldorf} alt="" />
              <span>2001</span>
            </div>
            <div className="text text1-2">
              <p>We deliver plant, equipment, and process design solutions, including plant engineering, process simulation, and upgrade</p>
            </div>
            <div className="img-date img1-2">
              <img src={Dusseldorf} alt="" />
              <span>2003</span>
            </div>
            <div className="text text1-3">
              <p>We deliver plant, equipment, and process design solutions, including plant engineering, process simulation, and upgrade</p>
            </div>
            <div className="img-date img1-3">
            <img src={Dusseldorf} alt="" />
              <span>2003</span>
            </div>
          </div>
          <div className="story-line">
            <div className="item-round-line">
              <div className="round-line">
                <div className="line"></div>
                <div className="round"></div>
                <div className="line"></div>
              </div>
              <div className="round-line">
                <div className="line"></div>
                <div className="round"></div>
                <div className="line"></div>
              </div>

              <div className="round-line">
                <div className="line"></div>
                <div className="round"></div>
                <div className="line"></div>
              </div>

              <div className="round-line">
                <div className="line"></div>
                <div className="round"></div>
                <div className="line"></div>
              </div>

              <div className="round-line">
                <div className="line"></div>
                <div className="round"></div>
                <div className="line"></div>
              </div>

              <div className="round-line">
                <div className="line"></div>
                <div className="round"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
            <div className="box box2" style={{alignItems: 'start'}}>
              <div className="img-date img2-1">
                <span>2003</span>
                <img src={Dusseldorf} alt="" />
              </div>
              <div className="text text2-1">
                <p>We deliver plant, equipment, and process design solutions, including plant engineering, process simulation, and upgrade</p>
              </div>

              <div className="img-date img2-2">
                <span>2003</span>
                <img src={Dusseldorf} alt="" />
              </div>
              <div className="text text2-2">
                <p>We deliver plant, equipment, and process design solutions, including plant engineering, process simulation, and upgrade</p>
              </div>

              <div className="img-date img2-3">
                <span>2003</span>
                <img src={Dusseldorf} alt="" />
              </div>
              <div className="text text2-3">
                <p>We deliver plant, equipment, and process design solutions, including plant engineering, process simulation, and upgrade</p>
              </div>
          </div>
        </section>
      </div>

      <div className="video">
        <p>We have at least one thing in common...</p>
        <center>
          <iframe height='300' width='600' src="https://www.youtube.com/embed/KjxWR92Yb4o" title="Helmchron - Chemistry Connects Us" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
