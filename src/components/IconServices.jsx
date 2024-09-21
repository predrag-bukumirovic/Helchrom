import React from "react";

import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";

import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";
import icon5 from "../assets/images/Home/5.png";
import { useTranslation } from "react-i18next";

export default function IconServices() {
  const { t } = useTranslation();

  return (
    <div className="our-home">
      <div className="services-icon">
        {[
          {
            id: 1,
            icon: icon1,
            title: t("services.icon.title1"),
            text: t("services.icon.text1"),
            link: "/our-services"
          },
          {
            id: 2,
            icon: icon2,
            title: t("services.icon.title2"),
            text: t("services.icon.text2"),
            link: "/our-services"
          },
          {
            id: 3,
            icon: icon3,
            title: t("services.icon.title3"),
            text: t("services.icon.text3"),
            link: "/our-services"
          },
          {
            id: 4,
            icon: icon4,
            title: t("services.icon.title4"),
            text: t("services.icon.text4"),
            link: "/our-services"
          },
          {
            id: 5,
            icon: icon5,
            title: t("services.icon.title5"),
            text: t("services.icon.text5"),
            link: "/our-services"
          }
        ].map((item, index) =>
          <a key={item.id} href={item.link} style={{ textDecoration: "none" }}>
            <div key={index} data-aos="zoom-in">
              <img src={item.icon} alt="" />
              <h3 style={{ color: "#000" }}>
                {item.title}
              </h3>
              <p>
                {item.text}
              </p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
