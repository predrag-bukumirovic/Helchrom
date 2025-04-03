import React, { useState } from "react";
import "../assets/scss/softwereTolols.css";

import Plant3 from "../assets/images/PlantDesign/cad2d.png";
import PlantAveva from "../assets/images/PlantDesign/PlantAveva..jpg";
import PlantP3D from "../assets/images/PlantDesign/PlantP3D.png";
import Plant4 from "../assets/images/PlantDesign/mep.png";
import Plant5 from "../assets/images/PlantDesign/Plant5.jpg";
import Plant6 from "../assets/images/PlantDesign/brics.png";
import Plant7 from "../assets/images/PlantDesign/cadprofi.png";
import PlantTricad from "../assets/images/PlantDesign/tricad.png";

import ED1 from "../assets/images/Equipmentdesign/ED1.png";
import ED2 from "../assets/images/Equipmentdesign/ED2.jpg";

import PCS1 from "../assets/images/Plantcloud/PCS1.png";
import PCS2 from "../assets/images/Plantcloud/PCS2.jpg";
import PCS3 from "../assets/images/Plantcloud/PCS3.png";

import PDA1 from "../assets/images/Processanalysis/PDA1.png";
import PDA2 from "../assets/images/Processanalysis/PDA2.png";
import PDA3 from "../assets/images/Processanalysis/PDA3.jpg";
import PDA4 from "../assets/images/Processanalysis/PDA4.png";
import PDA5 from "../assets/images/Processanalysis/PDA5.png";
import PDA6 from "../assets/images/Processanalysis/PDA6.png";

import build1 from "../assets/images/Building/Building1.png";
import build2 from "../assets/images/Building/Buidling2.jpg";
import build3 from "../assets/images/Building/BUilding3.jpg";
import build4 from "../assets/images/Building/Building4.png";

import PJ1 from "../assets/images/ProjectManagement/PM1.png";
import PJ2 from "../assets/images/ProjectManagement/PM2.jpg";

import DR1 from "../assets/images/Designreview/DR1.png";
import DR2 from "../assets/images/Designreview/DR2.png";
import DR3 from "../assets/images/Designreview/DR3.png";

import PSA1 from "../assets/images/Pipeanalysis/PSA1.png";
import PSA2 from "../assets/images/Pipeanalysis/PSA2.png";

import HEC1 from "../assets/images/Heat/HEC1.png";
import HEC2 from "../assets/images/Heat/HEC2.png";

import PVD1 from "../assets/images/Pressurevessel/PVD1.png";
import PVD2 from "../assets/images/Pressurevessel/PVD2.jpg";
import PVD3 from "../assets/images/Pressurevessel/PVD3.jpg";
import PVD4 from "../assets/images/Pressurevessel/PVD4.png";
import PVD5 from "../assets/images/Pressurevessel/PVD5.png";
import PVD6 from "../assets/images/Pressurevessel/PVD6.jpg";

const softwareData = [
  {
    category: "Plant Design",
    tools: [
      {
        name: "AutoCAD Plant 3D",
        image: PlantP3D,
      },
      {
        name: "Aveva E3D",
        image: PlantAveva,
      },
      {
        name: "AutoCAD 2D",
        image: Plant3,
      },
      {
        name: "TriCAD",
        image: PlantTricad,
      },
      {
        name: "AutoCAD MEP",
        image: Plant4,
      },
      {
        name: "CADWorx",
        image: Plant5,
      },
      {
        name: "BricsCAD",
        image: Plant6,
      },
      {
        name: "CADProfi",
        image: Plant7,
      },
    ],
  },
  {
    category: "Equipment Design",
    tools: [
      { name: "Inventor", image: ED1 },
      { name: "SolidWorks", image: ED2 },
    ],
  },
  {
    category: "Pressure Vessel Design",
    tools: [
      { name: "PV Elite", image: PVD1 },
      { name: "Visual Vessel <br/> Design", image: PVD2 },
      { name: "TÜV NORD DIMy", image: PVD3 },
      { name: "PRG NozzlePRO", image: PVD4 },
      { name: "FEA Tools and <br/> Advanced FEA <br/> Tools", image: PVD5 },
      { name: "MT-Mech", image: PVD6 },
    ],
  },
  {
    category: "Heat exchanger calculation",
    tools: [
      { name: "Aspen Exchanger <br/> Design and Rating", image: HEC1 },
      { name: "HTRI", image: HEC2 },
    ],
  },
  {
    category: "Process design and analysis",
    tools: [
      { name: "ChemCAD", image: PDA1 },
      { name: "FluidFlow", image: PDA2 },
      { name: "PipeNET", image: PDA3 },
      { name: "Comos", image: PDA4 },
      { name: "Plant Engineer", image: PDA5 },
      { name: "Custom solutions", image: PDA6 },
    ],
  },
  {
    category: "Pipe stress analysis",
    tools: [
      { name: "Caesar II", image: PSA1 },
      { name: "Rohr2", image: PSA2 },
    ],
  },
  {
    category: "Design review",
    tools: [
      { name: "NavisWorks", image: DR1 },
      { name: "Revizto", image: DR2 },
      { name: "ReCap", image: DR3 },
    ],
  },
  {
    category: "Plant cloud solutions",
    tools: [
      { name: "BIM Cloud", image: PCS1 },
      { name: "Awaro", image: PCS2 },
      { name: "AutoDesk <br/> Construction <br/> Cloud", image: PCS3 },
    ],
  },
  {
    category: "Project Management and Scheduling",
    tools: [
      { name: "MS Project", image: PJ1 },
      { name: "Primavera", image: PJ2 },
    ],
  },
  {
    category: "Building",
    tools: [
      { name: "Revit", image: build1 },
      { name: "LiNear", image: build2 },
      { name: "Dendrit", image: build3 },
      { name: "MH-Software", image: build4 },
    ],
  },
];

const SoftwareTools = () => {
  const [activeCategory, setActiveCategory] = useState(softwareData[0]);

  return (
    <div className="software-tools container-main">
      <h1 className="title">Software Tools</h1>
      <div className="navigation">
        {softwareData.map((item, index) => (
          <button
            key={index}
            className={`nav-item ${
              activeCategory.category === item.category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(item)}
          >
            {item.category}
          </button>
        ))}
      </div>

      <div className="tools-container">
        {activeCategory.tools.map((tool, index) => (
          <div key={index} className="tool-card fade-in">
            {tool.image && (
              <img loading="lazy" src={tool.image} alt={tool.name} />
            )}
            <p dangerouslySetInnerHTML={{ __html: tool.name }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareTools;
