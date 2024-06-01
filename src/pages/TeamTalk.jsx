import React from "react";
import "../assets/scss/news-post.scss";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import mainImg from "../assets/images/News/slika1.jpg";
import mainImg1 from "../assets/images/News/slika2.jpg";
import mainImg2 from "../assets/images/News/slika3.jpg";

export default function TeamTalk() {
  return (
    <div>
      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          {[mainImg, mainImg1, mainImg2].map((img, index) =>
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-100"
                src={img}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          )}
        </CCarousel>

        <div className="box-img">
          {[mainImg, mainImg1, mainImg2].map((img, index) =>
            <div key={index}>
              <img style={{ objectFit: "fill" }} src={img} alt="Main" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main padding30">
        <h1 className="title">Introducing TeamTalk</h1>

        <p>
          We are thrilled to present TeamTalk, our new initiative created to
          provide a deeper understanding of trending topics within our domain
          highlighting the primary drivers behind our mission and commitment to
          operational excellence.
        </p>

        <p>
          TeamTalk serves as a platform where our team members share insights
          into various aspects of our operations, culture, and vision. By
          discussing industry trends, analyzing market dynamics, and envisioning
          the evolving landscape, we aim to deliver valuable insights and future
          perspectives to our community.
        </p>

        <p>
          In addition to external reflections, we will share how our values
          shape our strategy, decisions, and results, ultimately impacting our
          partners' outcomes. TeamTalk will highlight our expertise, lessons
          learned, and success stories, striving to inspire and inform.
        </p>

        <p>
          Aligned with our dedication to socially responsible initiatives, we
          wish to motivate and empower children and teenagers to embrace a
          healthy lifestyle, fostering discipline and cultivating teamwork
          skills along the way.
        </p>

        <p>
          Join the conversation by sharing your questions or topics you would
          like to hear us discuss. Welcome to TeamTalk!
        </p>

        <div className="episodes">
          <div>
            <h2>Helmchron TeamTalk - Our Values</h2>
            <iframe
              width="650"
              height="400"
              src="https://www.youtube.com/embed/hqtV0RveMQQ"
              title="Helmchron TeamTalk - Our Values"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <p>
              In this episode of TeamTalk, we are introducing our team member,
              Anja Andjelkovic, sharing what inspires us. Join the conversation
              by sharing questions and topics you would like us to address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
