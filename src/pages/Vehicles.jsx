import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/mission-vision.scss";
import "../assets/scss/slider.scss";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import mainImg from "../assets/images/Vehicles/baner1.jpg";
import mainImg1 from "../assets/images/Vehicles/baner2.png";
import mainImg2 from "../assets/images/Vehicles/baner3.png";

import icon1 from "../assets/images/Vehicles/1.png";
import icon2 from "../assets/images/Vehicles/2.png";
import icon3 from "../assets/images/Vehicles/3.png";
import icon4 from "../assets/images/Vehicles/4.png";
import icon5 from "../assets/images/Vehicles/5.png";
import { Helmet } from "react-helmet";

export default function Vehicles() {
  return (
    <div className="container-main">
      <Helmet>
        <title>Vehicles manufacturing | Helmchron</title>
      </Helmet>
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

      <div className="container-main padding30">
        <h1 className="title">Vehicles Manufacturing</h1>

        <center className="text-title">
          <p>
            The car industry is one of the largest industries in the world,
            employing millions of people and contributing significantly to the
            global economy.
          </p>
          <p>However, it is undergoing significant transformation.</p>
        </center>

        <div className="text-icon" style={{marginTop: 50}}>
          <div>
            <img src={icon1} alt="ads" />
          </div>
          <div className="text">
            <p>
              With the rise of electric vehicles and autonomous driving
              technology, traditional car manufacturers are facing intense
              competition. This shift is driven by several factors. Firstly,
              there is a growing concern about the impact of fossil fuels on the
              environment, which has led to a global push towards cleaner,
              greener technologies. Secondly, advances in technology have made
              it possible to develop cars that are safer, more efficient, and
              more convenient than ever before.
            </p>
          </div>
        </div>

        <div className="text-icon">
          <div>
            <img src={icon2} alt="ads" />
          </div>
          <div className="text">
            <p>
              In the coming years, we can expect to see these trends continue to
              shape the car industry. Electric vehicles are likely to become
              increasingly popular, with many countries and cities setting
              target dates for phasing out petrol and diesel vehicles.
              Autonomous driving technology can transform the way we travel and
              even reshape entire industries such as transportation and
              logistics.
            </p>
          </div>
        </div>
        <div className="text-icon">
          <div>
            <img src={icon3} alt="ads" />
          </div>
          <div className="text">
            <p>
              Additionally, these trends also present significant challenges for
              the car industry. For example, the transition to electric vehicles
              requires a huge investment in new infrastructure, such as charging
              stations and battery production facilities. Autonomous driving
              technology also raises complex questions around regulation,
              safety, and liability.
            </p>
          </div>
        </div>
        <div className="text-icon">
          <div>
            <img src={icon4} alt="ads" />
          </div>
          <div className="text">
            <p>
              Process engineering is essential for the success of the car
              industry, particularly due to the complexity of the production
              processes - including design, optimization, and management of the
              production process. One of the goals is to minimize waste and
              energy use and reduce production costs while maintaining or
              improving the quality of the product. This is achieved by
              analyzing and optimizing each step in the production process, from
              the sourcing of raw materials to the assembly of the final
              product.
            </p>
          </div>
        </div>
        <div className="text-icon">
          <div>
            <img src={icon5} alt="ads" />
          </div>
          <div className="text">
            <p>
              Also, process engineers are focused on the development of new
              technologies, such as electric vehicles and autonomous driving
              systems. These technologies require innovative production
              processes and materials to ensure that they are safe, efficient,
              and cost-effective.
            </p>
          </div>
        </div>

        <center>
          <p style={{ marginTop: 80 }}>
            For our list of references and details on our projects, please
            contact Miloš Ivošević,{" "}
            <a href="mailto:milos.ivosevic@helmchron.com">
              milos.ivosevic@helmchron.com
            </a>
          </p>
        </center>
      </div>
    </div>
  );
}
