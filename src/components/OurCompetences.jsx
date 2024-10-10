import React, { useState } from "react";
import "../assets/scss/competences.css";

// Imgs
import pipingImg from "../assets/images/Competences/pipingImg.png";
import equipmentImg from "../assets/images/Competences/Equipment.png";
import cleanImg from "../assets/images/Competences/Cleanmedia.png";
import roomsImg from "../assets/images/Competences/room.png";
import HVACImg from "../assets/images/Competences/HVAC.png";
import UtilitiesImg from "../assets/images/Competences/Utilities.png";
import MSRImg from "../assets/images/Competences/MSR.png";

// Icons
import pipingIcon from "../assets/images/Competences/pipingIcon.png";
import equipmentIcon from "../assets/images/Competences/equipmentIcon.png";
import cleanIcon from "../assets/images/Competences/cleanIcon.png";
import roomsIcon from "../assets/images/Competences/roomsIcon.png";
import HVACIcon from "../assets/images/Competences/HVACIcon.png";
import UtilitiesIcon from "../assets/images/Competences/UtilitiesIcon.png";
import MSRIcon from "../assets/images/Competences/MSRIcon.png";

// active icons
import pipingIconAc from "../assets/images/Competences/PipingAc.png";
import equipmentIconAc from "../assets/images/Competences/EquipmentAc.png";
import cleanIconAc from "../assets/images/Competences/CleanmediaAc.png";
import roomsIconAc from "../assets/images/Competences/roomsAc.png";
import HVACIconAc from "../assets/images/Competences/HVACAc.png";
import UtilitiesIconAc from "../assets/images/Competences/UtilitiesAc.png";
import MSRIconAc from "../assets/images/Competences/MSRAc.png";
import { useTranslation } from "react-i18next";

// Podaci za svaku stavku u navigaciji
const competencesData = {
  piping: {
    title: "Piping",
    description: [
      "Pipe specification development",
      "Specification-based 3D piping modeling, design, orthographic plan, section, and detail preparation",
      "Fabrication isometric development",
      "Preparation of BOM (Bill of Materials) for advanced material procurement",
      "Above and below-ground piping systems",
      "Aseptic, hygienic, and sanitary piping systems",
      "Thermal and dynamic pipe stress analysis and design",
      "Standard and custom pipe support design",
      "Piping system walkdowns",
      "Piping installation quality audits",
      "Process piping design",
      "Utility piping design",
      "Pneumatic convey piping systems",
      "Flammable and volatile liquid & gas piping systems"
    ],
    text: "To learn more, connect with our team.",
    image: pipingImg,
    icon: pipingIcon,
    iconActive: pipingIconAc
  },
  equipment: {
    title: "Equipment",
    description: [],
    text: "To learn more, connect with our team.",
    image: equipmentImg,
    icon: equipmentIcon,
    iconActive: equipmentIconAc
  },
  cleanMedia: {
    title: "Clean Media",
    description: [
      "Purified Water (PW)",
      "Water for Injection (WFI)",
      "Clean Steam (CS) ",
      "Clean Condensate (CC)",
      "Technical N2 (N2T)",
      "Pharmaceutical N2 (N2P)",
      "Technical compressed air (DLT)",
      "Pharmaceutical compressed air (DLP)",
      "H2O2 system design",
      "Chemical supply and disposal"
    ],
    text: "To learn more, connect with our team.",
    image: cleanImg,
    icon: cleanIcon,
    iconActive: cleanIconAc
  },
  cleanRooms: {
    title: "Clean rooms",
    description: [
      "H2O2 disinfection system design",
      "Pressure cascade design",
      "Flow of personal",
      "Flow of material",
      "HVAC system design ",
      "Layout design"
    ],
    text: "To learn more, connect with our team.",
    image: roomsImg,
    icon: roomsIcon,
    iconActive: roomsIconAc
  },
  hvac: {
    title: "HVAC",
    description: [
      "Ventilation and air conditioning systems",
      "Process air systems",
      "Heat recovery systems",
      "Heating and cooling technologies"
    ],
    text: "To learn more, connect with our team.",
    image: HVACImg,
    icon: HVACIcon,
    iconActive: HVACIconAc
  },
  utilities: {
    title: "Utilitiesu",
    description: [
      "Refrigeration",
      "Heat",
      "Saturated steam",
      "Process cooling water",
      "Heat recovery"
    ],
    text: "To learn more, connect with our team.",
    image: UtilitiesImg,
    icon: UtilitiesIcon,
    iconActive: UtilitiesIconAc
  },
  msr: {
    title: "MSR",
    description: [
      "MSR (Measurement, Control, and Regulation) concept development, planning, and tendering",
      "Control systems, including design with standard CAE (Computer-Aided Engineering) systems",
      "PLC (Programmable Logic Controller) / DDC (Direct Digital Control) systems, including software programming",
      "Manufacturer-independent building management systems, including programming",
      "Commissioning of hardware and software",
      "Energy management and remote monitoring",
      "Training",
      "Maintenance and servicing"
    ],
    text: "To learn more, connect with our team.",
    image: MSRImg,
    icon: MSRIcon,
    iconActive: MSRIconAc
  }
};

const Competences = () => {
  const { t } = useTranslation();
  const [activeCompetence, setActiveCompetence] = useState("piping");
  const [fadeIn, setFadeIn] = useState(true);

  const handleClick = competence => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveCompetence(competence);
      setFadeIn(true);
    }, 300); // Vreme trajanja izlazne animacije
  };

  return (
    <div className="competences-container">
      <h2 className="title">OUR COMPETENCES</h2>
      <nav className="competence-nav">
        <div className="nav-slider">
          {Object.keys(competencesData).map(key =>
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={activeCompetence === key ? "active" : ""}
            >
              <img
                src={
                  activeCompetence === key
                    ? competencesData[key].iconActive
                    : competencesData[key].icon
                }
                alt={competencesData[key].title + " icon"}
              />
              <span className={`${activeCompetence === key ? "active" : ""} `}>
                {competencesData[key].title}
              </span>
            </button>
          )}
        </div>
      </nav>

      <div
        className="container-main"
        style={{
          background: "var(--light-blue-color)",
          borderRadius: 30,
          padding: 30
        }}
      >
        <div
          className={`competence-content ${fadeIn ? "fade-in" : "fade-out"}`}
        >
          <div className="competence-text">
            <h3>
              {competencesData[activeCompetence].title}
            </h3>
            <ul>
              {competencesData[
                activeCompetence
              ].description.map((item, index) =>
                <li key={index}>
                  {item}
                </li>
              )}
            </ul>

            <p>
              {competencesData[activeCompetence].text}
            </p>
          </div>
          <div className="competence-image">
            <img
              src={competencesData[activeCompetence].image}
              alt={competencesData[activeCompetence].title}
            />
            <span className="img-pin">
              {competencesData[activeCompetence].title}
            </span>
          </div>
        </div>
        <a
          href="/contact"
          style={{
            border: "none",
            background: "var(--dark-blue-color)",
            display: "inline-block"
          }}
          className="book-btn"
        >
          {t("book_btn")}
        </a>
      </div>
    </div>
  );
};

export default Competences;
