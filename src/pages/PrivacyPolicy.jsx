import React from "react";
import { useTranslation } from "react-i18next";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import mainImg from "../assets/images/Privacy/1.jpg";
import mainImg1 from "../assets/images/Privacy/2.jpeg";
import mainImg2 from "../assets/images/Privacy/3.jpeg";
import "@coreui/coreui/dist/css/coreui.min.css";
import "../assets/scss/slider.scss";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div className="container-main">
      <Helmet>
        <title>Privacy policy | Helmchron</title>
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

      <div className="padding30 privacy-policy">
        <h1 className="title">
          {t("plicy.title")}
        </h1>

        <h2 dangerouslySetInnerHTML={{ __html: t("plicy.sub1") }} />
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text1") }} />
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text2") }} />
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text3.text") }} />
        <i dangerouslySetInnerHTML={{ __html: t("plicy.text3.textI") }} />
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text4") }} />
        <h3
          className="sub-title"
          dangerouslySetInnerHTML={{ __html: t("plicy.sub2") }}
        />
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text5") }} />
        <h3
          className="sub-title"
          dangerouslySetInnerHTML={{ __html: t("plicy.sub3") }}
        />
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text6") }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t("plicy.text6ul.li1") }} />
          <li dangerouslySetInnerHTML={{ __html: t("plicy.text6ul.li2") }} />
          <li dangerouslySetInnerHTML={{ __html: t("plicy.text6ul.li3") }} />
          <li dangerouslySetInnerHTML={{ __html: t("plicy.text6ul.li4") }} />
        </ul>
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text7") }} />
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text8") }} />
        <p dangerouslySetInnerHTML={{ __html: t("plicy.text9") }} />

        <ul>
          <li dangerouslySetInnerHTML={{ __html: t("plicy.text9ul.li1") }} />
          <li dangerouslySetInnerHTML={{ __html: t("plicy.text9ul.li2") }} />
          <li dangerouslySetInnerHTML={{ __html: t("plicy.text9ul.li3") }} />
        </ul>
        <h3
          className="sub-title"
          dangerouslySetInnerHTML={{ __html: t("plicy.purposes.sub") }}
        />

        <p dangerouslySetInnerHTML={{ __html: t("plicy.purposes.text1") }} />

        <ol>
          <li dangerouslySetInnerHTML={{ __html: t("plicy.purposes.li1") }} />
          <li dangerouslySetInnerHTML={{ __html: t("plicy.purposes.li2") }} />
          <li dangerouslySetInnerHTML={{ __html: t("plicy.purposes.li3") }} />
        </ol>

        <h3 className="sub-title">Your rights regarding your personal data</h3>

        <p>
          We declare that you have certain rights in regards to the use and
          processing of your personal data.
        </p>

        <p>You have the following rights:</p>

        <ul>
          <li>The right to request access to data we have about you,</li>
          <li>
            The right to request the copy of your data in electronic form,
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
        <p>
          You can withdraw your consent for data processing at any time.
          However, please note that this withdrawal does not affect the
          lawfulness of data processing based on your consent prior to its
          withdrawal.{" "}
        </p>
        <h3 className="sub-title">Data security</h3>

        <p>
          To protect your personal data from loss, misuse, disclosure,
          alteration, destruction or unauthorized access, we are taking
          reasonable steps in a technical and organizational way. However, we
          can not guarantee full security of your personal data and we disclaim
          all liability and damages caused by loss, misuse, disclosure,
          alteration, destruction or unauthorized access. Please take every
          precaution to protect your personal data you submit to our website.{" "}
        </p>
        <p>
          We recommend that you read this Privacy policy on a regular basis to
          stay up-to-date with all changes.{" "}
        </p>

        <span style={{ float: "right" }}>February, 2023.</span>
      </div>
    </div>
  );
}
