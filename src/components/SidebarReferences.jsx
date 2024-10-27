import React, { useState } from "react";
import "../assets/scss/sidebarMenu.scss"; // Učitajmo CSS stilove
import { useTranslation } from "react-i18next";

const SidebarMenuReferences = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = index => {
    if (sectionRefs[index] && sectionRefs[index].current) {
      sectionRefs[index].current.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="sidebar-menu">
      <button
        className={`menu-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? "x" : "☰"}
      </button>

      <div className={`menu-links ${isOpen ? "show" : ""}`}>
        <button onClick={() => handleClick(0)}>
          {t("navbar.pharma")}
        </button>
        <button onClick={() => handleClick(1)}>
          {t("navbar.food")}
        </button>
        <button onClick={() => handleClick(2)}>
          {t("navbar.chemicals")}
        </button>
        <button onClick={() => handleClick(3)}>
          {t("navbar.electronics")}
        </button>
        <button onClick={() => handleClick(4)}>
          {t("navbar.energy")}
        </button>
        <button onClick={() => handleClick(5)}>
          {t("navbar.oil")}
        </button>
      </div>
    </div>
  );
};

export default SidebarMenuReferences;
