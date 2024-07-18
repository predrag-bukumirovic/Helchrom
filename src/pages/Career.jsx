import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React, { useState } from "react";
import mainImg from "../assets/images/Career/Slika1.jpg";
import mainImg1 from "../assets/images/Career/Slika2.jpg";
import mainImg2 from "../assets/images/Career/Slika3.jpg";
import icon1 from "../assets/images/Career/Milos.png";
import icon2 from "../assets/images/Career/Anja.png";
import iconLinkedine from "../assets/images/linkedine.webp";
import accorImg from "../assets/images/Career/Careerpage.png";
import "../assets/scss/slider.scss";
import "../assets/scss/accordion.css";
import "../assets/scss/career.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";
import { IoIosArrowDropup } from "react-icons/io";
import { useTranslation } from "react-i18next";
import TextReader from "../components/TextRender";

export default function Career(i) {
  const [accordion, setAccordion] = useState([0, 3]);
  const { t } = useTranslation();

  const toggle = index => {
    if (accordion.includes(index)) {
      setAccordion(accordion.filter(item => item !== index));
    } else {
      setAccordion([index]);
    }
  };

  const headerText = [t("career.title"), t("career.sub_text")];
  const careerText = [
    t("career.opportunities.title"),
    t("career.opportunities.sub_text"),
    t("career.opportunities.accordion.title1"),
    t("career.opportunities.accordion.text1"),
    t("career.opportunities.accordion.title2"),
    t("career.opportunities.accordion.text2")
  ];
  const faqs = [
    t("career.faqs.title"),
    t("career.faqs.sub_text"),
    t("career.faqs.accor.title1"),
    t("career.faqs.accor.text1"),
    t("career.faqs.accor.title2"),
    t("career.faqs.accor.text2"),
    t("career.faqs.accor.title3"),
    t("career.faqs.accor.text3"),
    t("career.faqs.accor.title4"),
    t("career.faqs.accor.text4"),
    t("career.faqs.accor.title5"),
    t("career.faqs.accor.text5"),
    t("career.faqs.accor.title6"),
    t("career.faqs.accor.text6")
  ];

  return (
    <div>
      <Helmet>
        <title>Career | Helmchron</title>
        <meta
          name="description"
          content="Join the Helmchron team and explore career opportunities in process and thermotechnics engineering. Contact us to share your CV and learn more about working with us."
        />
      </Helmet>
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
              <img src={mainImg} alt="Helmchron Career - Slide 1" />
            </div>
            <div>
              <img src={mainImg1} alt="Helmchron Career - Slide 2" />
            </div>
            <div>
              <img src={mainImg2} alt="Helmchron Career - Slide 3" />
            </div>
          </div>
        </div>
        {/* Slider end */}

        <div className="container-main padding30">
          <h1 className="title">
            {t("career.title")}
            <TextReader texts={headerText} />
          </h1>
          <p
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{ __html: t("career.sub_text") }}
          />
        </div>
      </div>

      <div
        style={{ margin: "100px auto" }}
        className="container-main padding30"
      >
        <h2 className="title">
          {t("career.opportunities.title")}
          <TextReader texts={careerText} />
        </h2>

        <p
          className="text-width"
          dangerouslySetInnerHTML={{
            __html: t("career.opportunities.sub_text")
          }}
        />

        <div className="accordion-row">
          <div className="accordion">
            <div
              style={{ background: "var(--light-orange-color)" }}
              className="item"
            >
              <div className="item-title" onClick={() => toggle(0)}>
                <span>
                  {t("career.opportunities.accordion.title1")}
                </span>
                <span>
                  <IoIosArrowDropup
                    className={accordion.includes(0) ? "arrow" : ""}
                  />
                </span>
              </div>

              <div
                className={
                  accordion.includes(0) ? "content show-accor " : "content"
                }
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("career.opportunities.accordion.text1")
                  }}
                />
              </div>
            </div>
            <div
              className="item"
              style={{ background: "var(--light-orange-color)" }}
            >
              <div onClick={() => toggle(1)} className="item-title">
                <span>
                  {t("career.opportunities.accordion.title2")}
                </span>
                <span>
                  <IoIosArrowDropup
                    className={accordion.includes(1) ? "arrow" : ""}
                  />
                </span>
              </div>
              <div
                className={
                  accordion.includes(1) ? "content show-accor " : "content"
                }
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("career.opportunities.accordion.text2")
                  }}
                />
              </div>
            </div>
          </div>

          <div className="career-img">
            <img src={accorImg} alt="" />
          </div>
        </div>
      </div>

      <div className="box-career container-main padding30">
        <h2 className="title">
          {t("career.connect.title")}
        </h2>

        <div className="connect-team">
          <div>
            <a
              href="https://www.linkedin.com/in/dr-milos-ivosevic-300263166/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-team"
                src={icon1}
                alt="Miloš Ivošević, PhD - CEO, Mechanical engineer"
              />
            </a>

            <div>
              <span>
                {t("team.team1.name")}
              </span>
              <p>
                {t("team.team1.position")}
              </p>
              <a
                href="https://www.linkedin.com/in/dr-milos-ivosevic-300263166/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconLinkedine} alt="Icon linkedin" />{" "}
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/anja-andjelkovic-866b30182"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img-team"
                src={icon2}
                alt="Anja Anđelković, MSc - Projects Lead, Mechanical engineer"
              />
            </a>

            <div>
              <span>
                {t("team.team2.name")}
              </span>
              <p>
                {t("team.team2.position")}
              </p>
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

      <div
        style={{ position: "relative" }}
        className="container-main padding30"
      >
        <h2 style={{ marginBottom: 20 }} className="title">
          {t("career.faqs.title")}
          <TextReader texts={faqs} />
        </h2>

        <center>
          <p>
            {t("career.faqs.sub_text")}
          </p>
        </center>

        <div
          className="accordion"
          style={{ width: 800, margin: "40px auto 100px auto", height: "auto" }}
        >
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(3)}>
              <span>
                {t("career.faqs.accor.title1")}
              </span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(3) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(3) ? "content show-accor " : "content"
              }
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: t("career.faqs.accor.text1")
                }}
              />
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(4)}>
              <span>
                {t("career.faqs.accor.title2")}
              </span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(4) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(4) ? "content show-accor " : "content"
              }
            >
              <p>
                {t("career.faqs.accor.text2")}
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(5)}>
              <span>
                {t("career.faqs.accor.title3")}
              </span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(5) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(5) ? "content show-accor " : "content"
              }
            >
              <p>
                {t("career.faqs.accor.text3")}
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(6)}>
              <span>
                {t("career.faqs.accor.title4")}
              </span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(6) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(6) ? "content show-accor " : "content"
              }
            >
              <p>
                {t("career.faqs.accor.text4")}
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(7)}>
              <span>
                {t("career.faqs.accor.title5")}
              </span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(7) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(7) ? "content show-accor " : "content"
              }
            >
              <p>
                {t("career.faqs.accor.text5")}
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(8)}>
              <span>
                {t("career.faqs.accor.title6")}
              </span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(8) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(8) ? "content show-accor " : "content"
              }
            >
              <p>
                {t("career.faqs.accor.text6")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-envi box-career padding30">
        <h2 className="title">
          {t("career.video_title")}
        </h2>

        <iframe
          className="video-yt"
          loading="lazy"
          src="https://www.youtube.com/embed/kL0TWeEXIzk"
          title="Helmchron - Working in our team"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
