import React, { useState, useRef } from "react";
import "../assets/scss/competences.css";

import pipingImg from "../assets/images/Competences/orginalImg/Piping.png";
import equipmentImg from "../assets/images/Competences/orginalImg/Equipment.png";
import cleanImg from "../assets/images/Competences/orginalImg/Clean.png";
import roomsImg from "../assets/images/Competences/orginalImg/room.png";
import HVACImg from "../assets/images/Competences/orginalImg/HVAC.png";
import UtilitiesImg from "../assets/images/Competences/orginalImg/Utilities.png";
import MSRImg from "../assets/images/Competences/orginalImg/MSR.png";

const Competences = () => {
  // Definišemo slike i pripadajuće tekstove
  const competencesData = [
    {
      image: pipingImg,
      title: "PIPING",
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
        "Utility piping design"
      ]
    },
    {
      image: equipmentImg,
      title: "EQUIPMENT",
      description: ["Equipment design", "Procurement and installation..."]
    },
    {
      image: cleanImg,
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
      ]
    },
    {
      image: roomsImg,
      title: "Clean rooms",
      description: [
        "H2O2 disinfection system design",
        "Pressure cascade design",
        "Flow of personal",
        "Flow of material",
        "HVAC system design ",
        "Layout design"
      ]
    },
    {
      image: HVACImg,
      title: "HVAC",
      description: [
        "Ventilation and air conditioning systems",
        "Process air systems",
        "Heat recovery systems",
        "Heating and cooling technologies"
      ]
    },
    {
      image: UtilitiesImg,
      title: "Utilitiesu",
      description: [
        "Refrigeration",
        "Heat",
        "Saturated steam",
        "Process cooling water",
        "Heat recovery"
      ]
    },
    {
      image: MSRImg,
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
      ]
    }
  ];

  // State za trenutno aktivnu kompetenciju
  const [activeCompetence, setActiveCompetence] = useState(competencesData[0]);
  const mainImageRef = useRef(null);

  // Funkcija za promenu aktivne kompetencije
  const handleClick = competence => {
    setActiveCompetence(competence);

    if (mainImageRef.current) {
      mainImageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section>
      <h2 className="title" ref={mainImageRef}>
        Our competences
      </h2>
      <div className="competences-home container-main">
        {/* Leva strana sa velikom slikom */}
        <div className="competences-left">
          <img
            src={activeCompetence.image}
            alt={activeCompetence.title}
            className="main-image"
          />
        </div>
        {/* Desna strana sa tekstom */}
        <div className="competences-right">
          <h2>
            {activeCompetence.title}
          </h2>
          <ul>
            {activeCompetence.description.map((item, index) =>
              <li key={index}>
                {item}
              </li>
            )}
          </ul>
          {/* Male slike ispod */}
          <span
            style={{
              fontSize: 14,
              color: "var(--brend-color)",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            Swipe
          </span>
          <div className="small-images-scroll">
            <div className="small-images">
              {competencesData.map((competence, index) =>
                <img
                  key={index}
                  src={competence.image}
                  alt={competence.title}
                  className="small-image"
                  onClick={() => handleClick(competence)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
