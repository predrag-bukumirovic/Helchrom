import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Helmet } from "react-helmet";

import mainImg1 from "../assets/images/K2022/baner1.png";
import mainImg2 from "../assets/images/K2022/baner2.jpeg";
import mainImg3 from "../assets/images/K2022/baner3.jpeg";
import img1 from "../assets/images/K2022/1.jpeg";
import img2 from "../assets/images/K2022/2.png";
import img3 from "../assets/images/K2022/3.png";

import "../assets/scss/slider.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/news-post.scss";

const K2022 = () =>
  <div>
    <Helmet>
      <title>K2022 | Helmchron</title>
    </Helmet>
    <div className="container-main">
      <CCarousel className="slider-main" controls transition="crossfade">
        <CCarouselItem>
          <CImage className="d-block w-100" src={mainImg1} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={mainImg2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={mainImg3} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
      <div className="box-img">
        {[mainImg1, mainImg2, mainImg3].map((img, index) =>
          <div key={index}>
            <img src={img} alt="Main" />
          </div>
        )}
      </div>
      <div className="padding30">
        <div className="news-post">
          <h1 className="title">K 2022</h1>
          <center>
            <p className="sub">19 - 26 October 2022 I Düsseldorf, Germany</p>
            <p style={{ margin: "50px 0" }}>
              The industry is facing significant challenges when it comes to
              energy consumption and carbon footprint. In order to overcome
              these challenges and become climate neutral and sustainable in the
              long run, the industry must deliver innovation to abolish plastic
              already present in our environment and reuse plastic materials at
              the end of their lifecycle as raw materials.
            </p>
          </center>
          <p>
            This was one of the central topics of K2022. The other was
            digitalization and the ways it can support sustainability efforts
            and upgrade services for the end consumers.
          </p>
          <div className="post">
            <div className="post-text">
              <p>
                On the fairgrounds, many exciting innovative solutions were
                presented - from different ways how to save energy, produce
                energy inside your manufacturing facilities using solar power,
                renewable raw materials, digital passports for plastic materials
                that will have all the data for the recycling assessment, etc.
              </p>
              <b>
                <p>Sustainability and circular economy</p>
              </b>
              <p>
                The use of alternative energy sources, like solar, wind, or
                geothermal, and investment in energy-efficient equipment, will
                not only decrease carbon emissions but also reduce energy costs.
                Implementation of energy recovery systems to capture and reuse
                waste heat and other forms of energy would also be beneficial.
                <br />
                It was agreed that circular economy must be part of product
                design, including its durability, reparability, and
                recyclability.
              </p>
            </div>
            <div className="post-img">
              <img src={img1} alt="K2022 1" />
            </div>
          </div>
          <div>
            <p>
              The concept of <b>Extended Producer Responsibility</b> should be
              implemented, meaning that manufacturers should have full
              responsibility for the entire lifecycle of their product,
              including its end-of-life stage.
            </p>
            <p>
              Efficient use of resources and minimization of waste generation
              can, also, be accomplished by creating sustainable partnerships
              with other industries or organizations to exchange waste
              materials, by-products, or energy.
            </p>
          </div>
          <div className="post">
            <div className="post-img">
              <img src={img2} alt="Digitalization" />
            </div>
            <div className="post-text">
              <b>
                <p>Digitalization</p>
              </b>
              <p>
                Digitalization was another hot topic of K2022. We could see and
                test some interesting digital solutions from playing chess with
                a robot to intelligent drying and conveying machines.
              </p>
              <p>
                Manufacturers are leveraging <b>Digital Twin technology</b> to
                optimize operations, enhance efficiency, and reduce waste. By
                creating equipment's or plant's digital twin, manufacturers can
                simulate various scenarios, identify bottlenecks, and optimize
                processes to minimize energy consumption or test the equipment
                prior to go-live.
              </p>
            </div>
          </div>
          <div className="post">
            <div className="post-text">
              <p>
                <b>Advanced Process Control</b> systems utilize real-time data
                and advanced algorithms to optimize process control, improve
                efficiency, and reduce energy consumption. The goal is to
                enhance process stability, minimize product variability, and
                optimize energy-intensive operations.
              </p>
              <p>
                <b>Predictive Analytics</b> techniques can assess vast amounts
                of data collected from sensors, equipment, and production
                processes. This allows the identification of patterns, predicts
                failures, optimizes maintenance schedules, and improves overall
                operational efficiency.
              </p>
              <p>
                <b>Energy Management Systems</b> help identify energy-saving
                opportunities, monitor energy usage patterns, and enable
                proactive energy management to achieve sustainability goals.
                These solutions utilize real-time data, automation, and machine
                learning to optimize energy consumption.
              </p>
            </div>
            <div className="post-img">
              <img src={img3} alt="Advanced Process Control" />
            </div>
          </div>
          <p>
            All the innovations presented in K2022 are transforming the industry
            while driving change toward a healthier environment. We are excited
            to see what will K fair bring in 2025.
          </p>
          <p>See you in Düsseldorf, 18-25 October 2025!</p>
        </div>
      </div>
    </div>
  </div>;

export default K2022;
