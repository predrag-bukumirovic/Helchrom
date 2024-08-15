import React, { useState } from "react";
import "../assets/scss/select.scss";

const lng = [
  { code: "en", label: "ENGLISH" },
  { code: "de", label: "DEUTSCH" }
];

const CustomSelect = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLanguageChange = code => {
    onLanguageChange(code);
    localStorage.setItem("lng", code);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div style={{ display: "block", marginTop: 20, position: "relative" }}>
      <label style={{ fontSize: 14 }}>Change Language:</label>
      <div className="custom-select">
        <div className="select-selected" onClick={toggleDropdown}>
          {lng.find(lang => lang.code === currentLanguage).label}
          <span className="select-arrow">&#9662;</span>
        </div>
      </div>
      {isOpen &&
        <div className="select-items">
          {lng.map(lang =>
            <div
              key={lang.code}
              className="select-item"
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.label}
            </div>
          )}
        </div>}
    </div>
  );
};

export default CustomSelect;
