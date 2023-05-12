import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/mission-vision.scss";
import mainImg from "../assets/images/Values/baner1.webp";
import mainImg1 from "../assets/images/Values/baner2.webp";
import mainImg2 from "../assets/images/Values/baner3.webp";
import Integrity from "../assets/images/Values/1.png";
import valueicon2 from "../assets/images/Values/2.png";
import agility from "../assets/images/Values/3.png";
import valueicon3 from "../assets/images/Values/4.png";
import valueicon4 from "../assets/images/Values/5.png";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export default function OurValues() {
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

      <div className="box-text">
        <h1 className="title">Our values</h1>

        <center>
          <p>
            Our mission and our vision define what we do, and our purpose.
            However, we deliver in our way of work, implementing our values in
            every segment of our daily operations and in every interaction we
            make - within our team, with our partners, with society, and with
            the environment.
          </p>
          <p>We always start with ourselves, with our team. </p>
          <p>
            We wish that every employee feels safe to be their true and best
            self, to come to work happy, and feel respected and appreciated. Our
            team is a mirror of our culture, our expertise, and our values.{" "}
          </p>
          <p>
            We are proud our values live within our company and are embedded in
            Helmchron's DNA.
          </p>
        </center>

        <h2 className="title">OUR WAY OF WORK</h2>
        <div className="m-v-text">
          <div>
            <img src={Integrity} alt="" />
          </div>
          <div className="text">
            <h3>INTEGRITY</h3>
            <p>
              We act with integrity towards each other and our partners. We keep
              our promises and honor others' opinions and ideas. We demonstrate
              ethical behavior in every situation.
            </p>
            <p>
              <ul>
                <li>We show respect</li>
                <li>We take responsibility</li>
                <li>We stand up for what is right</li>
                <li>We express gratitude and give credit</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="m-v-text">
          <div>
            <img src={valueicon2} alt="" />
          </div>
          <div className="text">
            <h3>COMMITMENT</h3>
            <p>
              We are passionate about every project we commit ourselves to. We
              are enthusiastic about delivering high-quality results and we feel
              responsibility towards our partners.
            </p>
            <p>
              <ul>
                <li>We keep our promises and give promises we can keep</li>
                <li>We give our best</li>
                <li>We are loyal</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="m-v-text">
          <div>
            <img src={agility} alt="" />
          </div>
          <div className="text">
            <h3>AGILITY</h3>
            <p>
              We act rapidly, but seamlessly and cohesively. We are open to
              change. We are flexible and efficient in responding to our
              partners' needs.
            </p>
          </div>
        </div>
        <div className="m-v-text">
          <div>
            <img src={valueicon3} alt="" />
          </div>
          <div className="text">
            <h3>DIVERSITY</h3>
            <p>
              We empower each other and value our differences to enable growth,
              empathy, and stronger partnerships. We act with respect and we
              feel respected.
            </p>
          </div>
        </div>
        <div className="m-v-text">
          <div>
            <img src={valueicon4} alt="" />
          </div>
          <div className="text">
            <h3>COURAGE</h3>
            <p>
              We are honest and transparent about everything we do. We take
              initiative and step out of our comfort zone. We act and learn in
              innovative ways. We are not afraid of making mistakes.
            </p>
          </div>
        </div>

        <div className="video-envi">
          <h3>WHAT CONNECTS US?</h3>

          <iframe
            width="600"
            height="300"
            loading="lazy"
            src="https://www.youtube.com/embed/ggIoQMjqkVM"
            title="Helmchron - Our core values"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  );
}
