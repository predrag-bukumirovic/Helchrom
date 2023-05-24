import React from "react";
import "../assets/scss/slider.scss";
import mainImg from "../assets/images/Environment/baner1.jpg";
import mainImg1 from "../assets/images/Environment/baner2.jpg";
import mainImg2 from "../assets/images/Environment/baner3.jpg";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import icon1 from "../assets/images/Environment/1.png";
import icon2 from "../assets/images/Environment/2.png";
import icon3 from "../assets/images/Environment/3.png";
import { Helmet } from "react-helmet";

export default function Environment() {
  return (
    <div className="container-main">
      <Helmet>
        <title>Environmental | Helmchron</title>
      </Helmet>
      {/* Slider start */}
      <CCarousel className="slider-main" controls transition="crossfade">
        <CCarouselItem>
          <CImage
            height={0}
            className="d-block w-100"
            src={mainImg}
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            height={0}
            className="d-block w-100"
            src={mainImg1}
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            height={0}
            className="d-block w-100"
            src={mainImg2}
            alt="slide 3"
          />
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

      <div className="padding30">
        <h1 className="title">ENVIRONMENTAL protection</h1>

        <p style={{ textAlign: "center" }}>
          No matter what we do, achieving our outcomes and vision while taking
          care of the planet is a must. Sustainability and environmental
          protection are one of our priorities and have to be embedded into each
          process and each result we deliver.
        </p>

        <div className="text-icon">
          <img src={icon1} alt="ICON1" />
          <p>
            The impact of synthetic polymers on our lives is indisputable.
            Plastic materials have revolutionized the manufacturing of medical
            devices, implants and consumables, production of vehicles, and even
            food packaging. However, their overuse has significant effects on
            the health of our environment and even our lives due to not being
            degradable.{" "}
          </p>
        </div>

        <div className="text-icon">
          <img src={icon2} alt="ICON2" />
          <p>
            Synthetic polymers are polluting water bodies and cropland and
            affecting wildlife. Microplastics are even found in human blood
            samples. Particular compounds found in plastic (BPA, phthalates,
            etc.) are considered to be endocrine disruptors, meaning they
            interfere with the natural function of our endocrine system and
            cause many chronic diseases.{" "}
          </p>
        </div>

        <div className="text-icon">
          <img src={icon3} alt="ICON3" />
          <p>
            Our mission and vision are strongly linked to saving our planet for
            the coming generations and improving the health of the global
            population. We are focused on partnering with global leaders and
            contributing to projects related to manufacturing the highest
            quality biodegradable and compostable polymers from natural
            resources.{" "}
          </p>
        </div>

        <p>
          For our list of references and details on our projects, please contact
          Miloš Ivošević,{" "}
          <a href="mailto:milos.ivosevic@helmchron.com">
            milos.ivosevic@helmchron.com
          </a>
        </p>

        <div className="video-envi">
          <h3 className="title">PLASTICS - THEN AND NOW</h3>

          <iframe
            width="600"
            height="300"
            loading="lazy"
            src="https://www.youtube.com/embed/0leFkWYyv4c"
            title="Plastics - then and now I Helmchron I Chemistry Connects Us"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>

        <h2 className="subtitle">References:</h2>
        <ol className="references">
          <li>
            Can chemical engineering save the world from mounting plastic
            pollution? Available at:{" "}
            <a
              href="https://engineering.wisc.edu/news/can-chemical-engineering-save-the-world-from-mounting-plastic-pollution/"
              target="_blank"
              rel="noreferrer"
            >
              https://engineering.wisc.edu/news/can-chemical-engineering-save-the-world-from-mounting-plastic-pollution/
            </a>
            <p>Last accessed: March 2023.</p>
          </li>
          <li>
            How to bring back circular models of consumption. Available at:{" "}
            <a
              href=" https://www.weforum.org/agenda/2023/01/how-to-bring-back-circular-models-of-consumption/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}https://www.weforum.org/agenda/2023/01/how-to-bring-back-circular-models-of-consumption/
            </a>
            <p>Last accessed: March 2023.</p>
          </li>
        </ol>
      </div>
    </div>
  );
}
