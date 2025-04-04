import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import en from "../assets/images/en.png";
import de from "../assets/images/de.png";
import sp from "../assets/images/sp.png";
import it from "../assets/images/it.png";
import fr from "../assets/images/fr.png";
import ru from "../assets/images/ru.png";

import { IoIosCloseCircleOutline } from "react-icons/io";

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

  const isMobile = window.innerWidth <= 768;

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
          background: "white",
          borderRadius: "30px",
          width: isMobile ? "100%" : ""
        },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" }
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          textAlign: "center",
          textTransform: "uppercase"
        }}
      >
        Languages
      </h2>
      <ul className="change-lng-desktop">
        <li onClick={() => handleLanguageChange("en")}>
          <div />
          <img src={en} alt="English" loading="lazy" />
          <p>English</p>
        </li>
        <li>
          <img src={de} alt="Germany" loading="lazy" />
          <p>Coming soon</p>
        </li>
        <li>
          <img src={ru} alt="Coming soon" loading="lazy" />
          <p>Coming soon</p>
        </li>
        <li>
          <img src={sp} alt="Coming soon" loading="lazy" />
          <p>Coming soon</p>
        </li>
        <li>
          <img src={it} alt="Coming soon" loading="lazy" />
          <p>Coming soon</p>
        </li>
        <li>
          <img src={fr} alt="Coming soon" loading="lazy" />
          <p>Coming soon</p>
        </li>
      </ul>
      <button className="close-btn-lng" onClick={onRequestClose}>
        <IoIosCloseCircleOutline />
      </button>
    </Modal>
  );
};

export default LanguageModal;
