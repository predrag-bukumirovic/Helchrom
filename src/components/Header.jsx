import React, { useState, useEffect } from "react";
import "../assets/scss/header.scss";
import { GoGlobe } from "react-icons/go";
import useScrollDirection from "./useScrollDirection";
import Navbar from "../components/Navbar";
import LanguageModal from "../components/LanguageModal";

export default function Header() {
  const scrollDirection = useScrollDirection();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLOSH");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Opening modal");
  };
  const closeModal = () => setIsModalOpen(false);
  const handleLanguageSelect = language => {
    setSelectedLanguage(language);
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
