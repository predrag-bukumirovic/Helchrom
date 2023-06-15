import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import mainImg from "../assets/images/Legal/1.jpg";
import mainImg1 from "../assets/images/Legal/2.jpeg";
import mainImg2 from "../assets/images/Legal/3.jpeg";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/slider.scss";
import { Helmet } from "react-helmet";

export default function LegalStatement() {
  return (
    <div className="container-main">
      <Helmet>
        <title>Legal statement | Helmchron</title>
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

      <div className=" legal-statement">
        <h1 className="title">Legal statement</h1>

        <p>
          The information on this website is only for the purpose of presenting
          our company (see page <i>About us</i>) and Our Competencies and
          Services, informing and educating. Information on this website can not
          be substituted for professional consultation and we recommend that you
          seek professional verification. All the information presented is based
          on our present knowledge and experience to the best of our knowledge.
        </p>
        <p>
          Accessing and using this website, you confirm that you have read and
          understood this Legal statement.
        </p>

        <h2 className="sub-title">No warranty and liability</h2>

        <p>
          Helmchron is dedicated to providing accurate and up-to-date
          information, however, we make no representations or warranties as to
          the accuracy or completeness of the information provided on this
          website. We disclaim any liability or responsibility for the use of
          this website. We may change this website at any time, but do not
          assume any responsibility to update it. All access and use of this
          website is at your own risk.
        </p>
        <p>
          Helmchron or any other party involved in creating and delivering of
          this website shall not be liable in any way for any direct, indirect,
          incidental, consequential or corrective damages arising from your
          access, use or inability to use this website or any errors and
          omissions in the content.
        </p>

        <h3 className="sub-title">Links to third parties</h3>
        <p>
          Helmchron disclaims any liability for information on third party
          websites and its use, even if they can be accessed from our website.
          These links are provided for your convenience only.
        </p>
        <h3 className="sub-title">Copyright and intellectual property</h3>
        <p>
          Content on this website (excluding banner photos) are subject to
          copyright and other intellectual property protection laws. This
          particularly applies to our trade name HELMCHRON and trademark
          Chemistry Connects Us.
        </p>
        <p>
          Content (excluding banner photos) may not be reproduced, disseminated,
          modified or used in other ways unless permitted under applicable laws.
          Logo and trademark can be commercially used upon our explicit written
          permission.
        </p>

        <span style={{ float: "right" }}>March, 2023.</span>
      </div>
    </div>
  );
}
