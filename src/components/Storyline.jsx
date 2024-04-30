import React from "react";
import Story2013 from "../assets/images/Home/Story2013.webp";
import Story2010 from "../assets/images/Home/Story2010.webp";
import Story2015 from "../assets/images/Home/Story2015.webp";
import Story2016 from "../assets/images/Home/Story2016.webp";
import Story2020 from "../assets/images/Home/Story2020.webp";
import Story2023 from "../assets/images/Home/Story2023.webp";

export default function Storyline() {
  return (
    <div>
      <div className="storyline container-main padding30">
        <h2 className="title">OUR STORYLINE</h2>

        <p style={{ textAlign: "center" }}>
          Our story began in 2010. and since then we have been providing
          services to international and local leaders.{" "}
        </p>

        <section className="storyline-box">
          <div className="box box1">
            <div className="text text1-1">
              <p>
                Our initial projects were community-focused, yet our vision was
                always global - to deliver solutions for international
                initiatives that enhance the quality of life for everyone
                everywhere.
              </p>
            </div>
            <div className="img-date img1-1">
              <img src={Story2013} alt="" />
              <span>2013</span>
            </div>
            <div className="text text1-2">
              <p>
                We were proud and enthusiastic to witness our outcomes
                materializing and our mission taking shape as we actively
                engaged in projects within the global market...
              </p>
            </div>
            <div className="img-date img1-2">
              <img src={Story2016} alt="" />
              <span>2016</span>
            </div>
            <div className="text text1-3">
              <p>
                Throughout the pandemic, our strong focus has been on projects
                within the pharmaceutical sector, aiming to achieve and sustain
                global health.
              </p>
            </div>
            <div className="img-date img1-3">
              <img src={Story2023} alt="" />
              <span>2023</span>
            </div>
          </div>
          <div className="story-line">
            <div className="item-round-line">
              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>
              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>

              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>

              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>

              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>

              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>
            </div>
          </div>
          <div className="box box2" style={{ alignItems: "start" }}>
            <div className="img-date img2-1">
              <span>2010</span>
              <img src={Story2010} alt="" />
            </div>
            <div className="text text2-1">
              <p>
                We are making the first steps towards our vision, gaining
                valuable perspective from contributing to big, complex teams and
                projects.
              </p>
            </div>

            <div className="img-date img2-2">
              <span>2015</span>
              <img src={Story2015} alt="" />
            </div>
            <div className="text text2-2">
              <p>
                As we continue our growth and development with additional
                worldwide projects, we fine-tune our strategy towards new
                business areas to elevate our impact.
              </p>
            </div>

            <div className="img-date img2-3">
              <span>2020</span>
              <img src={Story2020} alt="" />
            </div>
            <div className="text text2-3">
              <p>
                We are committed to development and innovation, aiming to master
                the challenges of manufacturing and sustainability. Enduring
                value for the coming generations is our goal.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
