import React from "react";
// import { useTranslation } from "react-i18next";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import mainImg from "../assets/images/Privacy/1.jpg";
import mainImg1 from "../assets/images/Privacy/2.jpeg";
import mainImg2 from "../assets/images/Privacy/3.jpeg";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/slider.scss";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  // const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Privacy policy | Helmchron</title>
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

      <div className="container-main" style={styles.container}>
        <h1 className="title">Privacy policy</h1>
        <p style={styles.updatedDate}>Last Updated: 11-Nov-2024</p>

        <h2 style={styles.heading}>Welcome to Helmchron’s official website.</h2>
        <p style={styles.paragraph}>
          This Privacy Policy outlines how Helmchron collects, uses, and
          discloses personal information from visitors to our website, including
          the types of data we collect, how we protect it, and your rights under
          applicable laws regarding your personal data. We process the personal
          data you provide through this website and via email. <br /> <br />Personal
          data refers to any information related to an identifiable individual,
          including details that can directly or indirectly identify a person,
          such as their name, location, identification number, or other personal
          characteristics. <br />
          <br />Our website is not intended for individuals under the age of 18.
          We do not knowingly collect personal data from minors. We strongly
          encourage all minors to seek the consent of their parents or guardians
          before disclosing any personal information online, including on this
          website.
        </p>

        <h2 style={styles.heading}>Information We Collect from Users</h2>
        <p style={styles.paragraph}>
          We collect personal information directly from you when you use our
          website, including when you provide us with personal information
          through a forms on our site. <br />We collect the following categories
          of personal information about you directly from you:
        </p>
        <ul style={styles.list}>
          <li>
            Identifiers: Such as your name, address, email address, phone
            number, or similar identifiers; and
          </li>
          <li>
            Professional or Employment-related information: Such as employer,
            job title, experience or expertise, professional contact
            information.
          </li>
        </ul>
        <p style={styles.paragraph}>
          We automatically collect personal information through cookies when you
          use our site. For more details, please refer to our{" "}
          <a href="/">Cookie Policy</a>. <br />The following categories of
          personal information are collected automatically during your use of
          our site:
        </p>
        <ul style={styles.list}>
          <li>
            Identifiers: Such as your IP address, name, email address, and other
            contact information.
          </li>
          <li>
            Internet and Network Activity: Information about your online
            activity, including browser type, operating system, browsing
            history, search history, and interactions with websites, apps, or
            ads, as well as access logs and the referring URL.
          </li>
          <li>
            Inferences: Insights derived from the above data, such as
            preferences and interests.
          </li>
        </ul>
        <p style={styles.paragraph}>
          We collect the stated information only when you voluntarily provide
          it, and process personal information based on your consent where
          required by applicable law.
        </p>
        <p style={styles.paragraph}>
          We kindly request that you refrain from providing any sensitive
          personal data. This includes information about an individual's racial
          or ethnic origin, political opinions, religious or philosophical
          beliefs, as well as genetic data, biometric data used for unique
          identification, health-related data, or other.
        </p>

        <h2 style={styles.heading}>Purpose of Processing Your Personal Data</h2>
        <p style={styles.paragraph}>
          Reasons we process your personal data include:
        </p>
        <ul style={styles.list}>
          <li>
            Responding to your request, comments or inquiries delivered to us
            via contact form or email address,
          </li>
          <li>Measuring website performance (analytics),</li>
          <li>Technical maintainance of our website,</li>
          <li>Aligning with regulations,</li>
          <li>
            Responding to requests of legitimate authorities or when required by
            the law or other regulations,
          </li>
          <li>Responding to a complaint or security threat.</li>
        </ul>
        <p style={styles.paragraph}>
          We do not sell or transfer your personal data to any third party for
          their own direct use, unless we obtain your explicit consent. However,
          we may share your personal data with third parties, such as service
          providers, for any of the following purposes:
        </p>
        <ul style={styles.list}>
          <li>
            Maintenance of our website. When you access our website, your
            browser automatically sends us information about your visit that is
            temporarily saved (IP address, time and date of your visit,
            geographic location, resources you have accessed,etc.). We may use
            this information to secure our website, as well.
          </li>
          <li>
            Responding to your requests, inquiries and comments. We may use your
            personal information to respond to your request. Depending on the
            type of your request, we may need to collect different types of
            data. This is based on our interest to respond to your request in an
            optimal and comprehensive manner.
          </li>
          <li>Website analytics</li>
          <li>
            For Legal and Safety Purposes. We may disclose your personal
            information to comply with legal requirements and when necessary to
            investigate, prevent, or take action against illegal activities,
            suspected fraud, safety threats, or other related activities.
          </li>
        </ul>

        <h2 style={styles.heading}>Your Rights in Relation to Personal Data</h2>
        <p style={styles.paragraph}>
          We declare that you have certain rights regarding the use and
          processing of your personal data, in accordance with applicable
          regulations. <br /> You have the following rights:
        </p>

        <ul style={styles.list}>
          <li>The right to request access to data we have about you,</li>
          <li>
            The right to request the copy of your data in electronic form,
          </li>
          <li>
            The right to request details about how we process your information,
          </li>
          <li>
            The right to have your data erased or to restrict its processing,
          </li>
          <li>
            The right to rectify or correct any personal data that is incorrect
            or incomplete,
          </li>
          <li>The right to data portability.</li>
        </ul>
        <p style={styles.paragraph}>
          You can withdraw your consent for data processing at any time.
          However, please note that this withdrawal does not affect the
          lawfulness of data processing based on your consent prior to its
          withdrawal. <br />
          To exercise your rights, please contact us using the details in the
          “Contact Us” page of this website.
        </p>

        <h2 style={styles.heading}>Data Retention</h2>
        <p style={styles.paragraph}>
          Your personal information will be kept only as long as necessary for
          Helmchron`s business operations and/or legal requests and in line with
          data privacy laws.
        </p>

        <h2 style={styles.heading}>Data Security</h2>
        <p style={styles.paragraph}>
          To protect your personal data from loss, misuse, disclosure,
          alteration, destruction or unauthorized access, we are taking
          reasonable steps in a technical and organizational way. However, we
          can not guarantee full security of your personal data and we disclaim
          all liability and damages caused by loss, misuse, disclosure,
          alteration, destruction or unauthorized access. Please take every
          precaution to protect your personal data you submit to our website.
        </p>

        <h2 style={styles.heading}>Third Party Links</h2>
        <p style={styles.paragraph}>
          Our site may contain links to third-party websites, which operate
          under their own privacy policies, not ours. We do not assume
          responsibility for the data practices of these third-party sites and
          recommend that you review their privacy policies before accessing or
          using them.
        </p>

        <h2 style={styles.heading}>Updates to This Privacy Notice</h2>
        <p style={styles.paragraph}>
          We may update this Privacy Policy periodically, and any changes will
          be posted on this page. We recommend reviewing the policy regularly to
          stay informed. This version is current as of the effective date above.
        </p>

        <h2 style={styles.heading}>Contact Details</h2>
        <p style={styles.paragraph}>
          The data controller is Helmchron, a legal entity with its registered
          office at Bulevar Arsenija Čarnojevića 133, 11000 Belgrade, Serbia.
          For further details on the safeguards in place or to exercise any of
          your rights, please contact us via email at office@helmchron.com or by
          phone at +381 64 487 94 19.
        </p>
      </div>
    </div>
  );
}

const styles = {
  updatedDate: {
    fontSize: "0.9rem",
    textAlign: "right",
    marginBottom: "20px"
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "20px 0 10px"
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "15px"
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "15px"
  }
};
