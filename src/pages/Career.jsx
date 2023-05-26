import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import mainImg from "../assets/images/Career/Baner1.webp";
import mainImg1 from "../assets/images/Career/Baner2.webp";
import mainImg2 from "../assets/images/Career/Baner3.webp";
import icon1 from "../assets/images/Career/5.png";
import icon2 from "../assets/images/Career/6.png";
import iconLinkedine from "../assets/images/linkedine.webp";
import "../assets/scss/slider.scss";
import "../assets/scss/career.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

export default function Career() {
  return (
    <div>
      <Helmet>
        <title>Career | Helmchron</title>
        <meta
          name="description"
          content="Join the Helmchron team and explore career opportunities in process and thermotechnics engineering. Contact us to share your CV and learn more about working with us."
        />
      </Helmet>
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
            <img src={mainImg} alt="Helmchron Career - Slide 1" />
          </div>
          <div>
            <img src={mainImg1} alt="Helmchron Career - Slide 2" />
          </div>
          <div>
            <img src={mainImg2} alt="Helmchron Career - Slide 3" />
          </div>
        </div>
        {/* Slider end */}

        <div>
          <h1 className="title">Join the helmchron team</h1>
          <center>
            <p>
              We work hard and are dedicated with a strong team focus but with
              respect and enablement towards diverse personal perspectives.
              Feeling well within the team and feeling safe to express your
              opinion is the way we work.
            </p>
            <p>
              And we are always looking for Process and Thermotechnics Engineers
              with an entrepreneurial mindset to join our team and inspire us to
              aim even higher and reach more distant outcomes.{" "}
            </p>
            <p>
              We value potential as much as the experience and empower
              perspectives from both, young team members and experienced ones.{" "}
            </p>
          </center>
        </div>
      </div>
      <div className="career-logo-box">
        <div className="career-text">
          <h2>In case:</h2>
          <ul>
            <li>you hold Process or Thermotechnics Engineer Degree,</li>
            <li>you are located in Belgrade and</li>
            <li>you share our values and vision</li>
          </ul>
          <p>Please share your CV with us.</p>
          <p>We would love to hear from you and get to know you.</p>
          <p style={{ marginBottom: 0 }}>Contact mail: office@helmchron.com</p>
          <p>Contact telephone number: +381642938533</p>
        </div>
      </div>

      <div className="box-career container-main padding30">
        <h2>CONNECT WITH OUR TEAM</h2>

        <div className="connect-team">
          <div>
            <img
              src={icon1}
              alt="Miloš Ivošević, PhD - CEO, Mechanical engineer"
            />
            <div>
              <span>Miloš Ivošević, PhD</span>
              <p>CEO, Mechanical engineer</p>
              <a
                href="https://www.linkedin.com/in/milos-ivosevic-300263166/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconLinkedine} alt="Icon linkedin" />{" "}
              </a>
            </div>
          </div>
          <div>
            <img
              src={icon2}
              alt="Anja Anđelković, MSc - Projects Lead, Mechanical engineer"
            />
            <div>
              <span>Anja Anđelković, MSc</span>
              <p>Projects Lead, Mechanical engineer</p>
              <a
                href="https://www.linkedin.com/in/anja-andjelkovic-866b30182"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconLinkedine} alt="LinkedIn icon" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" box-career">
        <h2 style={{ marginBottom: 80 }}>
          FIND OUT MORE ABOUT WORKING IN OUR TEAM
        </h2>

        <center>
          <iframe
            width="800"
            height="500"
            loading="lazy"
            src="https://www.youtube.com/embed/kL0TWeEXIzk"
            title="Helmchron - Working in our team"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </center>
      </div>
    </div>
  );
}
