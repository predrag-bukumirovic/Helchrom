import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React, { useState } from "react";
import mainImg from "../assets/images/Career/Slika1.png";
import mainImg1 from "../assets/images/Career/Slika2.png";
import mainImg2 from "../assets/images/Career/Slika3.png";
import icon1 from "../assets/images/Career/Milos.png";
import icon2 from "../assets/images/Career/Anja.png";
import iconLinkedine from "../assets/images/linkedine.webp";
import accorImg from "../assets/images/Career/Careerpage.png";
import "../assets/scss/slider.scss";
import "../assets/scss/accordion.css";
import "../assets/scss/career.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Helmet } from "react-helmet";
import { IoIosArrowDropup } from "react-icons/io";

export default function Career(i) {
  const [accordion, setAccordion] = useState([0, 3]);

  const toggle = index => {
    if (accordion.includes(index)) {
      setAccordion(accordion.filter(item => item !== index));
    } else {
      setAccordion([index]);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Career | Helmchron</title>
        <meta
          name="description"
          content="Join the Helmchron team and explore career opportunities in process and thermotechnics engineering. Contact us to share your CV and learn more about working with us."
        />
      </Helmet>
      <div>
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
              <img src={mainImg} alt="Helmchron Career - Slide 1" />
            </div>
            <div>
              <img src={mainImg1} alt="Helmchron Career - Slide 2" />
            </div>
            <div>
              <img src={mainImg2} alt="Helmchron Career - Slide 3" />
            </div>
          </div>
        </div>
        {/* Slider end */}

        <div className="container-main padding30">
          <h1 className="title">Join the helmchron team</h1>
          <p style={{ textAlign: "justify" }}>
            At Helmchron, we foster a culture of teamwork and agility, where
            diverse perspectives are respected and encouraged. We prioritize
            working in an environment where every team member feels empowered to
            express their opinions and is valued for their contribution. Working
            on projects across variety of business areas and industries, we
            welcome Process and Thermotechnics Engineers who embody an
            entrepreneurial mindset and share our values. <br /> Whether you're
            a seasoned professional or just starting your career, we honor your
            potential and your unique perspective to inspire us to new heights.
          </p>
        </div>
      </div>

      <div
        style={{ margin: "100px auto" }}
        className="container-main padding30"
      >
        <h2 className="title">CAREER OPPORTUNITIES</h2>

        <p className="text-width">
          Seeking an impactful professional connection? Wish to have a team
          chemistry? Share you CV with us. <br /> Please note that only
          shortlisted candidates will be contacted.
        </p>

        <div className="accordion-row">
          <div className="accordion">
            <div
              style={{ background: "var(--lite-orange-color)" }}
              className="item"
            >
              <div className="item-title" onClick={() => toggle(0)}>
                <span>For engineering students</span>
                <span>
                  <IoIosArrowDropup
                    className={accordion.includes(0) ? "arrow" : ""}
                  />
                </span>
              </div>

              <div
                className={
                  accordion.includes(0) ? "content show-accor " : "content"
                }
              >
                <p>
                  {" "}Are you enrolled in master studies in mechanical,
                  process, or thermotechnics engineering and eager to gain
                  hands-on experience? We offer paid practice opportunities to
                  enthusiastic future engineers. If you're ready to jumpstart
                  your career and apply your knowledge in a real-world setting,
                  we invite you to share your CV with us at{" "}
                  <a href="mailto:student.practice@helmchron.com">
                    student.practice@helmchron.com
                  </a>
                </p>
              </div>
            </div>
            <div
              className="item"
              style={{ background: "var(--lite-orange-color)" }}
            >
              <div onClick={() => toggle(1)} className="item-title">
                <span>For engineers</span>
                <span>
                  <IoIosArrowDropup
                    className={accordion.includes(1) ? "arrow" : ""}
                  />
                </span>
              </div>
              <div
                className={
                  accordion.includes(1) ? "content show-accor " : "content"
                }
              >
                <p>
                  Are you a mechanical, process, or thermotechnics engineer
                  looking to take the next step in your career? At Helmchron, we
                  value experience and expertise at all levels. <br /> Whether
                  you're a recent graduate or a seasoned professional, we offer
                  opportunities to apply and develop your skills. Share your CV
                  at <a href="mailto:jobs@helmchron.com">jobs@helmchron.com</a>
                  and be part of team and projects that make an impact.
                </p>
              </div>
            </div>
          </div>

          <div className="career-img">
            <img src={accorImg} alt="" />
          </div>
        </div>
      </div>

      <div className="box-career container-main padding30">
        <h2 className="title">CONNECT WITH OUR TEAM</h2>

        <div className="connect-team">
          <div>
            <img
              src={icon1}
              alt="Miloš Ivošević, PhD - CEO, Mechanical engineer"
            />
            <div>
              <span>Miloš Ivošević, PhD</span>
              <p>CEO, Mechanical engineer </p>
              <a
                href="https://www.linkedin.com/in/dr-milos-ivosevic-300263166/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconLinkedine} alt="Icon linkedin" />{" "}
              </a>
            </div>
          </div>
          <div>
            <img
              src={icon2}
              alt="Anja Anđelković, MSc - Projects Lead, Mechanical engineer"
            />
            <div>
              <span>Anja Anđelković, MSc</span>
              <p>COO, Mechanical engineer </p>
              <a
                href="https://www.linkedin.com/in/anja-andjelkovic-866b30182"
                target="_blank"
                rel="noreferrer"
              >
                <img src={iconLinkedine} alt="LinkedIn icon" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="faqs-container padding30">
        <h2 style={{ marginBottom: 20 }} className="title">
          RECRUITMENT FAQs
        </h2>

        <center>
          <p>Find answers to common questions about joining our team.</p>
        </center>

        <div
          className="accordion"
          style={{ width: 800, margin: "40px auto 100px auto", height: "auto" }}
        >
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(3)}>
              <span>How can I enroll in the recruitment process?</span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(3) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(3) ? "content show-accor " : "content"
              }
            >
              <p>
                To enroll in our recruitment process, simply submit your CV to{" "}
                <a href="mailto:student.practice@helmchron.com">
                  student.practice@helmchron.com
                </a>{" "}
                or <a href="mailto:jobs@helmchron.com">jobs@helmchron.com</a>.
                We welcome applications from candidates with suitable education
                and qualifications. Our recruitment team carefully reviews all
                applications, and only shortlisted candidates will be contacted
                for further consideration. Thank you for your interest in
                joining our team.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(4)}>
              <span>What is a paid student practice?</span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(4) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(4) ? "content show-accor " : "content"
              }
            >
              <p>
                A paid student practice is a valuable opportunity for master's
                students of mechanical, process, or thermotechnics engineering
                to gain hands-on experience. It provides students with the
                chance to apply their academic knowledge in a professional
                setting, working alongside experienced engineers and
                contributing to meaningful projects. Through this program,
                students can enhance their practical skills, expand their
                industry knowledge, and prepare themselves for future career
                opportunities. The duration of the practice can range from 3
                months until the completion of a particular project, offering
                flexibility to accommodate varying schedules and project
                timelines.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(5)}>
              <span>What is the recruitment process like?</span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(5) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(5) ? "content show-accor " : "content"
              }
            >
              <p>
                Our recruitment process begins with a thorough review of all
                applications received. Only candidates who meet the
                qualifications will be shortlisted for further consideration.
                Shortlisted candidates will be invited to participate in
                interviews, typically consisting of 2 to 3 rounds. During these
                interviews, our team assesses candidates' skills, experience,
                and fit for the role. We strive to ensure a comprehensive and
                fair evaluation process for all applicants.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(6)}>
              <span>Can I work part-time?</span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(6) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(6) ? "content show-accor " : "content"
              }
            >
              <p>
                While we do consider part-time arrangements, the feasibility
                largely depends on the project's scope and specific
                requirements. We strive to accommodate part-time work where
                possible, but we cannot guarantee it for all our projects due to
                varying project dynamics and client needs.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(7)}>
              <span>Are working hours flexible?</span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(7) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(7) ? "content show-accor " : "content"
              }
            >
              <p>
                We offer flexibility in working hours, however, please note that
                the degree of flexibility can vary based on the requirements of
                each project and the needs of our clients. While we prioritize
                accommodating our team members, our focus is on meeting our
                clients' needs and project deadlines.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-title blue" onClick={() => toggle(8)}>
              <span>Can I work from home?</span>
              <span>
                <IoIosArrowDropup
                  className={accordion.includes(8) ? "arrow" : ""}
                />
              </span>
            </div>

            <div
              className={
                accordion.includes(8) ? "content show-accor " : "content"
              }
            >
              <p>
                Work from home and hybrid work arrangements are a possibility.
                It is important to recognize that many of our projects involve
                intricate operations that necessitate ongoing collaboration
                among our team members. Our commitment to delivering timely
                results to our partners often requires close coordination within
                our team, which is why on-site presence may be necessary for
                certain projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-envi box-career padding30">
        <h2 className="title">FIND OUT MORE ABOUT WORKING IN OUR TEAM</h2>

        <iframe
          className="video-yt"
          loading="lazy"
          src="https://www.youtube.com/embed/kL0TWeEXIzk"
          title="Helmchron - Working in our team"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
