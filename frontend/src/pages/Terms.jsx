import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import mainImg from "../assets/images/Legal/1.webp";
import mainImg1 from "../assets/images/Legal/2.webp";
import mainImg2 from "../assets/images/Legal/3.webp";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/slider.scss";
import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <div>
      <Helmet>
        <title>Terms and Conditions | Helmchron</title>
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

      <div className="container-sx" style={styles.container}>
        <h1 className="title">TERMS AND CONDITIONS</h1>
        <p style={styles.updatedDate}>Last Updated: 11-Nov-2024</p>

        <h2 className="subtitle">Welcome to Helmchron’s official website.</h2>
        <p style={styles.paragraph}>
          By accessing or using this site, you agree to comply with and be bound
          by these Terms and Conditions, which govern your use of the website
          and any materials or features available on the site. Please read these
          Terms and Conditions carefully before accessing any part of the site.
          If you do not agree with these Terms and Conditions, please refrain
          from using our website.
        </p>

        <h2 className="subtitle">Purpose of the Website</h2>
        <p style={styles.paragraph}>
          Helmchron provides this website for informational purposes only, to
          present our company, services, competences, references, and other
          company-related topics. The content on this site is intended to
          provide a general overview of our expertise in the plant design,
          engineering, project management, and related services. <br /> Please
          note that information on this website may be subject to updates or
          changes and may not always be comprehensive.
        </p>

        <h2 className="subtitle">Intellectual Property</h2>
        <p style={styles.paragraph}>
          The content on this website, including but not limited to all designs,
          text, images, white papers, press releases, and other materials, is
          protected by copyright laws and is either owned by Helmchron or used
          under license from the copyright holder. You may not copy, reproduce,
          transmit, display, perform, distribute, rent, sublicense, modify,
          store for future use, or otherwise use any part of this content
          without Helmchron’s prior written consent, except as permitted by
          applicable copyright laws. If you are granted permission to post
          content, you are responsible for ensuring compliance with copyright
          and other relevant legal requirements.
        </p>

        <h2 className="subtitle">Trademarks</h2>
        <p style={styles.paragraph}>
          The trademarks, logos, images, and service marks of Helmchron
          displayed on this site are owned by Helmchron and may not be used
          without prior permission, and only with appropriate acknowledgment.
        </p>

        <h2 className="subtitle">User Privacy, Cookies and Tracking</h2>
        <p style={styles.paragraph}>
          Your use of this website is also governed by our Privacy Policy, which
          explains how we collect, use, and protect your personal information.
          Please review our <a href="/">Privacy Policy</a> for more details on
          how we handle your data. <br /> We use cookies to improve user
          experience, analyze website traffic, and provide relevant content. By
          continuing to use this site, you consent to the use of cookies as
          described in our <a href="/">Cookie Policy</a>.
        </p>

        <h2 className="subtitle">
          Warranties and Limited Liability Disclaimer
        </h2>
        <p style={styles.paragraph}>
          The materials and services provided on this site are offered "as is,"
          without any warranties of any kind, including but not limited to
          warranties of merchantability, suitability for a particular purpose,
          or non-infringement of intellectual property. The content provided is
          general in nature and is not intended to address the specific needs of
          any individual or entity, nor should it be considered professional
          advice.
        </p>
        <p style={styles.paragraph}>
          While Helmchron strives to ensure that the information presented on
          this website is accurate and up-to-date, we assume no responsibility
          for, and make no representations regarding, the accuracy or
          completeness of the information presented. Helmchron reserves the
          right to make changes to the materials, services, and/or products
          featured on this site at any time, without prior notice.
        </p>
        <p style={styles.paragraph}>
          Helmchron, along with any third parties mentioned on this site, will
          not be liable for any damages of any kind, including but not limited
          to those resulting from lost profits, lost data, or business
          interruptions, arising from the use, inability to use, or the outcomes
          of using this site, any linked websites, or the materials,
          information, or services provided on such sites. This applies
          regardless of whether the claim is based on warranty, contract, or any
          other legal theory, and whether or not Helmchron was advised of the
          potential for such damages. If your use of the materials, information,
          or services from this site leads to the need for repairs, servicing,
          or correction of equipment or data, you will bear all associated
          costs.
        </p>

        <h2 className="subtitle">External Links</h2>
        <p style={styles.paragraph}>
          For your convenience, this website may include links to other sites
          that are not controlled, affiliated, or associated with Helmchron.
          Therefore, Helmchron makes no representations regarding the use of
          these sites or their terms of use, nor does it control or guarantee
          the accuracy, integrity, or quality of any information, photos,
          videos, or other materials on those sites. The presence or absence of
          a link to another site does not imply any endorsement by Helmchron of
          that site, its provider, or its content.
        </p>

        <h2 className="subtitle">Accessibility Features</h2>
        <p style={styles.paragraph}>
          At Helmchron, we are committed to making our website accessible to all
          users, including those with disabilities. We believe in equal access
          to information and strive to provide a website experience that
          respects the needs of all individuals. <br /> To support this goal, we
          have implemented the following accessibility features:
        </p>
        <ul style={styles.list}>
          <li>
            Eye-Disease-Friendly Code: Our website includes specialized coding
            adjustments designed to improve visibility and readability for users
            with various eye conditions, enhancing the experience for
            individuals with low vision, color blindness, and other visual
            impairments.
          </li>
          <li>
            Keyboard Navigation: We have optimized our website to ensure it is
            navigable by keyboard for those who rely on assistive technologies.
          </li>
          <li>
            Text Alternatives: Images and interactive elements on our website
            include alternative text to provide descriptions for screen readers.
          </li>
          <li>
            Color Contrast and Readability: We use high-contrast color schemes
            and readable font sizes to enhance content visibility and
            readability.
          </li>
        </ul>

        <h2 className="subtitle">Feedback</h2>
        <p style={styles.paragraph}>
          We welcome feedback from all users on their website experience. If you
          encounter any accessibility issues or have suggestions on how we can
          improve, please contact us at office@helmchron.com.
        </p>

        <p style={styles.paragraph}>
          These Terms and Conditions were last updated on November 11, 2024.
          Helmchron may revise these Terms and Conditions at any time. Revisions
          will be posted on this "Terms and Conditions" page and users are
          responsible for reviewing the page from time to time to ensure
          compliance.
        </p>
      </div>
    </div>
  );
}

const styles = {
  updatedDate: {
    fontSize: "0.9rem",
    textAlign: "right",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "15px",
  },
};
