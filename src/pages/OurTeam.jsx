import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/our-team.scss";
import "../assets/scss/home.scss";
import mainImg from "../assets/images/Team/team1.jpg";
import mainImg1 from "../assets/images/Team/team2.jpg";
import mainImg2 from "../assets/images/Team/team3.jpg";
import { AiOutlineMail } from "react-icons/ai";
import linkedine from "../assets/images/linkedine.webp";
import structure from "../assets/images/Team/structureHC.png";
import quote from "../assets/images/Team/quote.png";
import bigLogo from "../assets/images/Team/orangeLogo.png";

import milos from "../assets/images/Team/milos.png";
import anja from "../assets/images/Team/anja.png";

import icon1 from "../assets/images/Team/Interity.png";
import icon2 from "../assets/images/Team/Commitment.png";
import icon4 from "../assets/images/Team/Agility.png";
import icon3 from "../assets/images/Team/Diversity.png";
import icon5 from "../assets/images/Team/Courage.png";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useTranslation } from "react-i18next";

export default function OurTeam() {
  const { t } = useTranslation();
  return (
    <div className="container-main">
      {/* Slider start */}
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
      {/* Slider end */}

      <div className="">
        <h1 className="title">
          {t("title_team")}
        </h1>

        <center>
          <p>
            We are a team of professionals with diverse educational backgrounds
            and experiences passionate about process and chemical engineering.<br />
            Meet our procurators:
          </p>
        </center>

        <div className="text-members padding30">
          <div className="member">
            <div className="member-img">
              <img src={milos} alt="Milos" />
            </div>
            <div>
              <div>
                <p>
                  {t("team1_text1")}
                </p>
                <p>
                  {t("team1_text2")}
                </p>
                <p>
                  {t("team1_text3")}
                </p>
                <p>
                  {t("team1_text4")}
                </p>
                <p>
                  {t("team1_text5")}{" "}
                </p>
              </div>
              <div className="member-links">
                <a href="mailto:milos.ivosevic@helmchron.com">
                  <AiOutlineMail /> milos.ivosevic@helmchron.com
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/milos-ivosevic-300263166/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}<img src={linkedine} alt="linkedine" /> Linkedin
                </a>
              </div>
            </div>
          </div>
          <div className="member">
            <div className="member-img">
              <img src={anja} alt="Anja" />
            </div>
            <div>
              <div>
                <p dangerouslySetInnerHTML={{ __html: t("team2_text1") }} />
                <p dangerouslySetInnerHTML={{ __html: t("team2_text2") }} />
                <p dangerouslySetInnerHTML={{ __html: t("team2_text3") }} />
              </div>
              <div className="member-links">
                <a href="mailto:anja.andjelkovic@helmchron.com">
                  <AiOutlineMail /> anja.andjelkovic@helmchron.com
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/anja-andjelkovic-866b30182"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedine} alt="linkedine" /> Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="structure">
          <img src={structure} alt="structure" />
        </div>

        <div className="quote padding30">
          <img src={bigLogo} alt="bigLogo" />
          <img src={quote} alt="quote" />
        </div>

        <div className="our-home padding30">
          <h1 className="title">Our values</h1>
          <p>
            We provide best-in-class process and chemical engineering solutions
            to clients worldwide.
          </p>

          <div>
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
            <div>
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
            If you share our values and wish to join our team, please share your
            CV with us:
            <a href="mailto:office@helmchron.com">office@helmchron.com</a>
          </p>
        </center>
      </div>
    </div>
  );
}
