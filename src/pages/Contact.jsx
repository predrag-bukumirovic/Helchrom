import React, { useState } from "react";
import "../assets/scss/contact.scss";
import "../assets/scss/slider.scss";
import mainImg from "../assets/images/Contact/contact1.png";
import mainImg1 from "../assets/images/Contact/contact2.png";
import mainImg2 from "../assets/images/Contact/contact3.png";
import icon1 from "../assets/images/Contact/1.png";
import icon2 from "../assets/images/Contact/2.png";
import icon3 from "../assets/images/Contact/3.png";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [policy, setPolicy] = useState(
    "The user has aligned their consent with the privacy policy."
  );

  const [dateState, setDateState] = useState(new Date());
  const changeDate = e => {
    setDateState(e);
  };

  const [loading, setLoading] = useState(false);

  const submitForm = async e => {
    e.preventDefault();

    const emailTemplate = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333333;
            }

            * {
              box-sizing: border-box;
            }

            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
            }

            p {
              font-size: 16px;
              margin: 0 0 10px;
            }

            a {
              color: #0066cc;
              text-decoration: underline;
            }

    
            .section {
              margin-bottom: 40px;
            }

            .section-heading {
              font-size: 20px;
              font-weight: bold;
              margin: 0 0 10px;
            }

            .section-content {
              font-size: 16px;
              margin: 0;
            }

            /* Stilovi za dugme */
            .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #0066cc;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
            }

            .button:hover {
              background-color: #004f9f;
            }

            .header {
              background-color: #ffffff;
              padding: 20px;
              text-align: center;
            }

            .footer {
              background-color: #f5f5f5;
              padding: 20px;
              text-align: center;
            }

            .logo {
              width: 100%;
              margin: 0 auto;
            }

            @media only screen and (max-width: 600px) {
              .container {
                padding: 10px;
              }
            }

            .message-box {
              padding: 30px;
            }

            .policy {
              color: #ffa500 !important;
            }
          </style>
        </head>

        <body>
          <div class="container">
            <div class="header">
              <img src='https://www.helmchron.gold-digital.rs/static/media/policy.346a6f0b269c86290ae3.png' alt="Logo" class="logo">
            </div>
            <div class="section">
              <b>Subject:</b> <p>${subject}</p>
              <b>Name:</b> <p>${name}</p>
              <b>Company:</b> <p>${company}</p>
              <b>Email:</b> <p>${email}</p>
              <b>Position:</b> <p>${position}</p>
              <b>Phone Number:</b> <p>${phone}</p>
              <b>Privacy policy:</b> <p class="policy">${policy}</p>
              <p class="message-box"><b><Message:></b> ${message}</p>
            </div>
            <div class="footer">
              <p>© 2023 Helmchron | Sva prava zadržana.</p>
            </div>
          </div>
        </body>
      </html>
    `;

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
          message: emailTemplate
        })
      });

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        window.open("/thanks", "_self");
        document.getElementById("form").reset();
      }, 3000);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <div className="container-main">
      <Helmet>
        <title>Contact | Helmchron</title>
        <meta charset="utf-8" />
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

      <div className="">
        <center>
          <h1 className="title">GET IN TOUCH</h1>
          <p>
            Looking for more information or would like to learn about career
            opportunities in Helmchron? <br /> Please submit your inquiry and
            our team will reply as soon as possible.{" "}
          </p>
        </center>

        <div className="icon-contact container-main padding30">
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
          <form method="post" id="form" onSubmit={submitForm}>
            <div>
              <label htmlFor="">
                Full Name <span className="star">*</span>
                <input
                  type="text"
                  placeholder="Please enter your full name"
                  name="name"
                  required
                  onChange={event => setName(event.target.value)}
                />
              </label>
              <label htmlFor="company">
                Company
                <input
                  type="text"
                  placeholder="Please enter your company"
                  name="company"
                  onChange={event => setCompany(event.target.value)}
                />
              </label>
              <label htmlFor="email">
                Email <span className="star">*</span>
                <input
                  type="email"
                  placeholder="Please enter your email"
                  required
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                />
              </label>
              <label htmlFor="position">
                Position
                <input
                  type="text"
                  placeholder="Please enter your position"
                  name="position"
                  onChange={event => setPosition(event.target.value)}
                />
              </label>
              <label htmlFor="number">
                Phone Number
                <input
                  type="text"
                  placeholder="Please enter your phone number"
                  name="phone"
                  onChange={event => setPhone(event.target.value)}
                />
              </label>
            </div>

            <div>
              <label htmlFor="subject">
                Subject <span className="star">*</span>
                <input
                  type="text"
                  placeholder="Please enter your subject"
                  name="subject"
                  required
                  onChange={event => setSubject(event.target.value)}
                />
              </label>
              <label htmlFor="message">
                Message <span className="star">*</span>
                <textarea
                  placeholder="Please enter your message here"
                  cols="30"
                  rows="10"
                  name="message"
                  required
                  onChange={event => setMessage(event.target.value)}
                />
              </label>

              <label className="label-policy" htmlFor="policy">
                <p>
                  I agree to the <a href="/privacy-policy">Privacy Policy</a>
                </p>
                <input
                  id="policy"
                  type="checkbox"
                  name="policyAccepted"
                  value={
                    "The privacy policy has been accepted and is now in effect."
                  }
                  required
                  onChange={event => setPolicy(event.target.value)}
                />
              </label>

              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Sending... " : "Send "}
                {loading &&
                  <div class="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>}
              </button>
            </div>
          </form>

          <div>
            <h2 className="title">Book a meeting</h2>
            <p>
              Schedule a 30-minute meeting with our team to explore how we can
              tailor our support to meet the unique needs of your project and
              work collaboratively to achieve your desired outcomes.
            </p>

            <form action="">
              <div className="book-form">
                <label htmlFor="">
                  Full Name <span className="star">*</span>
                  <input
                    type="text"
                    placeholder="Please enter your full name"
                    name="name"
                    required
                    onChange={event => setName(event.target.value)}
                  />
                </label>

                <label htmlFor="company">
                  Company
                  <input
                    type="text"
                    placeholder="Please enter your company"
                    name="company"
                    onChange={event => setCompany(event.target.value)}
                  />
                </label>

                <label htmlFor="email">
                  Email <span className="star">*</span>
                  <input
                    type="email"
                    placeholder="Please enter your email"
                    required
                    name="email"
                    onChange={event => setEmail(event.target.value)}
                  />
                </label>

                <label className="label-policy" htmlFor="policy">
                  <p>
                    I agree to the <a href="/privacy-policy">Privacy Policy</a>
                  </p>
                  <input
                    id="policy"
                    type="checkbox"
                    name="policyAccepted"
                    value={
                      "The privacy policy has been accepted and is now in effect."
                    }
                    required
                    onChange={event => setPolicy(event.target.value)}
                  />
                </label>

                <button type="submit" className="btn" disabled={loading}>
                  {loading ? "Sending... " : "Send "}
                  {loading &&
                    <div class="lds-ring">
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>}
                </button>
              </div>
              <div className="calendar">
                <Calendar value={dateState} onChange={changeDate} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
