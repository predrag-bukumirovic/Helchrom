import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/policy.png";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div className="container-main">
      <div className=" privacy-policy">
        <div className="policy-logo">
          <img src={Logo} alt="" />
        </div>

        <h1 className="title">
          {t("plicy.title")}
        </h1>

        <h2>
          {t("plicy.sub1")}
        </h2>

        <p>
          {t("plicy.text1")}
        </p>

        <p>
          {t("plicy.text2")}
        </p>

        <p>
          {t("plicy.text3.text")} <i>{t("plicy.text3.textI")}</i>
        </p>

        <p>
          {t("plicy.text4")}
        </p>

        <h3>
          {t("plicy.sub2")}
        </h3>

        <p>
          {t("plicy.text5")}{" "}
          <a href="mailto:office@helmchron.com">office@helmchron.com</a>.
        </p>
        <h3>
          {t("plicy.sub3")}
        </h3>

        <p>
          {t("plicy.text6")}
        </p>

        <ul>
          <li>
            {t("plicy.text6ul.li1")}
          </li>
          <li>
            {" "}{t("plicy.text6ul.li2")}
          </li>
          <li>
            {" "}{t("plicy.text6ul.li3")}
          </li>
          <li>
            {" "}{t("plicy.text6ul.li4")}{" "}
          </li>
        </ul>

        <p>
          {t("plicy.text7")}{" "}
        </p>

        <p>
          We collect the stated information only if you voluntarily provide it
          to us.{" "}
        </p>

        <p>
          We do not sell or transfer your personal data to any third party for
          their own direct use, unless we obtain your explicit consent. However,
          we may share your personal data with third parties, such as service
          providers, for any of the following purposes:
        </p>

        <ul>
          <li>Technical maintenance of our website,</li>
          <li>
            Responding to requests of legitimate authorities or when required by
            the law or other regulations,
          </li>
          <li>Responding to a complaint or security threat.</li>
        </ul>
        <h3>Processing your data</h3>

        <p>For the following purposes:</p>

        <ol>
          <li>
            <b>Maintenance of our website</b> - when you access our website,
            your browser automatically sends us information about your visit
            that is temporarily saved (IP address, time and date of your visit,
            geographic location, resources you have accessed etc.). We may use
            this information to secure our website, as well.{" "}
          </li>
          <li>
            <b>Responding to your requests, inquiries and comments</b> - We may
            use your personal information to respond to your request. Depending
            on the type of your request, we may need to collect different types
            of data. This is based on our interest to respond to your request in
            an optimal and comprehensive manner.
          </li>
          <li>
            <b>Website analytics</b>
          </li>
        </ol>

        <h3>Your rights regarding your personal data</h3>

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
        <h3>Data security</h3>

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
