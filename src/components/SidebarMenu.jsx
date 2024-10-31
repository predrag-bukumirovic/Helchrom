import React, { useState } from "react";
import "../assets/scss/sidebarMenu.scss"; // Učitajmo CSS stilove
import { useTranslation } from "react-i18next";

const SidebarMenu = ({ sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = index => {
    if (sectionRefs[index] && sectionRefs[index].current) {
      sectionRefs[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false);
  };

  const handleClickToID = id => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      // Proveri da li je uređaj mobilni
      if (window.innerWidth < 768) {
        // Prilagođeni offset za mobilne uređaje
        window.scrollTo({ top: offsetPosition - -850, behavior: "smooth" }); // prilagodi offset po potreb
      } else {
        // Normalno skrolovanje za desktop
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
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
          {t("our_core.icon_core.icon1")}
        </button>
        <button onClick={() => handleClick(1)}>
          {t("our_core.icon_core.icon2")}
        </button>
        <button onClick={() => handleClick(2)}>
          {t("our_core.icon_core.icon3")}
        </button>
        <button onClick={() => handleClick(3)}>
          {t("our_core.icon_core.icon4")}
        </button>
        <button onClick={() => handleClick(4)}>
          {t("our_core.icon_core.icon5")}
        </button>
        <button onClick={() => handleClickToID("our-competences")}>
          Competences
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
