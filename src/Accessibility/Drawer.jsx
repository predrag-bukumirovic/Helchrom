import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Button from "./Button";
import "./styles/accessinility.css";
import "./styles/contrast.css";
import "./styles/highlightLinks.css";
import { FaCheck } from "react-icons/fa";

export default function Drawer({ isOpen, onClose }) {
  // Držanje svih opcija u konfiguracionom objektu
  const [contrastOption, setContrastOption] = useState(() => {
    const savedContrastOption = localStorage.getItem("contrastOption");
    return savedContrastOption ? parseInt(savedContrastOption, 10) : 0;
  });

  const [highlightLinks, setHighlightLinks] = useState(() => {
    const savedHighlightLinks = localStorage.getItem("highlightLinks");
    return savedHighlightLinks ? parseInt(savedHighlightLinks, 10) : 0;
  });
  const [showNotification, setShowNotification] = useState(false);

  const resetOptions = {
    contrast: () => {
      setContrastOption(0);
      localStorage.removeItem("contrastOption");
      const body = document.body;
      const html = document.documentElement;
      body.classList.remove(
        "contrast-invert",
        "contrast-high",
        "contrast-light"
      );
      html.classList.remove(
        "contrast-invert",
        "contrast-high",
        "contrast-light"
      );
    },
    highlightLinks: () => {
      setHighlightLinks(0);
      localStorage.removeItem("highlightLinks");

      const body = document.body;
      const html = document.documentElement;
      html.classList.remove("highlighted-link", "active-highlight");
      body.classList.remove("highlighted-link", "active-highlight");
    }
    // Možete dodati druge opcije za reset ako imate
  };

  const handleReset = () => {
    // Resetovanje svih opcija
    Object.values(resetOptions).forEach(reset => reset());

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <main className={`drawer ${isOpen ? "open" : ""}`}>
      <Header onClose={onClose} />
      {showNotification &&
        <div className="notification">
          <FaCheck /> Accessibility settings have been reset
        </div>}
      <Nav
        contrastOption={contrastOption}
        setContrastOption={setContrastOption}
        highlightLinks={highlightLinks}
        setHighlightLinks={setHighlightLinks}
      />
      <Button onReset={handleReset} />
    </main>
  );
}
