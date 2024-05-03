import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/our-team.scss";
import "../assets/scss/home.scss";
import mainImg from "../assets/images/Team/team1.webp";
import mainImg1 from "../assets/images/Team/team2.webp";
import mainImg2 from "../assets/images/Team/team3.webp";
import linkedine from "../assets/images/linkedine.webp";
import milos from "../assets/images/Team/Milos.png";
import anja from "../assets/images/Team/Anja.png";

import Anti from "../assets/images/Team/Anti.png";
import Code from "../assets/images/Team/Code.png";
import Communication from "../assets/images/Team/Communication.png";

import icon1 from "../assets/images/Team/Integrity.png";
import icon2 from "../assets/images/Team/Commitment.png";
import icon4 from "../assets/images/Team/Agility.png";
import icon3 from "../assets/images/Team/Diversity.png";
import icon5 from "../assets/images/Team/Courage.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function OurTeam() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Out Team | Helmchron</title>
      </Helmet>
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
        <h1 className="title">
          {t("title_team")}
        </h1>

        <center>
          <p>
            We are a unified team of professionals coming from diverse
            educational backgrounds and experiences, all deeply committed to our
            shared vision and passionate about what we do. Embracing diversity
            as a core value, we recognize and celebrate the richness of our
            backgrounds, knowledge, and experiences that collectively drive our
            results.
          </p>
        </center>

        <div className="text-members padding30">
          <div className="member">
            <div className="bg-member-img" />
            <div className="team-row">
              <div className="img-team">
                <img src={milos} alt="" />
              </div>
              <div>
                <h5 className="name-team">Milos Ivosevic, Ph.D.</h5>
                <h6 className="position-team">CEO, Mechanical Engineer</h6>
                <div className="member-links">
                  <a
                    href="https://www.linkedin.com/in/dr-milos-ivosevic-300263166/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}<img src={linkedine} alt="linkedine" />
                  </a>
                </div>
                <p>
                  Milos Ivosevic is the founder of the company and creator of
                  the vision. Enthusiastic and entrepreneurial, Milos was always
                  focused on extensive international projects that contribute to
                  improving the quality of life for the coming generations. The
                  turning point of his university period was the experience he
                  gained at the well-known Paul Scherrer Institut (PSI) in
                  Switzerland. While studying, he was, also, hands-on and
                  involved in multiple engineering projects in Serbia and
                  Croatia. During the last 10 years, Milos worked as part of
                  various multinational teams and did projects for the leading
                  chemical and pharmaceutical innovators (BASF, Novartis, Roche,
                  etc.). He did his Master's and PhD thesis at the University of
                  Belgrade, Faculty of Mechanical Engineering. In his leisure
                  time, he enjoys traveling and discovering new cultures,
                  sports, and relaxing by the river.
                </p>
              </div>
            </div>
          </div>
          <div className="member">
            <div className="bg-member-img" />
            <div className="team-row">
              <div className="img-team">
                <img src={anja} alt="" />
              </div>
              <div>
                <h5 className="name-team">Anja Andjelkovic, M.Sc.</h5>
                <h6 className="position-team">CTO, Mechanical Engineer</h6>
                <div className="member-links">
                  <a
                    href="https://www.linkedin.com/in/anja-andjelkovic-866b30182"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedine} alt="linkedine" />
                  </a>
                </div>
                <p>
                  Anja Andjelkovic joined the team in 2020. bringing additional
                  focus to our operations and expansion. Her comprehensive skill
                  set, knowledge, and motivation have brought a new perspective
                  and strengthened the outcomes we deliver to our partners. As a
                  CTO, Anja is responsible for projects` leadership, seamless
                  and agile project execution and coaching our team of projects
                  associates and engineering experts. She holds a Masters degree
                  in Mechanical Engineering from the University of Belgrade.
                  Anja used to play volleyball professionally and her discipline
                  and result orientation are considered to be the qualities that
                  greatly enrich our team. In her spare time, Anja likes to do
                  sports and travel with her family.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="talk-video" style={{ marginTop: 100 }}>
          <h2 className="title">WHAT DO YOU VALUE THE MOST?</h2>
          <h3>
            Helmchron <span>TeamTalk</span>
          </h3>

          <center>
            <iframe
              className="video-yt"
              loading="lazy"
              style={{ marginTop: 50 }}
              src="https://www.youtube.com/embed/hqtV0RveMQQ"
              title="Helmchron TeamTalk - Our Values"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </center>
        </div>

        <div className="our-home padding30">
          <h1 className="title">Our values</h1>
          <center>
            <p>
              Our core values serve as the foundation of everything we do,
              inspiring us to strive for operational excellence and innovation
              in all our projects. Our values enable cohesive and supportive
              environment shaping the quality of our results and strengthening
              of our partnerships.
            </p>
          </center>

          <div className="icon-values">
            <div>
              <img src={icon1} alt="icon1" />
              <p>
                <b>Integrity</b>
              </p>
              <p>
                We act with integrity and demonstrate ethical behavior in every
                situation.
              </p>
            </div>
            <div>
              <img src={icon2} alt="icon2" />
              <p>
                <b>Commitment</b>
              </p>
              <p>
                We feel the responsibility towards our partners and the promises
                given.
              </p>
            </div>
            <div>
              <img src={icon4} alt="icon4" />
              <p>
                <b>Agility</b>
              </p>
              <p>We act seamlessly and cohesively as one team.</p>
            </div>
            <div style={{ background: "var(--lite-orange-color)" }}>
              <img src={icon3} alt="icon3" />
              <p>
                <b>Diversity</b>
              </p>
              <p>
                We value our differences and act with respect toward one
                another.
              </p>
            </div>
            <div>
              <img src={icon5} alt="icon5" />
              <p>
                <b>Courage</b>
              </p>
              <p>We take initiative and step out of our comfort zone.</p>
            </div>
          </div>
        </div>

        <center>
          <p>
            Do we share the same values? Are you interested in joining our team?
            Visit our career page.
          </p>

          <a className="book-btn" href="/career">
            Career page
          </a>
        </center>

        <div className="transparency">
          <h2 className="title">TRANSPARENCY AND ACCOUNTABILITY</h2>

          <center>
            <p>
              We are dedicated to realizing our vision and exceeding the
              expectations of our clients by adhering to the highest ethical
              standards of conduct and fostering a culture of transparency and
              accountability. Explore our Anti-Bribery and Anti-Corruption
              Policy, Code of Conduct, and Communication Policy to learn how we
              maintain the integrity of our business practices and prioritize
              the satisfaction and trust of our stakeholders.
            </p>
          </center>

          <div className="transparency-img">
            <div>
              <img src={Anti} alt="" />
              <div>
                <a
                  style={{ background: "var(--dark-blue-color)" }}
                  className="book-btn"
                  href="/"
                >
                  Anti-Corruption Policy
                </a>
              </div>
            </div>
            <div>
              <img src={Code} alt="" />
              <div>
                <a className="book-btn" href="/">
                  Code of Conduct
                </a>
              </div>
            </div>
            <div>
              <img src={Communication} alt="" />
              <div>
                <a
                  style={{ background: "var(--green-color)" }}
                  className="book-btn"
                  href="/"
                >
                  Communication Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
