import React, { useState, useEffect } from "react";
import "../assets/scss/header.scss";
import { GoGlobe } from "react-icons/go";
import useScrollDirection from "./useScrollDirection";
import Navbar from "./Navbar";
import LanguageModal from "./LanguageModal";

const languageMap = {
  en: "ENGLISH",
  de: "DEUTSCH"
};

export default function Header() {
  const scrollDirection = useScrollDirection();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("lng") || "en";
    setSelectedLanguage(languageMap[storedLanguage] || "ENGLISH");
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
        : "showNav"}`}
    >
      <div className="header">
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

      <Navbar />
    </div>
  );
}
