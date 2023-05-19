import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async e => {
    e.preventDefault();

    try {
      await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: `
            Name: ${name}<br />
            Company: ${company}<br />
            Email: ${email}<br />
            Position: ${position}<br />
            Phone: ${phone}<br />
            Message: ${message}
          `
        })
      });

      // clear form
      // setName("");
      // setCompany("");
      // setEmail("");
      // setPhone("");
      // setMessage("");
      // setSubject("");
    } catch (e) {
      console.error(e);
    }
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

      <div className="">
        <center>
          <h1 className="title">GET IN TOUCH</h1>
          <p>
            Looking for more information or would like to learn about career
            opportunities in Helmchron? <br /> Please submit your inquiry and
            our team will reply as soon as possible.{" "}
          </p>
        </center>

        <div className="icon-contact padding30">
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

        <div className="form padding30">
          <form onSubmit={submitForm}>
            <div>
              <label htmlFor="">
                Full Name <span className="star">*</span>
                <input
                  value={name}
                  type="text"
                  placeholder="Full Name"
                  required
                  onChange={e => setName(e.target.value)}
                />
              </label>
              <label htmlFor="company">
                Company
                <input
                  type="text"
                  placeholder="Company"
                  onChange={e => setCompany(e.target.value)}
                />
              </label>
              <label htmlFor="email">
                Email <span className="star">*</span>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="position">
                Position
                <input
                  type="text"
                  placeholder="Position"
                  onChange={e => setPosition(e.target.value)}
                />
              </label>
              <label htmlFor="number">
                Phone Number
                <input
                  type="number"
                  placeholder="Phone Number"
                  onChange={e => setPhone(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label htmlFor="subject">
                Subject <span className="star">*</span>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  onChange={e => setSubject(e.target.value)}
                />
              </label>
              <label htmlFor="message">
                Message <span className="star">*</span>
                <textarea
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  required
                  onChange={e => setMessage(e.target.value)}
                />
              </label>

              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
