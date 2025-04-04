import React, { useState } from "react";
import "../assets/scss/contact.scss";
import "../assets/scss/slider.scss";
import mainImg from "../assets/images/Contact/contact1.jpg";
import mainImg1 from "../assets/images/Contact/contact2.jpg";
import mainImg2 from "../assets/images/Contact/contact3.jpg";
import icon1 from "../assets/images/Contact/1.png";
import icon2 from "../assets/images/Contact/2.png";
import icon3 from "../assets/images/Contact/3.png";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [nameBook, setNameBook] = useState("");
  const [companyBook, setCompanyBook] = useState("");
  const [emailBook, setEmailBook] = useState("");
  const [subjectBook] = useState("Meeting scheduling");

  const [selectedDate, setSelectedDate] = useState(null);
  const [dateSelected, setDateSelected] = useState(false);
  const [busyDates] = useState([
    new Date("2024-04-15"),
    new Date("2024-04-19"),
    new Date("2024-04-23"),
    new Date("2024-04-27"),
    new Date("2024-04-30")
  ]);

  const isDateAvailable = date => {
    return !busyDates.some(busyDate => isSameDay(busyDate, date));
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setDateSelected(true);
  };

  const [loading, setLoading] = useState(false);
  const [loadingBook, setLoadingBook] = useState(false);

  const submitForm = async e => {
    e.preventDefault();

    const emailTemplate = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Montserrat', sans-serif;
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
              background-color:#f4f6fc;
            }

            p {
              font-size: 18px;
              margin-top: 0;

            }
            b {
              font-size: 22px;
            }

            a {
              color: #0066cc;
              text-decoration: underline;
            }

    
            .section {
              margin-bottom: 40px;
              margin-top: 20px;
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

            .header {
              background-color: #ffffff;
              padding: 20px;
              text-align: center;
            }

            .footer {
            
              background: #fff;
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
                width: 100%;
              }
            }
            .message-box {
              background: #fff;
              padding: 15px;
              margin-top: 10px;
            }


            .policy {
              color: #000 !important;
            }
          </style>
        </head>
        

        <body>
          <div class="container">
            <div class="header">
              <img src='https://www.helmchron.com/static/media/logowhite.6b0a4044288765ef7557.webp' alt="Logo" class="logo">
            </div>
            <div class="section">
              <b>Subject:</b> <p>${subject}</p>
              <b>Name:</b> <p>${name}</p>
              <b>Company:</b> <p>${company}</p>
              <b>Email:</b> <p>${email}</p>
              <b>Position:</b> <p>${position}</p>
              <b>Phone Number:</b> <p>${phone}</p>
              <b>Privacy policy:</b> <p class="policy">${policy}</p>
              <b>Message:</b><p class="message-box">${message}</p>
            </div>
            <div class="footer">
              <p style="margin-bottom: 0;">© 2023 Helmchron | Sva prava zadržana. <a href="https://www.helmchron.com/privacy-policy">Privacy policy</a></p>
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
        navigate("/thanks");
        document.getElementById("form").reset();
      }, 3000);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const submitFormBook = async e => {
    e.preventDefault();

    if (!dateSelected) {
      alert("Please select a meeting date.");
      return;
    }

    const emailTemplateBook = `
          <html>
        <head>
          <style>
            body {
              font-family: 'Montserrat', sans-serif;
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
              background-color:#f4f6fc;
            }

            p {
              font-size: 18px;
              margin-top: 0;

            }
            b {
              font-size: 22px;
            }

            a {
              color: #0066cc;
              text-decoration: underline;
            }

    
            .section {
              margin-bottom: 40px;
              margin-top: 20px;
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

            .header {
              background-color: #ffffff;
              padding: 20px;
              text-align: center;
            }

            .footer {
            
              background: #fff;
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
                width: 100%;
              }
            }
            .message-box {
              background: #fff;
              padding: 15px;
              margin-top: 10px;
            }


            .policy {
              color: #000 !important;
            }
          </style>
        </head>
        

        <body>
          <div class="container">
            <div class="header">
              <img src='https://www.helmchron.com/static/media/logowhite.6b0a4044288765ef7557.webp' alt="Logo" class="logo">
            </div>
            <div class="section">
              <b>Name:</b> <p>${nameBook}</p>
              <b>Company:</b> <p>${companyBook}</p>
              <b>Email:</b> <p>${emailBook}</p>
              <b>Meeting date:</b> <p>${selectedDate}</p>
              <b>Privacy policy:</b> <p class="policy">${policy}</p>
            </div>
            <div class="footer">
              <p style="margin-bottom: 0;">© 2023 Helmchron | Sva prava zadržana. <a href="https://www.helmchron.com/privacy-policy">Privacy policy</a></p>
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
          name: nameBook,
          email: emailBook,
          subject: subjectBook,
          company: companyBook,
          date: selectedDate,
          message: emailTemplateBook
        })
      });

      setLoadingBook(true);
      setTimeout(() => {
        setLoadingBook(false);
        navigate("/thanks");
        document.getElementById("form").reset();
      }, 3000);
    } catch (e) {
      console.error(e);
      setLoadingBook(false);
    }
  };

  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Contact | Helmchron</title>
        <meta charset="utf-8" />
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

      <div className="container-main">
        <center>
          <h1 className="title">
            {t("contact.title")}
          </h1>
          <p dangerouslySetInnerHTML={{ __html: t("contact.sub_text") }} />
        </center>

        <center>
          <p dangerouslySetInnerHTML={{ __html: t("contact.required") }} />
        </center>

        <div className="form padding30">
          <form method="post" id="form" onSubmit={submitForm}>
            <div>
              <label htmlFor="">
                {t("contact.form.label.name")} <span className="star">*</span>
                <input
                  type="text"
                  placeholder={t("contact.form.plac.name")}
                  name="name"
                  required
                  onChange={event => setName(event.target.value)}
                />
              </label>
              <label htmlFor="company">
                {t("contact.form.label.company")}
                <input
                  type="text"
                  placeholder={t("contact.form.plac.company")}
                  name="company"
                  onChange={event => setCompany(event.target.value)}
                />
              </label>
              <label htmlFor="email">
                {t("contact.form.label.email")} <span className="star">*</span>
                <input
                  type="email"
                  placeholder={t("contact.form.plac.email")}
                  required
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                />
              </label>
              <label htmlFor="position">
                {t("contact.form.label.position")}
                <input
                  type="text"
                  placeholder={t("contact.form.plac.position")}
                  name="position"
                  onChange={event => setPosition(event.target.value)}
                />
              </label>
              <label htmlFor="number">
                {t("contact.form.label.phone")}
                <input
                  type="text"
                  placeholder={t("contact.form.plac.phone")}
                  name="phone"
                  onChange={event => setPhone(event.target.value)}
                />
              </label>
            </div>

            <div>
              <label htmlFor="subject">
                {t("contact.form.label.subject")}{" "}
                <span className="star">*</span>
                <input
                  type="text"
                  placeholder={t("contact.form.plac.subject")}
                  name="subject"
                  required
                  onChange={event => setSubject(event.target.value)}
                />
              </label>
              <label htmlFor="message">
                {t("contact.form.label.message")}{" "}
                <span className="star">*</span>
                <textarea
                  placeholder={t("contact.form.plac.message")}
                  cols="30"
                  rows="10"
                  name="message"
                  required
                  onChange={event => setMessage(event.target.value)}
                />
              </label>

              <label className="label-policy" htmlFor="policy-contact">
                <p
                  dangerouslySetInnerHTML={{ __html: t("contact.form.policy") }}
                />

                <input
                  id="policy-contact"
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
                {loading ? t("contact.form.sending") : t("contact.form.send")}
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
            <h2 className="title">
              {t("contact.form.book")}
            </h2>
            <p style={{ textAlign: "center" }}>
              {t("contact.form.book_text")}
            </p>

            <form action="" onSubmit={submitFormBook}>
              <div className="book-form">
                <div>
                  <label htmlFor="">
                    {t("contact.form.label.name")}
                    <span className="star">*</span>
                    <input
                      type="text"
                      placeholder={t("contact.form.label.name")}
                      name="name"
                      required
                      onChange={event => setNameBook(event.target.value)}
                    />
                  </label>

                  <label htmlFor="company">
                    {t("contact.form.label.company")}
                    <input
                      type="text"
                      placeholder={t("contact.form.plac.company")}
                      name="company"
                      onChange={event => setCompanyBook(event.target.value)}
                    />
                  </label>

                  <label htmlFor="email">
                    {t("contact.form.label.email")}
                    <span className="star">*</span>
                    <input
                      type="email"
                      placeholder={t("contact.form.plac.email")}
                      required
                      name="email"
                      onChange={event => setEmailBook(event.target.value)}
                    />
                  </label>
                </div>

                <div className="calendar">
                  <Calendar
                    value={selectedDate}
                    onChange={handleDateChange}
                    tileDisabled={({ date, view }) =>
                      view === "month" && !isDateAvailable(date)}
                  />
                </div>
              </div>

              <label className="label-policy" htmlFor="policy-meeting">
                <p
                  dangerouslySetInnerHTML={{ __html: t("contact.form.policy") }}
                />

                <input
                  id="policy-meeting"
                  type="checkbox"
                  name="policyAccepted"
                  value={
                    "The privacy policy has been accepted and is now in effect."
                  }
                  required
                  onChange={event => setPolicy(event.target.value)}
                />
              </label>

              <button type="submit" className="btn" disabled={loadingBook}>
                {loadingBook
                  ? t("contact.form.sending")
                  : t("contact.form.send")}
                {loadingBook &&
                  <div class="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>}
              </button>
            </form>
          </div>

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
        </div>
      </div>
    </div>
  );
}

function isSameDay(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}
