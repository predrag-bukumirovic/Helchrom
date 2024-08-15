import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const languageMap = {
  en: "ENGLISH",
  de: "DEUTSCH"
};

const LanguageModal = ({ isOpen, onRequestClose, onSelectLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

  useEffect(
    () => {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
        setSelectedLanguage(languageMap[storedLanguage] || "ENGLISH");
      }
    },
    [selectedLanguage]
  );
  const handleLanguageChange = lang => {
    localStorage.setItem("lng", lang);
    setSelectedLanguage(languageMap[lang] || "ENGLISH");
    onSelectLanguage(lang);
    window.location.reload(); // Ponovno učitavanje stranice
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Language"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          width: "300px",
          background: "white",
          borderRadius: "10px"
        },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" }
      }}
    >
      <h2 style={{ fontSize: "25px", textAlign: "start" }}>Select Language</h2>
      <ul className="change-lng-desktop">
        <li onClick={() => handleLanguageChange("en")}>ENGLISH</li>
        <li onClick={() => handleLanguageChange("de")}>DEUTSCH</li>
      </ul>
      <button
        style={{ background: "transparent", border: "none" }}
        onClick={onRequestClose}
      >
        x
      </button>
    </Modal>
  );
};

export default LanguageModal;
