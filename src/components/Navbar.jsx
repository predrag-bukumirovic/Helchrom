import React, { useState, useEffect, useMemo } from "react";
import logo from "../assets/images/logowhite.webp";
import logoMobile from "../assets/images/logo.webp";
import ChemistryConnects from "../assets/images/CHEMISTRYCONNECTSUS-white.png";
import "../assets/scss/navbar.css";
import { BiChevronDown } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import TikTok from "../assets/images/tiktok.webp";
import Instagram from "../assets/images/instagram.webp";
import Linkedine from "../assets/images/linkedine.webp";
import Twitter from "../assets/images/twitter.png";
import { useTranslation } from "react-i18next";
import LanguageModal from "./LanguageModal";

export default function Navbar({ className }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [downMenuAbout, setDownMenuAbout] = useState(false);
  const [downMenuInit, setDownMenuInit] = useState(false);
  const { t } = useTranslation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

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

  // Lng nav
  const languageMap = useMemo(() => ({ en: "EN", de: "DE" }), []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

  useEffect(
    () => {
      const storedLanguage = localStorage.getItem("lng") || "en";
      setSelectedLanguage(languageMap[storedLanguage] || "ENGLISH");
    },
    [languageMap]
  );

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const handleLanguageSelect = language => {
    localStorage.setItem("lng", language);
    setSelectedLanguage(languageMap[language] || "ENGLISH");
    closeModal();
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-box");
      if (window.scrollY > 500) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-box ${className}`}>
      <div
        className="container-main"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
                <a href="/">
                  <img src={logoMobile} alt="Logo" />
                </a>
                <TfiClose
                  className="close-menu"
                  onClick={() => setOpenMenu(false)}
                />
              </div>
              <li>
                <a className="home" href="/">
                  {t("navbar.home")}
                </a>
              </li>
              <li style={{ marginTop: 2 }}>
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
                  <CustomLink href="/about-us/who-are-we">
                    {t("navbar.who_are_we")}
                  </CustomLink>

                  <li
                    className="menu-item"
                    onMouseEnter={() => setIsSubmenuOpen(true)}
                    onMouseLeave={() => setIsSubmenuOpen(false)}
                    style={{ position: "relative" }}
                  >
                    <span
                      style={{
                        textTransform: "capitalize",
                        paddingLeft: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      {t("navbar.departments")} <MdKeyboardArrowRight />
                    </span>

                    {isSubmenuOpen &&
                      <div
                        className={`menu-areas ${downMenuAbout
                          ? "active"
                          : "menu-down"}`}
                      >
                        <CustomLink href="/pharma">
                          {t("navbar.pharma")}
                        </CustomLink>
                        <CustomLink href="/food-and-bioproducts">
                          {t("navbar.food")}
                        </CustomLink>
                        <CustomLink href="/chemicals">
                          {t("navbar.chemicals")}
                        </CustomLink>
                        <CustomLink href="/electronics">
                          {t("navbar.electronics")}
                        </CustomLink>
                        <CustomLink href="/energy">
                          {t("navbar.energy")}
                        </CustomLink>
                        <CustomLink href="/oil&gas">
                          {t("navbar.oil")}
                        </CustomLink>
                      </div>}
                  </li>

                  <CustomLink href="/about-us/our-team">
                    {t("navbar.our_team")}
                  </CustomLink>

                  <CustomLink href="/about-us/our-vision-and-mission">
                    {t("navbar.vision_mission")}
                  </CustomLink>

                  <CustomLink href="/about-us/our-values">
                    {t("navbar.our_values")}
                  </CustomLink>
                </ol>
              </li>

              <CustomLink href="/our-services">
                {t("navbar.our_services")}
              </CustomLink>

              <CustomLink href="/our-references">
                {t("navbar.our_reference")}
              </CustomLink>

              <li style={{ marginTop: 2 }}>
                <span
                  className="about-us"
                  onClick={() => setDownMenuInit(!downMenuInit)}
                >
                  initiatives <BiChevronDown />
                </span>
                <ol
                  style={{ display: "none" }}
                  className={`${downMenuInit ? "active" : "menu-down"}`}
                >
                  <CustomLink href="/initiatives/helmchrone">
                    HELMCHR<b>ONe</b>
                  </CustomLink>

                  <CustomLink href="/initiatives/navigator">
                    NAVIGATOR
                  </CustomLink>

                  <CustomLink href="/initiatives/innolab">
                    Inno<b>LAB</b>
                  </CustomLink>

                  <CustomLink
                    href="/initiatives/academy"
                    style={{ fontFamily: "DancingScript" }}
                  >
                    Academy
                  </CustomLink>
                </ol>
              </li>

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

              <span
                style={{
                  cursor: "pointer",
                  padding: "0 20px",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "13px",
                  background: "var(--light-blue-color)",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  marginLeft: 20
                }}
                onClick={openModal}
              >
                {selectedLanguage}
              </span>

              <LanguageModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onSelectLanguage={handleLanguageSelect}
              />

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
          <span
            style={{
              cursor: "pointer",
              padding: "0 20px",
              color: "#000",
              fontWeight: "bold",
              fontSize: "13px",
              background: "var(--light-blue-color)",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 20
            }}
            onClick={openModal}
          >
            {selectedLanguage}
          </span>

          <div className="burger-icon" onClick={() => setOpenMenu(!openMenu)}>
            <div className="line1 line" />
            <div className="line2 line" />
            <div className="line3 line" />
          </div>
        </ul>
      </div>
    </div>
  );
}
