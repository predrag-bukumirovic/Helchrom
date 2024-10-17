import React from "react";

import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";

// import { useNavigate } from "react-router-dom";

import icon1 from "../assets/images/Home/1.png";
import icon2 from "../assets/images/Home/2.png";
import icon3 from "../assets/images/Home/3.png";
import icon4 from "../assets/images/Home/4.png";
import icon5 from "../assets/images/Home/5.png";
import { useTranslation } from "react-i18next";

export default function IconServices() {
  const { t } = useTranslation();

  // const navigate = useNavigate(); // Definiši useNavigate

  // // Funkcija za rukovanje klikom na ikonicu
  // const handleIconClick = sectionId => {
  //   startTransition(() => {
  //     navigate(`/our-services#${sectionId}`);
  //   });
  // };

  return (
    <div className="our-home">
      <div className="services-icon">
        {[
          {
            id: 1,
            icon: icon1,
            title: t("services.icon.title1"),
            text: t("services.icon.text1"),
            section: "section1"
          },
          {
            id: 2,
            icon: icon2,
            title: t("services.icon.title2"),
            text: t("services.icon.text2"),
            section: "section2"
          },
          {
            id: 3,
            icon: icon3,
            title: t("services.icon.title3"),
            text: t("services.icon.text3"),
            section: "section3"
          },
          {
            id: 4,
            icon: icon4,
            title: t("services.icon.title4"),
            text: t("services.icon.text4"),
            section: "section4"
          },
          {
            id: 5,
            icon: icon5,
            title: t("services.icon.title5"),
            text: t("services.icon.text5"),
            section: "section5"
          }
        ].map((item, index) =>
          <a
            href="/our-services"
            style={{ cursor: "pointer" }}
            // onClick={() => handleIconClick(item.section)}
            key={index}
            data-aos="zoom-in"
          >
            <div>
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
