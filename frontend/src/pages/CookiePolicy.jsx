import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import { Helmet } from "react-helmet";
import mainImg from "../assets/images/CookiePolicy/1.webp";
import mainImg1 from "../assets/images/Privacy/2.jpeg";
import mainImg2 from "../assets/images/CookiePolicy/3.webp";

export default function CookiePolicy() {
  return (
    <div>
      <Helmet>
        <title>Cookie Policy | Helmchron</title>
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
        <h1 className="title">Cookie Policy</h1>
        <p style={styles.updatedDate}>Last Updated: 11-Nov-2024</p>

        <h2 className="subtitle">Welcome to Helmchron’s official website.</h2>
        <p style={styles.paragraph}>
          At Helmchron, we value your privacy and aim to provide you with a
          transparent understanding of how we use cookies on our website.
        </p>

        <h2 className="subtitle">What Are Cookies?</h2>
        <p style={styles.paragraph}>
          Cookies are small text files placed on your device to collect standard
          internet log information and visitor behavior information. Cookies
          help us enhance your experience on our site, analyze website traffic,
          and make our site more user-friendly.
        </p>

        <h2 className="subtitle">Types of Cookies We Use</h2>
        <p style={styles.paragraph}>
          We utilize five (5) types of cookies, as detailed below. Where
          applicable, you have the option to enable or disable each category
          according to your preferences. Your preferences are stored in an
          essential cookie on your device. Should you switch to a different
          device, you will need to reconfigure your preferences on that device.
          Additionally, if you delete cookies using the options provided by your
          device or software, you will need to reset your preferences. In the
          event you change your browser, you will be required to adjust your
          preferences in the new browser.
        </p>

        <span style={styles.subtitle}>1. Strictly Necessary Cookies</span>
        <p style={styles.paragraph}>
          These cookies are essential for the operation of our website, enabling
          core functionalities such as page navigation. These cookies do not
          collect personal information and are used solely to ensure the basic
          functionality of the website <br />
          List of necessary cookies with purpose and expiration
        </p>
        <span style={styles.subtitle}>2. Functionality Cookies</span>
        <p style={styles.paragraph}>
          These cookies are essential for the operation of our website, enabling
          core functionalities such as page navigation. These cookies do not
          collect personal information and are used solely to ensure the basic
          functionality of the website. <br />
          List of functionality cookies with purpose and expiration
        </p>
        <span style={styles.subtitle}>3. Analytics Cookies</span>
        <p style={styles.paragraph}>
          We use Google Analytics to collect anonymous information about how
          visitors use our website. These cookies help us improve website
          performance and understand user behavior, such as the number of
          visitors and popular pages. This anonymous information is never
          associated with any personal information, such as your email address,
          or other. You can opt out of Google Analytics by using the Google
          Analytics Opt-Out Tool.
        </p>
        <span style={styles.subtitle}>4. Third Party Cookie</span>
        <p style={styles.paragraph}>
          Our website may include content from third-party providers, such as
          YouTube videos, which may set cookies to enhance functionality or
          track user behavior. These cookies are beyond our direct control. You
          have the option to accept or refuse third-party cookies when
          interacting with this content. <br /> If you choose to refuse
          third-party cookies, content from these providers will not display,
          and you will see a third-party content information bar instead. This
          bar will inform you of the need for your consent to view the content
          and will provide an option to opt-in and a link to this Cookie Policy
          for more information. <br /> You can modify your preferences at any
          time through our Cookie Policy page. While we strive to keep links to
          third-party cookie policies and their details up to date, these may
          change without our prior knowledge.
        </p>
        <span style={styles.subtitle}>5. Contact Form Cookies</span>
        <p style={styles.paragraph}>
          When you submit a form (general inquiry or job application), we may
          use cookies to help manage your session and improve form usability.
          Please note that no sensitive personal information is stored in these
          cookies.
        </p>

        <h2 className="subtitle">Why We Use Cookies</h2>
        <p style={styles.paragraph}>We use cookies to:</p>

        <ul style={styles.list}>
          <li>Improve the performance and functionality of our website</li>
          <li>
            Analyze how our website is used to enhance the user experience
          </li>
          <li>Enable the smooth operation of our contact forms</li>
        </ul>

        <h2 className="subtitle">Managing Cookies</h2>
        <p style={styles.paragraph}>
          In compliance with applicable laws, you have the right to choose
          whether or not to accept cookies. However, please note that it is not
          possible to disable all cookies entirely. Strictly Necessary Cookies
          are essential for the basic functionality of our website and cannot be
          disabled. To manage your preferences for other types of cookies,
          please visit the Cookie Preference Center via the link below. You can
          update your cookie settings at any time. <br />
          Additionally, you can modify your cookie preferences directly through
          your browser settings. Most browsers allow you to accept or reject
          cookies and delete them once your session ends. If you wish to opt out
          of Google Analytics, you can use the Google Analytics Opt-Out Tool for
          further control over your data.
        </p>
        <center>
          <a href="#cookie">Cookie Preference Center</a>
        </center>

        <h2 className="subtitle">Cookie Policy Updates</h2>
        <p style={styles.paragraph}>
          We may update our cookie policy when relevant. Please review this page
          periodically to stay informed of any changes. This policy was last
          updated on 11-Nov-2024.
        </p>

        <h2 className="subtitle">Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions regarding our cookie policy, please contact
          us at office@helmchron.com
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
  subtitle: {
    fontWeight: "bold",
  },
};
