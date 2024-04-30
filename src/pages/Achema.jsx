import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import mainImg from "../assets/images/Achema/baner1.webp";
import mainImg1 from "../assets/images/Achema/baner2.webp";
import mainImg2 from "../assets/images/Achema/baner3.webp";
import gustavo from "../assets/images/Achema/gustavo.webp";
import school from "../assets/images/Achema/school.webp";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/slider.scss";
import "../assets/scss/achema.scss";
import { Helmet } from "react-helmet";

export default function Achema() {
  return (
    <div>
      <Helmet>
        <title>Achema | Helmchron</title>
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

        <div>
          <div className="container-main achema padding30">
            <h1 className="title">Achema 2022</h1>
            <center className="text-title">
              <p className="sub">22 - 26 August 2022 I Frankfurt, Germany</p>
              <p style={{ marginTop: 50 }}>
                ACHEMA 2022 brought together industry leaders, researchers, and
                innovators from around the world and our team attended it.{" "}
                <br /> The event showcased the latest trends and innovations in
                the chemical and process industries and provided a platform for
                discussion and collaboration on some of the most pressing
                challenges facing the industry today.
              </p>
            </center>

            <div className="day1">
              <div>
                <span>Day 1.</span>
                <p>
                  The focus of the first day was on the latest trends and
                  innovations in the chemical and process industries, with a
                  particular emphasis on sustainability and digitalization. One
                  of the most talked-about presentations of the day was a
                  keynote speech by Dr. Anna Lennquist, the Chief Sustainability
                  Officer at H&M Group. Dr. Lennquist discussed the importance
                  of sustainability in the fashion industry and highlighted some
                  of the ways that H&M is working to reduce its environmental
                  impact. <br /> Also, several new digital technologies designed
                  to streamline and optimize various industrial processes were
                  presented. This included new software platforms for process
                  monitoring and control, as well as cutting-edge sensors and
                  instrumentation for real-time data analysis.
                </p>
              </div>
              <div>
                <img src={gustavo} alt="gustavo" />
              </div>
            </div>

            <div className="day2">
              <span>Day 2.</span>
              <p>
                The second day of ACHEMA 2022 was dedicated to the future of
                chemical engineering and process technology. There were several
                panel discussions and presentations on topics such as artificial
                intelligence, robotics, and Industry 4.0. One of the standout
                events of the day was a panel discussion featuring leading
                experts in the field of chemical engineering. The panelists
                discussed the challenges and opportunities facing the industry
                in the years to come, including the need to embrace new
                technologies and approaches to manufacturing. <br /> There were
                also several presentations on the latest developments in
                renewable energy and sustainable manufacturing. These included
                new processes for converting waste materials into valuable
                products, as well as new technologies for capturing and storing
                carbon emissions.
              </p>
            </div>

            <div className="day3">
              <div>
                <img src={school} alt="school" />
              </div>
              <div>
                <span>Day 3.</span>
                <p>
                  The main topics of the third day were the latest trends and
                  innovations in the pharmaceutical and biotechnology
                  industries. There were several presentations and panel
                  discussions on topics such as drug discovery, bioprocessing,
                  and personalized medicine. One of the most talked-about events
                  was a speech by Dr. Jennifer Doudna, the co-discoverer of
                  CRISPR-Cas9 gene editing technology. Dr. Doudna discussed the
                  potential of gene editing to revolutionize medicine and
                  highlighted some of the challenges and ethical considerations
                  associated with this technology. <br /> Other highlights of
                  the day included presentations on the latest developments in
                  bioprocessing and drug delivery, as well as new technologies
                  for diagnosing and treating diseases.
                </p>
              </div>
            </div>

            <div className="day4">
              <span>Day 4.</span>
              <p>
                The final day of ACHEMA 2022 was focused on the latest trends
                and innovations in laboratory and analytical equipment. The
                future of analytical chemistry was also discussed, including the
                latest developments in analytical instrumentation and
                techniques, as well as the challenges and opportunities facing
                the field in the years to come. <br /> Latest developments in
                laboratory automation and robotics and technologies for sample
                preparation and handling were also presented.
              </p>
              <p>
                As ACHEMA 2022 came to a close, attention began to turn towards
                the next edition of the event, ACHEMA 2024. One of the main
                themes of ACHEMA 2024 is likely to be the continued focus on
                sustainability and digitalization. As the world becomes
                increasingly conscious of the need to reduce its environmental
                impact and embrace new technologies, the chemical and process
                industries will be at the forefront of this transformation.
              </p>
            </div>

            <p>We are eager to visit ACHEMA 2024.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
