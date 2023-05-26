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
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      setTimeout(() => {
        setLoading(false);
        window.open("/thanks", "_self");
        document.getElementById("form").reset();
      }, 4000);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <div className="container-main">
      <Helmet>
        <title>Contact | Helmchron</title>
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
        {[mainImg, mainImg1, mainImg2].map((img, index) =>
          <div key={index}>
            <img src={img} alt="Main" />
          </div>
        )}
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
          {[
            {
              icon: icon1,
              text: "Belgrade, Serbia",
              link:
                "https://www.google.com/maps/place/Helmchron/@44.8191938,20.4047006,17z/data=!4m14!1m7!3m6!1s0x475a65428c286c47:0x23ade1e32fe70968!2sHelmchron!8m2!3d44.8191938!4d20.4072755!16s%2Fg%2F11qby527tz!3m5!1s0x475a65428c286c47:0x23ade1e32fe70968!8m2!3d44.8191938!4d20.4072755!16s%2Fg%2F11qby527tz"
            },
            { icon: icon2, text: "+381642938533", link: "tel:+381642938533" },
            {
              icon: icon3,
              text: "office@helmchron.com",
              link: "mailto:office@helmchron.com"
            }
          ].map((item, index) =>
            <div key={index}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.icon} alt={`icon${index + 1}`} />
              </a>
              <p>
                {item.text}
              </p>
            </div>
          )}
        </div>

        <center>
          <p>
            You can also submit your inquiries via the contact form. <br />{" "}
            <span className="info-send">
              Fields marked with an asterisk (*) are required.
            </span>
          </p>
        </center>

        <div className="form padding30">
          <form method="post" id="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">
                Full Name <span className="star">*</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="company">
                Company
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email">
                Email <span className="star">*</span>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="position">
                Position
                <input
                  type="text"
                  placeholder="Position"
                  name="position"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="number">
                Phone Number
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleChange}
                />
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
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="message">
                Message <span className="star">*</span>
                <textarea
                  placeholder="Message"
                  cols="30"
                  rows="10"
                  name="message"
                  required
                  onChange={handleChange}
                />
              </label>

              <button type="submit" className="btn">
                Submit{" "}
                {loading &&
                  <div className="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
