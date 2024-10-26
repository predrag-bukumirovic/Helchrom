import React, { useState } from "react";
import "../assets/scss/softwereTolols.css";

import Plant3 from "../assets/images/PlantDesign/Plant3.png";
import PlantAveva from "../assets/images/PlantDesign/PlantAveva..jpg";
import PlantP3D from "../assets/images/PlantDesign/PlantP3D.png";
import Plant4 from "../assets/images/PlantDesign/Plant4.png";
import Plant5 from "../assets/images/PlantDesign/Plant5.jpg";
import Plant6 from "../assets/images/PlantDesign/Plant6.png";
import Plant7 from "../assets/images/PlantDesign/Plant7.png";
import PlantTricad from "../assets/images/PlantDesign/PlantTricad.png";

import ED1 from "../assets/images/Equipmentdesign/ED1.png";
import ED2 from "../assets/images/Equipmentdesign/ED2.jpg";

import PCS1 from "../assets/images/Plantcloud/PCS1.png";
import PCS2 from "../assets/images/Plantcloud/PCS2.jpg";

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

const softwareData = [
  {
    category: "Plant Design",
    tools: [
      {
        name: "AutoCAD Plant 3D",
        image: PlantP3D
      },
      {
        name: "Aveva E3D",
        image: PlantAveva
      },
      {
        name: "AutoCAD 2D",
        image: Plant3
      },
      {
        name: "TriCAD",
        image: PlantTricad
      },
      {
        name: "AutoCAD MEP",
        image: Plant4
      },
      {
        name: "CADWorx",
        image: Plant5
      },
      {
        name: "BricsCAD",
        image: Plant6
      },
      {
        name: "CADProfi",
        image: Plant7
      }
    ]
  },
  {
    category: "Equipment Design",
    tools: [
      { name: "Inventor", image: ED1 },
      { name: "SolidWorks", image: ED2 }
    ]
  },
  {
    category: "Pressure Vessel Design",
    tools: [
      { name: "PV Elite" },
      { name: "Visual Vessel Design" },
      { name: "TÜV NORD DIMy" },
      { name: "PRG NozzlePRO" },
      { name: "PRG FEPipe" },
      { name: "MT-Mech" }
    ]
  },
  {
    category: "Heat exchanger calculation",
    tools: [
      { name: "Aspen Exchanger Design and Rating", image: HEC1 },
      { name: "HTRI", image: HEC2 }
    ]
  },
  {
    category: "Process design and analysis",
    tools: [
      { name: "ChemCAD", image: PDA1 },
      { name: "FluidFlow", image: PDA2 },
      { name: "PipeNET", image: PDA3 },
      { name: "Comos", image: PDA4 },
      { name: "Plant Engineer", image: PDA5 },
      { name: "Custom solutions", image: PDA6 }
    ]
  },
  {
    category: "Pipe stress analysis",
    tools: [{ name: "Caesar II", image: PSA1 }, { name: "Rohr2", image: PSA2 }]
  },
  {
    category: "Design review",
    tools: [
      { name: "NavisWorks", image: DR1 },
      { name: "Revizto", image: DR2 },
      { name: "ReCap", image: DR3 }
    ]
  },
  {
    category: "Plant cloud solutions",
    tools: [{ name: "BIM Cloud", image: PCS1 }, { name: "Awaro", image: PCS2 }]
  },
  {
    category: "Project Management and Scheduling",
    tools: [
      { name: "MS Project", image: PJ1 },
      { name: "Primavera", image: PJ2 }
    ]
  },
  {
    category: "Building",
    tools: [
      { name: "Revit", image: build1 },
      { name: "LiNear", image: build2 },
      { name: "Dendrit", image: build3 },
      { name: "MH-Software", image: build4 }
    ]
  }
];

const SoftwareTools = () => {
  const [activeCategory, setActiveCategory] = useState(softwareData[0]);

  return (
    <div className="software-tools container-main">
      <h1 className="title">Software Tools</h1>
      <div className="navigation">
        {softwareData.map((item, index) =>
          <button
            key={index}
            className={`nav-item ${activeCategory.category === item.category
              ? "active"
              : ""}`}
            onClick={() => setActiveCategory(item)}
          >
            {item.category}
          </button>
        )}
      </div>

      <div className="tools-container">
        {activeCategory.tools.map((tool, index) =>
          <div key={index} className="tool-card fade-in">
            {tool.image && <img src={tool.image} alt={tool.name} />}
            <p>
              {tool.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoftwareTools;
