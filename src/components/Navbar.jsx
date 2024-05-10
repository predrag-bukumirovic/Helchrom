import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import ChemistryConnects from "../assets/images/ChemistryConnects.png";
import "../assets/scss/navbar.css";
import { BiChevronDown } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineCaretDown } from "react-icons/ai";
import TikTok from "../assets/images/tiktok.webp";
import Instagram from "../assets/images/instagram.webp";
import Linkedine from "../assets/images/linkedine.webp";
import Twitter from "../assets/images/twitter.webp";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [downMenuAbout, setDownMenuAbout] = useState(false);
  const [downMenu, setDownMenu] = useState(false);
  const { t } = useTranslation();

  function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
      <li>
        <a className={path === href ? "active" : ""} href={href} {...props}>
          {children}
        </a>
      </li>
    );
  }

  return (
    <div className="navbar-box">
      <div
        className="container-main"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 2000
        }}
      >
        <div
          onClick={() => setOpenMenu(false)}
          className={"menu-background " + (openMenu && "active")}
        />
        <div className="logo">
          <a href="/">
            <img style={{ marginRight: 5 }} src={logo} alt="Helmchron Logo" />
            <img className="logo-connects" src={ChemistryConnects} alt="" />
          </a>
        </div>
        <div className="menu">
          <nav>
            <ul className={`${openMenu ? "active" : "menu"}`}>
              <div className="logo-mobile-menu">
                <img src={logo} alt="" />
                <TfiClose
                  className="close-menu"
                  onClick={() => setOpenMenu(false)}
                />
              </div>
              <li>
                <a href="/">
                  {t("navbar.home")}
                </a>
              </li>
              <li>
                <span
                  className="about-us"
                  onClick={() => setDownMenuAbout(!downMenuAbout)}
                >
                  {t("navbar.about_us")} <BiChevronDown />
                </span>
                <ol
                  style={{ display: "none" }}
                  className={`${downMenuAbout ? "active" : "menu-down"}`}
                >
                  <li>
                    <CustomLink href="/about-us/who-are-we">
                      {t("navbar.who_are_we")}
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink href="/about-us/our-team">
                      {t("navbar.our_team")}
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink href="/about-us/our-vision-and-mission">
                      {t("navbar.vision_mission")}
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink href="/about-us/our-values">
                      {t("navbar.our_values")}
                    </CustomLink>
                  </li>
                </ol>
              </li>
              <li>
                <span
                  onClick={() => setDownMenu(!downMenu)}
                  className="com-ser"
                >
                  {t("navbar.competences_services")} <BiChevronDown />
                </span>
                <ol
                  style={{ display: "none" }}
                  className={`${downMenu ? "active" : "menu-down"}`}
                >
                  <li>
                    <CustomLink href="/competences&services/our-core-competencies">
                      {t("navbar.our_core")}
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink href="/competences&services/our-services">
                      {t("navbar.our_services")}
                    </CustomLink>
                  </li>
                </ol>
              </li>

              <CustomLink href="/references">References</CustomLink>

              <CustomLink href="/career">
                {t("navbar.career")}
              </CustomLink>

              <CustomLink href="/news">
                {t("navbar.news")}
              </CustomLink>

              <CustomLink href="/blog">
                {t("navbar.blog")}
              </CustomLink>

              <CustomLink href="/contact">
                {t("navbar.contact")}
              </CustomLink>

              {/* Mreze */}
              <div className="internet-mob">
                <p dangerouslySetInnerHTML={{ __html: t("lets") }} />
                <div>
                  <a
                    href="https://www.linkedin.com/company/helmchron/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      style={{ marginLeft: 0 }}
                      src={Linkedine}
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://twitter.com/HelmchronGlobal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="Instagram" />
                  </a>
                  <a
                    href="https://www.instagram.com/helmchron_global/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@helmchron_global"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={TikTok} alt="TikTok" />
                  </a>
                </div>
              </div>
              {/* Mreze */}
            </ul>
          </nav>
        </div>

        <ul className="lng-con">
          <li style={{ width: 55 }}>
            <div
              className={`lng-change ${downMenu ? "active" : ""}`}
              onClick={() => setDownMenu(!downMenu)}
            >
              EN <AiOutlineCaretDown className="down-icon" />
            </div>
            <ol
              style={{ display: "none", width: 150 }}
              className={`${downMenu ? "active" : ""}`}
            >
              <li
                style={{
                  fontSize: 11,
                  color: "red",
                  position: "absolute",
                  width: 100,
                  background: "#fff",
                  padding: 10
                }}
              >
                trenutno je dostupan samo engleski jezik
              </li>
            </ol>
          </li>

          <div className="burger-icon" onClick={() => setOpenMenu(!openMenu)}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </ul>
      </div>
    </div>
  );
}
