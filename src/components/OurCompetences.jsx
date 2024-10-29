import React, { useState, forwardRef } from "react";
import "../assets/scss/competences.css";

// Imgs
import pipingImg from "../assets/images/Competences/Piping.png";
import equipmentImg from "../assets/images/Competences/Equipment.png";
import cleanImg from "../assets/images/Competences/Cleanmedia.png";
import roomsImg from "../assets/images/Competences/Cleamroom.png";
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
      "Specification-based 3D piping modeling, design, orthographic plan, section, and detail preparation (up to LOD500)",
      "Isometric drawing for fabrication",
      "Welding procedure documentation",
      "Documentation for fabrication",
      "Preparation of BOM (Bill of Materials) for advanced material procurement",
      "Above and below-ground piping systems",
      "Aseptic, hygienic, and sanitary piping systems",
      "Thermal and dynamic pipe stress analysis and design",
      "Standard and custom pipe support design",
      "Secondary steelwork design",
      "Piping system walk-downs",
      "Piping installation quality audits",
      "Process piping design",
      "Utility piping design",
      "Pneumatic conveying piping design",
      "Flammable and volatile liquid and gas piping design",
      "AS-Built Documentation",
      "Laser Scanning",
      "Documentation for notified body"
    ],
    text: "To learn more, connect with our team.",
    image: pipingImg,
    icon: pipingIcon,
    iconActive: pipingIconAc
  },
  equipment: {
    title: "Equipment",
    description: [
      "Dimensioning and specification sheets issuing",
      "Material selection according to process data",
      "Design according to relevant standards and regulations as well as related industry praxis and recommendations",
      "3D Design",
      "Design evaluation and analysis",
      "2D drawings and BOM issuing",
      "Workshop documentation and welding procedure specification",
      "Pump selection and system design",
      "Special parts design and specification sheets issuing",
      "Auditing suppliers",
      "Documentation for inquiries",
      "Evaluation of offers",
      "Review of supplier documentation",
      "Quality assurance with suppliers",
      "Problem troubleshooting",
      "Consulting"
    ],
    text: "To learn more, connect with our team.",
    image: equipmentImg,
    icon: equipmentIcon,
    iconActive: equipmentIconAc
  },
  cleanMedia: {
    title: "Clean Media",
    description: [
      "Raw water treatment and softening",
      "Purified Water (PW)",
      "Water for Injection (WFI)",
      "Clean Steam (CS)",
      "Clean Condensate (CC)",
      "Technical N2 (N2T)",
      "Pharmaceutical N2 (N2P)",
      "Pharmaceutical compressed air (PCA)",
      "Hydrogen Peroxide Systems for Clean Room Disinfection (H2O2)",
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
      "Layout planning and design",
      "Clean zone concept",
      "Classification and pressure cascade design",
      "Personnel and material flow concept",
      "HVAC system design",
      "Disinfection system planning and design (H2O2)",
      "Utility station planning inside of clean room",
      "Piping support design inside of clean room",
      "Clean room wall penetration design",
      "Planning and design of particle measurement points"
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
      "Heating and cooling systems",
      "Heating load calculation",
      "Cooling load calculation",
      "Duct sizing and layout design",
      "3D Ducting Design (up to LOD500)",
      "BOQ and BOM generation",
      "Workshop documentation"
    ],
    text: "To learn more, connect with our team.",
    image: HVACImg,
    icon: HVACIcon,
    iconActive: HVACIconAc
  },
  utilities: {
    title: "Utilities",
    description: [
      "Saturated steam generation systems",
      "Saturated steam distribution systems",
      "Heating system planning and design",
      "Refrigeration and cooling systems",
      "Air cooling systems",
      "Water cooling systems",
      "Fire protection systems",
      "Process cooling water treatment",
      "Heat recovery systems",
      "Compressed air generation and distribution",
      "Nitrogen systems",
      "Utility system analysis and optimization",
      "Energy audits"
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
      "Maintenance and service"
    ],
    text: "To learn more, connect with our team.",
    image: MSRImg,
    icon: MSRIcon,
    iconActive: MSRIconAc
  }
};

const Competences = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [activeCompetence, setActiveCompetence] = useState("piping");
  const [fadeIn, setFadeIn] = useState(true);

  const handleClick = competence => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveCompetence(competence);
      setFadeIn(true);
    }, 300);
  };

  return (
    <div ref={ref} className="competences-container">
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
                loading="lazy"
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
        className="container-main competence-box"
        style={{
          background: "var(--light-blue-color)",
          borderRadius: 30,
          padding: "30px"
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
              loading="lazy"
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
            background: "var(--dark-blue-color)",
            display: "flex",
            justifyContent: "flex-start",
            width: "max-content",
            marginLeft: 60
          }}
          className="book-btn competence-btn"
        >
          {t("book_btn")}
        </a>
      </div>
    </div>
  );
});

export default Competences;
