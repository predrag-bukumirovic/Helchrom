import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";

import "../assets/scss/slider.scss";
import "../assets/scss/mission-vision.scss";

import mainImg from "../assets/images/Values/baner1.png";
import mainImg1 from "../assets/images/Values/baner2.png";
import mainImg2 from "../assets/images/Values/baner3.png";
import Integrity from "../assets/images/Values/Integrity.png";
import Committment from "../assets/images/Values/Committment.png";
import Agility from "../assets/images/Values/Agility.png";
import Diversity from "../assets/images/Values/Diversity.png";
import Courage from "../assets/images/Values/Courage.png";
import Oursocial from "../assets/images/Values/Oursocial.png";

export default function OurValues() {
  return (
    <div>
      <Helmet>
        <title>Out Values | Helmchron</title>
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

      <div className="container-main padding30">
        <h1 className="title">Our values</h1>

        <center>
          <p>
            Our mission and our vision define what we do, and our purpose.
            However, we deliver in our way of work, implementing our values in
            every segment of our daily operations and in every interaction we
            make - within our team, with our partners, with society, and with
            the environment.
          </p>
          <p>We always start with ourselves, with our team.</p>
          <p>
            We wish that every employee feels safe to be their true and best
            self, to come to work happy, and feel respected and appreciated. Our
            team is a mirror of our culture, our expertise, and our values.
          </p>
          <p>
            We are proud our values live within our company and are embedded in
            Helmchron's DNA.
          </p>
        </center>

        <div style={{ marginTop: 100 }}>
          <h2 className="title">OUR WAY OF WORK</h2>
          <div className="row-img-text row1">
            <div className="row-img">
              <img src={Integrity} alt="" />
              <div className="rotatingText">
                <div className="rotatingText-adjective">Integrity</div>
                <div className="rotatingText-adjective">Connects us</div>
              </div>
            </div>
            <div className="row-text">
              <p>
                We act with integrity towards each other and our partners. We
                keep our promises and honor others' opinions and ideas. We
                demonstrate ethical behavior in every situation.
              </p>
              <ul>
                <li>We show respect</li>
                <li>We take responsibility</li>
                <li>We stand up for what is right</li>
                <li>We express gratitude and give credit</li>
              </ul>
            </div>
          </div>
          <div className="row-img-text row2">
            <div className="row-img">
              <img src={Committment} alt="" />
              <div>
                <div>COMMITMENT</div>
                <div>Connects us</div>
              </div>
            </div>
            <div className="row-text">
              <p>
                We are passionate about every project we commit ourselves to. We
                are enthusiastic about delivering high-quality results and we
                feel responsibility towards our partners.
              </p>
              <ul>
                <li>We keep our promises and give promises we can keep</li>
                <li>We give our best</li>
                <li>We are loyal</li>
              </ul>
            </div>
          </div>
          <div className="row-img-text row3">
            <div className="row-img">
              <img src={Agility} alt="" />
              <div className="rotatingText">
                <div className="rotatingText-adjective">Agility</div>
                <div className="rotatingText-adjective">Connects us</div>
              </div>
            </div>
            <div className="row-text">
              <p>
                We act rapidly, but seamlessly and cohesively. We are open to
                change. We are flexible and efficient in responding to our
                partners' needs.
              </p>
            </div>
          </div>
          <div className="row-img-text row4">
            <div className="row-img">
              <img src={Diversity} alt="" />
              <div>
                <div>Diversity</div>
                <div>Connects us</div>
              </div>
            </div>
            <div className="row-text">
              <p>
                We empower each other and value our differences to enable
                growth, empathy, and stronger partnerships. We act with respect
                and we feel respected.
              </p>
            </div>
          </div>
          <div className="row-img-text row5">
            <div className="row-img">
              <img src={Courage} alt="" />
              <div className="rotatingText">
                <div className="rotatingText-adjective">Courage</div>
                <div className="rotatingText-adjective">Connects us</div>
              </div>
            </div>
            <div className="row-text">
              <p>
                We are honest and transparent about everything we do. We take
                initiative and step out of our comfort zone. We act and learn in
                innovative ways. We are not afraid of making mistakes.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: 100 }}>
            <h3 className="title">SOCIAL RESPONSIBILITY</h3>

            <p>
              Our commitment to our vision extends beyond our engineering
              expertise. Guided by our values, we have launched `For the
              Generations in Motion`, an initiative that aims to support
              healthier life style for children and teenagers.
            </p>
            <p>
              We firmly believe we can make more extensive impact by
              passionately endorsing initiatives for youth`s well-being and
              physical activity, knowing that a healthy childhood forms a
              foundation for a high-quality life, a safe society, and a healthy
              environment.
            </p>
            <p>
              To create a vibrant and sustainable future, our values, progress,
              innovation, and social responsibility are focused on the health
              and prosperity of the coming generations.
            </p>
            <p>
              Commencing from our athletic backgrounds, we understand how
              discipline, teamwork, agility, empathy, and inclusion are
              instilled from an early age within sports teams.
            </p>
          </div>

          <img className="our-social" src={Oursocial} alt="" />

          <center>
            <h2 className="title">WHAT DO WE HAVE IN COMMON?</h2>
            <iframe
              className="video-yt"
              loading="lazy"
              src="https://www.youtube.com/embed/ggIoQMjqkVM"
              title="Helmchron - Our core values"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </center>
        </div>
      </div>
    </div>
  );
}
