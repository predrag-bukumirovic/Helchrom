import React from "react";
import "../assets/scss/contact.scss";
import "../assets/scss/slider.scss";
import mainImg from "../assets/images/Contact/contact1.webp";
import mainImg1 from "../assets/images/Contact/contact2.webp";
import mainImg2 from "../assets/images/Contact/contact3.webp";
import icon1 from "../assets/images/Contact/1.png";
import icon2 from "../assets/images/Contact/2.png";
import icon3 from "../assets/images/Contact/3.png";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export default function Contact() {
  const submitForm = e => {
    e.preventDefault();
  };

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
        <h1 className="title">GET IN TOUCH</h1>
        <p style={{ textAlign: "center" }}>
          Looking for more information or would like to learn about career
          opportunities in Helmchron? <br /> Please submit your inquiry and our
          team will reply as soon as possible.{" "}
        </p>

        <div className="icon-contact">
          <div>
            <a
              href="https://www.google.com/maps/place/Helmchron/@44.8191938,20.4047006,17z/data=!4m14!1m7!3m6!1s0x475a65428c286c47:0x23ade1e32fe70968!2sHelmchron!8m2!3d44.8191938!4d20.4072755!16s%2Fg%2F11qby527tz!3m5!1s0x475a65428c286c47:0x23ade1e32fe70968!8m2!3d44.8191938!4d20.4072755!16s%2Fg%2F11qby527tz"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon1} alt="icon1" />
            </a>
            <p>Belgrade, Serbia</p>
          </div>
          <div>
            <a href="tel:+381642938533">
              <img src={icon2} alt="icon2" />
            </a>
            <p>+381642938533</p>
          </div>
          <div>
            <a href="mailto:office@helmchron.com">
              <img src={icon3} alt="icon3" />
            </a>

            <p>office@helmchron.com</p>
          </div>
        </div>

        <center>
          <p>
            You can also submit your inquires via the contact form. <br />{" "}
            <span className="info-send">
              Fields marked with an asterisk (*) are required.
            </span>
          </p>
        </center>

        <div className="form">
          <form action="mail.php" method="POST">
            <div>
              <label htmlFor="">
                Full Name <span className="star">*</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  name="fullName"
                />
              </label>
              <label htmlFor="company">
                Company
                <input type="text" placeholder="Company" name="company" />
              </label>
              <label htmlFor="email">
                Email <span className="star">*</span>
                <input type="email" placeholder="Email" name="email" required />
              </label>
              <label htmlFor="position">
                Position
                <input type="text" placeholder="Position" name="position" />
              </label>
              <label htmlFor="number">
                Phone Number
                <input type="number" placeholder="Phone Number" name="number" />
              </label>
            </div>

            <div>
              <label htmlFor="subject">
                Subject <span className="star">*</span>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </label>
              <label htmlFor="message">
                Message <span className="star">*</span>
                <textarea
                  placeholder="Message"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  required
                />
              </label>

              <button onSubmit={submitForm} className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
