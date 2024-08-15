import React, { useState, useEffect } from "react";
import "../assets/scss/header.scss";
import { GoGlobe } from "react-icons/go";
import useScrollDirection from "./useScrollDirection";
import LanguageModal from "../components/LanguageModal";
import HomeNavbar from "./HomeNavbar";

const languageMap = {
  en: "ENGLISH",
  de: "DEUTSCH"
};

export default function HomeHeader() {
  const scrollDirection = useScrollDirection();
  const [scrolled, setScrolled] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("lng") || "en";
    setSelectedLanguage(languageMap[storedLanguage] || "ENGLISH");

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleLanguageSelect = language => {
    localStorage.setItem("lng", language);
    setSelectedLanguage(languageMap[language] || "ENGLISH");
    closeModal();
  };

  return (
    <div
      className={`header-box ${scrollDirection === "down"
        ? "hideNav"
        : "showNav"} ${scrolled ? "scrolled" : ""}`}
    >
      <div
        style={{ background: "transparent", border: "none" }}
        className="header"
      >
        <div className="header-links container-main">
          <div />
          <div>
            <p
              className="lng"
              style={{ cursor: "pointer" }}
              onClick={openModal}
            >
              <GoGlobe className="icon-lng" />
              {selectedLanguage}
            </p>
          </div>
        </div>
        <LanguageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          onSelectLanguage={handleLanguageSelect}
        />
      </div>

      <HomeNavbar />
    </div>
  );
}
