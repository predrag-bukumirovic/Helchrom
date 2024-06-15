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
        <h1 className="title" data-aos="fade-up">
          {t("team.title")}
        </h1>

        <center>
          <p data-aos="fade-up">
            {t("team.sub_text")}
          </p>
        </center>

        <div className="text-members padding30">
          <div className="member">
            <div className="bg-member-img" />
            <div className="team-row">
              <div className="img-team" data-aos="zoom-in">
                <img src={milos} alt="" />
              </div>
              <div data-aos="fade-left">
                <h5 className="name-team">
                  {" "}{t("team.team1.name")}
                </h5>
                <h6 className="position-team">
                  {t("team.team1.position")}
                </h6>
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
                  {t("team.team1.text")}
                </p>
              </div>
            </div>
          </div>
          <div className="member">
            <div className="bg-member-img" />
            <div className="team-row">
              <div className="img-team" data-aos="zoom-in">
                <img src={anja} alt="" />
              </div>
              <div data-aos="fade-left">
                <h5 className="name-team">
                  {t("team.team2.name")}
                </h5>
                <h6 className="position-team">
                  {t("team.team2.position")}
                </h6>
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
                  {t("team.team2.text")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="talk-video" style={{ marginTop: 100 }}>
          <h2 className="title" data-aos="fade-up">
            {t("team.talk.title")}
          </h2>
          <h3
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: t("team.talk.sub") }}
          />

          <center>
            <iframe
              data-aos="fade-up"
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
          <h1 className="title" data-aos="fade-up">
            {t("team.values_icon.title")}
          </h1>
          <center>
            <p data-aos="fade-up">
              {t("team.values_icon.sub_text")}
            </p>
          </center>

          <div className="icon-values">
            <div data-aos="zoom-in">
              <img src={icon1} alt="icon1" />
              <p>
                <b>
                  {t("team.values_icon.icon1.title")}
                </b>
              </p>
              <p>
                {t("team.values_icon.icon1.text")}
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon2} alt="icon2" />
              <p>
                <b>
                  {t("team.values_icon.icon2.title")}
                </b>
              </p>
              <p>
                {t("team.values_icon.icon2.text")}
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon4} alt="icon4" />
              <p>
                <b>
                  {t("team.values_icon.icon3.title")}
                </b>
              </p>
              <p>
                {t("team.values_icon.icon3.text")}
              </p>
            </div>
            <div
              data-aos="zoom-in"
              style={{ background: "var(--light-orange-color)" }}
            >
              <img src={icon3} alt="icon3" />
              <p>
                <b>
                  {t("team.values_icon.icon4.title")}
                </b>
              </p>
              <p>
                {t("team.values_icon.icon4.text")}
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src={icon5} alt="icon5" />
              <p>
                <b>
                  {t("team.values_icon.icon5.title")}
                </b>
              </p>
              <p>
                {t("team.values_icon.icon5.text")}.
              </p>
            </div>
          </div>
        </div>

        <center>
          <p>
            {t("team.text_bottom")}
          </p>

          <a className="book-btn" href="/career">
            {t("team.btn_career")}
          </a>
        </center>

        <div className="transparency">
          <h2 className="title" data-aos="fade-up">
            {t("team.transparency.title")}
          </h2>

          <center>
            <p data-aos="fade-up">
              {t("team.transparency.sub_text")}
            </p>
          </center>

          <div className="transparency-img">
            <div data-aos="zoom-in">
              <a
                href="../Anti-CorruptionPolicy.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Anti} alt="" />
              </a>
              <div>
                <a
                  style={{ background: "var(--dark-blue-color)" }}
                  className="book-btn"
                  href="../Anti-CorruptionPolicy.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("team.transparency.btn_blue")}
                </a>
              </div>
            </div>
            <div data-aos="zoom-in">
              <a
                href="../Anti-CorruptionPolicy.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Code} alt="" />
              </a>
              <div>
                <a
                  className="book-btn"
                  href="../Codeofconductprez.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("team.transparency.btn_orange")}
                </a>
              </div>
            </div>
            <div data-aos="zoom-in">
              <a
                href="../CommunicationPolicy.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Communication} alt="" />
              </a>
              <div>
                <a
                  style={{ background: "var(--green-color)" }}
                  className="book-btn"
                  href="../CommunicationPolicy.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("team.transparency.btn_green")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
