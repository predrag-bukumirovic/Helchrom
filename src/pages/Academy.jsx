import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";

import mainImg from "../assets/images/Academy/baner1.png";
import mainImg1 from "../assets/images/Academy/baner2.png";
import mainImg2 from "../assets/images/Academy/baner3.png";

import verticalImg from "../assets/images/Academy/vertikalno.png";

import "../assets/scss/innoLab.scss";
import "../assets/scss/electronics.scss";
import "../assets/scss/home.scss";

export default function Academy() {
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
            Helmchron{" "}
            <span style={{ fontFamily: "DancingScript" }}>Academy</span>
          </h1>
          <p data-aos="fade-up">
            Helmchron Academy is an initiative aimed at educating and developing
            the team by sharing specific knowledge from complex and advanced
            projects. By focusing on practical experiences, Helmchron Academy
            ensures continuous development and skill enhancement for our team
            members. We believe that ongoing team development is crucial for
            maintaining excellence and driving innovation within our
            organization. Through Helmchron Academy, we are committed to
            nurturing talent and equipping our team with the knowledge and
            expertise needed to excel in their roles and our service.
          </p>
        </center>

        <div className="row academy-row">
          <div data-aos="fade-right">
            <span>
              <b>Unified Expertise</b>
            </span>

            <p style={{ margin: "20px 0" }}>
              Our training programs are designed to ensure that all team
              members, across all levels of the organization, continuously
              develop their expertise and skills. This is achieved through
              comprehensive coaching and mentoring by external coaches and
              experienced team members who are passionate about sharing their
              practical knowledge.
            </p>

            <span>
              <b>Tailored Training and Development</b>
            </span>

            <p style={{ margin: "20px 0" }}>
              The specialized nature of our work means that finding ready-made
              experts in the job market can be challenging. Therefore, we focus
              on training and coaching our team members in specific engineering
              knowledge and professional skills.
            </p>

            <span>
              <b>Specialized Knowledge and Skills</b>
            </span>
            <p style={{ margin: "20px 0" }}>
              Each project we undertake often demands a deep understanding of
              both local and international regulations and standards. Our
              industry-specific know-how, acquired through years of hands-on
              experience across various sectors, is critical to our success.
            </p>
          </div>

          <img data-aos="fade-zoom" src={verticalImg} alt="Inolab 2" />

          <div data-aos="fade-left">
            <span>
              <b>Collaborative Learning Environment</b>
            </span>

            <p style={{ margin: "20px 0" }}>
              An outstanding feature of Helmchron Academy is the systematic
              sharing of lessons learned from each project across all teams.
              This approach prevents repetitive learning and enhances our
              efficiency and effectiveness with every new project.
            </p>

            <span>
              <b>Ongoing Development</b>
            </span>

            <p style={{ margin: "20px 0" }}>
              Operating throughout the year, Helmchron Academy offers
              industry-specific training programs tailored to all levels of
              seniority, ensuring that every team member continuously enhances
              their expertise and skills.
            </p>
            <p className="get-team">Get to know our team and our way of work</p>

            <a
              style={{ background: "var(--dark-blue-color)" }}
              className="book-btn"
              href="/our-team"
            >
              Read more
            </a>
          </div>
        </div>

        <center data-aos="fade-up">
          <p>
            We believe that transparency, clear guidance, and the continuous
            sharing of knowledge and experiences are essential to maintaining a
            high level of expertise throughout our organization. This commitment
            enables us to consistently deliver best-in-class plant design
            engineering solutions for our clients across all sectors. By
            prioritizing professional development, Helmchron Academy ensures
            that our team remains at the forefront of industry advancements,
            translating into superior service and expected project outcomes for
            our clients.
          </p>
        </center>

        <h2 style={{ fontSize: 25, marginTop: 50 }} className="title">
          What is Helmchron Academy about? VIDEO
        </h2>

        {/* Video */}

        <center>
          <iframe
            className="video-yt"
            loading="lazy"
            src="https://www.youtube.com/embed/KjxWR92Yb4o"
            title="Helmchron - Chemistry Connects Us"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </center>

        <center>
          <p style={{ marginTop: 50 }}>Explore Helmchron InnoLAB</p>
          <br />
          <a
            style={{ background: "var(--dark-blue-color)" }}
            className="book-btn"
            href="/initiatives/innolab"
          >
            Read more
          </a>
        </center>
      </div>
    </div>
  );
}
